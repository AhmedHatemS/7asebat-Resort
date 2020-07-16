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
            document.getElementById("Span").innerHTML = "Info enabled.";
            setTimeout(function(){
                document.getElementById("Span").innerHTML = "Hide details?";
                document.getElementById("click-button").style.backgroundColor = "red";
            }, 1500);
}

function secondClick() {
            $(".text").hide();
            document.getElementById("Span").innerHTML = "Info disabled.";
            setTimeout(function(){
                document.getElementById("Span").innerHTML = "Show more?";
                document.getElementById("click-button").style.backgroundColor = "lime";
            }, 1500);
}