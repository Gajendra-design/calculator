  const screen=document.querySelector('#screen');
function display(val){
    screen.value+=val
}
const Equalsto=()=>{
    let x=screen.value;
    screen.value=eval(x);
    console.log(eval(x));
}
const clears=()=>{
    console.log('clear')
    screen.value="";
}
document.querySelector('form').addEventListener('submit',e=>{
   e.preventDefault();
    let x=screen.value;
    screen.value=eval(x);
})