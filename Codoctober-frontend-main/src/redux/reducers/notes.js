import {
    CREATE_NOTES_INITIATED, CREATE_NOTES_FAILED, CREATE_NOTES_SUCCESS, GET_NOTES_FAILED,
    GET_NOTES_INITIATED, GET_NOTES_SUCCESS
} from "../actions/types";

const initialState = {
    id: null,
    text: "",
    date: null,
    listOfNotes: [],
    isCreateNoteInitiated: false,
    isCreateNoteSuccessful: false,
    isGetNoteInitiated: false,
    isGetNoteSuccessful: false,
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
        case CREATE_NOTES_INITIATED:
            return {
                ...state,
                isCreateNoteInitiated: true,
            };
        case CREATE_NOTES_SUCCESS:
            return {
                ...state,
                isCreateNoteSuccessful: true,
                id: action.payload.id,
                text: action.payload.text,
                date: action.payload.date,
                isCreateNoteInitiated: false,
            };
        case CREATE_NOTES_FAILED:
            handleError(action.payload);
            return {
                ...state,
                isCreateNoteInitiated: false,
            };
        case GET_NOTES_INITIATED:
            return {
                ...state,
                isGetNoteInitiated: true
            };
        case GET_NOTES_SUCCESS:
            return {
                ...state,
                listOfNotes: action.payload,
                isGetNoteSuccessful: true,
                isGetNoteInitiated: false
            };
        case GET_NOTES_FAILED:
            handleError(action.payload);
            return {
                ...state,
                isGetNoteSuccessful: false,
                isGetNoteInitiated: false,

            };
        default:
            return state;
    }
}
