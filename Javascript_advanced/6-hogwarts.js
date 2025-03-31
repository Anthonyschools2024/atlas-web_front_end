function studentHogwarts() {
  // Private variables
  let privateScore = 0;
  let name = null;

  // Private method to change the score
  function changeScoreBy(points) {
    privateScore += points;
  }

  // Return an object containing public methods
  return {
    // Sets the private variable name
    setName: function(newName) {
      name = newName;
    },
    // Increases the score by 1 using the private method
    rewardStudent: function() {
      changeScoreBy(1);
    },
    // Decreases the score by 1 using the private method
    penalizeStudent: function() {
      changeScoreBy(-1);
    },
    // Returns a string with the name and score in the format "Name: score"
    getScore: function() {
      return name + ": " + privateScore;
    }
  };
}

// Create an instance for Harry
const harry = studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore()); // Expected output: "Harry: 4"

// Create an instance for Draco
const draco = studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore()); // Expected output: "Draco: -2"
