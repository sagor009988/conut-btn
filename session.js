let count=0;
function plusBtn (){
   const p= document.getElementById('calculate');
   p.innerText=count +=1
    
}
document.getElementById('minus').addEventListener('click',function (){
    const w=document.getElementById('calculate');
    w.innerText=count --
})