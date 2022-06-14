//Async & await

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

let  test = async (task,tech,manager,HR) => {
    try {
       let result = await task
           result = await tech
           result = await manager
           result = await HR
       console.log(result);
        
    } catch (error) {

        console.log(error);
    }
}

// test(task,tech,manager,HR)



let check = new Promise((resolve,reject) => {
    let isfail = true;
    if (isfail) {
        resolve("Oops, you are being reevaluated")
    } else {
       
        reject("Congrats, You have passed")
        
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

let checkfn = async (check,recheck) => {
    try {
    let result = await check;       // if promise is rejected, the next statement is NOT executed
    console.log(result);
    result = await recheck;
    console.log(result);
        
    } catch (error) {
        console.log(error);
    }
}

checkfn(check,recheck)