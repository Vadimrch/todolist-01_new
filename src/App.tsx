import "./App.css"
import {TodolistItem} from "./TodolistItem";
import {useState} from "react";


export type TaskType = {
    id: number
    title: string
    isDone: boolean


}

function App() {

    const todolistTitle: string = "What to learn"
    // const todolistTitle_2: string = "What to buy"
    const [tasks, setTasks] = useState<TaskType[]>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
    ])
    // const tasks_2: TaskType[] = [
    //   {id: 1, title: "Cola", isDone: true},
    //   {id: 2, title: "Cheeps", isDone: true},
    //   {id: 3, title: "Salt", isDone: false},
    // ]
    const deleteTask = (taskId: number) => {
        const filteredTasks = tasks.filter(task => {
            return task.id !== taskId
        })
        setTasks(filteredTasks)
    }
    return (
        <div className="app">
            <TodolistItem title={todolistTitle}
                          tasks={tasks}
                          deleteTask={deleteTask}/>
            {/*<TodolistItem title={todolistTitle_2} tasks={tasks_2} deleteTask={deleteTask} />*/}
        </div>
    )
}

export default App
