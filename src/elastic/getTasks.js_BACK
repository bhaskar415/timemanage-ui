var client = require('./esConnection.js');

function log() {

//client.search({
//  index: 'time',
//  type: 'task',
//  body: {
//    query: {
//       match: { "taskName": "Task" }
//      //wildcard: { "constituencyname": "???wich" }
//      //regexp: { "constituencyname": ".+wich" }
//    }
//  }
//}).then(results => {
//          results.hits.hits._source.taskName;
//})
//.catch(err => {
//  console.log(err)
//});


//,function (error, response,status) {
//   var taskList = [];
//    if (error){
//      console.log("search error: "+error)
//    }
//    else {
//      //console.log("--- Response ---");
//      //console.log(response);
//      //console.log("--- Hits ---");
//     
//     response.hits.hits.forEach(function(hit){
//        taskList.push(hit._source.taskName);
//        return taskList;
//        console.log('******************');
//      })
//
//    }
//});

// return (['Test Stiring', 'Test 2fdsfs', 'Tesfsdfsdf  sdfsdff']);

}

var data = async function search(){

 return await client.search({
  	index: 'time',
  	type: 'task',
  	body: {
    		query: {
      	 		match: { "taskName": "Task" }
      			//wildcard: { "constituencyname": "???wich" }
      			//regexp: { "constituencyname": ".+wich" }
     		 }
     	}
 }).then((result) => { return result.hits.hits; });

};


async function query () {
  const result = await client.search({
    index: 'time',
    type: 'task',
    body: {
      query: {
        match: {
          "taskName": "Task" 
        }
      }
    }
  });
  return result.hits.hits;
}



module.exports.log = query;
