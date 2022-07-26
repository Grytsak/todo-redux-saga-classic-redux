import { call, put, select } from 'redux-saga/effects'
import * as types from '../actions'
import * as api from './tasksApi'

const getToken = (state: any) => state.users.user.token

export function* getAllTasks(): any {
    try {
        const token = yield select(getToken)
        const tasks = yield call(api.getAllTasksApi, token)
        yield put({ type: types.GET_ALL_TASKS_SUCCESS, tasks })
    } catch (error) {
        yield put({ type: types.GET_ALL_TASKS_ERROR, message: error });
    }
}

export function* addNewTask(actionName: any): any {
    try {
        const token = yield select(getToken)
        const { name } = actionName
        const newTask = yield call(api.addNewTaskApi, name, token)
        yield put({ type: types.ADD_NEW_TASK_SUCCESS, newTask })
    } catch (error) {
        yield put({ type: types.ADD_NEW_TASK_ERROR, message: error });
    }
}

export function* toggleTaskStatus(actionDone: any): any {
    try {
        const token = yield select(getToken)
        const { id, done } = actionDone
        const toggledTask = yield call(api.toggleTaskStatus, id, done, token)
        yield put({ type: types.TOGGLE_TASK_STATUS_SUCCESS, toggledTask })
    } catch (error) {
        yield put({ type: types.TOGGLE_TASK_STATUS_ERROR, message: error })
    }
}

export function* editTaskName(actionEditName: any): any {
    try {
        const token = yield select(getToken)
        const { id, name } = actionEditName
        const editedTaskName = yield call(api.editTaskName, id, name, token)
        yield put({ type: types.EDIT_TASK_NAME_SUCCESS, editedTaskName })
    } catch (error) {
        yield put({ type: types.EDIT_TASK_NAME_ERROR, message: error })
    }
}


export function* deleteTask(actionId: any): any {
    try {
        const token = yield select(getToken)
        const  { id } = actionId
        const deletedTaskId = yield call(api.deleteTask, id, token)
        yield put({ type: types.DELETE_TASK_SUCCESS, deletedTaskId })
    } catch (error) {
        yield put({ type: types.DELETE_TASK_ERROR, message: error });
    }
}