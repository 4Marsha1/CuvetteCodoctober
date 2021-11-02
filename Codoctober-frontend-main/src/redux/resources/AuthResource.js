import axios from 'axios';
class AuthResource {
    constructor() {
        if (process.env.NODE_ENV === 'production') {
            this.host = '...';
        } else {
            this.host = 'http://localhost:8080';
        }
        this.mock = (process.env.NODE_ENV !== 'production');
    }

    loginUser(email, password) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const data = {
            'email': email,
            'password': password
        };

        return axios
            .post(this.host + '...', data, config);
    }

    signupUser(name, email, password, profilePic, domain) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const data = {
            'name': name,
            'email': email,
            'password': password,
            'profilePic': profilePic,
            'domain': domain
        };

        return axios.post(this.host + '...', data, config);
    }

    logoutUser(token) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        };

        return axios.post(this.host + '...', {}, config);
    }
}

export default AuthResource;
