// Function welcomeMessage accepts a fullName string and returns a closure.
// The returned function, when called, will alert "Welcome <fullName>".
function welcomeMessage(fullName) {
    return function() {
        alert("Welcome " + fullName);
    };
}

// Creating three variables that store the closures with specific names.
var guillaume = welcomeMessage("Guillaume");
var alex = welcomeMessage("Alex");
var fred = welcomeMessage("Fred");
