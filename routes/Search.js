const express = require('express')
const router = express.Router();
const Op = require('Sequelize').Op;

const models = require('../models')


router.get('/', function(req, res) {
    res.render('search')
})


router.get('/keyword', (req, res) => {
    let keyword = req.query.keyword;
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
    })
    .then(data => {
        res.json(data)
    })
});

module.exports = router
