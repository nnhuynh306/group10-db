const express = require('express')
const router = express.Router();


router.get('/', function(req, res) {
  let sortController = require('./../controller/sortController');
    sortController.getAll().then(data=> {
      res.locals.data=data;
      res.render('./../views/sort',{
        sortClass:'current'
      });
    });  
  })

router.get('/AtoZ', function(req, res) {
  let sortController = require('./../controller/sortController');
  sortController.getAll().then(data=> {
    function compare(a, b) {
      const A = a.title.toUpperCase();
      const B = b.title.toUpperCase();
    
      let comparison = 0;
      if (A >B) {
        comparison = 1;
      } else if (A <B) {
        comparison = -1;
      }
      return comparison;
    }
    data.sort(compare);
    res.locals.data=data;
    res.render('./../views/sort',{
      sortClass:'current'
    });
  }); 
  })
router.get('/ZtoA', function(req, res) {
  let sortController = require('./../controller/sortController');
  sortController.getAll().then(data=> {
    function compare(a, b) {
      const A = a.title.toUpperCase();
      const B = b.title.toUpperCase();
    
      let comparison = 0;
      if (A >B) {
        comparison = -1;
      } else if (A <B) {
        comparison = 1;
      }
      return comparison;
    }
    data.sort(compare);
    res.locals.data=data;
    res.render('./../views/sort',{
      sortClass:'current'
    });
  }); 
  })
  router.get('/sort', function(req, res) {
    let sortController = require('./../controller/sortController');
      sortController.getAll().then(data=> {
        res.locals.data=data;
        res.render('./../views/sort',{
          sortClass:'current'
        });
      });  
    })

module.exports = router
