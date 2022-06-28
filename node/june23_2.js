const call = require('./june23')
const cc = require('./june23_3')

call.greeting(call.nameset.name,call.secondname.sname)

let result = cc(1500,1.2)

const colors = require('colors')

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
  });

console.log(`${result}`.rainbow);
