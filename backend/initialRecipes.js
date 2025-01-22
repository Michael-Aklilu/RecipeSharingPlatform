const Recipes = require("./models/recipes");

const initialRecipes = async () => {
  const recipes = new Recipes([
    {
      title: "Spaghetti Bolognese",
      description:
        "A classic Italian pasta dish with a rich and savory meat sauce.",
      ingredients: [
        "400g spaghetti",
        "2 tbsp olive oil",
        "1 onion, finely chopped",
        "2 garlic cloves, minced",
        "500g ground beef",
        "400g canned tomatoes",
        "2 tbsp tomato paste",
        "Salt and pepper to taste",
        "Fresh basil for garnish",
      ],
      instructions: [
        "Cook the spaghetti according to package instructions.",
        "Heat olive oil in a large skillet over medium heat.",
        "Sauté the onion and garlic until softened.",
        "Add ground beef and cook until browned.",
        "Stir in canned tomatoes and tomato paste.",
        "Simmer the sauce for 15-20 minutes, seasoning with salt and pepper.",
        "Serve the sauce over the spaghetti and garnish with fresh basil.",
      ],
      servings: 4,
      prepTime: "10 minutes",
      cookTime: "30 minutes",
      imageUrl:
        "https://workweeklunch.com/wp-content/uploads/2022/10/spaghetti.bolognese-4.jpg",
      RegisteredUser: null,
      comments: [],
    },
    {
      title: "Chicken Caesar Salad",
      description:
        "A refreshing salad with grilled chicken, crunchy croutons, and creamy Caesar dressing.",
      ingredients: [
        "2 chicken breasts",
        "1 head of romaine lettuce, chopped",
        "1/2 cup Caesar dressing",
        "1/4 cup grated Parmesan cheese",
        "1 cup croutons",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Season chicken breasts with salt and pepper and grill until cooked through.",
        "Chop the grilled chicken into bite-sized pieces.",
        "In a large bowl, combine lettuce, Caesar dressing, and Parmesan cheese.",
        "Top with grilled chicken and croutons.",
        "Toss to coat and serve immediately.",
      ],
      servings: 2,
      prepTime: "10 minutes",
      cookTime: "15 minutes",
      imageUrl:
        "https://www.recipetineats.com/tachyon/2016/06/Hawaiian-Chicken-Salad-Lime-Dressing_3.jpg?resize=500%2C500",
      RegisteredUser: null,
      comments: [],
    },
    {
      title: "Margherita Pizza",
      description:
        "A simple and delicious pizza with fresh mozzarella, tomatoes, and basil.",
      ingredients: [
        "1 pizza dough",
        "1/2 cup pizza sauce",
        "200g fresh mozzarella cheese, sliced",
        "2 medium tomatoes, sliced",
        "Fresh basil leaves",
        "Olive oil for drizzling",
      ],
      instructions: [
        "Preheat the oven to 220°C (430°F).",
        "Roll out the pizza dough and place it on a baking sheet.",
        "Spread pizza sauce evenly over the dough.",
        "Top with mozzarella slices, tomato slices, and fresh basil leaves.",
        "Drizzle with olive oil and bake for 10-12 minutes, until the crust is golden and the cheese is melted.",
      ],
      servings: 2,
      prepTime: "15 minutes",
      cookTime: "12 minutes",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT88i1gMtaKJV44NCpMr6YKMvg7zjQ3ER4vZg&s",
      RegisteredUser: null,
      comments: [],
    },
    {
      title: "Beef Tacos",
      description:
        "Flavor-packed tacos with seasoned ground beef and your favorite toppings.",
      ingredients: [
        "500g ground beef",
        "1 packet taco seasoning",
        "8 small taco shells",
        "1 cup shredded lettuce",
        "1 cup diced tomatoes",
        "1/2 cup shredded cheese",
        "1/2 cup sour cream",
      ],
      instructions: [
        "Cook ground beef in a skillet over medium heat until browned.",
        "Add taco seasoning and a splash of water, simmer for 5 minutes.",
        "Warm the taco shells in a dry skillet.",
        "Fill each shell with seasoned beef and top with lettuce, tomatoes, cheese, and sour cream.",
        "Serve immediately.",
      ],
      servings: 4,
      prepTime: "10 minutes",
      cookTime: "15 minutes",
      imageUrl:
        "https://funwithoutfodmaps.com/wp-content/uploads/2022/07/Low-FODMAP-Beef-Tacos-Square.jpg",
      RegisteredUser: null,
      comments: [],
    },
    {
      title: "Vegetable Stir Fry",
      description:
        "A quick and healthy stir fry with fresh vegetables and a savory sauce.",
      ingredients: [
        "2 tbsp vegetable oil",
        "1 red bell pepper, sliced",
        "1 yellow bell pepper, sliced",
        "1 cup broccoli florets",
        "1 cup snow peas",
        "2 tbsp soy sauce",
        "1 tbsp oyster sauce",
        "1 tsp cornstarch mixed with 2 tbsp water",
      ],
      instructions: [
        "Heat oil in a wok or large skillet over high heat.",
        "Add the bell peppers, broccoli, and snow peas, and stir-fry for 5-7 minutes.",
        "Mix soy sauce, oyster sauce, and cornstarch slurry in a bowl.",
        "Pour the sauce over the vegetables and stir until the sauce thickens.",
        "Serve immediately with steamed rice.",
      ],
      servings: 3,
      prepTime: "10 minutes",
      cookTime: "10 minutes",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQAwDdqes-OH8vojPy78ypb8tw9rL2jhdSYw&s",
      RegisteredUser: null,
      comments: [],
    },
  ]);

  try {
    await Recipes.insertMany(recipes);
    console.log("Recipes added successfully!");
  } catch (error) {
    console.error("Error adding recipes:", error);
  }
};

module.exports = initialRecipes;
