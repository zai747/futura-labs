// localstorage  

let namemap = new Map ( [
    ["fname" , "Ali"],
    ["lname" , "Zahir"],
    ["age" , 12]

])

let stor = localStorage.setItem("obj",namemap.get("fname"))
console.log(stor);

// JSON

let arr = ["one", "two", "three"];

let ar2 = [1,2,4,5,3,6,7];

let sampleobj = {
    fname : "ali",
    lname : "Zahir",
    age : "21",
}


let convertjsn = JSON.stringify(sampleobj);        // object to JSON
console.log(convertjsn);
let convertobj = JSON.parse(convertjsn);    // JSON to object
console.log(convertobj);

// For in

for (const key in sampleobj) {
    if (Object.hasOwnProperty.call(sampleobj, key)) {
        const element = sampleobj[key];                          //  for  in ,  key holds index
        console.log(element);
    }
}

for (const iterator of arr) {
    console.log(iterator);                                      // for of , iterator holds value   
}

//reduce
let add = arr.reduce((prev, cu) => prev + cu)
console.log(add);
let concatright = arr.reduceRight((prev, cu) => prev + cu)
console.log(concatright);



function passcheck() {

   
    let pass = document.getElementById("exampleInputPassword1");
    let passstrength = document.getElementById("passstrength");
    const strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    const mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    const enoughRegex = new RegExp("(?=.{10,}).*", "g");


     if(!(enoughRegex.test(pass.value)))
    {
        passstrength.innerHTML = "weak";
        passstrength.style.width = "50%";
        passstrength.style.backgroundColor = "red";
        
    }
    else if (strongRegex.test(pass.value))
    {
    passstrength.innerHTML = 'Strong';
     passstrength.style.width = "100%";
     passstrength.style.backgroundColor = "green";

     console.log("strong");
   }
    else if(mediumRegex.test(pass.value))
   {
    passstrength.innerHTML = 'Medium';
    passstrength.style.width = "75%";
    passstrength.style.backgroundColor = "yellow";
    console.log("Medium");

   }

    
}
