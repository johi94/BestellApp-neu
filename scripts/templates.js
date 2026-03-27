// functions with HTML

function getDishesTemplate(indexMyDishes) {
  const dish = myDishes[indexMyDishes];
  const count = myBasket.find((item) => item.name === dish.name)?.amount || 0;

  return /*html*/ `
  <article class="dishes">
    <img src="${dish.image}" alt="Cover von ${dish.name}" class="dish-img" />
     <div class="space_between">
      <div class="name_description">
        <h3>${dish.name}</h3>
        <p class="dish_description">${dish.description}</p>
      </div>
      <div class="price_btn_dishes">
        <p class="dish_price">${dish.price.toFixed(2).replace(".", ",")} €</p>
        <div class="btn-container">
        <button class="add-to-basket-btn" onclick="dishToBasket(${indexMyDishes})">Add to basket
        </button>
        ${count > 0 ? `<span class="dish-counter">${count}</span>` : ""}
      </div>
      </div>
    </div>
  </article>`;
}

function getBasketTemplate(indexMyBasket) {
  const basketdish = myBasket[indexMyBasket];

  return /*html*/ `
  <article class="dishes_basket">
   <h3 class="basket_dish_name">${basketdish.amount}x ${basketdish.name}</h3>
    <div class="basket_btns_price">
     <button onclick="removeDishFromBasket(${indexMyBasket})" class="basket_btn">-</button>
      <button onclick="addDishToBasket(${indexMyBasket})" class="basket_btn">+</button>
       <div class="basket_delete_price">
        <button onclick="deleteDishFromBasket(${indexMyBasket})" class="basket_delete_btn">&#x1F5D1</button> 
         <p class="basket_dish_price">${(basketdish.price * basketdish.amount).toFixed(2).replace(".", ",")} €</p>
      </div>
    </div>
  </article>`;
}

function deliveryCosts() {
  const deliveryRef = document.getElementById("delivery_cost");
  const sum = calculateDishSum();

  let delivery = 0;
  if (sum < 40 && sum > 0) {
    delivery = 5;
  }

  deliveryRef.innerHTML = /*html*/ `<div class="flex_box">
    <span>Delivery fee:</span><span>${delivery.toFixed(2).replace(".", ",")} €</span>
     </div>`;

  return delivery;
}

// with more then 40€ in the basket, quit delivery fee with if

function renderDishSum() {
  const sumRef = document.getElementById("dishes_sum");
  const dishesSum = calculateDishSum();
  const delivery = deliveryCosts();

  const sum = dishesSum + delivery;

  sumRef.innerHTML = /*html*/ `<div class="flex_box"><span>Total:</span><span>${sum.toFixed(2).replace(".", ",")} €</span>
   </div>`;
}
// (basketdish.price * basketdish.amount) price and amount are multiplied for sum
// if more then one are in the basket
