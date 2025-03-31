function createClassRoom(numbersOfStudents) {
  // This function returns a function that returns the seat number
  function studentSeat(seat) {
    return function() {
      return seat;
    };
  }

  // Array to hold the student seat functions
  let students = [];

  // Loop from 0 to numbersOfStudents - 1
  for (let i = 0; i < numbersOfStudents; i++) {
    // Push a function into the array that returns (i + 1)
    students.push(studentSeat(i + 1));
  }

  return students;
}

// Create the classRoom closure with 10 students
const classRoom = createClassRoom(10);
