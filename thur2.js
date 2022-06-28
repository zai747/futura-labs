
//Iterating an array with loop

let fruits = ["mango", "Apple", "Oranges", "Grapes", "pappaya"];
for (i = 0; i<fruits.length; i++)
 { 
    document.getElementById("demo").innerHTML +=`<li>${fruits[i]}</li>`
}

//Map

let samp = new Map([
    ["key1", "value1"],
    ["key2", "Value2"],
    ["key3", "value3"],

])
console.log(samp);

let val2 = samp.get("key2");
console.log(val2);

let nwval = samp.set("key4","value4");

samp.delete("key2");

console.log(nwval);

// Arrow Function



const add = function(a,b) {           //Regular Function

    return a + b;                    //remove function keyword , braces , return keyword & instead of function keyword give =>

}


const add1 = (a,b) => a + b;        // new arrow function


//trim

let blnk = "     hi"
console.log(" length of variable with spaces is " + blnk.length);
let trimmed = blnk.trim();
console.log("trimmed variable has length of " + trimmed.length);

// For each

fruits.forEach((element,index) => {

    console.log(`${element} is at ${index}`);           // for an array order is element, index, whole array

});

samp.forEach((value,key) => {

    console.log(`${key} is the key of value ${value}`);     // value,key,map
}
)

var welcome = (() => {
    document.getElementById("welcome").innerHTML = "hello";
});

welcome();


let cars = ["i10", "i20", "polo"];



var carlist = (cars => cars.forEach(elem =>  console.log(elem) ) )
    

carlist(cars);


let currency = prompt("Enter the amount you want to convert");
let rate = prompt("Enter the exchange rate")
var CurrencyConverter = ((currency, rate) => currency * rate )
console.log("Your exchange amount is " + CurrencyConverter(currency, rate));

