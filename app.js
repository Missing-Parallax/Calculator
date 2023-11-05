

let screen=document.querySelector('input');
let button=document.querySelectorAll('button');

for(item of button){
    item.addEventListener('click',(event)=>{
        if(event.target.innerText=='C') screen.value="";
        else if(event.target.innerText=='='){
            try{
                screen.value=eval(screen.value);
            }
            catch(err){
                screen.value="Invalid";
            }
        }
        else{
            screen.value+=(event.target.innerText);
        }
    })
}