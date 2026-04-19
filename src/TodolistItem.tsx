import {TaskType} from "./App";
import {Button} from "./Button";

type Props = {
    title: string
    tasks: TaskType[]
    date: string
}


export const TodolistItem = (props: Props) => {

    const taskItems = props.tasks.map((t: TaskType) => {
        return (
            <li>
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
            </li>
        )
    })

    return (
        <div>
            <h3>{props.title}</h3>
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
            <div>{props.date}</div>
        </div>
    )
}