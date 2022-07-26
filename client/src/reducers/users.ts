import * as types from '../actions'

const user: any = JSON.parse(localStorage.getItem('user') || '{}')

const initialState = {
    user: user ? user : null,
    isSuccess: false,
    isError: false,
    message: ''
}

const users = (state = initialState, action: any) => {
    switch(action.type) {
        case types.REGISTER_USER_SUCCESS: 
            return { 
                ...state, 
                user: action.user, 
                isSuccess: true, 
                isError: false 
            }
        case types.REGISTER_USER_ERROR:
            return { 
                ...state, 
                isSuccess: false, 
                isError: true,
                message: action.message.message 
            }
        case types.LOGIN_USER_SUCCESS:
            return { 
                ...state, 
                user: action.user,
                isSuccess: true, 
                isError: false
            }
        case types.LOGIN_USER_ERROR:
            return { 
                ...state, 
                isSuccess: false, 
                isError: true,
                message: action.message.message 
            }
        case types.USER_RESET:
            return {
                ...state,
                user: user ? user : null,
                isSuccess: false,
                isError: false,
                message: ''
            }
        case types.USER_LOGOUT:
            return {
                ...state,
                user: null,
                isSuccess: false,
                isError: false,
                message: ''
            }
        default:
            return state
    }
}

export default users