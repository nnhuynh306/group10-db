const express = require('express')
const router = express.Router();

module.exports = router

router.get('/', function(req, res) {
    res.render('search')
})

router.post('/keyword', (req, res) => {
    // let keyword = req.body.keyword
    console.log('Got body:', req.body.keyword);
    res.render('search');
  });


