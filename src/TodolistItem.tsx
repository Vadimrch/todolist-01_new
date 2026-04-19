import {TaskType} from "./App";

type Props = {
    title: string
    tasks: TaskType[]
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
                <button>+</button>
            </div>
            {taskItems}
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}