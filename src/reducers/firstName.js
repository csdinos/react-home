export function firstName(state = '', action) {
    switch (action.type) {
        case 'FIRST_NAME_VALUE':
            return action.firstName;

        default:
            return state;
    }
}