import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { URL_PREFIX } from './constant';
import Home from './containers/Home';
import Login from './containers/Login';
import Notes from './containers/Notes';
import Feed from './containers/Feed';
import store from './redux/store';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route
                        exact
                        path={URL_PREFIX + '/login'}
                        component={Login}
                        key='route-login-screen'
                    />
                    <Route
                        exact
                        path={URL_PREFIX + '/signup'}
                        component={Login}
                        key='route-signup-screen'
                    />
                    <Route
                        exact
                        path={URL_PREFIX + '/home'}
                        component={Home}
                        key='route-home-screen'
                    />
                    <Route
                        exact
                        path={URL_PREFIX + '/user/notes'}
                        component={Notes}
                        key='route-notes-screen'
                    />
                    <Route
                        exact
                        path={URL_PREFIX + '/feed'}
                        component={Feed}
                        key='route-feed-screen'
                    />
                    <Redirect to={URL_PREFIX + '/home'} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
