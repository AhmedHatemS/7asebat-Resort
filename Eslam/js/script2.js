alert("Welcome to Events form and details");

$(document).ready(function(){
    $('#mode').click(function(){
    if($('link#styles').attr('href')=="css/style2.css"){
    $('#mode').attr('value','Switch To Normal Mode')
    $('link#styles').attr('href','css/style2(1).css')
    }
    else
    {
    $('#mode').attr('value','Switch To Blue Mode')
    $('link#styles').attr('href','css/style2.css')
    }
    })

    });
function myFunction() {

    var fname = document.getElementById("fname").value;
    var addr = document.getElementById("addr").value;
    var phone = document.getElementById("phone").value;
    var age  = document.getElementById("age").value;
    submitOK = "true";
  
    if (fname.length < 5 ) {
      alert("please Enter your name correctly and fully");
      submitOK = "false";
    } 

    if(age < 21 ){
        alert("You must be over 21 years old to book with us");
    }

    if(addr.length < 10 ) {
        alert("Please enter your address correctly");
        submitOK = "false";
    }

    if(phone < 10000000000){
       alert("Please enter your phone correctly. It should be 11 number")
    }
    if (submitOK == "false") {
      return false;
    }
  }