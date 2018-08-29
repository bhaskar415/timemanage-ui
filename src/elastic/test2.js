var client = require('./esConnection.js');
var result = [];

function tasks(){
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
    var taskList = [];
    if (error){
      console.log("search error: "+error)
    }
    else {
      response.hits.hits.forEach(function(hit){
        taskList.push(hit);
      })
    }
  console.log(taskList);
  return taskList;
});

}

module.exports.data = tasks;
