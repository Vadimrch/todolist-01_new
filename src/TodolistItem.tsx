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
                <Button title={"x"} onClick={() => deleteTask(t.id)}/>
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
                <Button title={"All"} onClick={() => {
                }}/>
                <Button title={"Active"} onClick={() => {
                }}/>
                <Button title={"Completed"} onClick={() => {
                }}/>
            </div>

        </div>
    )
}