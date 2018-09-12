import { ACTION_TYPE_SALARY_VALUE } from '../constants';

export const salary = (state = '', action) => {
    switch (action.type) {
        case ACTION_TYPE_SALARY_VALUE:
            return action.salary;
        default:
            return state;
    }
}