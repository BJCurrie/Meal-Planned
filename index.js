// Stored recipes (line 1 - 243)
const recipe1 = {
    recipe: 'Pesto Pasta',
    ingredients: [
        {
        ingredient: 'Pesto',
        quantity: 50,
        measurement: 'g'
        },
        {
        ingredient: 'Pasta',
        quantity: 200,
        measurement: 'g'
        },
        {
        ingredient: 'Cream',
        quantity: 30,
        measurement: 'g'
        }
    ]
}

const recipe2 = {
    recipe: 'Garlic Tofu and Broccoli',
    ingredients: [
        {
        ingredient: 'Tofu',
        quantity: 300,
        measurement: 'g'
        },
        {
        ingredient: 'Broccoli',
        quantity: 1,
        measurement: ' head'
        },
        {
        ingredient: 'Garlic',
        quantity: 4,
        measurement: ' cloves'
        },
        {
        ingredient: 'Rice',
        quantity: 1,
        measurement: ' cups'
        }
    ]
}

const recipe3 = {
    recipe: 'Vegetable Topped Potato',
    ingredients: [
        {
        ingredient: 'Chickpeas',
        quantity: 200,
        measurement: 'g'
        },
        {
        ingredient: 'Baking Potatoes',
        quantity: 2,
        measurement: ''
        },
        {
        ingredient: 'Hummus',
        quantity: 100,
        measurement: 'g'
        },
        {
        ingredient: 'Garlic',
        quantity: 3,
        measurement: ' cloves'
        },
        {
        ingredient: 'Spinach',
        quantity: 75,
        measurement: 'g'
        },
        {
        ingredient: 'Yellow Onions',
        quantity: 1,
        measurement: ''
        }
    ]
}

const recipe4 = {
    recipe: 'Mushroom Ramen',
    ingredients: [
        {
        ingredient: 'Mushrooms',
        quantity: 150,
        measurement: 'g'
        },
        {
        ingredient: 'Stock Cubes',
        quantity: 4,
        measurement: ''
        },
        {
        ingredient: 'Spring Onions',
        quantity: 4,
        measurement: ''
        },
        {
        ingredient: 'Garlic',
        quantity: 2,
        measurement: ' cloves'
        },
        {
        ingredient: 'Noodles',
        quantity: 200,
        measurement: 'g'
        }
    ]
}

const recipe5 = {
    recipe: 'Classic Burgers',
    ingredients: [
        {
        ingredient: 'Burger Patties',
        quantity: 2,
        measurement: ''
        },
        {
        ingredient: 'Burger Buns',
        quantity: 2,
        measurement: ''
        },
        {
        ingredient: 'Mixed Salad',
        quantity: 40,
        measurement: 'g'
        },
        {
        ingredient: 'Gherkins',
        quantity: 2,
        measurement: ''
        }
    ]
}

const recipe6 = {
    recipe: 'Chickpea Curry',
    ingredients: [
        {
        ingredient: 'Chickpeas',
        quantity: 200,
        measurement: 'g'
        },
        {
        ingredient: 'Tomatoes',
        quantity: 100,
        measurement: 'g'
        },
        {
        ingredient: 'Yellow Onions',
        quantity: 2,
        measurement: ''
        },
        {
        ingredient: 'Garlic',
        quantity: 4,
        measurement: ' cloves'
        },
        {
        ingredient: 'Lemons',
        quantity: 1,
        measurement: ''
        },
        {
        ingredient: 'Rice',
        quantity: 1,
        measurement: ' cups'
        }
    ]
}

const recipe7 = {
    recipe: 'Cauliflower Curry',
    ingredients: [
        {
        ingredient: 'Cauliflower',
        quantity: 1,
        measurement: ' head'
        },
        {
        ingredient: 'Coconut Milk',
        quantity: 400,
        measurement: 'g'
        },
        {
        ingredient: 'Yellow Onions',
        quantity: 1,
        measurement: ''
        },
        {
        ingredient: 'Garlic',
        quantity: 3,
        measurement: ' cloves'
        },
        {
        ingredient: 'Rice',
        quantity: 1,
        measurement: ' cups'
        }
    ]
}

