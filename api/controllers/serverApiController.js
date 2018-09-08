'use strict';
var mongoose = require('mongoose'),
    Task = mongoose.model('userdetails');

exports.list_all_users = function (req, res) {
  Task.find({}, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_a_task = function (req, res) {
  var new_task = new Task(req.body);
  new_task.save(function (err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully added' });
  });
};

exports.delete_a_task = function (req, res) {
  Task.deleteOne({
    _id: req.params._id
  }, function (err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};