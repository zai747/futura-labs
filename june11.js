//Promise

let promise = new Promise((resolve,reject) => {
    let condition = true;
    if (condition) {
        resolve("condition is true")
    }
    else
    {
        reject("condition is false")
    }
} )

promise.then((t) => console.log(t) ).catch((f) => console.log(f) )


let check = new Promise((resolve,reject) => {
    let ispass = false;
    if (ispass) {
        resolve("Congrats, You have passed")
    } else {
        reject("Oops, you are being reevaluated")
        
    }
} )

let recheck = new Promise((resolve,reject) => {
    let ispass = true;
    if (ispass) {
        resolve("You have passed reevaluation")
        
    } else {
        reject("Sorry , you have failed !")
        
    }
})

// check
// .then((t) => console.log(t))
// .catch((f) => { 
//     console.log(f);
//     recheck.then((t) => console.log(t) ).catch((f) => console.log(f) )
// } )


let task = new Promise((resolve,reject) => {
    let pass = true
    if (pass) {
        resolve("You have Passed first test")
    } else {
        reject("Sorry , better luck next time")
    }
})

let tech = new Promise((resolve,reject) =>{
    let pass = true
    if (pass) {
        resolve("You have Passed second test")
    } else {
        reject("Sorry , better luck next time")
    }

} )

let manager = new Promise((resolve,reject) =>{
    let pass = true
    if (pass) {
        resolve("You have Passed third test")
    } else {
        reject("Sorry , better luck next time")
    }

} )

let HR = new Promise((resolve,reject) =>{
    let pass = true
    if (pass) {
        resolve("You have Passed final test")
    } else {
        reject("Sorry , better luck next time")
    }

} )

task.then((taskp) => {console.log(taskp);
tech.then((techp) => {console.log(techp);
manager.then((managerp) => {console.log(managerp);
HR.then((HRp) => {console.log(HRp);})
.catch((managerf) => console.log(managerf)) })
.catch((HRf) => console.log(HRf)) })
.catch((techf) => console.log(techf))})
.catch((taskf) => console.log(taskf))




let books = [
{bookname : "harry potter"},
{bookname : "fault in our stars"},
{bookname : "india after gandhi"},
]
    
let newbook = {bookname : "Dopamine"}


let getpromise = new Promise((resolve,reject) => {

    if (books) {
        resolve(books)
    }
    else
    {
        reject("no books")
    }

})


let pushpromise = new Promise((resolve,reject) => {
    if (newbook) {
        resolve({books,newbook})
    } else {
        reject("There is no book to push")
    }
})

getpromise.then((books) => {

books.forEach(element => {
    document.getElementById("demo").innerHTML += `<li> ${element.bookname} </li>`;
});
})

.catch((s)=>{
    document.getElementById("demo").innerHTML = s;

})

pushpromise.then((obj) => { 
    let arr = Array.from(obj.books)
    let array = obj.books
    console.log(arr);
    console.log(array);
    // arr.push(obj.newbook);
}).catch((s) => {document.getElementById("demo").innerHTML = s;})