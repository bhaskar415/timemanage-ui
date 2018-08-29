var client = require('./esConnection.js');

module.exports.search = function(searchData, callback) {
  client.search({
    index: 'time',
    type: 'task',
    body: {
      query: {
            "match_all": {}
          }
        }
  }).then(function (resp) {
    callback(resp.hits.hits);
  }, function (err) {
      callback(err.message)
      console.log(err.message);
  });
}
