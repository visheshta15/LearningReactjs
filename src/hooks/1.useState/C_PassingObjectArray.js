// You can put objects and arrays into state. In React, state is considered read-only, so you should replace it rather than mutate your existing objects. 

import React from 'react'
import { useState } from 'react'

function C_PassingObjectArray() {
    let formObj = {
        firstname: 'vish',
        lastname: 'kush',
        email: 'vish@gmail.com'
    }
    const personObje = {
        name: 'Niki de Saint Phalle',
        artwork: {
          title: 'Blue Nana',
          city: 'Hamburg',
          image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
    }
    const initialTodos = [
      { id: 0, title: 'Buy milk', done: true },
      { id: 1, title: 'Eat tacos', done: false },
      { id: 2, title: 'Brew tea', done: false },
    ];

    // object update
    const [form, setForm] = useState(formObj)
    const [person, setPerson] = useState(personObje)
    // array update
    const [todo, setTodo] = useState(initialTodos)
    const [newItem, setNewItem] = useState('')
    const [showUpdateBtn, setShowUpdateBtn] = useState(false)
    const [editRow, setEditRow] = useState()

    const handleFormChange = (e) =>{
        console.log(e)
        if(e.target.name === 'firstname'){
            setForm({...form,  firstname: e.target.value})
        }
    }
    const handlePersonChange = (e) =>{
      if(e.target.name === 'name'){
        setPerson({...person, name: e.target.value})
      } else if(e.target.name === 'title'){
        setPerson({...person, artwork: {...person.artwork, title: e.target.value }})
      } else if(e.target.name === 'city'){
        setPerson({...person, artwork: {...person.artwork, city: e.target.value }})
      } 
    }
    
    const handleAddTodo = (e) => {
      if(newItem){setTodo([...todo, {id: todo.length, title: newItem, done: false}])}
      setNewItem('')
    }

    const handleOnchnageTodo =(e)=>{

      console.log(e.target.value)
      setNewItem(e.target.value)
    }

    const updateTodo =()=>{

    }
    const handleBtnTodo = (val,btn) =>{
      if(btn==='checkbox'){
        let a  = todo.map((ele)=>{
          if(ele.id === val.id){
            return{
              ...ele, done: !val.done
            }
          }
          return {...ele}
        })
        setTodo(a)
      } else if(btn === 'delete'){
        let a = todo.filter((ele)=> ele.id !== val.id)
        setTodo(a)
      } else if(  btn  === 'edit'){
        console.log('eit')
        setShowUpdateBtn(true)
        setNewItem(val.title)
        setEditRow(val.id)

      } else if (btn === 'update'){
        
        let a  = todo.map((ele)=>{
          if(ele.id === val.id){
            return{
              ...ele, title: newItem
            }
          }
          return {...ele}
        })
        console.log(a)
        setTodo(a)
        setNewItem('')
        setShowUpdateBtn(false)
      }
    }
    
    // console.log(todo)

  return (
    <div>
        <h4>Updating objects and arrays in state---------------------------------------------------------------------------</h4>
        <hr />
        <h5>object upate</h5>
        <hr />
        <label> Firstname: <input type="text" value={form.firstname} name='firstname' onChange={handleFormChange}/></label>
        <input type="text" value={form.lastname} name='lastname' onChange={(e)=> setForm({...form, lastname: e.target.value})}/>
        <input type="email" value={form.email} name='email' onChange={(e)=> setForm({...form, email: e.target.value})}/>
        <p>I am <b>{form.firstname} {form.lastname}</b>, send response at <b>{form.email}</b></p>
        <hr />

        {/* updating nested object */}
        <label> Name: <input type="text" name='name' value={person.name} onChange={handlePersonChange}/></label>
        <label> Title: <input type="text" name='title' value={person.artwork.title} onChange={handlePersonChange}/></label>
        <label> City: <input type="text" name='city' value={person.artwork.city} onChange={handlePersonChange}/></label>
        <label> Image: <input type="text" name='title' value={person.artwork.image} onChange={handlePersonChange}/></label>
        <p>{person.name}</p>
        <p>{person.artwork.title}</p>
        <p>{person.artwork.city}</p>
        <img src={person.artwork.image} alt="" style={{height:'100px'}} />
        <hr />

        <h5>Array upate</h5>
        <hr />

        <input type="text" placeholder='Add todo' value={newItem} onChange={handleOnchnageTodo}/> 
        <button name='add' onClick={handleAddTodo}>Add</button>
        {todo.map((ele, index)=>(
          <div key={ele.id}>
            <input type="checkbox" onChange={()=>handleBtnTodo(ele,'checkbox')} checked={ele.done}/>

            {`${index +1}. ${ele.title} `}
            <button name='edit' onClick={()=>handleBtnTodo(ele,'edit')}>Edit</button>
            <button name='delete' onClick={()=>handleBtnTodo(ele,'delete')}>Delete</button>
            {ele.id === editRow && showUpdateBtn && <button name='add' onClick={()=>handleBtnTodo(ele,'update')}>Update</button>}
          </div>
        ))}
        <hr />

    </div>
  )
}

export default C_PassingObjectArray