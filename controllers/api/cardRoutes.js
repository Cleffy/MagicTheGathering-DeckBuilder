const router = require('express').Router();
const { Card } = require('../../models');

const mtg = require('mtgsdk')
/*
mtg.card.find('', (result, request))
.then(result => {
    console.log(result.card.name) 
})

mtg.set.find()
.then(result => {
    console.log(result.set.name) 
})
*/

module.exports = router;