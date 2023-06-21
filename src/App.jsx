import { Header } from "./components/Header"
import {ToDoList} from "./components/ToDoList"
import { Notes } from "./components/Notes"
import './App.css'
import './css/header.css'
import './css/todo.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ToDoList />} />
        <Route path="/todo" element={<ToDoList />} />
        <Route path="/inprogress" element={<ToDoList />} />
        <Route path="/done" element={<ToDoList />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </Router>
    </>
  )
}