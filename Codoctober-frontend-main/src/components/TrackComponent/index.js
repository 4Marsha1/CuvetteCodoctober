import React from 'react'
import styles from './Track.module.css'

const Index = ({ track }) => {
    return (
        <div className={styles['track']}>
            <img src={track.photo} />
            <div className={styles['details']}>
                <span className={styles['title']}>{track.title}</span>
                <span className={styles['domain']}>{track.domain}</span>
                <div className={styles['hr']}></div>
                <span className={styles['content']}>{track.content}</span>
            </div>
        </div>
    )
}

export default Index
