function changeMode(size, weight, transform, background, color) {
  // Returns a closure that, when invoked, updates the page styles
  return function() {
    document.body.style.fontSize = size + "px";
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main() {
  // Create the three closures with specific styles
  const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  // Add a paragraph to the body
  const paragraph = document.createElement("p");
  paragraph.textContent = "Welcome Atlas!";
  document.body.appendChild(paragraph);

  // Add the Spooky button
  const spookyBtn = document.createElement("button");
  spookyBtn.textContent = "Spooky";
  spookyBtn.addEventListener("click", spooky);
  document.body.appendChild(spookyBtn);

  // Add the Dark mode button
  const darkBtn = document.createElement("button");
  darkBtn.textContent = "Dark mode";
  darkBtn.addEventListener("click", darkMode);
  document.body.appendChild(darkBtn);

  // Add the Scream mode button
  const screamBtn = document.createElement("button");
  screamBtn.textContent = "Scream mode";
  screamBtn.addEventListener("click", screamMode);
  document.body.appendChild(screamBtn);
}

// Call main to initialize
main();
