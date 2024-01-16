// Write your solution in this file!
const employee = {
name: "Brento",
};
const address = {
    streetAddress: "359 Nostrand",
city: "Brooklyn",
state: "New York",
zipCode:"11216",
}; 
//TEST 2
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = {
      ...employee,
      [key]: value,
    };
  return updatedEmployee;
}
// TEST 3
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
  
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    const clonedEmployee = { ...employee };
  
    delete clonedEmployee[key];
  
    return clonedEmployee;
  }
  // TEST 4
  function destructivelyDeleteFromEmployeeByKey(employee, key) {

    delete employee[key];

    return employee;
  }