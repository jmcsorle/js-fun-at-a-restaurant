function nameMenuItem(name) {
  return `Delicious ${name}`
  }

///////First Failed Attempt at createMenuItem////////

/* The mistake I made was that I was trying to recreate the tests within my function. Judy helped me understand that the function is just meant to feed data into the tests. I do not need to create the variables to match the test.*/

// function createMenuItem() {
//   var menuItemName = nameMenuItem("French Toast");
//   var menuItem = {
//     name: menuItemName,
//     price: 10.99,
//     type: "breakfast"
//   }
//   return menuItem.name;
// }

function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type
  }  
}

function addIngredients(ingredient, ingredients) {
  if (!ingredients.includes(ingredient)) {
    return ingredients.push(ingredient);
  }
}

function formatPrice(initialPrice) {
  return `$${initialPrice}`
}

function decreasePrice(initialPrice) {
  return initialPrice - (initialPrice * .10);
}

function createRecipe(title, ingredients, type) {
  return {
    title: title,
    ingredients: ingredients,
    type: type
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


