import '../css/todo.css'
import { useState, useRef, useEffect } from 'react'
import { BiPlus, BiRevision } from "react-icons/bi";



export default function ToDoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '')

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <>
      <form className='form_input' onSubmit={handleSubmit}>
        {props.edit ? (
          <>
            <input 
              placeholder="Update your item"
              value={input}
              onChange={handleChange}
              name="text" 
              ref={inputRef}
            />
            <button className="btn-add" onClick={handleSubmit}><BiRevision className='add-icon' /></button>  
          </>
        ) : (
          <>
            <input 
              placeholder="Add a todo"
              value={input}
              onChange={handleChange}
              name="text" 
              ref={inputRef}
            />
            <button className="btn-add" onClick={handleSubmit}><BiPlus className="add-icon"/></button>  
          </>
        )}
      </form>
    </>
  )
}