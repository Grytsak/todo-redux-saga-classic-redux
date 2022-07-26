import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewTaskAction } from '../../actions/tasks'

const AddNewTask = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({ name: '' })
    const { name } = formData

    const onChange = (e: any) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e: any) => {
        e.preventDefault()

        if(name) {
            dispatch(addNewTaskAction(name))
            setFormData({ name: '' })
        }
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    id='name'
                    name='name'
                    value={name}
                    placeholder='Enter new task name'
                    onChange={onChange} 
                />
                <button>Add Task</button>
            </form>
        </div>
    )
}

export default AddNewTask