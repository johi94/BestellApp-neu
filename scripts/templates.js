// Alle Funktionen mit HTML

function getDishesTemplate() {
  return /*html*/ `<article class="dishes">
<h3>${myDishes.name}</h3>
<img src="${myDishes.image}" alt="Cover von ${myDishes.name}" class="book-img" />
${myDishes.filter((name) => {
  return name;
})};
</article>`;
};
