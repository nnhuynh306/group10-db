const controller ={};

const models= require('../models');
const Op = require('sequelize').Op;

controller.getAll=(query)=>{
    return models.Recipe.findAll({
        where: {
            id: query
        },
        include: [{
             model: models.Direction
        },
    {
        model: models.Ingredient
    }]
    });
};

module.exports= controller;