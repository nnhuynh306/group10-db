const express = require('express')
const router = express.Router();
const models = require('../models')

router.get('/', (req, res) => {
    res.locals.pageTitle = "A to Z Recipes - Food & Recipes Web Template"
    res.locals.recipeClass = 'current'
    res.locals.mssv = '18127014'
    res.locals.hoten = "Huỳnh Nhật Nam"
    res.locals.email = "18127014@student.hcmus.edu.vn"

    res.render('recipes')
} )

router.get('/sync', (req, res) => {
    models.sequelize.sync().then(() => {
        res.send("db")
    })
} )


module.exports = router
