let hello = 'Hello World from Node JS';

//console.log(hello)

//console.log(__dirname)
//console.log(__filename);

//const path = require("path")
//console.log(`The file name is ${path.basename(__filename)}`)

//console.log(process.pid)
//console.log(process.versions.node)

//process.stdout.write("Hello World\n")

// const questions = [
//     "What is your name?",
//     "What would you rather be doing?",
//     "What is your preferred programming language"
// ];

// const ask = (i = 0) => {
//     process.stdout.write(`\n\n ${questions[i]}`);
//     process.stdout.write(` > `);
// };

// ask();

// const answers = []
// process.stdin.on('data', data => {
//     answers.push(data.toString().trim());

//     if(answers.length < questions.length){
//         ask(answers.length);
//     }
//     else{
//         process.exit();
//     }
//     // process.stdout.write(`\n\n ${data.toString().trim()} \n\n`);
//     // process.exit();
// });

// process.on('exit', () => {
//     const[name, activity, lang] = answers;
//     console.log(`
//     Thank you for your answers.

//     Go ${activity} ${name} you can write ${lang} code later!!!
//     `);
// });

const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime / waitTime) * 100);
    //console.log(`waiting ${currentTime/1000} second delay`)
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p}%`);
};

console.log(`setting a ${waitTime/1000} second delay`);

const timerFinished = () => {
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log("done")};

const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);