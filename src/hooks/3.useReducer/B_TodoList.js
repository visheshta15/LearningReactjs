import React, { useReducer, useState } from 'react'
import { initialState, reducer } from './B1_reducerFunc'

function B_TodoList() {
    const [todoState, dispatch] = useReducer(reducer, initialState)
    const [newItem, setNewItem] = useState({item: '', quantity: ''})
    const [editItem, setEditItem] = useState({item: '', quantity: '', id: null})
    const [error, seterror] = useState('')
    const [edit, setEdit] = useState()

    const handleAddBtnClick = () =>{
        if(newItem.item && newItem.quantity){
            dispatch({
                type: 'ADD',
                payload: newItem
            })
        }else{
            
            seterror('First add the item and corresponding quantity')
        }
          
        setNewItem({item: '', quantity: ''})

    }
    const  handleOnchangeInput = (e) => {
        if(e.target.name === 'item'){
            seterror('')
            setNewItem({...newItem, item: e.target.value})
        } else if (e.target.name === 'qty'){
            seterror('')
            setNewItem({...newItem, quantity: e.target.value})
        }
    }

    const handleOnchangeCheckbox = (id) =>{
        dispatch({
            type : 'COMPLETE',
            payload : id
        })

    }

    const handleDeleteBtnClick = (id) => {
        dispatch({
            type : 'DELETE',
            payload : id
        })

    }
    const handleEditBtnClick = (e) =>{
        setEditItem({item: e.text, quantity: e.quantity})
        setEdit(e.id)
    }

    const handleSaveBtnClick = () =>{
        dispatch({
            type: 'EDIT',
            payload: editItem
        })
        setEditItem({item: '', quantity: ''})
        setEdit(null)
    }

    
  return (
    <div>
        <h4>B. Todo list (array) </h4>
        <p>the reducer manages an array of tasks. The array needs to be updated without mutation.</p>

        <p><b>Grocery</b></p>
        <input type="text" name='item' placeholder='Add Items'  value={newItem.item} onChange={handleOnchangeInput}/> 
        <input type="text" name='qty' placeholder='Add Quantity' value={newItem.quantity} onChange={handleOnchangeInput}/> 
        <button onClick={handleAddBtnClick}>Add</button>
        <p className='error'>{error}</p>
        <br />
        {todoState.map((ele, index)=>
           <div key={ele.id}>
                <input type="checkbox" checked={ele.done} onChange={()=>handleOnchangeCheckbox(ele.id)} />
                { !(edit === ele.id)? 
                (
                    <>
                    {`  ${ele.text}  ___ ${ele.quantity}  `}
                    <button onClick={()=>handleEditBtnClick(ele)}>Edit</button>
                    </>
                )
                :(
                    <>
                    <input onChange={(e)=>setEditItem({...editItem, item: e.target.value, id: ele.id})} value={editItem.item}/>
                    <input onChange={(e)=>setEditItem({...editItem, quantity: e.target.value, id: ele.id})} value={editItem.quantity}/>
                    <button onClick={handleSaveBtnClick}>Save</button>
                    </>
                    
                )
                }
                <button onClick={()=>handleDeleteBtnClick(ele.id)}>Delete</button>
           </div>
        )}
        <hr />
    </div>
  )
} 

export default B_TodoList