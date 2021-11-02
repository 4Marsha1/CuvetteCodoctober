import { useState, useEffect } from 'react';
import { connect } from "react-redux"
import NotesList from '../NotesList';
import Search from '../Search';
import Header from '../Header';
import styles from './Notes.module.css';
import Footer from '../../Footer';


const Notes = ({ notes, addNote }) => {

    const [searchText, setSearchText] = useState('');

    // const deleteNote = (id) => {
    //     // const newNotes = notes.filter((note) => note.id !== id);
    //     // setNotes(newNotes);
    // };
    return (
        <div className={styles["parent"]}>
            <div className={styles['container']}>
                <Header />
                <Search handleSearchNote={setSearchText} />
                <NotesList
                    notes={notes.listOfNotes.filter((note) =>
                        note.text.toLowerCase().includes(searchText)
                    )}
                    handleAddNote={addNote}
                />
            </div>
            <Footer />
        </div>
    );
};

const mapStateToProps = (state) => ({
    notes: state.notesReducer
})

export default connect(mapStateToProps)(Notes);
