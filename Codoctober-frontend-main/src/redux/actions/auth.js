import AuthResource from '../resources/AuthResource';

import {
    AUTH_ERROR, LOGIN_INITIATED, LOGIN_SUCCESS, LOGIN_FAILED, USER_LOADED, USER_LOADING,
    LOGOUT_INITIATED, LOGOUT_FAILED, LOGOUT_SUCCESS, SIGNUP_INITIATED, SIGNUP_FAILED, SIGNUP_SUCCESS,
} from './types';

function getErrorMessage(err) {
    return err.response ? err.response.data.error : err.message ? err.message : "Unknown error";
}

function fetchLatestFCMToken(userToken) {
    console.log(`Calling android to fetch latest FCM token with userToken: ${userToken}`)

    if (typeof window.Android !== "undefined" && typeof window.Android.onLoginSuccess === "function") {
        try {
            window.Android.onLoginSuccess(userToken);
        } catch (err) {
            console.log('Some error while calling loginSuccess on android');
            console.log(err);
        }
    }
}

function internalLoadUser(dispatch, token, isRetriable) {
    new AuthResource().loadUser(token)
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
            fetchLatestFCMToken(token);
        })
        .catch(err => {
            dispatch({
                type: AUTH_ERROR,
                payload: {
                    error_msg: err.response && err.response.status === 401
                        ? "You have been logged out. Please login again!"
                        : getErrorMessage(err),
                    should_show_to_user: isRetriable ? false : true,
                    is_retriable: isRetriable || !(err.response),
                }
            });
            console.log(err.response);
        });
}

function internalLoginUser(dispatch, email, password) {
    new AuthResource().loginUser(email, password)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
            fetchLatestFCMToken(res.data.token);
        })
        .catch(err => {
            dispatch({
                type: LOGIN_FAILED,
                payload: {
                    error_msg: getErrorMessage(err),
                    should_show_to_user: true
                }
            });
            console.log(err.response);
        });
}

function internalSignupUser(dispatch, email, password) {
    new AuthResource().signupUser(email, password)
        .then(res => {
            dispatch({
                type: SIGNUP_SUCCESS,
                payload: res.data
            });
            fetchLatestFCMToken(res.data.token);
        })
        .catch(err => {
            dispatch({
                type: SIGNUP_FAILED,
                payload: {
                    error_msg: getErrorMessage(err),
                    should_show_to_user: true
                }
            });
            console.log(err.response);
        });
}

function internalLogoutUser(dispatch, token) {
    new AuthResource().logoutUser(token)
        .then(() => {
            dispatch({
                type: LOGOUT_SUCCESS
            });
        })
        .catch(err => {
            dispatch({
                type: LOGOUT_FAILED,
                payload: {
                    error_msg: getErrorMessage(err),
                    should_show_to_user: true
                }
            });
            console.log(err.response);
        });
}

export const loadUser = (isRetriable = false) => (dispatch, getState) => {
    dispatch({
        type: USER_LOADING
    });

    const token = getState().authReducer.token;

    if (token) {
        internalLoadUser(dispatch, token, isRetriable);
    } else {
        dispatch({
            type: AUTH_ERROR,
            payload: {
                error_msg: "Token doesn't exist",
                should_show_to_user: false
            },
        });
    }
};

export const loginUser = (email, password) => (dispatch) => {
    dispatch({
        type: LOGIN_INITIATED
    });

    internalLoginUser(dispatch, email, password);
};

export const signupUser = (email, password1, password2) => (dispatch) => {
    dispatch({
        type: SIGNUP_INITIATED
    });

    if (password1 === password2) {
        internalSignupUser(dispatch, email, password1);
    } else {
        dispatch({
            type: SIGNUP_FAILED,
            payload: {
                error_msg: "Both passwords didn't match. They should have same value.",
                should_show_to_user: true
            },
        });
    }
};

export const logoutUser = (token) => (dispatch) => {
    dispatch({
        type: LOGOUT_INITIATED
    });

    internalLogoutUser(dispatch, token);
};