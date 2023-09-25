const ulContainer = document.getElementById("ul-container");
let ulChildren = 0;
let setToOtherFunction = 0;

document.getElementById("lio-messi").addEventListener("click", function () {
  const cardNameElement = document.getElementById("card-name").innerText;
  const li = document.createElement("li");
  li.innerText = cardNameElement;
  ulContainer.appendChild(li);
  ulChildren = ulContainer.children.length;
});

document
  .getElementById("budget-calculate")
  .addEventListener("click", function () {
    const playerPriceElement = document.getElementById("player-price");
    const playerPriceElementString = playerPriceElement.value;
    const playerPrice = parseFloat(playerPriceElementString);
    if (isNaN(playerPrice)) {
      alert("Please provide a valid number");
      return;
    }

    const playerPriceEqual = playerPrice * ulChildren;

    const playerExpensesElement = document.getElementById("player-expenses");
    const playerExpensesElementString = playerExpensesElement.innerText;
    const playerExpenses = parseFloat(playerExpensesElementString);

    const currentPrice = playerExpenses + playerPriceEqual;
    setToOtherFunction = currentPrice;

    playerExpensesElement.innerText = currentPrice;
    playerPriceElement.value = "";
  });

document
  .getElementById("calculate-Total")
  .addEventListener("click", function () {
    const managerCostElement = document.getElementById("manager-cost");
    const managerCostElementString = managerCostElement.value;
    const managerCost = parseFloat(managerCostElementString);

    if (isNaN(managerCost)) {
      alert("Please provide a valid number");
      return;
    }

    const coachCostElement = document.getElementById("coach-cost");
    const coachCostElementString = coachCostElement.value;
    const coachCost = parseFloat(coachCostElementString);

    const managerCoachAmount = managerCost + coachCost;

    const totalAmountElement = document.getElementById("total-amount");
    const totalAmountElementString = totalAmountElement.innerText;
    const previousTotalAmount = parseFloat(totalAmountElementString);

    const totalAmount =
      previousTotalAmount + managerCoachAmount + setToOtherFunction;

    totalAmountElement.innerText = totalAmount;
    managerCostElement.value = "";
    coachCostElement.value = "";
  });
