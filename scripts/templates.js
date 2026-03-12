// Alle Funktionen mit HTML

function getDishesTemplate(indexMyDishes) {

  const dish = myDishes[indexMyDishes];

  return /*html*/ `<article class="dishes">
  <img src="${dish.image}" alt="Cover von ${dish.name}" class="dish-img" />
<h3>${dish.name}</h3>
<p>${dish.description}</p>
<p>${dish.price}</p>
<button class="add-to-basket-btn">Add to basket</button>
</article>`;
}
