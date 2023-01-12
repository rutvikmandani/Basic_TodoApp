import React from "react";
import { FaTimesCircle } from 'react-icons/fa';
import './TodoList.css';

const TodoList = (props) => {
    return(
    <>
        <div>
        <p> <FaTimesCircle onClick={() => props.onSelect(props.id) }/> {props.ItemVal}</p>
        </div>
    </>)
} 

export default TodoList;