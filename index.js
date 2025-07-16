// Global Vars
const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Function to add a burger (Function-scoped variable)
function addBurger() {
  const newBurger = 'Flatburger';
  burgers.push(newBurger);
}

// Block-scoped burger addition
if(true){
  const anotherNewBurger = 'Maple Bacon Burger';
  burgers.push(anotherNewBurger);
}

// Function to change the featured drink
function changeFeaturedDrink() {
  featuredDrink = 'The JavaShake';
}
