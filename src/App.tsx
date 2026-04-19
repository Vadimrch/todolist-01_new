import './App.css'
import {TodolistItem} from "./TodolistItem";


export type TaskType = {
  id: number
  title: string
  isDone: boolean
}

function App() {

  const todolistTitle_1: string = "What to learn"
  const todolistTitle_2: string = "What to buy"
  const tasks_1: TaskType[] = [
      {id: 1, title: "HTML&CSS", isDone: true},
      {id: 2, title: "JS", isDone: true},
      {id: 3, title: "React", isDone: false},
      {id: 3, title: "React", isDone: false},
      {id: 3, title: "React", isDone: false},
      {id: 3, title: "React", isDone: false},

      ]
  const tasks_2: TaskType[] = [
    // {id: 1, title: "Cola", isDone: true},
    // {id: 2, title: "Cheeps", isDone: true},
    // {id: 3, title: "Salt", isDone: false},
  ]
  return (
      <div className="app">
        <TodolistItem title={todolistTitle_1} tasks={tasks_1}/>
        <TodolistItem title={todolistTitle_2} tasks={tasks_2}/>
      </div>
  )
}

export default App
