import { ACTION_TYPE_EMAIL_VALUE } from '../constants';

export const email = (state = '', action) => {
    switch (action.type) {
        case ACTION_TYPE_EMAIL_VALUE:
            return action.email;
        default:
            return state;
    }
}