export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = []; // Create an array to hold employee names

  // Use the iterator to get all employee names
  for (const employee of reportWithIterator) {
    employeeNames.push(employee); // Add each employee name to the array
  }

  // Join the employee names with ' | ' and return
  return employeeNames.join(' | ');
}
