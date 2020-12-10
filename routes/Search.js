const express = require('express')
const router = express.Router();
const Op = require('sequelize').Op;

const models = require('../models')


router.get('/', (req, res) => {
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
        res.locals.data = data;
        res.locals.homeClass = 'current'
        res.locals.mssv = '18127092'
        res.locals.hoten = "Phạm Vũ Duy"
        res.locals.email = "18127092@student.hcmus.edu.vn"
        res.render('search')
    })
});

module.exports = router
