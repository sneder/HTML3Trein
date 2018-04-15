/*
This file contains all the functions from the profile.html page, 
*/

//What happens when the page gets loaded
function profileLoad() {
    var user = sessionStorage.user;
    console.log("Loading profile for user: " + user);
    updateHistory(user);
    updateInformation(user);
}

//Updating the personal information on the page
function updateInformation(username) {

    //The function to get the information
    $.getJSON("./data/Accounts.json", function (r) {
        console.log(r);
        //A loop that runs through all the users 
        //and finds the right user
        for (var i = 0; i < r.length; i++) {
            console.log("Username checking: " + r[i].UserName);
            if (username == r[i].UserName) {
                console.log("current user");
                console.log(r[i]);
                var user = r[i];
            }
            else {
                console.log("not the correct user");
            }
        }

        //Actually setting the information into the page
        document.getElementById("name").innerHTML = "Name: " + user.Name;
        document.getElementById("birthDate").innerHTML = "Birth date: " + user.BirthDate;
        document.getElementById("email").innerHTML = "Email: " + user.Email;
        document.getElementById("postalCode").innerHTML = "Postal Code: " + user.PostalCode;

        if (user.Gender = "M") {
            document.getElementById("gender").innerHTML = "Gender: Male"
        }
        if (user.Gender = "F"){
            document.getElementById("gender").innerHTML = "Gender: Female"
        }  

        document.getElementById("picture").src = "../"+user.UserName
    });
}

//Adding the buying history of the user
function updateHistory(user) {

}