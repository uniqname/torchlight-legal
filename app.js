import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import App from './components/app';
import Login from './components/login';
import Register from './components/register';
// import Profile from './components/profile';

const profileData = {
    action: 'https://torchlight.legal.io/users/<id>',
    method: 'post',
    logInAction: () => {},
    logInText: 'Login'
};

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Login} />
            <Route path="login" component={Login} />
            <Route path="register" component={Register} />
        </Route>
    </Router>,
    document.querySelector('#content')
);
