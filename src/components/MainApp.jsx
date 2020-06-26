import React,{Component} from 'react';
import './main.css';

class MainApp extends Component{

    constructor(props){
        super(props);
        this.state={
            task:"",
            todos:[{
                title:"Walking",
                id:"1"
            },{
                title:"Breakfast",
                id:"2"
            },{
                title:"Lunch",
                id:"3"
            }]
        }    
    }

    deleteHandler(id){
        const updatedToDos=this.state.todos.filter((eachTask)=>{
            return eachTask.id!==id;
        });
        this.setState({
            todos:updatedToDos
        });
    }

    addTaskHandler(newTask){
        document.getElementById('task-field').value=" ";
        let newId = Math.floor((Math.random() + 1));
        const tasks=[...this.state.todos];
        tasks.push({
            title:newTask,
            id:newId
        })
        this.setState({
            todos:tasks
        })
    }
    

    render(){
        return(
            <div className="wrapper">
                <form
                onSubmit={(e)=>{
                    e.preventDefault();
                    let task=document.getElementById('task-field').value;
                    this.addTaskHandler(task);
                }}
                >
                    <div>
                        <input 
                        type="text"
                        id="task-field"
                        />
                    </div>
                </form>
                <div className="heading">
                    {this.state.todos.length} ToDos Left
                </div>
                <div className="tasks-wrapper">
                    {this.state.todos.map((eachTask)=>{
                        return(
                        <div className="eachTask">
                            {eachTask.title}
                            <div>
                                <button 
                                className="delete"
                                onClick={()=>this.deleteHandler(eachTask.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default MainApp;