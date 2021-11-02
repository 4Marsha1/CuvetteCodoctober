import React from 'react';
import styles from './Home.module.css';
import { Link } from "react-router-dom";
import { URL_PREFIX } from '../../constant';
import MemberOne from '../../uploads/1.jpg'
import MemberTwo from '../../uploads/2.jpg'
import MemberThree from '../../uploads/3.jpg'
import MemberFour from '../../uploads/4.jpg'
import MemberFive from '../../uploads/5.jpg'
import Footer from '../Footer';

const Index = () => {
    return (
        <div className={styles["parent-container"]}>
            <div className={styles["jumbo"]}>
                <div className={styles["head-1"]}>
                    <div className={styles['hr']}></div>
                    <span className={styles["head-1-span"]}>
                        WELCOME TO
                    </span>
                    <div className={styles['hr']}></div>
                </div>
                <div className={styles["head-2"]}>
                    <span className={styles['head-2-span']}>
                        CUVETTE CODOCTOBER HACAKTHON!
                    </span>
                </div>
                <div className={styles["title"]}>
                    <span className={styles['title-span']}>
                        This is Team HackOverflowIt. We build this app using MERN Stack. Hope you enjoy using it. There are still some bugs and we are working on it!
                    </span>
                </div>
                <div className={styles["btn-section"]}>
                    <Link to={URL_PREFIX + '/login'} style={{ textDecoration: 'none' }} >
                        <div className={styles["btn"]}>
                            SignUp
                        </div>
                    </Link>
                </div>
            </div>

            <div className={styles["section-1"]}>
                <div className={styles["tagline"]}>
                    <span className={styles["tagline-span"]}>
                        Discover & enjoy <strong>our amazing features!</strong>
                    </span>
                </div>
                <div className={styles["content"]}>
                    <span className={styles["content-span"]}>
                        This App provides a lot of features. Some Notable ones are mentioned below. Do have a read!
                    </span>
                </div>
                <div className={styles["boxes"]}>
                    <div className={styles["box"]}>
                        <div className={styles["icon"]}>
                            <img src="https://img.icons8.com/ios-filled/50/000000/document-1.png" />
                        </div>
                        <div className={styles["mats"]}>
                            <span className={styles["mats-title"]}>
                                Learning Path & Tracks
                            </span>
                            <span className={styles["mats-content"]}>
                                A learning path is a digital mind-map of the complete preparation journey. The
                                path can be designed in the form of a tree structure, or a step-by-step ladder
                                or a network of interconnected topics.
                            </span>
                        </div>
                    </div>
                    <div className={styles["box"]}>
                        <div className={styles["icon"]}>
                            <img src="https://img.icons8.com/ios-filled/50/000000/notepad.png" />
                        </div>
                        <div className={styles["mats"]}>
                            <span className={styles["mats-title"]}>
                                Digital Notepad
                            </span>
                            <span className={styles["mats-content"]}>
                                For every resource, a user can have a digital notebook to write notes.
                                The notes will be saved and can be reffered later for better educational
                                purposes.
                            </span>
                        </div>
                    </div>
                    <div className={styles["box"]}>
                        <div className={styles["icon"]}>
                            <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-feed-devices-flatart-icons-outline-flatarticons.png" />
                        </div>
                        <div className={styles["mats"]}>
                            <span className={styles["mats-title"]}>
                                Activity Feed
                            </span>
                            <span className={styles["mats-content"]}>
                                Users can create multiple learning paths in their account. All These
                                paths and tracks will be visible in the activity feed section. Users
                                can filter and search for convinience.
                            </span>
                        </div>
                    </div>
                    <div className={styles["box"]}>
                        <div className={styles["icon"]}>
                            <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-search-ecommerce-kiranshastry-solid-kiranshastry.png" />
                        </div>
                        <div className={styles["mats"]}>
                            <span className={styles["mats-title"]}>
                                Keyword & Global Search
                            </span>
                            <span className={styles["mats-content"]}>
                                All elements of the platform, be it a learning path or a resource can have
                                tags/keywords to be added during creation. These tags will allow the users to
                                search for existing content on the platform
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles["section-1"]} ${styles["bg"]}`}>
                <div className={styles["tagline"]}>
                    <span className={styles["tagline-span"]}>
                        Our <strong>future Endeavors!</strong>
                    </span>
                </div>
                <div className={styles["boxes"]}>
                    <div className={styles["box"]}>
                        <div className={styles["icon"]}>
                            <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-group-advertising-kiranshastry-solid-kiranshastry.png" />
                        </div>
                        <div className={styles["mats"]}>
                            <span className={styles["mats-title"]}>
                                Study Buddy & Friends
                            </span>
                            <span className={styles["mats-content"]}>
                                Users can showcase their current goals on their profile. Users can also
                                search for people with the same goal and connect with them. A connection
                                can be made by sending a friend request with a message and the other
                                person accepting it.
                            </span>
                        </div>
                    </div>
                    <div className={styles["box"]}>
                        <div className={styles["icon"]}>
                            <img src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-rating-reputation-bearicons-glyph-bearicons.png" />
                        </div>
                        <div className={styles["mats"]}>
                            <span className={styles["mats-title"]}>
                                Rate & Review Resources
                            </span>
                            <span className={styles["mats-content"]}>
                                Users can add a resource link (Link to a book on Amazon, or a course on
                                Udemy or a video on YouTube) and provide their review on the same.
                                After adding a resource, the user can provide ratings and review of that
                                resource.
                            </span>
                        </div>
                    </div>
                    <div className={styles["box"]}>
                        <div className={styles["icon"]}>
                            <img src="https://img.icons8.com/ios-filled/50/000000/planner.png" />
                        </div>
                        <div className={styles["mats"]}>
                            <span className={styles["mats-title"]}>
                                Event Calender
                            </span>
                            <span className={styles["mats-content"]}>
                                Users can create an event calendar of virtual/offline events related to their
                                interests.
                            </span>
                        </div>
                    </div>
                    <div className={styles["box"]}>
                        <div className={styles["icon"]}>
                            <img src="https://img.icons8.com/ios-filled/50/000000/comment-discussion.png" />
                        </div>
                        <div className={styles["mats"]}>
                            <span className={styles["mats-title"]}>
                                Discussion Forum
                            </span>
                            <span className={styles["mats-content"]}>
                                A place to discuss topics, get support on problems, ask for help and other
                                Q&A.
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles["section-1"]}>
                <div className={styles["tagline"]}>
                    <span className={styles["tagline-span"]}>
                        Our <strong>Team!</strong>
                    </span>
                </div>
                <div className={styles["team-boxes"]}>
                    <div className={styles["team-mem"]}>
                        <img src={MemberOne} />
                        <span className={styles["name"]}>Abhishek Bharadwaz</span>
                        <span className={styles["desg"]}>Front-End Dev</span>
                    </div>
                    <div className={styles["team-mem"]}>
                        <img src={MemberTwo} />
                        <span className={styles["name"]}>Aditya Agarwal</span>
                        <span className={styles["desg"]}>Back-End Dev</span>
                    </div>
                    <div className={styles["team-mem"]}>
                        <img src={MemberThree} />
                        <span className={styles["name"]}>Jitul Teron</span>
                        <span className={styles["desg"]}>Back-End Dev</span>
                    </div>
                    <div className={styles["team-mem"]}>
                        <img src={MemberFour} />
                        <span className={styles["name"]}>Sourabh Shah</span>
                        <span className={styles["desg"]}>Back-End Dev</span>
                    </div>
                    <div className={styles["team-mem"]}>
                        <img src={MemberFive} />
                        <span className={styles["name"]}>Shikhar Katiyar</span>
                        <span className={styles["desg"]}>Front-End Dev</span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Index
