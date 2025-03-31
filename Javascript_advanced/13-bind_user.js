// Define the user object with the required attributes
const user = {
  hobby: "Calligraphy",
  favoriteSport: "Hockey",
  astrologicalSign: "Aries",
  firstName: "Guillaume",
  lastName: "Johns",
  location: "Netherlands",
  occupation: "Engineer"
};

// Define the logWelcomeUser function
function logWelcomeUser(welcomeString) {
  console.log(`${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`);
}

// Bind the user object to logWelcomeUser
const bindLogWelcomeUser = logWelcomeUser.bind(user);

// Call the bound function with "Hello"
bindLogWelcomeUser("Hello");
