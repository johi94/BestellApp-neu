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
    let indexMyBasket = 0;
    indexMyBasket < myBasket.length;
    indexMyBasket++
  ) {
    basketDishesRef.innerHTML += getBasketTemplate(indexMyBasket);
  }
}


// #end region dish to basket / basket

// #start region delete / add/ remove dish

function deleteDishFromBasket(indexMyBasket) {
myBasket.splice(indexMyBasket,1);
renderBasketDishes();
}