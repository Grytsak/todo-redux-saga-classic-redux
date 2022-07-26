import { takeLatest } from 'redux-saga/effects'
import { registerUser, loginUser } from './auth'

import * as types from '../actions';


export default function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerUser);
  yield takeLatest(types.LOGIN_USER, loginUser);
}