import { ACTION_TYPE_FULL_NAME_VALUE } from '../constants';

export const fullName = (state = '', action) => {
    switch (action.type) {
        case ACTION_TYPE_FULL_NAME_VALUE:
            return action.fullName;
        default:
            return state;
    }
}