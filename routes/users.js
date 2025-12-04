var express = require('express');
var router = express.Router();
const ToDo = require('../models/todo')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Get all items
router.get('/all', async function(req, res, next){
    try {
      const todo = await ToDo.find()
      res.json(todo)
    } catch (err) {
      next (err)
    }
});

module.exports = router;

