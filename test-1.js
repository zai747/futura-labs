// var fname;
// fname = "Ali";
// var lname = "Zahir"
// let place = "kallai";
// const phone = 8921922638;
// let isStudent = true;
// let friends= ["Javad","Zaihan"];

// let mates= ["shaheen","afeef"];

// let Stud = {
//     firstname : fname,
//     lastname : lname,
//     friendgroup : friends,
//     rollno : 28,
//     favsub :"English",
// }



// let todo=[
//     {
//       userId: 1,
//       id: 1,
//       title: "delectus aut autem",
//       completed: false,
//       Address:{
//           house:"whitehouse",
//           houseno:201
//       },
//       val:["one","two","three"]
//     }
// ]
// console.log(todo[0].Address.houseno);
// console.log(todo[0].val[1]);

// // friends.push("Anusha");
// // console.log("Push",friends);
// // let contain = friends.at(1)
// // console.log("At",contain);
// // contain = friends.concat(mates);
// // console.log("Concat",contain);
// // console.log("Copy Within",contain.copyWithin(1,2,3));
// // contain = contain.toString()
// // console.log("lower case",contain.toLowerCase());

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();
// console.log(keys.value);

// function myFun(user){
//     // console.log("user logged " +user);
//     console.log(`user logged ${user}`);

// }
function add(a=5,b=6)
{
    let c = a - b;
    console.log(c+"="+a+"-"+b);
    console.log(`${c}= ${a}-${b}`);
    console.log(c);
}
// add(9,7)

myFun("abhijth");
  function print(){
      return "welcome"
  }
//   let output=print()
//   console.log(output);

  function display(){
      document.getElementById("demo").innerHTML="bye"

  }
  function demo(){
      alert("clicked")
  }
function chngtxt()
{
 document.getElementById("demo").innerHTML="This text has been changed";

}

let a=40;
let b=50;

let c=Boolean(a>=b)
console.log(a);
console.log(b);
console.log(c);


function car (make,model,year,licplate)
{
this.make = make;
this.model = model;
this.year = year;
this.licplate =licplate
               

}

let car1 = new car("toyota","corola",2016,221155);

let car2 = new car("benz","S1",2019,22)
console.log(car1);

console.log(car1.licplate);

let date=new Date()
console.log(date);

let math=Math.LN10
console.log(math);

let mat2=Math.round(7.8887)
console.log(`Rounded num is ${mat2}`);

const matelements = [2,4,55,-66,-1,22];
let mat3=Math.min(...matelements);
console.log(mat3);

let license = car1.licplate
license = license.toString()
console.log(license);

let time = new Date();
let hours = time.getHours()
if (hours > 5 && hours < 12) {

    console.log("Good  Morning");
}
else if(hours > 12 && hours < 17) {
    console.log("Good Evening");

}
else{
    console.log("Good Night");
}


let day = prompt("Enter the day");
day = day.toLowerCase();
let dayfirst = day.slice(0,3);
switch (day ) {
    case "monday":
        console.log("monday");
        break;

    case "tuesday":
            console.log("tuesday");
            break;
     case "wensday":
             console.log("wensday");
            break;
      case "thursday":
                console.log("thursday");
                break;
                case "friday":
                    console.log("friday");
                    break;
             case "saturday":
                     console.log("saturday");
                    break;
              case "sunday":
                        console.log("sunday");
                        break;

    default: console.log("invalid entry");
        break;
}

array.forEach(element => {
    
});