import {
    
    
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    LOGOUT,
} from '../Actions/types';

const initialState = {
    // store the token
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }
       
       case LOGIN_SUCCESS:
            localStorage.setItem("token", payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                user: JSON.parse(atob(payload.token.split('.')[1])),
                loading: false
            };
        
        case AUTH_ERROR:
        case LOGIN_FAILED:
        case LOGOUT:
            localStorage.removeItem("token");
            localStorage.removeItem('cart');
            localStorage.removeItem('total');
            localStorage.removeItem('BUYER_EMAIL');
            localStorage.removeItem('Role');
            localStorage.removeItem('CartQuantity');
            localStorage.removeItem('orderNo');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            };
        default:
            return state;
    }
}