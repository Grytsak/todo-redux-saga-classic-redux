import * as types from './index'

export const loginUserAction = (user: any) => ({
    type: types.LOGIN_USER,
    user
})

export const registerUserAction = (user: any) => ({
    type: types.REGISTER_USER,
    user
})

export const resetUserAction = () => ({
    type: types.USER_RESET
})

export const logOutAction = () => ({
    type: types.USER_LOGOUT
})