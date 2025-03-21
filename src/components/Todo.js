import { useEffect, useRef, useState } from "react";


const Todo = () => {
    const inputRef = useRef();
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        console.log(tasks);
    }, [tasks]);

    const addTask = () => {
        if(input.trim()){
            setTasks([...tasks, {title: input, completed: false}]);
            setInput("");
            
        }
    }

return(
    
    <div>
        <input type="text" onChange={(e) => {setInput(e.target.value)}} value={input} ref={inputRef} placeholder="Enter Task: " onKeyDown={(e) => {e.key==="Enter" && addTask()}} />
    </div>
);
}

export default Todo;