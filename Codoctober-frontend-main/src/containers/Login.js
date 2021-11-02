import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/auth'
import LoginComponent from '../components/LoginPage'
import { URL_PREFIX } from '../constant';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGettingSubmitted: false,
            email_login: props.auth.lastUsedEmail || "",
            password_login: "",
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.history.replace(URL_PREFIX + '/feed');
        // this.props.dispatch(loginUser(this.state.email_login, this.state.password_login));
    };

    componentDidUpdate() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.replace(URL_PREFIX + '/feed');
        }
    }

    render() {
        const { email_login, password_login } = this.state;
        const { loginInitiated } = this.props.auth;
        return (
            <LoginComponent
                email_login={email_login}
                password_login={password_login}
                isGettingSubmitted={loginInitiated}
                handleChange={this.handleChange}
                handleFormSubmit={this.handleFormSubmit}
            />
        );
    }
}


const mapStateToProps = state => ({
    auth: state.authReducer
});

export default connect(mapStateToProps)(Login);