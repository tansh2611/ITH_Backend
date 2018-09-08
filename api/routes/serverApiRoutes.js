'use strict';
module.exports = function(app) {
  var serverapi = require('../controllers/serverApiController');

  // serverApi Routes
  app.route('/tasks')
    .get(serverapi.list_all_users)
    .post(serverapi.create_a_task);

  app.route('/tasks/:_id')
    .delete(serverapi.delete_a_task);
 
};