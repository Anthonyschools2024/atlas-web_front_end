function welcomeMessage(fullName) {
    return function() {
        alert("Welcome " + fullName);
    };
}

var guillaume = welcomeMessage("Guillaume");
var alex = welcomeMessage("Alex");
var fred = welcomeMessage("Fred");

// Testing in console:
// guillaume();  // Alerts: "Welcome Guillaume"
// alex();       // Alerts: "Welcome Alex"
// fred();       // Alerts: "Welcome Fred"
