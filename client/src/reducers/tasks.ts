import * as types from '../actions'

const initialState = {
    tasks: [],
    latesAddedTask: {}
}

const tasks = (state = initialState, action: any) => {
    switch(action.type) {
        case types.GET_ALL_TASKS_SUCCESS:
            return { ...state, tasks: action.tasks }
        case types.ADD_NEW_TASK_SUCCESS:
            const addNewTasks: any = state.tasks

            addNewTasks.push(action.newTask)

            return { ...state, addNewTasks, latesAddedTask: action.newTask }
        case types.TOGGLE_TASK_STATUS_SUCCESS:
            const toggledTasks = state.tasks

            toggledTasks.forEach((task: any) => {
                if(task._id === action.toggledTask._id) {
                    task.done = action.toggledTask.done
                }
            })

            return { ...state, tasks: toggledTasks }
        case types.EDIT_TASK_NAME_SUCCESS:
            const editedNameTasks = state.tasks

            editedNameTasks.forEach((task: any) => {
                if(task._id === action.editedTaskName._id) {
                    task.done = action.editedTaskName.done
                }
            })

            return { ...state, tasks: editedNameTasks }
        case types.DELETE_TASK_SUCCESS:
            const taskAfterDelete = state.tasks.filter((task: any) => task._id !== action.deletedTaskId)

            return { ...state, tasks: taskAfterDelete }
        default:
            return state
    }
}

export default tasks