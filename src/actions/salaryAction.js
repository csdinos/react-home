export const salaryHasChanged = (salary) => {
    return {
        type: 'SALARY_VALUE',
        salary
    };
}