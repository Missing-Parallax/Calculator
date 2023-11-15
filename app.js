

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

screen.addEventListener('keydown',function(e){
    e.preventDefault();
})

document.addEventListener('keydown',(event)=>{
    if(event.key=="Enter"){
        try{
            screen.value=eval(screen.value);
        }
        catch(err){
            screen.value="Invalid";
        }
    }
    else if(event.key=="Backspace") screen.value=screen.value.substring(0,screen.value.length-1);
    else screen.value+=isValid(event.key);
})


function isValid(e){
    let arr=['1','2','3','4','5','6','7','8','9','0','*',"%",'/','-','+'];

    for(item of arr) if(e==item) return item;
    return "";
}