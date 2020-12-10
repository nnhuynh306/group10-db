const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.locals.pageTitle = "Recipes"
    res.locals.recipeClass = 
    res.render('recipes')
} )

module.exports = router
