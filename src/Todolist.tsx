import React, {useState} from 'react';
import {ButtonType} from "./App";

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: TaskType[]
    removeTask: (taskId:number)=>void
}


export function Todolist(props: PropsType) {
    const [filterTasksBut, setFilterTasksBut] = useState<ButtonType>('all')
    const FilterForToDoList = (but: ButtonType) => {
        setFilterTasksBut(but)
    }
    const boxForFilters=()=>{
        let FilteredTasks = props.tasks
        if (filterTasksBut === 'active') {
            FilteredTasks = props.tasks.filter(el => !el.isDone)
        }
        if (filterTasksBut === 'competed') {
            FilteredTasks = props.tasks.filter(el => el.isDone)
        }
          return FilteredTasks
    }
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {boxForFilters().map((el)=>{
                return (
                <li key={el.id}>
                    <button onClick={()=>props.removeTask(el.id)}>x</button>
                    <input type="checkbox" checked={el.isDone}/> <span>{el.title}</span>
                </li>
                )}
            )}

        </ul>
        <div>
            <button onClick={()=>FilterForToDoList('all')}>All</button>
            <button onClick={()=>FilterForToDoList('active')}> Active</button>
            <button onClick={()=>FilterForToDoList('competed')}> Completed</button>
        </div>
    </div>
}
