let name=document.getElementById('name')
let year=document.getElementById('year')
let author=document.getElementById('author')
let btn=document.getElementById('btn')
let ul=document.getElementById('ul')
function filter(){
    if(year.value>2010){
const li=document.createElement('li');
li.textContent=name.value+' '+author.value.toUpperCase();
ul.appendChild(li);
name.value='';
year.value='';
author.value='';


    }
}
