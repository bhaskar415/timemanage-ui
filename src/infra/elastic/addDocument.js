var client = require('./esConnection.js');

client.index({  
  index: 'time',
  type: 'tags',
  body:	{ "taskName": "Task 6" }

},function(err,resp,status) {
    console.log(resp);
});
