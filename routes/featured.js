const express = require('express')
const router = express.Router();
const controller = require('./../controller/recipeController.js');


router.get('/', (req, res) => {
    res.locals.pageTitle = "Featured Recipes - Food &amp; Recipes Web Template"
    res.locals.featureClass = 'current'
    res.locals.mssv = '18127118'
    res.locals.hoten = "Mai Đăng Khánh"
    res.locals.email = "18127118@student.hcmus.edu.vn"
    controller.getAll().then(data=> {
        res.locals.data = data
        res.render('featured')
        
      }); 
} )

module.exports = router
