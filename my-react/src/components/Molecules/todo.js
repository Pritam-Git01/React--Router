import styles from './todo.module.css';
import React from "react";
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addItem,deleteItem} from './todoSlice';



export default function Todo(){

  const [input,setInput] = useState(" ");

  const todoData = useSelector((state) => state.newState);
  
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addItem(input))
    setInput("")
  }
  const handleDelete = (index) => {
    dispatch(deleteItem(index))
  }


return (
    <div className={styles.container}>
        
        <div className={styles.wraper}>
        <h2>Your To-Do App</h2>
            <div className={styles.taskField}>
                
                <input type='text' placeholder='Add Your Task' value={input} onChange={(e) => setInput(e.target.value)} />
                <button className={styles.btn} onClick={handleClick}>Add Task</button>
            </div>
            <div className={styles.item}>
                {todoData.todos.map((item, index) => {
                    return (
                        <>
                            <ul className={styles.list}>
                                <li key={index}>{item}
                                    <button className={styles.delBtn} onClick={() => handleDelete(index)}>Delete</button></li>
                            </ul>

                        </>
                    );
                })}
            </div>
        </div>

    </div>
)
}

