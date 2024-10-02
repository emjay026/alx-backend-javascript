export default function createIteratorObject(report) {
  const { allEmployees } = report; // Access the allEmployees object
  const employeesArray = []; // Create an array to hold all employees

  // Loop through each department and concatenate their employees into the employeesArray
  for (const department in allEmployees) {
    if (Object.hasOwnProperty.call(allEmployees, department)) {
      employeesArray.push(...allEmployees[department]); // Use spread to add employees
    }
  }

  // Create and return an iterator from the employeesArray
  return employeesArray[Symbol.iterator]();
}
