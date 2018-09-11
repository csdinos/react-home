export const phone = (state = '', action) => {
    switch (action.type) {
        case 'PHONE_VALUE':
            return action.phone;

        default:
            return state;
    }
}