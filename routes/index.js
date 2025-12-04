var express = require('express');
var router = express.Router();
const ToDo = require('../models/todo')

/* GET home page. */
router.get('/', async function(req, res, next) {
      try {
        const todo = await ToDo.find()
        res.render('index', { title: 'To Do List', todo: todo });
      } catch (err) {
        next (err)
      }
});

module.exports = router;
