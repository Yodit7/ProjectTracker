import { Header } from "./components/Header"
import {ToDoList} from "./components/ToDoList"
import { Notes } from "./components/Notes"
import './App.css'
import './css/header.css'
import './css/todo.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react"

export default function App() {

  const [notes, setNotes] = useState([])

  const handleAdd = note => {
      if (!note.text || /^\s*$/.test(note.text)){
        console.log("here")
          return;
      }
      
      const newNotes = [note, ...notes]
      setNotes(newNotes)
    }
    // console.log(notes)

  const removeNote = id => {
    const removedArrNote = [...notes].filter(note => note.id !== id)
    setNotes(removedArrNote)
  }
    

  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ToDoList />} />
        <Route path="/todo" element={<ToDoList />} />
        <Route path="/inprogress" element={<ToDoList />} />
        <Route path="/done" element={<ToDoList />} />
        <Route path="/notes" element={<Notes onSubmit={handleAdd} notes={notes} removeNote={removeNote} />} />
      </Routes>
    </Router>
    </>
  )
}