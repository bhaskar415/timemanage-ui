var client = require('./esConnection.js');

client.indices.create({  
  index: 'task'
},function(err,resp,status) {
  if(err) {
    console.log(err);
  }
  else {
    console.log("create",resp);
  }
});
