const express = require('express')
const router = express.Router();


router.get('/', function(req, res) {
    res.render('sort')
  })
  
router.get('/AtoZ', function(req, res) {
    res.render('AtoZ')
  })
router.get('/ZtoA', function(req, res) {
    res.render('AtoZ')
  })


module.exports = router
