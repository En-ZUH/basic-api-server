'use strict';

const express = require('express');
const Clothes = require('../models/clothes');
const clothes = new Clothes();

let router = express.Router();



let creatClothes = (request, response) => {
    let clothesObj = request.body;
    let responseObj = clothes.creat(clothesObj);
    response.status(201).json(responseObj)

}

let getClothes = (request, response) => {
    let responseObj = clothes.get();
    response.json(responseObj);

}

let getCertainClothes = (request, response) => {
    let id = request.params.id;
    let responseObj = clothes.read(id);
    response.json(responseObj);
}

let updateClothes = (request, response) => {
    let clothesObj = request.body;
    let id = request.params.id;
    let responseObj = clothes.update(id, clothesObj);
    response.json(responseObj);
}

let deleteClothes = (request, response) => {
    let id = request.params.id;
    let responseObj = clothes.delete(id);
    response.json(responseObj);
}

router.get('/', getClothes);
router.get('/:id', getCertainClothes);

router.post('/', creatClothes);

router.put('/:id', updateClothes);

router.delete('/:id', deleteClothes);

module.exports = router;
