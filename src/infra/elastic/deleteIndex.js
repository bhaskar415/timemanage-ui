var client = require('./esConnection.js');

client.indices.delete({index: 'time'},function(err,resp,status) {  
  console.log("delete",resp);
});
