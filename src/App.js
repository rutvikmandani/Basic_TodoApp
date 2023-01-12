import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList/TodoList';
import Button from '@mui/material/Button';

function App() {

  const [item,setItem] = useState('');
  const [listItem,setListItem] = useState([]);

  const itemEvent = (event) => {
    setItem (event.target.value)
  }

  const storeItem = () =>{
    setListItem((oldListItem) => {
      return[...oldListItem,item];
    });
    setItem("");
  };

  const onDelete = (id) => {
    setListItem((oldListItem) => {
      return oldListItem.filter((arrItem,index) => {
        return index !== id;
      })
    })
  }

  return (
    <>
    <div className ="container">
      <div className='inner_container'>
      <p></p>
      <h1 className ="h1"> TODO LIST</h1>
      <input type="text" placeholder="Type Item" onChange={itemEvent} value={item}/>
      <button onClick={storeItem}> + </button>
      {/* <Button/> */}
      <br/><br/>

      {listItem.map((itemVal,index) => {
        return <TodoList 
               key={index}
               id={index}
               ItemVal = {itemVal}
               onSelect= {onDelete} />
      } 
      
      )}
      </div>
    </div>
    </>
  );
}

export default App;
