import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ITask } from './types'
import {
    toggleTaskStatusAction,
    editTaskNameAction,
    deleteTaskAction 
} from '../../actions/tasks'

const Task = (props: {task: ITask}) => {
    const dispatch = useDispatch()
    const { _id, name, done } = props.task
    const [check, setCheck] = useState(done)
    const [editedName, setEditedName] = useState(name)
    const [timer, setTimer] = useState()

    const onToggleStatus = () => {
        setCheck(!check)
        dispatch(toggleTaskStatusAction({_id, done: !check}))
    }

    const onEditTask = (e: any) => {
        let value = e.target.value
        setEditedName(value)
        clearTimeout(timer)

        const newTimer: any = setTimeout(() => {
            dispatch(editTaskNameAction({_id, name: value}))
        }, 500)
        
        setTimer(newTimer)
    }

    const onDelete = (e: any) => {
        e.preventDefault()

        dispatch(deleteTaskAction(_id!))
    }

    return (
        <div>
            <div>{editedName}</div>
            <div>
                Status: {check!.toString()}
                <input 
                    type='checkbox'
                    checked={check}
                    onChange={onToggleStatus}
                />
            </div>
            <div>
                <form>
                    <label htmlFor='editName'>Edit Task Name</label>
                    <input 
                        type='text'
                        id='editName'
                        name='editName'
                        value={editedName}
                        placeholder='Edit task name'
                        onChange={onEditTask}
                    />
                </form>
            </div>
            <div>
                <button onClick={onDelete}>Delete</button>
            </div>
        </div>
    )
}

export default Task