import { Header } from "./components/Header"
import {ToDoList} from "./components/ToDoList"
import './App.css'
import './css/header.css'
import './css/todo.css'
// import { DragDropContext } from "react-beautiful-dnd"

export default function App() {
  return (
    <>
      <Header />
      {/* <DragDropContext> */}
        <ToDoList />
      {/* </DragDropContext> */}
    </>
  )
}