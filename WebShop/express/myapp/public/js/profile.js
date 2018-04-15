/*
This file contains all the functions from the profile.html page, 
*/

//What happens when the page gets loaded
function profileLoad(){
    var user = sessionStorage.user;
    console.log("Loading profile for user: " +user);
    updateHistory(user);
    updateInformation(user);
}

//Updating the personal information on the page
function updateInformation(user){
    
}

//Adding the buying history of the user
function updateHistory(user){

}