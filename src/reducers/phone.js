import { ACTION_TYPE_PHONE_VALUE } from '../constants';

export const phone = (state = '', action) => {
    switch (action.type) {
        case ACTION_TYPE_PHONE_VALUE:
            return action.phone;
        default:
            return state;
    }
}