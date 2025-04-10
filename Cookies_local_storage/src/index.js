// --- Cookie Helper Functions ---

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            const value = c.substring(nameEQ.length, c.length);
            console.log(`getCookie('${name}') found raw value:`, value); // DIAGNOSTIC
            try {
                const decodedValue = decodeURIComponent(value);
                console.log(`getCookie('${name}') returning decoded value:`, decodedValue); // DIAGNOSTIC
                return decodedValue;
            } catch (e) {
                console.error(`Error decoding cookie value for ${name}:`, value, e); // DIAGNOSTIC
                return value; // Return raw value if decoding fails
            }
        }
    }
    console.log(`getCookie('${name}') did not find cookie.`); // DIAGNOSTIC
    return "";
}

function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;';
    console.log(`Cookie ${name} deleted.`);
}


// --- UI Manipulation Functions ---

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

function showWelcomeMessage(firstname) {
    hideForm();

    const oldWelcomeMsg = document.getElementById('welcomeMessage');
     if (oldWelcomeMsg) {
        oldWelcomeMsg.remove();
     }

    const h1 = document.createElement('h1');
    h1.id = 'welcomeMessage';

    // *** Check the value received by this function ***
    console.log("showWelcomeMessage received firstname:", firstname); // DIAGNOSTIC

    // Use the received firstname value, which should be correctly decoded by getCookie
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
         window.deleteCookiesAndShowForm();
    };

    h1.appendChild(logoutLink);
    document.body.appendChild(h1);
    console.log("Showing welcome message.");
}


// --- Core Logic Functions ---

/**
 * Sets cookies and updates the UI to show the welcome message.
 */
function setCookies() {
    const firstnameInput = document.getElementById('firstname');
    const emailInput = document.getElementById('email');
    const firstnameValue = firstnameInput.value; // e.g., "eggmin"
    const emailValue = emailInput.value;

    console.log("Input values: firstname =", firstnameValue, ", email =", emailValue); // DIAGNOSTIC

    if (!firstnameValue || !emailValue) {
         alert("Please enter both firstname and email.");
         return;
    }

    const expiresDate = new Date();
    expiresDate.setDate(expiresDate.getDate() + 10);
    const expiresString = expiresDate.toUTCString();

    // *** Encode the actual value ***
    const encodedFirstname = encodeURIComponent(firstnameValue);
    const encodedEmail = encodeURIComponent(emailValue);

    console.log("Encoded values: firstname =", encodedFirstname, ", email =", encodedEmail); // DIAGNOSTIC

    // *** Construct cookie strings using backticks and the *encoded* variables ***
    const firstnameCookieString = `firstname=${encodedFirstname}; expires=${expiresString}; path=/`;
    const emailCookieString = `email=${encodedEmail}; expires=${expiresString}; path=/`;

    console.log("Setting firstname cookie:", firstnameCookieString); // DIAGNOSTIC
    document.cookie = firstnameCookieString;

    console.log("Setting email cookie:", emailCookieString); // DIAGNOSTIC
    document.cookie = emailCookieString;

    console.log("Current document.cookie state:", document.cookie); // DIAGNOSTIC

    alert("Cookies set!");
    showWelcomeMessageOrForm(); // Update UI
}


function deleteCookiesAndShowForm() {
    console.log("Logout clicked. Deleting cookies...");
    deleteCookie('firstname');
    deleteCookie('email');
    showForm();
}


function showWelcomeMessageOrForm() {
    console.log("Checking login status...");
    const firstname = getCookie('firstname'); // This now logs internally
    if (firstname) {
        showWelcomeMessage(firstname); // This now logs internally
    } else {
        showForm();
    }
}

// --- Global Assignments & Initial Load ---
window.setCookies = setCookies;
window.deleteCookiesAndShowForm = deleteCookiesAndShowForm;
window.addEventListener('DOMContentLoaded', showWelcomeMessageOrForm);
