// Function to set cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Function to get cookie
function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Function to check if cookie exists
function checkCookie() {
    const username = getCookie("username");
    if (username != "") {
        document.getElementById("greeting").innerHTML = "Xin chào " + username + "!";
    }
}

// Function to delete cookie
function deleteCookie() {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.getElementById("greeting").innerHTML = "";
}

// Event listener for form submission
document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    setCookie("username", name, 365);
    document.getElementById("greeting").innerHTML = "Xin chào " + name + "!";
});

// Event listener for clear cookie button
document.getElementById("clearCookie").addEventListener("click", function() {
    deleteCookie();
});

// Check for existing cookie on page load
window.onload = function() {
    checkCookie();
};