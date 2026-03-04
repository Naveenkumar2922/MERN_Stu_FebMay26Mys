// object Iteration
const book={
    title:"js for newbies",
    author:"rabindarnath tagore",
    year:1999
};
console.log();
for(let key in book){
    console.log(key,";",book[key]);
}
console.log("keys",Object.keys(book));
console.log("values",Object.values(book));
console.log("entries",Object.entries(book));

