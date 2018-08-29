var data = require('../../src/features/tasks/model/getTasks');

var tasksList = [];

  data.search('Test', function(results) {
    results.forEach(function(result){
         tasksList.push({'id': result._id, 'taskName': result._source.taskName})
       })
 
   
   console.log(tasksList);
  });
