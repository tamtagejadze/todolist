import { useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux'
import apiRequest from './hook/apiRequest';
import pencil from './image/pencil.png';

export default function Rate (){
    const dispatch = useDispatch() 
    const feedback =  useSelector(state => state.feedback);
    const [value, setValue] = useState("")

    const {data} = useQuery("todos", () => apiRequest("GET", "todos"))

    function addTask(e){
        e.preventDefault();
        const newValue = value

        dispatch({type : "addTask", data:newValue})
        setValue("")
    }

    return(
        <div className='container'>            
            <div className='left'>
            <h1>To Do List</h1>
            <div>
                {
                (data || []).map((item) => {
                    if(item.id<7) return (
                        <div className='task-div' key={item.id}>
                            <input className='check-input' type="checkbox"/>
                            <span >{item.todo}</span>
                        </div>   
                    ); else return ''
                })
                }
            </div>
            <div className='feedbackDiv'>
                <input className='check-input' type="checkbox"/>
                <span>{feedback}</span>
            </div>   
            <div className='add-task'>
                <form onSubmit={addTask}>
                    <input
                    className='add-task-input'
                    type="text"
                    value = {value} 
                    onChange={e => setValue(e.target.value)}
                    />
                </form>
                <button className='add-task-btn' onClick={addTask}>+ New Task</button>
            </div>
            </div>
            <div className='right'>
                <img className='pencil' src={pencil} />
            </div>
        </div>
    )
}
