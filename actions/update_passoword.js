import { UPDATE_PASSWORD } from '../constants';

export default const updateName = (password='') => ({
    type: UPDATE_PASSWORD,
    password
});
