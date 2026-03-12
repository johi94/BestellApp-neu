// Funktion um Gerichte auf website zu rendern

// #start region render-function

function renderMyDishes() {
    let dishesRef = document.getElementById('content_taco');
    dishesRef.innerHTML = "";
    for (indexMyDishes = 0; indexMyDishes < myDishes.length; indexMyDishes++) {
        dishesRef.innerHTML += getDishesTemplate(indexMyDishes)
    }
};


