var addTask = require('./elastic/addTask');
  
addTask.add('Task 2', function(results) {
	 console.log(results);
});
