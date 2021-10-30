import { SET_LOGIN_STATE } from '../action/actionTypes'

const initialState = {
    name: '',
    isLoggedIn: false,
}

export const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_STATE:
            return { ...state, isLoggedIn: true, ...action.payload }

        default:
            return state
    }
}
