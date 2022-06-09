//checks if password and username are correct
//no limit for attempts
function validate() {
    var uname=document.getElementById("uname").value;
    var pword=document.getElementById("pword").value;
    if(uname=="Staff" && pword=="Staff"){
        alert("Login was successful");
        location.href = 'staffPage.html';
        return false;
    }
    else
        alert("Login failed");
        return false;
}

function returntocourselist(){
    location.href='overviewCourses.html';
}

function returntomainpage(){
    location.href= 'staffPage.html';
}