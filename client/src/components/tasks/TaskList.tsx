import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Task from './Task'


const TaskList = (props: any) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const tasks = props.tasks
    const user = props.user
    const latesAddedTask = props
    const getAllTasksAction = props.getAllTasksAction
    
    useEffect(() => {
        if(user._id) dispatch(getAllTasksAction())
    }, [user, dispatch])

    useEffect(() => {
        if(!user._id) {
            navigate('/login')
        }
    }, [user])

    const renderTasks = () => {
        if(tasks.length === 0) return <li>Loading...</li>
        else {
            return tasks.map((task: any) => {
                return <li key={task._id}><Task task={task}/></li>
            })
        }
    }

    return(
        <div>
            <h2>Task List</h2>
            <ul>
                {renderTasks()}
            </ul>
            
        </div>
    )
}

export default TaskList