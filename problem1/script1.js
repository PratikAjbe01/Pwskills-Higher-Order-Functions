let str="Mynameispratik"
let rstr=''
function reverseStr() {
    for(let i=str.length-1;i>=0;i--){
       let n=str.charAt(i)
        rstr=rstr+n
    }
    console.log(rstr);
}
setTimeout(reverseStr,2000)