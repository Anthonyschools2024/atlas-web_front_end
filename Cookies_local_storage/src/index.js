/**
 * Sets cookies for firstname and email based on input fields.
 */
function setCookies() {
    const firstnameInput = document.getElementById('firstname');
    const emailInput = document.getElementById('email');

    const firstnameValue = firstnameInput.value;
    const emailValue = emailInput.value;

    // Basic cookie setting (session cookies)
    // document.cookie = `firstname=${firstnameValue}`;
    // document.cookie = `email=${emailValue}`;

    // Setting cookies with an expiry date (e.g., 10 days) and path
    const expiresDate = new Date();
    expiresDate.setDate(expiresDate.getDate() + 10); // Expires in 10 days

    document.cookie = `firstname=${firstnameValue}; expires=${expiresDate.toUTCString()}; path=/`;
    document.cookie = `email=${emailValue}; expires=${expiresDate.toUTCString()}; path=/`;

    console.log("Cookies set!"); // Optional: confirmation in console
    alert("Cookies set!"); // Optional: confirmation for the user
}

/**
 * Displays the current cookies in a paragraph element on the page.
 */
function showCookies() {
    const cookieOutputDiv = document.getElementById('cookieOutput');

    // Create a new paragraph element for the cookies
    const p = document.createElement('p');

    // Get cookies - document.cookie returns a string like "name1=value1; name2=value2"
    const currentCookies = document.cookie;

    // Simple display of the raw cookie string
    // p.innerHTML = `Cookies: ${currentCookies}`;

    // A slightly more formatted way to display the specific cookies we set
    let firstName = "Not Set";
    let email = "Not Set";

    const cookiesArray = currentCookies.split('; ');
    cookiesArray.forEach(cookie => {
        const [name, value] = cookie.split('=');
        if (name === 'firstname') {
            firstName = value;
        } else if (name === 'email') {
            email = value;
        }
    });

    p.innerHTML = `Email: ${email} - Firstname: ${firstName}`;

    // Clear previous output and append the new one
    cookieOutputDiv.innerHTML = ''; // Clear previous content
    cookieOutputDiv.appendChild(p);

    console.log("Displayed cookies:", currentCookies); // Optional: log to console
}

// Ensure functions are accessible globally when called from HTML onclick
window.setCookies = setCookies;
window.showCookies = showCookies;

// Optional: Add an initial call to showCookies if cookies might exist from a previous session
// document.addEventListener('DOMContentLoaded', showCookies);
