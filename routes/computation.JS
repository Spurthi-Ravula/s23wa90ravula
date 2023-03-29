var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    var number1 = Math.random() * 10;
    var number2 = Math.random() * 10;
    var froundFunction = Math.fround(number1);
    var randomFunction = Math.random() * 11;
    var roundFunction = Math.round(number2);
    res.render('computation',
                {
                    title: 'Spurthi Ravula computing functions',
                    number1: number1,
                    number2: number2,
                    fround: froundFunction,
                    random: randomFunction,
                    round: roundFunction
                });
});
module.exports = router;