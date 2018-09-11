import { combineReducers } from 'redux';
import { firstName } from './firstName';
import { email } from './email';
import { phone } from './phone';
import { salary } from './salary';

export default combineReducers({
    firstName,
    email,
    phone,
    salary,
});
