import axios from 'axios';
class NotesResource {
    constructor() {
        if (process.env.NODE_ENV === 'production') {
            this.host = '...';
        } else {
            this.host = 'http://localhost:8080';
        }
        this.mock = (process.env.NODE_ENV !== 'production');
    }

    getNotes(token) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        };
        if (this.mock) {
            return new Promise((resolve, reject) => {
                resolve({
                    'data': [
                        {
                            'id': 1,
                            'text': 'some note',
                            'date': '24/07/2021'
                        },
                        {
                            'id': 2,
                            'text': 'some note2',
                            'date': '24/07/2021'
                        },
                        {
                            'id': 3,
                            'text': 'some note3',
                            'date': '24/07/2021'
                        }
                    ]
                });
            });
        }
        return axios.get(this.host + '...', config);
    }

    createNotes(id, text, date) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const data = {
            'id': id,
            'text': text,
            'date': date
        };

        if (this.mock) {
            return new Promise((resolve, reject) => {
                resolve({
                    'data': [
                        {
                            'id': 1,
                            'text': 'some note',
                            'data': '24/07/2021'
                        },
                        {
                            'id': 2,
                            'text': 'some note2',
                            'data': '24/07/2021'
                        },
                        {
                            'id': 3,
                            'text': 'some note3',
                            'data': '24/07/2021'
                        },
                    ]
                });
            });
        }

        return axios.post(this.host + '...', data, config);
    }
}

export default NotesResource;
