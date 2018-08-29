var client = require('../../../infra/elastic/esConnection.js');

module.exports.add = function(input, callback) {

  client.index({
   index: 'time',
   type: 'task',
   body: { "taskName": input }
  }).then(function (resp) {
    callback(resp);
  }, function (err) {
      callback(err.message)
      console.log(err.message);
  });
}




