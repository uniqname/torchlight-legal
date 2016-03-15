import { LOGIN_SUBMIT } from '../constants';
import { LOGGEDIN } from '../constants';

import { LOGIN } from '../endpoints';

import loginSubmit from './login-sumbit';
import loggedIn from './logged-in';

export default const login = (dispatch) =>
    ({user, password}) =>
        dispatch(loginSubmit({type: LOGIN_SUBMIT}));
        fetch(LOGIN, {
            method: 'post',
            body: JSON.stringify({user, password})
        })
        .then(resp => resp.json() )
        .then(data => dispatch( loggedIn(data) ))
        .catch(err => dispatch( loginFail(err) ));

});
