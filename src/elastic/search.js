var client = require('./esConnection.js');

client.search({  
  index: 'time',
  type: 'task',
  body: {
    query: {
       match: { "taskName": "Task" }
      //wildcard: { "constituencyname": "???wich" }
      //regexp: { "constituencyname": ".+wich" }
    },
  }
},function (error, response,status) {
    if (error){
      console.log("search error: "+error)
    }
    else {
      console.log("--- Response ---");
      console.log(response);
      console.log("--- Hits ---");
      response.hits.hits.forEach(function(hit){
        console.log(hit);
      })
    }
});
