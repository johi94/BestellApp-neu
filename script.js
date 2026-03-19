// Funktion um Gerichte auf website zu rendern

// #start region renderMyDishes

let tacosRef = document.getElementById("content_taco");
let burritosRef = document.getElementById("content_burrito");
let dessertsRef = document.getElementById("content_dessert");

function renderMyDishes() {
  tacosRef.innerHTML = "";
  burritosRef.innerHTML = "";
  dessertsRef.innerHTML = "";

  for (
    let indexMyDishes = 0;
    indexMyDishes < myDishes.length;
    indexMyDishes++
  ) {
    const dish = myDishes[indexMyDishes];
    const Dishtemplate = getDishesTemplate(indexMyDishes);

    if (dish.category === "taco") {
      tacosRef.innerHTML += Dishtemplate;
    }

    if (dish.category === "burrito") {
      burritosRef.innerHTML += Dishtemplate;
    }

    if (dish.category === "dessert") {
      dessertsRef.innerHTML += Dishtemplate;
    }
  }
}

// #end region renderMyDishes

// #start region dish to basket / basket

function dishToBasket(indexMyDishes) {
  let dish = myDishes[indexMyDishes];

  // Prüfen on Gericht im Warenkorb ist, um dieses dann zu erhöhen

  let dishExist = myBasket.find((content) => content.name === dish.name);

if (dishExist) {
  dishExist.amount++;
} else {
  let basketDish = {
    ...dish,
    amount: 1
  };
  myBasket.push(basketDish);
}

  renderBasketDishes();
}

function renderBasketDishes() {
  let basketDishesRef = document.getElementById("content_basket");
  basketDishesRef.innerHTML = "";
  for (
    let indexMyBasket = 0;
    indexMyBasket < myBasket.length;
    indexMyBasket++
  ) {
    basketDishesRef.innerHTML += getBasketTemplate(indexMyBasket);
  }
}

// #end region dish to basket / basket

// #start region delete / add/ remove dish

function removeDishFromBasket(indexMyBasket) {
  if (myBasket[indexMyBasket].amount > 1) {
    myBasket[indexMyBasket].amount--;
  } else {
    myBasket.splice(indexMyBasket, 1);
  }
  renderBasketDishes();
}

function addDishToBasket(indexMyBasket) {
  myBasket[indexMyBasket].amount++;
  renderBasketDishes();
}

function deleteDishFromBasket(indexMyBasket) {
  myBasket.splice(indexMyBasket, 1);
  renderBasketDishes();
}
