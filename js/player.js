const ulContainer = document.getElementById("ul-container");
let ulChildren = 0;
let setToOtherFunction = 0;

document.getElementById("lio-messi").addEventListener("click", function () {
  const cardNameElement = document.getElementById("card-name").innerText;
  const li = document.createElement("li");
  li.innerText = cardNameElement;
  ulContainer.appendChild(li);
  ulChildren = ulContainer.children.length;

  const btn = document.getElementById("lio-messi");
  btn.disabled = true;
});

document.getElementById("neymar-jr").addEventListener("click", function () {
  const cardNameJrElement = document.getElementById("card-name-jr").innerText;
  const li = document.createElement("li");
  li.innerText = cardNameJrElement;
  ulContainer.appendChild(li);
  ulChildren = ulContainer.children.length;

  const btn = document.getElementById("neymar-jr");
  btn.disabled = true;
});

document.getElementById("kylian-mbappé").addEventListener("click", function () {
  const cardNameKylianMbappé = document.getElementById(
    "card-name-kylian-mbappé"
  ).innerText;
  const li = document.createElement("li");
  li.innerText = cardNameKylianMbappé;
  ulContainer.appendChild(li);
  ulChildren = ulContainer.children.length;

  const btn = document.getElementById("kylian-mbappé");
  btn.disabled = true;
});

document
  .getElementById("renato-sanches")
  .addEventListener("click", function () {
    const cardNameRenatoSanchesElement = document.getElementById(
      "card-name-renato-sanches"
    ).innerText;
    const li = document.createElement("li");
    li.innerText = cardNameRenatoSanchesElement;
    ulContainer.appendChild(li);
    ulChildren = ulContainer.children.length;

    const btn = document.getElementById("renato-sanches");
    btn.disabled = true;
  });

document
  .getElementById("cristiano-ronaldo")
  .addEventListener("click", function () {
    const cardNameCristianoRonaldo = document.getElementById(
      "card-name-cristiano-ronaldo"
    ).innerText;
    const li = document.createElement("li");
    li.innerText = cardNameCristianoRonaldo;
    ulContainer.appendChild(li);
    ulChildren = ulContainer.children.length;

    const btn = document.getElementById("cristiano-ronaldo");
    btn.disabled = true;
  });

document.getElementById("sergio-ramos").addEventListener("click", function () {
  const cardNameSergioRamos = document.getElementById(
    "card-name-sergio-ramos"
  ).innerText;
  const li = document.createElement("li");
  li.innerText = cardNameSergioRamos;
  ulContainer.appendChild(li);
  ulChildren = ulContainer.children.length;

  const btn = document.getElementById("sergio-ramos");
  btn.disabled = true;
});

document
  .getElementById("vinícius-júnior")
  .addEventListener("click", function () {
    const cardNameViníciusJúnior = document.getElementById(
      "card-name-vinícius-júnior"
    ).innerText;
    const li = document.createElement("li");
    li.innerText = cardNameViníciusJúnior;
    ulContainer.appendChild(li);
    ulChildren = ulContainer.children.length;

    const btn = document.getElementById("vinícius-júnior");
    btn.disabled = true;
  });

document.getElementById("thiago-silva").addEventListener("click", function () {
  const cardNamethiagoSilva = document.getElementById(
    "card-name-thiago-silva"
  ).innerText;
  const li = document.createElement("li");
  li.innerText = cardNamethiagoSilva;
  ulContainer.appendChild(li);
  ulChildren = ulContainer.children.length;

  const btn = document.getElementById("thiago-silva");
  btn.disabled = true;
});

document.getElementById("dani-alves").addEventListener("click", function () {
  const cardNamedaniAlves = document.getElementById(
    "card-name-dani-alves"
  ).innerText;
  const li = document.createElement("li");
  li.innerText = cardNamedaniAlves;
  ulContainer.appendChild(li);
  ulChildren = ulContainer.children.length;

  const btn = document.getElementById("dani-alves");
  btn.disabled = true;
});

document.getElementById("thiago-almada").addEventListener("click", function () {
  const cardNamethiagoAlmada = document.getElementById(
    "card-name-thiago-almada"
  ).innerText;
  const li = document.createElement("li");
  li.innerText = cardNamethiagoAlmada;
  ulContainer.appendChild(li);
  ulChildren = ulContainer.children.length;

  const btn = document.getElementById("thiago-almada");
  btn.disabled = true;
});

document.getElementById("Ronaldo").addEventListener("click", function () {
  const cardNameRonaldo =
    document.getElementById("card-name-Ronaldo").innerText;
  const li = document.createElement("li");
  li.innerText = cardNameRonaldo;
  ulContainer.appendChild(li);
  ulChildren = ulContainer.children.length;

  const btn = document.getElementById("Ronaldo");
  btn.disabled = true;
});

document.getElementById("di-maria").addEventListener("click", function () {
  const cardNameDiMaria =
    document.getElementById("card-name-di-maria").innerText;
  const li = document.createElement("li");
  li.innerText = cardNameDiMaria;
  ulContainer.appendChild(li);
  ulChildren = ulContainer.children.length;

  const btn = document.getElementById("di-maria");
  btn.disabled = true;
});

document
  .getElementById("budget-calculate")
  .addEventListener("click", function () {
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

document
  .getElementById("calculate-Total")
  .addEventListener("click", function () {
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
