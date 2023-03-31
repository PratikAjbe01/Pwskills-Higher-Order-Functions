const check1= /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}\/?$/i;
let input=document.getElementsByClassName("input");
let ans=document.getElementById('ans');
function checkUrl(){
  if(check1.test(input[0].value)==true){
    ans.innerText="Valid url confirmed";
  }
  else{
    ans.innerText="invalid url";
  }
}