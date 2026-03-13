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
  let basketDish = myDishes[indexMyDishes];
  myBasket.push(basketDish);

  renderBasketDishes();
}

function renderBasketDishes() {
  let basketDishesRef = document.getElementById("content_basket");
  basketDishesRef.innerHTML = "";
  for (
    let indexmyBasket = 0;
    indexmyBasket < myBasket.length;
    indexmyBasket++
  ) {
    basketDishesRef.innerHTML += getBasketTemplate(indexmyBasket);
  }
}


// #end region dish to basket / basket