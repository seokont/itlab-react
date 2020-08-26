import {setTwkkToken} from "../Api/api";

const AUTH_STATUS = "AUTH_STATUS";
const AUTH_TOKEN = "AUTH_TOKEN";
const LOGOUT_TOKEN = "LOGOUT_TOKEN";

let initialState = {
    auth:
        {username: 'admin', password: 'admin'},
    authToken: '',
    status:null

}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case AUTH_TOKEN:
            return {
                ...state,
                authToken: action.currentToken
            }
        case LOGOUT_TOKEN:
            return {
                ...state,
                authToken: action.token
            }
        case AUTH_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state


    }

}


export const addTokenSiteAuth = (currentToken) => ({type: AUTH_TOKEN, currentToken});
export const addStatus = (status) => ({type: AUTH_STATUS, status});
export const addTokenLogout = (token) => ({type: LOGOUT_TOKEN, token});


export const addForReducerThunk = (username, password) => (dispatch) => {
    setTwkkToken(username, password).then((response) => {

        if (response.status === 201 && username === initialState.auth.username && password === initialState.auth.password) {

                let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJhZG1pbiJ9.bz5EQvLqYj3RhKktsvcnE_9Nk19EOhUUW9c9EyIAGmk";
                localStorage.setItem('token', token);
                let a = localStorage.getItem('token');
                dispatch(addTokenSiteAuth(a));
                dispatch(addStatus(response.status));

        } dispatch(addStatus(1))

    })
}


export default authReducer;


