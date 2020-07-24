input = document.querySelector('input');
listItems = document.querySelectorAll('li');
input.addEventListener('input',filter);
function filter(){
    search =input.value.toLowerCase();
    listItems.forEach(function(li){
    text =li.innerHTML.toLowerCase();
    found =text.indexOf(search);
    if(search=='' || found != -1)
    {
        li.style.display = 'block';   
    }
    else 
    {
        li.style.display =  'none';
    }
  
                      
                      })
}