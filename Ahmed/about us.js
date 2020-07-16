var flag = 1;
function check(){
    if(flag == 2){
        secondClick(); flag = 1;
    }else{
        firstClick(); flag = 2;
    }
}

$(document).ready(function(){
    $("#click-button").click(function(){
        check(); 
    });
});

function firstClick() {
            $(".text").show();
            setTimeout(function(){
                document.getElementById("Span").innerHTML = "Info enabled.";
                document.getElementById("click-button").style.backgroundColor = "yellow";
            }, 500);
            setTimeout(function(){
                document.getElementById("Span").innerHTML = "Hide details?";
                document.getElementById("click-button").style.backgroundColor = "red";
            }, 3000);
}

function secondClick() {
            $(".text").hide();
            setTimeout(function(){
                document.getElementById("Span").innerHTML = "Info disabled.";
                document.getElementById("click-button").style.backgroundColor = "yellow";
            }, 500);
            setTimeout(function(){
                document.getElementById("Span").innerHTML = "Show more?";
                document.getElementById("click-button").style.backgroundColor = "lime";
            }, 3000);
}