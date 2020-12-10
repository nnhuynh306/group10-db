const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.locals.pageTitle = "A to Z Recipes - Food & Recipes Web Template"
    res.locals.blogClass = 'current'
    res.locals.mssv = '18127014'
    res.locals.hoten = "Huỳnh Nhật Nam"
    res.locals.email = "18127014@student.hcmus.edu.vn"
    res.render('blog')
})


module.exports = router
