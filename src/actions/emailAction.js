import { ACTION_TYPE_EMAIL_VALUE } from '../constants';

export const emailHasChanged = (email) => {
    return {
        type: ACTION_TYPE_EMAIL_VALUE,
        email
    };
}