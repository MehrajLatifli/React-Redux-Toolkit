import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { addTodo } from '../stores/todo';
import { addTodoHandle } from '../utilities';

export default function AddTodo() {
    const [todo, setTodo] = useState('');

    // const dispatch = useDispatch();

    var [ counter, setCounter ] = React.useState(0)
    const submitHandle = e => {
        e.preventDefault();
        addTodoHandle({
            id:counter,
            title: todo,
            done: false
        })

        setCounter(prev => prev+1)
        counter++
        
        setTodo('')
    }
  return (
    <div>
        <form onSubmit={submitHandle}>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
            <button type='submit' disabled={!todo}>Add</button>
        </form>
    </div>
  )
}
