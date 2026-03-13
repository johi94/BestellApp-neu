// Funktion um Gerichte auf website zu rendern

// #start region render-function

function renderMyDishes() {
  let tacosRef = document.getElementById("content_taco");
  let burritosRef = document.getElementById("content_burrito");
  let dessertsRef = document.getElementById("content_dessert");

  tacosRef.innerHTML = "";
  burritosRef.innerHTML = "";
  dessertsRef.innerHTML = "";

  for (
    let indexMyDishes = 0; indexMyDishes < myDishes.length; indexMyDishes++
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
