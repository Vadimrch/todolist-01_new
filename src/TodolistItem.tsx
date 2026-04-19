import {TaskType} from "./App";
import {Button} from "./Button";

type Props = {
    title: string
    tasks: TaskType[]
    deleteTask: (taskId: number) => void
}


export const TodolistItem = ({title, tasks, deleteTask}: Props) => {

    const taskItems = tasks.map((t: TaskType) => {
        return (
            <li>
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={()=> deleteTask(t.id)}>x</button>
            </li>
        )
    })

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title={"+"}/>

            </div>
            {taskItems}
            <div>
                <Button title={"All"}/>
                <Button title={"Active"}/>
                <Button title={"Completed"}/>
            </div>

        </div>
    )
}