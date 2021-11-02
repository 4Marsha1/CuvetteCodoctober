import { combineReducers } from "redux";
import auth from "./auth";
import notes from './notes';
import feed from './feed';

export default combineReducers({
    authReducer: auth,
    notesReducer: notes,
    feedReducer: feed,
});
