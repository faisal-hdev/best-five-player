const ulContainer = document.getElementById("ul-container");
let ulChildren = 0;
let setToOtherFunction = 0;

const handleSelect = clickElement => {
  console.log('check:',clickElement.parentNode.parentNode.childNodes);
  const playerName = clickElement.parentNode.parentNode.childNodes[1].innerText;
  const li = document.createElement("li");
  li.innerText = playerName;
  ulContainer.appendChild(li);
  ulChildren = ulContainer.children.length;
  clickElement.disabled = true;
  if (ulChildren >= 5) {
    return alert("You have already best selected five plyers");
  }
};

document.getElementById("budget-calculate").addEventListener("click", function () {
    const playerPriceElement = document.getElementById("player-price");
    const playerPriceElementString = playerPriceElement.value;
    const playerPrice = parseFloat(playerPriceElementString);

    const playerPriceEqual = playerPrice * ulChildren;

    const playerExpensesElement = document.getElementById("player-expenses");
    const playerExpensesElementString = playerExpensesElement.innerText;
    const playerExpenses = parseFloat(playerExpensesElementString);

    const currentPrice = playerExpenses + playerPriceEqual;
    setToOtherFunction = currentPrice;

    if (isNaN(playerPrice)) {
      alert("Please provide a valid number");
      playerPriceElement.value = "";
      return;
    }
    playerExpensesElement.innerText = currentPrice;
    playerPriceElement.value = "";
  });

document.getElementById("calculate-Total").addEventListener("click", function () {
    const managerCostElement = document.getElementById("manager-cost");
    const managerCostElementString = managerCostElement.value;
    const managerCost = parseFloat(managerCostElementString);

    const coachCostElement = document.getElementById("coach-cost");
    const coachCostElementString = coachCostElement.value;
    const coachCost = parseFloat(coachCostElementString);

    const managerCoachAmount = managerCost + coachCost;

    const totalAmountElement = document.getElementById("total-amount");
    const totalAmountElementString = totalAmountElement.innerText;
    const previousTotalAmount = parseFloat(totalAmountElementString);

    const totalAmount =
      previousTotalAmount + managerCoachAmount + setToOtherFunction;

    if (isNaN(managerCost) || isNaN(coachCost)) {
      alert("Please provide a valid number");
      managerCostElement.value = "";
      coachCostElement.value = "";
      return;
    }
    totalAmountElement.innerText = totalAmount;
    managerCostElement.value = "";
    coachCostElement.value = "";
  });
