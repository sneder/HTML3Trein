/*
This file contains all the functions for the login.html
*/

//Checking if someone has already logged in, if so take them to their profile, if not take them to the login page
function loginLoad() {
    if (sessionStorage.user === undefined || sessionStorage.user == "Nowone") {   
    }
    else {
        window.open("profile.html", "_self");
    }
}

//When someone tries to login, check if their login is valid, if so take them to their profile. If not display an error message
function submitForm() {

    //Getting some variables established
    var x = document.getElementById("loginForm")
    var username = x.elements["username"].value;
    var password = x.elements["password"].value;
    var succesful = false;
    console.log("Username:" + username + " password:" + password);

    //The main function, first getting the account information
    $.getJSON("data/Accounts.json", function (r) {
        console.log(r);
        console.log("Amount of users:" + r.length);
        //A loop that runs through all the users 
        //and checks if the entered information is the same as any of them
        for (var i = 0; i < r.length; i++) {
            console.log("Username checking: " + r[i].UserName);
            console.log("Password checking: " + r[i].Password);
            if (username == r[i].UserName && password == r[i].Password) {
                console.log("login succesful");
                sessionStorage.user=r[i].UserName
                succesful = true;
            }
            else {
                console.log("login failed");
            }
        }
        console.log(succesful);
        //The actions to be executed after looping through all users.
        if (succesful) {
            //Open their profile
            window.open("profile.html", "_self");
        }
        else {
            //Error message
            alert("Invalid login! Email/Password incorrect...");
        }
    });

}

//Moving to the account creation page from the login page
function pageCreate(){
    window.open("createAccount.html", "_self");
}


