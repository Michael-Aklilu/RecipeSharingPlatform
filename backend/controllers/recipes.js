const mongoose = require('mongoose')
const recipeRouter = require('express').Router()
const Recipes = require('../models/recipes')


recipeRouter.get('/', async (req,res) => {

    try{
      const recipes = await Recipes.find({})
        .populate('RegisteredUser')

      if(!recipes){
        res.status(404).json({error:'Recipe not found'})
      }
      res.status(200).json(recipes)
    }catch(error){
       console.log(error)
       res.status(500).json({error:'An error occured while fetching the recipes'})
    }
    
})

recipeRouter.post('/',async (req,res) => {
    try{
        const{ title, description,ingredients,instructions,servings,
            prepTime,cookTime,imageUrl,RegisteredUser } = req.body

        const newRecipe = new Recipes({ title, description,ingredients,instructions,servings,prepTime,cookTime,imageUrl,RegisteredUser })

        await newRecipe.save()

        const updatedRecipes = await Recipes.find({})
          .populate('RegisteredUser')      

        res.status(201).json(updatedRecipes)
        
    }catch(error){
        console.log(error)
        res.status(500).json({error: 'An error occured when adding a recipe'})
    }
})

module.exports = recipeRouter