alert("Welcome to Events page");

$(document).ready(function(){
  $('#mode').click(function(){
  if($('link#styles').attr('href')=="css/style.css"){
  $('#mode').attr('value','Switch To Normal Mode')
  $('link#styles').attr('href','css/style(1).css')
  }
  else
  {
  $('#mode').attr('value','Switch To Blue Mode')
  $('link#styles').attr('href','css/style.css')
  }
  })

  });

$(document).ready(function(){
  $("#details1").click(function(){
    $("#panel1").slideToggle("slow");
  });
});

$(document).ready(function(){
    $("#details2").click(function(){
      $("#panel2").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#details3").click(function(){
      $("#panel3").slideToggle("slow");
    });
  });
  
  