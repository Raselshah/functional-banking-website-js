function getBanking(setInput) {
  // document.getElementById(input).addEventListener('click', function(){

  // user input amount
  const input = document.getElementById(setInput);
  const inputAmountText = input.value;
  const inputAmount = parseFloat(inputAmountText);
  // clear input field
  input.value = "";

  return inputAmount;
}
function previousBalance(previousAmount, previousMoney) {
  // set user deposit amount
  const amount = document.getElementById(previousAmount);
  const amountText = amount.innerText;
  const totalAmount = parseFloat(amountText);

  // user input calculate
  const lastTotalAmount = previousMoney + totalAmount;
  amount.innerText = lastTotalAmount;
}

function currentBalanceCheck() {
  const currentMoney = document.getElementById("current-balance");
  const currentBalanceTotalText = currentMoney.innerText;
  const currentBalanceTotal = parseFloat(currentBalanceTotalText);
  return currentBalanceTotal;
}
function currentBalance(userInput, isAdd, balance) {
  const currentMoney = document.getElementById(balance);
  // const currentBalanceTotalText = currentMoney.innerText;
  // const currentBalanceTotal = parseFloat(currentBalanceTotalText);
  const currentBalanceTotal = currentBalanceCheck();
  if (isAdd == true) {
    currentMoney.innerText = userInput + currentBalanceTotal;
  }
  if (isAdd == false) {
    currentMoney.innerText = currentBalanceTotal - userInput;
  }
}

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const userInput = getBanking("deposit-input");
    if (userInput > 0) {
      previousBalance("deposit-amount", userInput);
      currentBalance(userInput, true, "current-balance");
    } else {
      alert("Wrong input");
    }
  });

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const userInput = getBanking("withdraw-input");
    const checkBalance = currentBalanceCheck();

    if (userInput > 0 && userInput < checkBalance) {
      previousBalance("withdraw-amount", userInput);
      currentBalance(userInput, false, "current-balance");
    } else {
      alert("Wrong input");
    }
  });

// const Amount = getBanking(,);
// const amountWithdraw = getBanking('withdraw-button','withdraw-input','withdraw-amount');
// console.log(Amount)