const recipe8 = {
    recipe: 'Tofu Fried Rice',
    ingredients: [
        {
        ingredient: 'Tofu',
        quantity: 300,
        measurement: 'g'
        },
        {
        ingredient: 'Sweetcorn',
        quantity: 100,
        measurement: 'g'
        },
        {
        ingredient: 'Yellow Onions',
        quantity: 1,
        measurement: ''
        },
        {
        ingredient: 'Spring Onions',
        quantity: 4,
        measurement: ''
        },
        {
        ingredient: 'Garlic',
        quantity: 4,
        measurement: ' cloves'
        },
        {
        ingredient: 'Rice',
        quantity: 1,
        measurement: ' cups'
        }
    ]
}


// List of all recipes
let recipes = [recipe1, recipe2, recipe3, recipe4, recipe5, recipe6, recipe7, recipe8];


// Random meal plan
let randomPlan = [];


// Stored strings to be printed out to the user
const greeting = '\nHello fellow time efficient GitHub chef,';
const open = 'Your weekly meal plan has been randomised for you as follows:';
const pantryOpen = 'You will require the following ingredients:';


// Function to generate a random number from 0 to any given number (parameter: max)
function randomNumberGenerator(max) {
    return Math.floor(Math.random()*(max+1));
}


// Function to add a random recipe to the meal plan and then remove it from the available recipes
function moveRandom(aLength) {
    let randIndex = randomNumberGenerator(aLength - 1);
    randomPlan.push(recipes[randIndex]);
    recipes.splice(randIndex, 1);
}


// Function to create a random weekday meal plan (5 meals)
function randMealPlanGenerator() {
    while (randomPlan.length < 5) {
        moveRandom(recipes.length);
    }
}


// Ingredients list
let ingredientsList = [];


// Function to check if an ingredient is already in the ingredient list and if so, return it's index
function ingredientCheck(check) {
    for (let i = 0; i < ingredientsList.length; i++) {
        if (ingredientsList[i].ingredient === check) {
            return i;
        }
    }
    return -1;
}

// Function that takes all the ingredients for the random meal plan and adds them to a list, whilst also adding together the quantities of ingredients with the same name to remove duplicates
function calculateIngredients() {
    for (meal of randomPlan) {
        for (newIngred of meal.ingredients) {
            let ingredientIndex = ingredientCheck(newIngred.ingredient);
            if (ingredientIndex === -1) {
                ingredientsList.push(newIngred);
            } else {
                ingredientsList[ingredientIndex].quantity += newIngred.quantity;
            }
        }
    }
}


// Days of the week, to be used to create an output string
const weekdays = ['|   Monday: ', '   |   Tuesday: ', '   |   Wednesday: ', '   |   Thursday: ', '   |   Friday: '];


// Empty string to be updated and output
let mealPlanString = '';


// Forms meal plan and string for output
randMealPlanGenerator();
randomPlan.forEach(meal => {
    mealPlanString += weekdays.shift() + meal.recipe;
})
mealPlanString += '   |';


// Empty string to be updated and output
let pantryString = '';


// Forms ingredient list and string for output
calculateIngredients();
ingredientsList.forEach(ingred => {
    pantryString += `    - ${ingred.ingredient}: ${ingred.quantity}${ingred.measurement}\n`;
})

// Function to display programme output to user
function messageDisplay() {
    console.log(greeting, '\n\n');
    console.log(open, '\n\n');
    console.log(mealPlanString, '\n\n');
    console.log(pantryOpen, '\n');
    console.log(pantryString);
}


// Calls message display function to provide user with programme output
messageDisplay();

