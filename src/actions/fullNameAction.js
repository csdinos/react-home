import { ACTION_TYPE_FULL_NAME_VALUE } from '../constants';

export const fullNameHasChanged = (fullName) => {
    return {
        type: ACTION_TYPE_FULL_NAME_VALUE,
        fullName
    };
}