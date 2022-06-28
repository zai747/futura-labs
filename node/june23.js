const greeting = (name,sname) => {
    console.log(`Hello, ${name} ${sname}`);
}

const nameset = { name:"ali"}

const secondname = { sname : "zahir"}

module.exports.greeting = greeting;
module.exports.nameset = nameset;
module.exports.secondname = secondname;