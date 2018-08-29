var data = require('./elastic/test1');

var tasksList = [];

  data.search('Test', function(results) {
    results.forEach(function(result){
         tasksList.push({'id': result._id, 'taskName': result._source.taskName})
	 console.log(result._source.taskName);
	 console.log('***************');
       })
 
   
   console.log(tasksList);
  });
