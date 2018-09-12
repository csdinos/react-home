import { ACTION_TYPE_SALARY_VALUE } from '../constants';

export const salaryHasChanged = (salary) => {
    return {
        type: ACTION_TYPE_SALARY_VALUE,
        salary
    };
}