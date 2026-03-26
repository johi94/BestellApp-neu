const tacosRef = document.getElementById("content_taco");
const burritosRef = document.getElementById("content_burrito");
const dessertsRef = document.getElementById("content_dessert");
const orderFoodRef = document.getElementById("food_ordered");
const showBasketRef = document.getElementById("basket_wrapper");
const basketBtnRef = document.getElementById('show_basket_btn');

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

// #start region dish to basket / basket-functions

function dishToBasket(indexMyDishes) {
  const dish = myDishes[indexMyDishes];

  // Prüfen on Gericht im Warenkorb ist, um dieses dann zu erhöhen

  const dishExist = myBasket.find((content) => content.name === dish.name);

  if (dishExist) {
    dishExist.amount++;
  } else {
    let basketDish = {
      ...dish,
      amount: 1,
    };
    myBasket.push(basketDish);
  }

  renderBasketDishes();
}

function renderBasketDishes() {
  const basketDishesRef = document.getElementById("content_basket");
  basketDishesRef.innerHTML = "";
  for (
    let indexMyBasket = 0;
    indexMyBasket < myBasket.length;
    indexMyBasket++
  ) {
    basketDishesRef.innerHTML += getBasketTemplate(indexMyBasket);
  }

  renderDishSum();
}

function removeDishFromBasket(indexMyBasket) {
  if (myBasket[indexMyBasket].amount > 1) {
    myBasket[indexMyBasket].amount--;
  } else {
    myBasket.splice(indexMyBasket, 1);
  }
  renderBasketDishes();
  renderDishSum();
  deliveryCosts();
}

function addDishToBasket(indexMyBasket) {
  myBasket[indexMyBasket].amount++;
  renderBasketDishes();
  renderDishSum();
  deliveryCosts();
}

function deleteDishFromBasket(indexMyBasket) {
  myBasket.splice(indexMyBasket, 1);
  renderBasketDishes();
  renderDishSum();
  deliveryCosts();
}

function deleteAllDishesWithOrder(indexMyBasket) {
   myBasket.splice(indexMyBasket);
  renderBasketDishes();
  renderDishSum();
  deliveryCosts();
}

function calculateDishSum() {
  let sum = 0;

  for (
    let indexMyBasket = 0;
    indexMyBasket < myBasket.length;
    indexMyBasket++
  ) {
    sum += myBasket[indexMyBasket].price * myBasket[indexMyBasket].amount;
  }

  return sum;
}

function showBasket () {

if (showBasketRef.style.display === 'none' || showBasketRef.style.display === '') {
    showBasketRef.style.display = 'flex';
    document.body.style.overflow = "hidden";
  } else {
   closeBasket();
}
}

function closeBasket() {
  showBasketRef.style.display = 'none';
    document.body.style.overflow = "visible";
 }

 window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeBasket();
    }
});

window.addEventListener("mousedown", (e) => {
   if (showBasketRef.style.display === 'flex') {
        
        // Prüfen, ob der Klick NICHT im Warenkorb war
        const clickedInsideBasket = showBasketRef.contains(e.target);
        // Prüfen, ob der Klick NICHT auf dem Öffnen-Button war
        const clickedOnBtn = basketBtnRef.contains(e.target);
        // Prüfen, ob der Klick auf dem Dialog-Feld war
        const clickedOnDialog = orderFoodRef.contains(e.target);

        if (!clickedInsideBasket && !clickedOnBtn && !clickedOnDialog) {
            closeBasket();
        }
    }
});

// #end region dish to basket / basket-functions


// #start region Dialog

function openOrderFoodDialog() {
  orderFoodRef.showModal();
  orderFoodRef.classList.add("opened");
  document.body.style.overflow = "hidden";
  deleteAllDishesWithOrder();
  if (window.innerWidth <= 750) {
    closeBasket();
  }
}

function closeOrderFoodDialog() {
  orderFoodRef.close();
  orderFoodRef.classList.remove("opened");
  document.body.style.overflow = "visible";
}

orderFoodRef.addEventListener("cancel", closeOrderFoodDialog);

orderFoodRef.addEventListener("click", (e) => {
  if (e.target === orderFoodRef) {
    closeOrderFoodDialog();
  }
});

// #end region Dialog

// Warenkorb wieder anzeigen lassen, wenn in Mobilansicht geschlossen, ab Bildschirmbreite > 750px

window.addEventListener('resize', () => {
  // Wenn der Bildschirm breiter als 750px wird (Desktop-Ansicht)
  if (window.innerWidth > 750) {
    // entfernen von "display: none" des JavaScript
    showBasketRef.style.display = 'flex'; 
    // Scrollen auf der Hauptseite wieder möglich
    document.body.style.overflow = "visible";
  } else {
    if (showBasketRef.style.display === 'flex') {
      document.body.style.overflow = "hidden"; // Scrollen wieder sperren
    }
  }
});


