var client = require('./esConnection.js');

module.exports.delete = function(input, callback) {

  client.delete({
   index: 'time',
   type: 'task',
   id: input
  }).then(function (resp) {
    callback(resp);
  }, function (err) {
      callback(err.message)
      console.log(err.message);
  });
}

