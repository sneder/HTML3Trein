/*
This file contains all the functions for the createAccount.html and changeInformation.html pages.
The pages that have to do with changing an account
*/

//Creating a new entry in the database for this person
function createAccount() {
    var x = document.getElementById("createForm").elements

    //getting all the variables
    var u = x["username"].value;
    var p = x["password"].value;
    var n = x["name"].value;
    var pC = x["postalCode"].value;
    var bD = x["birthDate"].value;
    var e = x["email"].value;
    var g = x["gender"].value;
    var z = "','";

    //logging those variables
    console.log(
        "Username: " + u +
        " Password: " + p +
        " Name: " + n +
        " Postal Code: " + pC +
        " Email: " + e +
        " Birth date: " + bD +
        " Gender " + g
    );

    //Throw a fit i've you've forgotten to enter something
    if (u && p && n && pC && bD && e && g) {

    }
    else {
        alert("Not all information entered!")
    }

    //
    var db = new sqlite.Database(':memory:');
    alert(db);

    var sql = "INSERT INTO Accounts (UserName, Password, Name, PostalCode, Email, BirthDate, Gender) VALUES('" + u + z + p + z + n + z + p + z + bD + z + e + z + g + "')";
    console.log(sql);

    db.run(sql);
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
