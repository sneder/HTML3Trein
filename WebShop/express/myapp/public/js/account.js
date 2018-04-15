/*
This file contains all the functions for the createAccount.html and changeInformation.html pages.
The pages that have to do with changing an account
*/

//Creating a new entry in the database for this person
function createAccount() {
    var x = document.getElementById("createForm").elements
    var username = x["username"].value;
    var password = x["password"].value;
    console.log(x);
    x.forEach(element => {
        var element = element.value 
    });
    console.log(
        "Username: "+ username +
        "Password: "+ password +
        "Name: "+ name + 
        "Postal Code: "+ postalCode +
        "Email: " + email +
        "Birth date: "+ birthDate +
        "Gender "+ gender
    );
}

//Changing the personal information of the user
function changeAccount() {
    user = returnUserObject();
}



function returnUserObject() {
    var username = sessionStorage.user;
    //The function to get the information
    $.getJSON("data/Accounts.json", function (r) {
        console.log(r);
        //A loop that runs through all the users 
        //and finds the right user
        for (var i = 0; i < r.length; i++) {
            console.log("Username checking: " + r[i].UserName);
            if (username == r[i].UserName) {
                console.log("current user");
                console.log(r[i]);
                var user = r[i];
                return user;
            }
            else {
                console.log("not the correct user");
            }
        }
    });
}
