//Checking if someone has already logged in, if so take them to their profile, if not take them to the login page
function loginLoad() {
    if (sessionStorage.user === undefined) {

    }
    else {
        window.open("../profile.html", "_self");
    }
}

//When someone tries to login, check if their login is valid, if so take them to their profile. If not display an error message
function submitForm() {

    var x = document.getElementById("loginForm")
    var username = x.elements["username"].value;
    var password = x.elements["password"].value;
    var succesful = false;

    console.log("Username:" + username + " password:" + password);
    $.getJSON("./data/Accounts.json", function (r) {
        console.log(r);
        console.log("Amount of users:" + r.length);
        for (var i = 0; i < r.length; i++) {
            console.log("Username checking: " + r[i].UserName);
            console.log("Password checking: " + r[i].Password);
            if (username == r[i].UserName && password == r[i].Password) {
                console.log("login succesful");
                succesful = true;
            }
            else {
                console.log("login failed");
            }
        }
        console.log(succesful);
        if (succesful) {
            //Open their profile
            window.open("../pages/profile.html", "_self");
        }
        else {
            //Error message
            alert("Invalid login! Email/Password incorrect...");
        }
    });

}

//Checking the login credentials
function checkLogin() {
    var x = document.getElementById("loginForm")
    var username = x.elements["username"].value;
    var password = x.elements["password"].value;
    console.log("Username:" + username + " password:" + password);
    $.getJSON("./data/Accounts.json", function (r) {
        console.log(r);
        console.log("Amount of users:" + r.length);
        for (var i = 0; i < r.length; i++) {
            console.log("Username checking: " + r[i].UserName);
            console.log("Password checking: " + r[i].Password);
            if (username == r[i].UserName && password == r[i].Password) {
                console.log("login succesful");
                return true;
            }
            else {
                console.log("login failed");
            }
        }
    });

}

//Creating a new entry in the database for this person
function createAccount() {

}