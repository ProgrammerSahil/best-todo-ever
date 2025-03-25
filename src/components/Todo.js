import { useEffect, useRef, useState } from "react";


const Todo = () => {
    const inputRef = useRef();
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    useEffect(()=>{inputRef.current.focus()}, []);

    useEffect(() => {
        console.log(tasks);
    }, [tasks]);

    const addTask = () => {
        if(input.trim()){
            setTasks([...tasks, {title: input, completed: false}]);
            setInput("");
            inputRef.current.focus();
        }
    }

    const toggleTask = (index) =>{
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    }

return(
    
    <div>
        <ul>
            {tasks.map((task, i) => {
                return (<li key={i}><input type="checkbox" onChange={() => toggleTask(i)} checked={task.completed}/>{task.title}</li>);
            })}
        </ul>
        <input type="text" onChange={(e) => {setInput(e.target.value)}} value={input} ref={inputRef} placeholder="Enter Task: " onKeyDown={(e) => {e.key==="Enter" && addTask()}} />
    </div>
);
}

export default Todo;