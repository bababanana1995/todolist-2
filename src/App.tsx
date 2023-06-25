import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

export type ButtonType = 'all' | 'active' | 'competed'

function App() {

    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ])
    const removeTask = (taskId: number) => {
        setTasks(tasks.filter(el => el.id !== taskId))
    }

    // const [filterTasksBut, setFilterTasksBut] = useState<ButtonType>('all')
    // const FilterForToDoList = (but: ButtonType) => {
    //     setFilterTasksBut(but)
    // }
    // let FilteredTasks = tasks
    // if (filterTasksBut === 'active') {
    //     FilteredTasks = tasks.filter(el => !el.isDone)
    // }
    // if (filterTasksBut === 'competed') {
    //     FilteredTasks = tasks.filter(el => el.isDone)
    // }
    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasks}
                      removeTask={removeTask}
                      // FilterForToDoList={FilterForToDoList}
            />
        </div>
    );
}

export default App;
