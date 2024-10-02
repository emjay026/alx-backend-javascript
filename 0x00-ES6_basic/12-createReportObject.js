export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList, // Use the spread syntax to include all department data
    },
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length; // Count the number of keys in allEmployees
    },
  };
}
