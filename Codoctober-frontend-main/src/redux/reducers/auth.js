import {
    AUTH_ERROR, LOGIN_FAILED, LOGIN_INITIATED, LOGIN_SUCCESS, LOGOUT_FAILED,
    LOGOUT_INITIATED, LOGOUT_SUCCESS, SIGNUP_FAILED, SIGNUP_INITIATED, SIGNUP_SUCCESS,
    USER_LOADED
} from "../actions/types";

const initialState = {
    token: localStorage.getItem('token'),
    loginInitiated: false,
    signupInitiated: false,
    logoutInitiated: false,
    isAuthenticated: null,
    isSignUpSuccessful: null,
    lastUsedEmail: localStorage.getItem('lastUsedEmail'),
};

function handleError(error) {
    if (error) {
        if (error.should_show_to_user) {
            console.log("Error: Showing to user: " + error.error_msg);
            if (typeof window.Android != "undefined" && typeof window.Android.showToast === "function") {
                window.Android.showToast(error.error_msg);
            } else {
                window.alert(error.error_msg);
            }
        } else {
            console.log("Error: Not showing to user: " + error.error_msg);
        }
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case USER_LOADED:
            localStorage.setItem('lastUsedEmail', action.payload.email);
            return {
                ...state,
                isAuthenticated: true,
                lastUsedEmail: action.payload.email,
            };
        case AUTH_ERROR:
            if (action.payload) {
                localStorage.removeItem('token');
            }

            handleError(action.payload);
            return {
                ...state,
                isAuthenticated: false,
                token: state.token
            };
        case LOGIN_INITIATED:
            return {
                ...state,
                loginInitiated: true,
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('lastUsedEmail', action.payload.user.email);
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload.token,
                loginInitiated: false,
                lastUsedEmail: action.payload.user.email,
            };
        case LOGIN_FAILED:
            handleError(action.payload);
            return {
                ...state,
                loginInitiated: false,
            };
        case SIGNUP_INITIATED:
            return {
                ...state,
                signupInitiated: true,
            };
        case SIGNUP_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('lastUsedEmail', action.payload.user.email);
            return {
                ...state,
                isSignUpSuccessful: true,
                token: action.payload.token,
                signupInitiated: false,
                lastUsedEmail: action.payload.user.email,
            };
        case SIGNUP_FAILED:
            handleError(action.payload);
            return {
                ...state,
                isSignUpSuccessful: false,
                signupInitiated: false,
            };
        case LOGOUT_INITIATED:
            return {
                ...state,
                logoutInitiated: true,
            };
        case LOGOUT_FAILED:
            handleError(action.payload);
            return {
                ...state,
                logoutInitiated: false,
            };
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                logoutInitiated: false,
            };
        default:
            return state;
    }
}
