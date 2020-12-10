const express = require('express');
const controller = require('./../controller/recipeController.js');
const router = express.Router();
const recipeController = require('./../controller/recipeController.js')

router.get('/', (req, res) => {
    res.locals.pageTitle = "A to Z Recipes - Food & Recipes Web Template"
    res.locals.recipeClass = 'current'
    res.locals.mssv = '18127014'
    res.locals.hoten = "Huỳnh Nhật Nam"
    res.locals.email = "18127014@student.hcmus.edu.vn"
    controller.getAll().then(data=> {
        res.locals.data = data
        res.render('recipes')
        
      }); 
} )





module.exports = router
