import { useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux'
import apiRequest from './hook/apiRequest';

export default function Rate (){
    const dispatch = useDispatch() 
    const feedback =  useSelector(state => state.feedback);
    const [value, setValue] = useState("")

    const {data} = useQuery("todos", () => apiRequest("GET", "todos"))

    function addFeedback(e){
        e.preventDefault();
        const newValue = value

        dispatch({type : "addFeedback", data:newValue})
        setValue("")
    }
    return(
        <div >
            <h1>To Do List</h1>
            <div>
            {
                (data || []).map((item) => {
                    if(item.id<4) return (
                        <div key={item.id}>
                            <input type="checkbox"/>
                            <span >{item.todo}</span>
                        </div>   
                    ); else return ''
                })
                }
            </div>
            <form onSubmit={addFeedback}>
                <input
                type="text"
                value = {value} 
                onChange={e => setValue(e.target.value)}
                />
            </form>
            <div className='feedbackDiv'>{feedback}</div>   
        </div>
    )
}
