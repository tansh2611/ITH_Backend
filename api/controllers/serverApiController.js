'use strict';
var mongoose = require('mongoose'),
  Task = mongoose.model('userdetails');

exports.list_all_users = function (req, res) {
  try {
    Task.find({}, function (err, task) {
      if (err)
        res.json({ error: true, message: "Unexpected error occurred!" });

      res.json({ error: false, data: task });
    });
  } catch (err) {
    console.log("Error! : ", err.message);
    res.json({ error: true, message: "Unexpected error occurred!" });
  }

};

exports.create_a_task = function (req, res) {
  var new_task = new Task(req.body);

  try {
    new_task.save(function (err, task) {
      if (err)
        res.json({ error: true, message: "Unexpected error occurred!" });

      res.json({ error: false, message: 'User successfully added' });
    });
  } catch (err) {
    console.log("Error! : ", err.message);
    res.json({ error: true, message: "Unexpected error occurred!" });
  }

};

exports.delete_a_task = function (req, res) {
  try {
    Task.deleteOne({
      _id: req.params._id
    }, function (err, task) {
      if (err)
        res.json({ error: true, message: "Unexpected error occurred!" });

      res.json({ error: false, message: 'User successfully deleted' });
    });
  } catch (err) {
    console.log("Error! : ", err.message);
    return res.json({ error: true, message: "Unexpected error occurred!" });
  }

};