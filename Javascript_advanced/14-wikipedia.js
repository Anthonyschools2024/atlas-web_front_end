// Function to create a paragraph element with the provided data and append it to the document body
function createElement(data) {
  const paragraph = document.createElement("p");
  paragraph.textContent = data;
  document.body.appendChild(paragraph);
}

// Function to query Wikipedia for the "Stack Overflow" article
// and execute the provided callback with the article extract
function queryWikipedia(callback) {
  const xhr = new XMLHttpRequest();
  const url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";
  
  xhr.open("GET", url, true);
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Parse the JSON response
      const response = JSON.parse(xhr.responseText);
      const pages = response.query.pages;
      
      // Extract the first (and only) page's extract text
      let extract = "";
      for (let pageId in pages) {
        if (pages.hasOwnProperty(pageId)) {
          extract = pages[pageId].extract;
          break;
        }
      }
      
      // Call the callback function with the extract
      callback(extract);
    }
  };
  
  xhr.onerror = function() {
    console.error("Error occurred during the request.");
  };
  
  xhr.send();
}

// Call queryWikipedia using createElement as the callback function
queryWikipedia(createElement);
