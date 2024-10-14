interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

// Create an array named studentsList containing the two students
const studentsList: Student[] = [student1, student2];

// Render table function
function renderTable() {
    const tableBody = document.querySelector('#studentsTable tbody');

    if (tableBody) {
        studentsList.forEach(student => {
            const row = document.createElement('tr');
            const firstNameCell = document.createElement('td');
            const locationCell = document.createElement('td');

            firstNameCell.textContent = student.firstName;
            locationCell.textContent = student.location;

            row.appendChild(firstNameCell);
            row.appendChild(locationCell);
            tableBody.appendChild(row);
        });
    }
}

// Call the renderTable function after the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderTable();
});
