export function firstNameHasChanged(firstName) {
    return {
        type: 'FIRST_NAME_VALUE',
        firstName
    };
}

export function updateFirstName(firstName) {
    return (dispatch) => {
        dispatch(firstNameHasChanged(firstName));
    };
}