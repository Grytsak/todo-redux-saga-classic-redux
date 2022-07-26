import * as types from './index'

export const getAllTasksAction = () => ({
    type: types.GET_ALL_TASKS,
})

export const addNewTaskAction = (name: any) => ({
    type: types.ADD_NEW_TASK,
    name
})

export const toggleTaskStatusAction = (doneObj: any) => ({
    type: types.TOGGLE_TASK_STATUS,
    id: doneObj._id,
    done: doneObj.done
})

export const editTaskNameAction = (nameObj: any) => ({
    type: types.EDIT_TASK_NAME,
    id: nameObj._id,
    name: nameObj.name
})

export const deleteTaskAction = (id: string) => ({
    type: types.DELETE_TASK,
    id
})