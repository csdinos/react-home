import { combineReducers } from 'redux';
import { fullName } from './fullName';
import { email } from './email';
import { phone } from './phone';
import { salary } from './salary';

export default combineReducers({
    fullName,
    email,
    phone,
    salary,
});
