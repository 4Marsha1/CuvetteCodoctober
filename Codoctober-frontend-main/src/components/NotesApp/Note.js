import { MdDeleteForever } from 'react-icons/md';
import styles from './Notes/Notes.module.css'

const Note = ({ id, text, date, handleDeleteNote }) => {
    return (
        <div className={styles['note']}>
            <span>{text}</span>
            <div className={styles['note-footer']}>
                <small>{date}</small>
                <MdDeleteForever
                    onClick={() => handleDeleteNote(id)}
                    className={styles['delete-icon']}
                    size='1.3em'
                />
            </div>
        </div>
    );
};

export default Note;
