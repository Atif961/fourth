let count=0;
let counteEl=document.getElementById('counter')
let first=document.getElementById('first')

function add (){
    count++;
    counteEl.innerHTML=count
}
function sub (){
   count--; 
   counteEl.innerHTML=count
}
function rest (){
    count=0;
    counteEl.innerHTML=count
}
function even (){
   counteEl.innerHTML=' '
   for (let index = 0; index <50; index+=2) {
    counteEl.innerHTML+=index +' '
    
   }
}
function odd (){
   counteEl.innerHTML=' '
   for (let index = 1; index <50; index+=2) {
    counteEl.innerHTML+=index +' '
    
   }

}
function squ(){
    counteEl.innerHTML=''
    for (count=1; count<10;count++)
    counteEl.innerHTML+= 
    count + " x " + count + " = " + count*count + "<br>"

}

function tab2(){
    first.innerHTML='';
    for(count=1; count<11; count++)
    first.innerHTML+=`2 x ${count} = ${count}<br/>`;
}
function tab3(){
    first.innerHTML='';
    counteEl.innerHTML=''
    for(count=1; count<11; count++)
    first.innerHTML+=`3 x ${count} = ${count*3}<br/>`;
}
function tab4(){
    first.innerHTML='';
    counteEl.innerHTML=''
    for(count=1; count<11; count++)
    first.innerHTML+=`4 x ${count} = ${count*4}<br/>`;
}