import React, { useState } from "react"
import ToDoForm from "./ToDoForm"
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import '../css/todo.css'
import { Draggable, Droppable } from "react-beautiful-dnd";

export default function ToDo( {todos, removeTodo, updateTodo}) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <div>
    {todos.map((todo, index) => (
      <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
        {(provided) => (
          <div 
          className="todo-item" 
          key={index} 
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
            <div className="todo-text" key={todo.id}>
              {todo.text}
            </div>
            <div className='icons'>
              <RiCloseCircleLine
                onClick={() => removeTodo(todo.id)}
                className='delete-icon'
              />
              <TiEdit
                onClick={() => setEdit({ id: todo.id, value: todo.text })}
                className='edit-icon'
              />
            </div>
          </div>
        )}
      </Draggable>
    ))}
    </div>
  )
  };
