// Alle Funktionen mit HTML

function getDishesTemplate(indexMyDishes) {
  const dish = myDishes[indexMyDishes];
  return /*html*/ `<article class="dishes">
  <img src="${dish.image}" alt="Cover von ${dish.name}" class="dish-img" />
  <div class="space_between">
<div class="name_description">
<h3>${dish.name}</h3>
<p class="dish_description">${dish.description}</p>
</div>
<div class="price_btn_dishes">
<p class="dish_price">${dish.price.toFixed(2).replace(".", ",")} €</p>
<button class="add-to-basket-btn" onclick="dishToBasket(${indexMyDishes})">Add to basket</button>
</div>
</div>
</article>`;
}

function getBasketTemplate(indexmyBasket) {
  const basketdish = myBasket[indexmyBasket];
  return /*html*/ `<article class="dishes_basket">
  <h3 class="basket_dish_name">${basketdish.name}</h3>
  <div class="basket_btns_price">
  <button class="remove_one_dish">-</button>
  <button class="add_one_dish">+</button>
  <div class="basket_delete_price">
  <button class="delete_dish_from_basket">Delete</button>
  <p class="basket_dish_price">${basketdish.price.toFixed(2).replace(".", ",")} €</p>
  </div>
  </div>
  </article>`;
}
