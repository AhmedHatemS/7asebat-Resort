function validateForm() 
{
    var fname = document.forms["sendMessageForm"]["first-name"].value;
    var lname = document.forms["sendMessageForm"]["last-name"].value;
    var mail = document.forms["sendMessageForm"]["email"].value;
    var message = document.forms["sendMessageForm"]["message"].value;
    var counter=0;
    
    if (fname == "") {
        alert("First name must be filled out");
        counter++;
        return false;
    }
    if (lname == "") {
        alert("Last name must be filled out");
        counter++;
        return false;
    }
    if (mail == "") {
        alert("Email must be filled out");
        counter++;
        return false;
    }
    if (message == "") {
        alert("Message must be filled out");
        counter++;
        return false;
    }
    if (counter == 0)
        alert("Message sent, thanks!")
}