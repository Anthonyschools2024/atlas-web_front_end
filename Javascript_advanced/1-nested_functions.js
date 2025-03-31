let globalVariable = "Welcome";

function outer() {
  // Alert the global variable ("Welcome")
  alert(globalVariable);

  // Define a local variable within outer
  let course = "Holberton";

  function inner() {
    // Alert concatenation of globalVariable and course ("Welcome Holberton")
    alert(globalVariable + " " + course);

    // Define a local variable within inner
    let exclamation = "!";

    function inception() {
      // Alert concatenation of globalVariable, course, and exclamation ("Welcome Holberton!")
      alert(globalVariable + " " + course + exclamation);
    }

    // Call inception within inner
    inception();
  }

  // Call inner within outer
  inner();
}

// Call outer in the main code (outside any function)
outer();
