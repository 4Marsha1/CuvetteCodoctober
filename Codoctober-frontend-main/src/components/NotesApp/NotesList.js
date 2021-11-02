import Note from './Note';
import AddNote from './AddNote';
import styles from './Notes/Notes.module.css'

const NotesList = ({
    notes,
    handleAddNote,
}) => {
    return (
        <div className={styles['notes-list']}>
            {notes.map((note) => (
                <Note
                    id={note.id}
                    text={note.text}
                    date={note.date}
                />
            ))}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    );
};

export default NotesList;
