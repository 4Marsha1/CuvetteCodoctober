import React from 'react';
import TracksComponent from '../components/Tracks';

import { connect } from 'react-redux';
import { getTracks } from '../redux/actions/feed';

class Feed extends React.Component {
    componentDidMount() {
        this.props.dispatch(getTracks(this.props.token))
    }

    render() {
        return (
            <div style={{
                backgroundColor: '#F5CAC4', minHeight: '100vh'
            }
            }>
                <TracksComponent Tracks={this.props.tracks} />
            </div >);
    }
}

const mapStateToProps = state => ({
    token: state.authReducer.token,
    tracks: state.feedReducer.listOfTracks
});

export default connect(mapStateToProps)(Feed);
