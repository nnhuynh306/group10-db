const express = require('express')
const router = express.Router();


router.get('/', function(req, res) {
  let sortController = require('./../controller/sortController');
    sortController.getAll().then(data=> {
      res.locals.data=data;
      res.render('./../views/sort',()=>{
        nav.sortClass=current
      });
    });  
  })

router.get('/AtoZ', function(req, res) {
  let sortController = require('./../controller/sortController');
  sortController.getAll().then(data=> {
    res.locals.data=data;
    res.render('./../views/sort');
  }); 
  })
router.get('/ZtoA', function(req, res) {
  let sortController = require('./../controller/sortController');
  sortController.getAll().then(data=> {
    res.locals.data=data;
    res.render('./../views/sort');
  }); 
  })


module.exports = router
