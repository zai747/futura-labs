let prime = (numarray) => {
    numarray.forEach((element) => {
        
        if (element % 2 == 0) {
            console.log(`${element} is a prime number `);
        }
        else {
            console.log(`${element} is not a prime number`);
        }
        
    });
}

let numarray = ["21","24","31","2","6","13"]
prime(numarray)

var arr = [''];
let number = document.querySelector('input')

function numinput(number) {
    console.log(number);
}