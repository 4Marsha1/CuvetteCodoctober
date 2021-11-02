import React from 'react';
import { MdSearch } from 'react-icons/md';
import styles from './Notes/Notes.module.css'

const Search = ({ handleSearchNote }) => {
    return (
        <div className={styles['search']}>
            <MdSearch className={styles['search-icons']} size='1.3em' />
            <input
                onChange={(event) =>
                    handleSearchNote(event.target.value)
                }
                type='text'
                placeholder='type to search...'
            />
        </div>
    );
};

export default Search;
