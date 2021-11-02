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

    getTracks(token) {
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
                            'title': 'Web dev',
                            'domain': 'engineering',
                            'content': 'This is a demo description',
                            'photo': 'https://picsum.photos/200'
                        },
                        {
                            'id': 2,
                            'title': 'ML',
                            'domain': 'machine learning',
                            'content': 'This is a demo description',
                            'photo': 'https://picsum.photos/200'
                        },
                        {
                            'id': 3,
                            'title': 'AI',
                            'domain': 'High-tech',
                            'content': 'This is a demo description',
                            'photo': 'https://picsum.photos/200'
                        },
                        {
                            'id': 4,
                            'title': 'DSA',
                            'domain': 'Coding',
                            'content': 'This is a demo description',
                            'photo': 'https://picsum.photos/200'
                        },
                    ]
                });
            });
        }
        return axios.get(this.host + '...', config);
    }
}

export default NotesResource;
