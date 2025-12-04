const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
    ToDo: String,
});

module.exports = mongoose.model('ToDo', ToDoSchema);