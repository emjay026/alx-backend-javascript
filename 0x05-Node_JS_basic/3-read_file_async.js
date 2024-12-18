const fs = require('fs').promises;

async function countStudents(path) {
  let data;

  // Try to read the database file asynchronously
  try {
    data = await fs.readFile(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  // Split the file into lines and filter out empty lines
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
  for (let i = 1; i < lines.length; i += 1) {
    const line = lines[i].split(',');
    const firstName = line[0];
    const field = line[fieldIdx];

    // If the field is valid, count students
    if (field) {
      if (!studentCounts[field]) {
        studentCounts[field] = 0;
        studentFields[field] = [];
      }
      studentCounts[field] += 1;
      studentFields[field].push(firstName);
    }
  }

  // Calculate total number of students
  const totalStudents = Object.values(studentCounts).reduce((acc, curr) => acc + curr, 0);

  // Log total number of students
  console.log(`Number of students: ${totalStudents}`);

  // Log number of students per field and list of first names
  for (const field in studentCounts) {
    if (Object.prototype.hasOwnProperty.call(studentCounts, field)) {
      console.log(`Number of students in ${field}: ${studentCounts[field]}. List: ${studentFields[field].join(', ')}`);
    }
  }
}

module.exports = countStudents; // Export the function for testing or reuse
