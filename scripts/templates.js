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
<p class="dish_price">${dish.price}</p>
<button class="add-to-basket-btn">Add to basket</button>
</div>
</div>
</article>`;
}
