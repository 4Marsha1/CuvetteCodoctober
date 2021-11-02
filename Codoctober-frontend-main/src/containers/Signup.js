import { Component } from 'react';
import { connect } from 'react-redux';

import store from '../redux/store';
import { signupUser } from '../redux/actions/auth';
import LoginComponent from '../components/LoginPage'

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGettingSubmitted: false,
            profilePic: "",
            name: "",
            email: "",
            password: "",
            password2: "",
            domain: "",
            terms: false
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        store.dispatch(signupUser(this.state.email, this.state.password, this.state.password2));
    };

    componentDidUpdate() {
        if (this.props.auth.isSignUpSuccessful) {
            this.props.history.replace('....Dashboard Redirect');
        }
    }

    render() {
        const { signupInitiated } = this.props.auth;
        return (
            <LoginComponent
                name={this.state.name}
                email={this.state.email}
                domain={this.state.domain}
                password1={this.state.password}
                password2={this.state.password2}
                terms={this.state.terms}
                isGettingSubmitted={signupInitiated}
                handleChange={this.handleChange}
                handleFormSubmit={this.handleFormSubmit}
            />
        );
    }
}

const mapStateToProps = state => ({
    auth: state.authReducer
});

export default connect(mapStateToProps)(Signup);
