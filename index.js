let employee = {
    name: "Wangare",
    streetAddress: "Kilimani",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    let employee0 = {...employee};
    employee0[key] = value;
    return employee0;
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
};
function deleteFromEmployeeByKey(employee, key) {
    let employee1 = {...employee};
    delete employee1[key];
    return employee1;
}