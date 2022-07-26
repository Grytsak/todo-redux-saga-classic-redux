import { call, put } from 'redux-saga/effects'
import * as types from '../actions'
import * as api from './authApi'

export function* loginUser(payload: any): any {
    try {
        console.log('payload:', payload)
        const user = yield call(api.login, payload)
        yield put({ type: types.LOGIN_USER_SUCCESS, user })
    } catch (error) {
        yield put({ type: types.LOGIN_USER_ERROR, message: error });
    }
}

export function* registerUser(payload: any): any {
    try {
        const user = yield call(api.register, payload)
        yield put({ type: types.REGISTER_USER_SUCCESS, user })
    } catch (error) {
        yield put({ type: types.REGISTER_USER_ERROR, message: error });
    }
}