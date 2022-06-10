// const first = (callback) => {
//     setTimeout(() => {
//         console.log("hello");
//         callback()
        
//     }, 3000);
// }

// const second = () => {
//     console.log("bye");
// }
// first(second)


// const clock = () => {
//     setInterval(() => {

//         let time = new Date
//         document.getElementById("clock").innerHTML = `time is ${time.getHours()} hours ${time.getMinutes()} minutes and ${time.getSeconds()} seconds`
        
//     }, 1000);
// }
// clock();


const add = (a,b,sub) => { 
   let sum = a + b;
   sub(sum)     
}
const sub = (sum) =>
{
 let a  =   sum - 100
 console.log(a);
}

add(150,200 ,sub)


let books = [
    {bookname : "harry potter"},
    {bookname : "fault in our stars"},
    {bookname : "india after gandhi"},

]



const getbook = (books) => {

    books.forEach(element => {
       
        document.getElementById("list").innerHTML += `<li> ${element.bookname} </li>`
        
    });

}
const addbook = (newbook,books,getbook) => {
    books.push(newbook)
    getbook(books)

}

let newbook = {bookname : "Dopamine" }
addbook(newbook,books,getbook)



function sampleobj(bname,title) {
    this.bookname = bname;
    this.title = title
}

let book1 = new sampleobj("bookname","samplebook")
console.log(book1);

[]
{}










