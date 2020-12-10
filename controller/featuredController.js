const controller ={};

const models= require('../models');

controller.getAll=()=>{
    return models.Recipe.findAll({
        include: [{
             model: models.Ingredient,
             model: models.Direction,
        }]
    });
};

module.exports= controller;