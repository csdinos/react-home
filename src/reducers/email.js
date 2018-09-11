export const email = (state = '', action) => {
    switch (action.type) {
        case 'EMAIL_VALUE':
            return action.email;

        default:
            return state;
    }
}