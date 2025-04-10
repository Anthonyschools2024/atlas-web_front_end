// Note: The js-cookie library is expected to be loaded via CDN before this script runs.
// It makes the `Cookies` object available globally.

// --- UI Manipulation Functions --- (showForm, hideForm remain the same)

function showForm() {
    const welcomeMsg = document.getElementById('welcomeMessage');
    if (welcomeMsg) {
        welcomeMsg.remove();
    }
    const formDiv = document.getElementById('loginFormDiv');
    if (formDiv) {
        formDiv.style.display = 'block';
    }
     console.log("Showing login form.");
}

function hideForm() {
    const formDiv = document.getElementById('loginFormDiv');
    if (formDiv) {
        formDiv.style.display = 'none';
    }
     console.log("Hiding login form.");
}

/**
 * Creates and displays the welcome message H1 element.
 * @param {string} firstname - The user's first name from the cookie.
 */
function showWelcomeMessage(firstname) {
    hideForm();

    const oldWelcomeMsg = document.getElementById('welcomeMessage');
     if (oldWelcomeMsg) {
        oldWelcomeMsg.remove();
     }

    const h1 = document.createElement('h1');
    h1.id = 'welcomeMessage';
    h1.appendChild(document.createTextNode(`Welcome: ${firstname} `));

    const logoutLink = document.createElement('a');
    logoutLink.id = 'logoutLink';
    logoutLink.textContent = '(logout)';
    logoutLink.href = '#';

    logoutLink.style.fontWeight = 'normal';
    logoutLink.style.fontStyle = 'italic';
    logoutLink.style.marginLeft = '10px';
    logoutLink.style.cursor = 'pointer';
    logoutLink.style.color = '#007bff';
    logoutLink.style.textDecoration = 'underline';

    logoutLink.onclick = function(event) {
         event.preventDefault();
         window.deleteCookiesAndShowForm(); // Calls the updated delete function
    };

    h1.appendChild(logoutLink);
    document.body.appendChild(h1);
    console.log("Showing welcome message.");
}


// --- Core Logic Functions ---

/**
 * Sets cookies using js-cookie and updates the UI.
 * Renamed from setCookies.
 */
function setCookiesAndShowWelcomeMessage() {
    const firstnameInput = document.getElementById('firstname');
    const emailInput = document.getElementById('email');
    const firstnameValue = firstnameInput.value;
    const emailValue = emailInput.value;

    if (!firstnameValue || !emailValue) {
         alert("Please enter both firstname and email.");
         return;
    }

    console.log("Setting cookies using js-cookie...");
    // Use Cookies.set(name, value, { attributes })
    // expires: number of days
    // path: '/' to make it accessible across the site
    // js-cookie handles encoding automatically
    Cookies.set('firstname', firstnameValue, { expires: 10, path: '/' });
    Cookies.set('email', emailValue, { expires: 10, path: '/' });

    console.log("Cookies set via js-cookie. Current document.cookie:", document.cookie);
    alert("Cookies set!");

    showWelcomeMessageOrForm(); // Update UI
}

/**
 * Deletes cookies using js-cookie and shows the login form.
 */
function deleteCookiesAndShowForm() {
    console.log("Logout clicked. Deleting cookies using js-cookie...");
    // Use Cookies.remove(name, { attributes })
    // Must specify the same path used when setting the cookie
    Cookies.remove('firstname', { path: '/' });
    Cookies.remove('email', { path: '/' });

    console.log("Cookies removed via js-cookie. Current document.cookie:", document.cookie);
    showForm();
}

/**
 * Checks login status using js-cookie and shows the appropriate UI.
 */
function showWelcomeMessageOrForm() {
    console.log("Checking login status using js-cookie...");
    // Use Cookies.get(name) - returns undefined if not found
    const firstname = Cookies.get('firstname');
    console.log("Retrieved firstname via Cookies.get:", firstname);

    if (firstname) { // Checks if firstname is not undefined/empty
        showWelcomeMessage(firstname);
    } else {
        showForm();
    }
}

// --- Global Assignments & Initial Load ---

// Update global assignment for the renamed function
window.setCookiesAndShowWelcomeMessage = setCookiesAndShowWelcomeMessage;
window.deleteCookiesAndShowForm = deleteCookiesAndShowForm; // Remains the same

// Run the main check when the page content is loaded
window.addEventListener('DOMContentLoaded', showWelcomeMessageOrForm);
