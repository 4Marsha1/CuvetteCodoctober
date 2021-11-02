import {
    GET_TRACKS_FAILED,
    GET_TRACKS_INITIATED, GET_TRACKS_SUCCESS
} from "../actions/types";

const initialState = {
    listOfTracks: [
        {
            id: null,
            title: "",
            domain: "",
            content: "",
            photo: "",
        }
    ],
    isGetTracksInitiated: false,
    isGetTracksSuccessful: false,
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
        case GET_TRACKS_INITIATED:
            return {
                ...state,
                isGetTracksInitiated: true
            };
        case GET_TRACKS_SUCCESS:
            return {
                ...state,
                listOfTracks: action.payload,
                isGetTracksSuccessful: true,
                isGetTracksInitiated: false
            };
        case GET_TRACKS_FAILED:
            handleError(action.payload);
            return {
                ...state,
                isGetTracksSuccessful: false,
                isGetTracksInitiated: false,

            };
        default:
            return state;
    }
}
