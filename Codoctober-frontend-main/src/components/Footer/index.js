import React from 'react';
import { Link } from "react-router-dom";
import { URL_PREFIX } from '../../constant';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles["footer"]}>
            <div className={styles["line-1"]}>
                <Link to={URL_PREFIX + '/home'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                <Link to={URL_PREFIX + '/login'} style={{ textDecoration: 'none', color: 'white' }}>SignUp</Link>
                <Link to={URL_PREFIX + '/home'} style={{ textDecoration: 'none', color: 'white' }}>Dashboard</Link>
                <Link to={URL_PREFIX + '/user/notes'} style={{ textDecoration: 'none', color: 'white' }}>Notes</Link>
                <Link to={URL_PREFIX + '/feed'} style={{ textDecoration: 'none', color: 'white' }}>Feed</Link>
            </div>
            <div className={styles["line-2"]}>
                <span>Copyright &copy; Abhishek Bharadwaz and Co. | Terms & Conditions | Privacy Policy | All Rights Reserved</span>
            </div>
        </div>
    )
}

export default Footer
