import { takeEvery, takeLatest } from 'redux-saga/effects'
import { 
    getAllTasks,
    addNewTask,
    toggleTaskStatus,
    editTaskName,
    deleteTask
} from './tasks'

import * as types from '../actions'


export default function* watchTasks() {
  yield takeEvery(types.GET_ALL_TASKS, getAllTasks)
  yield takeLatest(types.ADD_NEW_TASK, addNewTask)
  yield takeLatest(types.TOGGLE_TASK_STATUS, toggleTaskStatus)
  yield takeLatest(types.EDIT_TASK_NAME, editTaskName)
  yield takeLatest(types.DELETE_TASK, deleteTask)
}