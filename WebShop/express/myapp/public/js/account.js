/*
This file contains all the functions for the createAccount.html and changeInformation.html pages.
The pages that have to do with changing an account
*/

//When the changeInformation.html page loads insert the established values into the fields
function insertValues() {
    var x = document.getElementById("changeInformationForm").elements
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
                //Inserting the data into the fields
                x["username"].value = user.UserName;
                x["password"].value = user.Password;
                x["name"].value = user.Name;
                x["postalCode"].value = user.PostalCode;
                x["birthDate"].value = user.BirthDate;
                x["email"].value = user.Email;
                x["gender"].value = user.Gender;
            }
            else {
                console.log("not the correct user");
            }
        }
    });
}

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


    //This is where we would want to execute this statement into our database,but have -after many attempts(even php god forbid)- failed to do so.

    var sql = "INSERT INTO Accounts (UserName, Password, Name, PostalCode, Email, BirthDate, Gender) VALUES('" + u + z + p + z + n + z + p + z + bD + z + e + z + g + "')";
    //!!JAVASCRIPT TO SQL HERE!!
    console.log(sql);
}

//Changing the personal information of the user
function changeAccount() {
    var x = document.getElementById("changeInformationForm").elements

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


    //This is where we would want to execute this statement into our database,but have -after many attempts(even php god forbid)- failed to do so.

    //Create the new account
    var sql = "INSERT INTO Accounts (UserName, Password, Name, PostalCode, Email, BirthDate, Gender) VALUES('" + u + z + p + z + n + z + p + z + bD + z + e + z + g + "')";
    //!!JAVASCRIPT TO SQL HERE!!
    console.log(sql);

    //Delete the old account
    var sql2 = "DELETE FROM Accounts WHERE UserName= " + sessionStorage.user;
    //!!JAVASCRIPT TO SQL HERE!!
    //Change to the new user
    sessionStorage.user = u;

    alert("Information changed succesfully to: " + sql)
}

//Deleteing a registerd users account
function deleteAccount() {

    //This is where we would want to execute this statement into our database, but have -after many attempts(even php god forbid)- failed to do so.

    //Delete the account
    var sql2 = "DELETE FROM Accounts WHERE UserName= " + sessionStorage.user;
    //!!JAVASCRIPT TO SQL HERE!!

    //Change to no user
    sessionStorage.user = "Nowone";
}

//What happens when the return button is pressed (return to profile.html)
function returnToProfile() {
    window.open("profile.html", "_self")
}
