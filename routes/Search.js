const express = require('express')
const router = express.Router();
const controller = {}
const Op = require('Sequelize').Op;

const models = require('../models')





router.get('/', function(req, res) {
    res.render('search')
})

router.post('/keyword', (req, res) => {
    let keyword = 'e';
    // console.log('Got body:', req.body.keyword);
    // res.render('search');
    let temp = '%' +  keyword + '%';
    models.Recipe.findAll({
        where: {
            [Op.or]: [
                {
                    title: {
                        [Op.like]: temp
                    }
                },
                {
                    description: {
                        [Op.like]: temp
                    }
                },
                {
                    title: {
                        [Op.like]: temp
                    }
                },
            ]
        },
        include: [models.Direction, models.Ingredient]
    })
    .then(data => {
        res.json(data)
    })
  });

  module.exports = router
