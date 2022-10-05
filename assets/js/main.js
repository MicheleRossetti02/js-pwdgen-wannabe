const name = prompt ('What is your name');
const surname = prompt ('What is your surname');
const color = prompt('What is your favoureit color?');
const number = 22;
// const share ='DO NOT SHARE IT WITH ANYONE';

const password=name + surname + color + number;

console.log(name)
console.log(surname)
console.log(color)
// console.log(share)
console.log(password)

console.log ('Ciao ' + name + ' ' + surname + ' la tua nuova password è')

 console.log (
    `
${name}${surname}${color}${number}

    `

)

document.getElementById('info').innerHTML ='Ciao ' + name + ' ' + surname + ' la tua nuova password è';


// document.write(password);
document.getElementById('password').innerHTML= name + surname + color + number;


document.getElementById('share').innerHTML =  'DO NOT SHARE IT WITH ANYONE ';
