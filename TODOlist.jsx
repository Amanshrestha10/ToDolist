import React, { useState }from "react"
function ToDolist(){
    const [tasks,setTasks]= useState(["eat","shower","walk"]);
    const[newTask,setNewTask]= useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim() !== "" ){
            setTasks(t=> [...t, newTask]);
            setNewTask("");
        }
       
    }
    function deleteTask(index){
        const updatedtasks = tasks.filter((element,i)=> i !== index);
        setTasks(updatedtasks);
    }
    function moveTaskUp(index){
        if(index>0){
            const updatedtasks = [...tasks];
            [updatedtasks[index], updatedtasks[index-1]] =[updatedtasks[index-1],updatedtasks[index]];
           setTasks(updatedtasks);
        }
    }
    function moveTaskDown(index){
        if(index< tasks.length -1 ){
            const updatedtasks = [...tasks];
            [updatedtasks[index], updatedtasks[index+1]] =[updatedtasks[index+1],updatedtasks[index]];
           setTasks(updatedtasks);
        }
    }
    
    return(
        <div className="to-do-list">
            <h1>To-Do-list</h1>
            <div>
                <input type="text"
                placeholder="Enter new task..."
                value={newTask}
                onChange={handleInputChange}/>
                <button className="add-button" onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task,index)=>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button"
                    onClick={()=> deleteTask(index)}>

                        Delete
                    </button>
                    <button className="move-button"
                    onClick={()=> moveTaskUp(index)}>

                        Up
                    </button>
                    <button className="down-button"
                    onClick={()=> moveTaskDown(index)}>

                        Down
                    </button>
                </li>
                )}
            </ol>
        </div>
    )
}
export default ToDolist