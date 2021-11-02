import FeedResource from '../resources/FeedResource';

import {
    GET_TRACKS_FAILED,
    GET_TRACKS_INITIATED, GET_TRACKS_SUCCESS
} from './types';

function getErrorMessage(err) {
    return err.response ? err.response.data.error : err.message ? err.message : "Unknown error";
}

function internalGetTracks(dispatch, token) {
    new FeedResource().getTracks(token)
        .then((res) => {
            dispatch({
                type: GET_TRACKS_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: GET_TRACKS_FAILED,
                payload: {
                    error_msg: getErrorMessage(err),
                    should_show_to_user: true,
                },
            });
            console.log(err.response);
        });
}

export const getTracks = (token) => (dispatch) => {
    dispatch({
        type: GET_TRACKS_INITIATED,
    });
    internalGetTracks(dispatch, token);
};