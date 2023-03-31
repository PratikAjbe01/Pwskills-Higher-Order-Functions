let books=[{title:'hall of fame',year:2011,name:'jason'},{
    title:'jai ho',year:2011,name:'justin'
},
{
    title:'jai ki jai',year:2009,name:'justin'
}
]
let newbook=books.filter(book=>book.year>=2010).map(book=>{
    return{
        book,
        name:book.name.toUpperCase()
    };
});
console.log(newbook);