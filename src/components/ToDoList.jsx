import ToDoForm from "./ToDoForm"
import ToDo from "./ToDo"
import '../css/todo.css'
import { useState} from "react"
import { Droppable, DragDropContext } from "react-beautiful-dnd";

export function ToDoList() {
    const [todos, setTodos] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [done, setDone] = useState([]);


    const addTodo = todo => {
      if (!todo.text || /^\s*$/.test(todo.text)) {
        return;
      }
  
      const newTodos = [todo, ...todos];
    //   console.log(todos)
      setTodos(newTodos);
    };
  

    const addInProgress = todoInProgress => {
        if (!todoInProgress.text || /^\s*$/.test(todoInProgress.text)) {
            return;
          }
      
          const newInProgressTodos = [todoInProgress, ...inProgress];
      
          setInProgress(newInProgressTodos);
          console.log(...inProgress);
    }


    const addDone = todoDone => {
        if (!todoDone.text || /^\s*$/.test(todoDone.text)) {
            return;
          }
      
          const newDone = [todoDone, ...done];
      
          setDone(newDone);
          console.log(...done);        
    }

    const updateTodo = (todoId, newValue) => {
      if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
      }
  
      setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
      setInProgress(prev => prev.map(item => (item.id === todoId ? newValue : item)));
      setDone(prev => prev.map(item => (item.id === todoId ? newValue : item)));

    };
  
    const removeTodo = id => {
      const removedArrTodo = [...todos].filter(todo => todo.id !== id);
      const removedArrInProgress = [...inProgress].filter(todo => todo.id !== id);
      const removedArrDone = [...done].filter(todo => todo.id !== id);

  
      setTodos(removedArrTodo);
      setInProgress(removedArrInProgress);
      setDone(removedArrDone);

    };
  
    // const handleOnDragEnd = (result) => {
    //     if (!result.destination) return

    //     console.log(result)
    //     const items = Array.from(todos)
    //     const [reorderedItem] = items.splice(result.index, 1)
    //     items.splice(result.destination.index, 0, reorderedItem)

    //     setTodos(items)
    // }

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
      
        const sourceDroppableId = result.source.droppableId;
        const destinationDroppableId = result.destination.droppableId;
      
        // Überprüfen Sie, in welchem Container das Element gezogen und abgelegt wurde
        if (sourceDroppableId === destinationDroppableId) {
          // Das Element wurde im selben Container abgelegt
          if (sourceDroppableId === 'todos-section') {
            // Das Element wurde im "To Do List"-Container verschoben
            const items = Array.from(todos);
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem);
      
            setTodos(items);
          } else if (sourceDroppableId === 'inprogress-section') {
            // Das Element wurde im "In Progress"-Container verschoben
            const items = Array.from(inProgress);
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem);
      
            setInProgress(items);
          } else if (sourceDroppableId === 'done-section') {
            // Das Element wurde im "Done"-Container verschoben
            const items = Array.from(done);
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem);
      
            setDone(items);
          }
        } else {
          // Das Element wurde zwischen Containern verschoben
          let sourceArray, destinationArray;
          if (sourceDroppableId === 'todos-section') {
            sourceArray = todos;
          } else if (sourceDroppableId === 'inprogress-section') {
            sourceArray = inProgress;
          } else if (sourceDroppableId === 'done-section') {
            sourceArray = done;
          }
      
          if (destinationDroppableId === 'todos-section') {
            destinationArray = todos;
          } else if (destinationDroppableId === 'inprogress-section') {
            destinationArray = inProgress;
          } else if (destinationDroppableId === 'done-section') {
            destinationArray = done;
          }
      
          const [reorderedItem] = sourceArray.splice(result.source.index, 1);
          destinationArray.splice(result.destination.index, 0, reorderedItem);
      
          setTodos([...todos]);
          setInProgress([...inProgress]);
          setDone([...done]);
        }
      };

    return (
        <div className="main-container">
            <DragDropContext onDragEnd={handleOnDragEnd}>
            <div className="container">
                <div className="container-headline">
                    <h2>To Do List</h2>
                    <p>{todos.length}</p>
                </div>
                <div><hr></hr></div>
                <ToDoForm onSubmit={addTodo}/>
                <Droppable droppableId="todos-section">
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            <ToDo 
                                todos={todos}
                                removeTodo={removeTodo}
                                updateTodo={updateTodo}
                            />
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
            <div className="container">
                <div className="container-headline">
                    <h2>In Progress</h2>
                    <p>{inProgress.length}</p>
                </div>
                <div><hr></hr></div>
                <ToDoForm onSubmit={addInProgress}/>
                <Droppable droppableId="inprogress-section"> 
                     {(provided) => ( 
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            <ToDo 
                                todos={inProgress}
                                removeTodo={removeTodo}
                                updateTodo={updateTodo}
                            />
                            {provided.placeholder}
                        </div>
                     )}
                    </Droppable>
            </div>
            <div className="container">
                <div className="container-headline">                
                    <h2>Done</h2>
                    <p>{done.length}</p>
                </div>
                <div><hr></hr></div>
                <ToDoForm onSubmit={addDone}/>
                <Droppable droppableId="done-section">
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                        <ToDo 
                            todos={done}
                            removeTodo={removeTodo}
                            updateTodo={updateTodo}
                        />
                        {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
            </DragDropContext>
        </div>
    )
}