'use strict';

const express = require('express');
const Food = require('../models/food');
const food = new Food();

let router = express.Router();



let creatFoodHandler = (request, response) => {
    let FoodObj = request.body;
    let responseObj = food.creat(foodObj);
    response.status(201).json(responseObj)

}


let getFoodHandler = (request, response) => {
    let responseObj = food.get();
    response.json(responseObj);

}

let getCertainFoodHandler = (request, response) => {
    let id = request.params.id;
    let responseObj = food.read(id);
    response.json(responseObj);
}

let updateFoodHandler = (request, response) => {
    let foodObj = request.body;
    let id = request.params.id;
    let responseObj = food.update(id, foodObj);
    response.json(responseObj);
}

let deleteFoodHandler = (request, response) => {
    let id = request.params.id;
    let responseObj = food.delete(id);
    response.json(responseObj);
}
router.get('/', getFoodHandler);
router.get('/:id', getCertainFoodHandler);

router.post('/', creatFoodHandler);

router.put('/:id', updateFoodHandler);

router.delete('/:id', deleteFoodHandler);

module.exports = router;
