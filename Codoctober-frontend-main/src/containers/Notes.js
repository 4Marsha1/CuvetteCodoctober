import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import NotesComponent from '../components/NotesApp/Notes';

import { connect } from 'react-redux';
import { getNotes, createNotes } from '../redux/actions/notes';

class Notes extends Component {

    componentDidMount() {
        this.props.dispatch(getNotes(this.props.token))
    }

    addNote = (text) => {
        const date = new Date();
        this.props.dispatch(createNotes(10, text, date.toLocaleDateString()))
    };

    render() {
        console.log(this.props.notes.listOfNotes);
        return (
            <div>
                <NotesComponent notes={this.props.list} addNote={this.addNote} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    token: state.authReducer.token,
    notes: state.notesReducer,
    list: state.notesReducer.listOfNotes
});

export default connect(mapStateToProps)(Notes);