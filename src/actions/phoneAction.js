import { ACTION_TYPE_PHONE_VALUE } from '../constants';


export const phoneHasChanged = (phone) => {
    return {
        type: ACTION_TYPE_PHONE_VALUE,
        phone
    };
}