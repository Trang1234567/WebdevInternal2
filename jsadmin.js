//counting login attempts
var count=3;

//checks if pw and username are correct
function validate() {
    var uname = document.getElementById("uname").value;
    var pword = document.getElementById("pword").value;
    if (uname == "Admin" && pword == "Admin") {
        alert("Login was successful");
        location.href = 'adminPage.html';
        return false;
    } else {
        count--; //after each wrong input, number of attempts decreases by 1
        alert("Login Credentials Incorrect");
        // Disabling fields after 3 attempts.
        if (count == 0) {
            document.getElementById("uname").disabled = true;
            document.getElementById("pword").disabled = true;
            document.getElementById("submit").disabled = true;
        }
        return false;
    }
}





