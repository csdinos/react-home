export const salary = (state = '', action) => {
    switch (action.type) {
        case 'SALARY_VALUE':
            return action.salary;

        default:
            return state;
    }
}