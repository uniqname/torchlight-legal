import { LOGIN_FAIL } from '../constants';

export default const loginFail = (err) => ({
    type: LOGIN_FAIL,
    err
});
