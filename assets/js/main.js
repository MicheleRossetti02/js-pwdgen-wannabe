const name = prompt ('What is your name');
const surname = prompt ('What is your surname');
const color = prompt('What is your favoureit color?');
const number = 22;
let string ='DO NOT SHARE IT WITH ANYONE';

console.log(name)
console.log(surname)
console.log(color)

console.log('Ciao ' + name + ' ' + surname + ' la tua nuova password è')

console.log(
    `
    
${name}${surname}${color}${number}
${string}

    `

)