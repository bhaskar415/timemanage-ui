import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './features/tasks/view/task';
var getTasks = require('./features/tasks/model/getTasks');
var deleteTask = require('./features/tasks/model/deleteTask');
var addTask = require('./features/tasks/model/addTask');


var tasksList = [];



class App extends Component {

  constructor(props){
   
   super(props);
   this.state = {
    newtask: '',
    tasks:[]
   };  

   this.saveTask = this.saveTask.bind(this);
   this.handleChange = this.handleChange.bind(this);
   this.getTasks = this.getTasks.bind(this);
  }

  componentDidMount() {

   //Unhandled Rejection (TypeError): Cannot read property 'setState' of undefined --- To resolve this issue use let some variable and assign this object ref.
    let currentComponent = this;
    
 //   this.state.tasks = [];
      tasksList = [];

     getTasks.search('Test', function(results) {
     results.forEach(function(result){
         tasksList.push({'id': result._id, 'taskName': result._source.taskName})
       })
         currentComponent.setState({tasks: tasksList });
    });

  }


  getTasks(e) {
   
     //Unhandled Rejection (TypeError): Cannot read property 'setState' of undefined --- To resolve this issue use let some variable and assign this object ref.
    let currentComponent = this;
   
//    this.state.tasks = [];
     tasksList = [];

     getTasks.search('Test', function(results) {
     results.forEach(function(result){
         tasksList.push({'id': result._id, 'taskName': result._source.taskName})
       })
         currentComponent.setState({tasks: tasksList });
    });

  }



 //here index is the primary key which is id in this case 
  delEmp = (index, e) => {
      let deleteTaskComponent = this;

       deleteTask.delete(index, function(results) {
          console.log(results);
          deleteTaskComponent.getTasks();
       });


  }  


  handleChange(e) {
     this.setState({newtask: e.target.value});
  }

  saveTask(e) {
    let newTaskComponent = this;
    addTask.add(this.state.newtask, function(results) {
         console.log(results);
         newTaskComponent.getTasks();
      });
     
    this.state.newtask = '' 
  }


  render() {
    return (
      <div>
       <h2>Welcome</h2> 
       <form onSubmit={this.saveTask}>
       	<input type='text' value= {this.state.newtask} onChange={this.handleChange}/>
       	<button type='submit' vaule='sumbit' >ADD</button>
       </form>
       <h5>{this.state.newtask}</h5>   
    
       <table>
        <tbody>
	 {
           this.state.tasks.map((task) => {
 			return (<Task id={task.id} key={task.id} deleteEvent={this.delEmp.bind(this, task.id)}> {task.taskName} </Task>)
	      })
	
	 }
	</tbody>
       </table>
      </div>
    );
  }
}

export default App;
