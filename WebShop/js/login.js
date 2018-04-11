//Checking if someone has already logged in, if so take them to their profile, if not take them to the login page
function loginLoad() {
    if (sessionStorage.user === undefined) {

    }
    else {
        window.open("../pages/profile.html", "_self");
    }
}
//When someone tries to login, check if their login is valid, if so take them to their profile. If not display an error message
function submitForm() {
    //This variable is a placeholder and needs to be replaced with actually validating the user data
    var loginSucces = true;
    if (loginSucces) {
        //Open their profile
        window.open("../pages/profile.html", "_self");
    }
    else {
        //Error message
        alert("Invalid login! Email/Password incorrect");
    }
}

//Creating a new entry in the database for this person
function createAccount() {

}