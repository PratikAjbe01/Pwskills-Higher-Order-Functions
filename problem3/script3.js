const shopCart={coffee:100,tea:120,socks:10,tshirt:100}
const cartArray=Object.entries(shopCart);
const result=cartArray.map(([item,quantity])=>item+" $"+quantity*80);
console.log(result);