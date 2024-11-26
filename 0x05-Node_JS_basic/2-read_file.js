const fs = require('fs');

function countStudents(path) {
  let data;

  // Try to read the database file synchronously
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  // Split file into lines and filter out empty lines
  const lines = data.split('\n').filter((line) => line.trim() !== '');

  // If there are no valid lines, exit
  if (lines.length <= 1) {
    console.log('Number of students: 0');
    return;
  }

  // Get the header line and extract fields
  const headers = lines[0].split(',');
  const fieldIdx = headers.indexOf('field');

  const studentCounts = {};
  const studentFields = {};

  // Initialize student counts per field
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].split(',');
    const firstName = line[0];
    const field = line[fieldIdx];

    // If field is valid, count students
    if (field) {
      if (!studentCounts[field]) {
        studentCounts[field] = 0;
        studentFields[field] = [];
      }
      studentCounts[field]++;
      studentFields[field].push(firstName);
    }
  }

  // Calculate total number of students
  const totalStudents = Object.values(studentCounts).reduce((acc, curr) => acc + curr, 0);

  // Log total number of students
  console.log(`Number of students: ${totalStudents}`);

  // Log number of students per field and list of first names
  for (const field in studentCounts) {
    console.log(`Number of students in ${field}: ${studentCounts[field]}. List: ${studentFields[field].join(', ')}`);
  }
}

module.exports = countStudents;
