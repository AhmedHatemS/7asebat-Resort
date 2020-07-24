function validateForm() 
{
    var name = document.forms["feedbackForm"]["name"].value;
    var mail = document.forms["feedbackForm"]["email"].value;
    var counter=0;
    
    if (name == "") {
        alert("Name must be filled out");
        counter++;
        return false;
    }
    if (mail == "") {
        alert("Email must be filled out");
        counter++;
        return false;
    }
    if (counter == 0) {
        alert("Feedback sent, thanks!")
    }
}