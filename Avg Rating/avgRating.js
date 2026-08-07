const recipe1 = {
  name: 'Spaghetti Carbonara',
  ingredients: ['spaghetti', 'Parmesan cheese', 'pancetta', 'black pepper'],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: '',
  ratings: [4, 5, 4, 5],
  averageRating: null,
};

const recipe2 = {
  name: 'Chicken Curry',
  ingredients: ['chicken breast', 'coconut milk', 'curry powder', 'onion', 'garlic'],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: '',
  ratings: [4, 5, 5, 5],
  averageRating: null,
};

const recipe3 = {
  name: 'Vegetable Stir Fry',
  ingredients: ['broccoli', 'carrot', 'bell pepper'],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: '',
  ratings: [4, 3, 4, 5],
  averageRating: null,
};

// Calculate average rating
function calAvgRating(avgRating) {
  return avgRating.reduce((sum, r) => sum + r) / avgRating.length;
}

console.log(calAvgRating(recipe3.ratings));


// Calculate total ingredients 
function getTotalIngredients(totalIng) {
  return totalIng.length;
}

console.log(getTotalIngredients(recipe1.ingredients))

// Determine difficulty level
function getDifficultyLevel(cookingTime) {
  if (cookingTime <= 30) {
    return "easy";
  } else if (cookingTime > 30 && cookingTime <= 60) {
    return "medium";
  } else {
    return "hard";
  }
}

console.log(getDifficultyLevel(recipe3.cookingTime));