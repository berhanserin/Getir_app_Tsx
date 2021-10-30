import { SET_LOGIN_STATE } from './actionTypes'

export const setLoginState = (data) => {
    return {
        type: SET_LOGIN_STATE,
        payload: data,
    }
}
