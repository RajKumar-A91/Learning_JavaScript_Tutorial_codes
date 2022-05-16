// arrows functions in JavaScript:
// function sum() {
//     return 5;
// }
sum=(a,b)=> {
    return a+b;
}
//the above function syntax is known as arrow functions
console.log(sum(10,99));
console.log(sum());

//setTimeout && setInterval in JavaScript:
//setTimeout
//Syntax: setTimeout(funtion_name,millisecondstolag);

logKaro=()=>{
    console.log("Iam OptimusPrime. Leader of AUTOBOTS@@@");
}
setTimeout(logKaro,10000);
//setTimeout function schedules the function when to get executed.

//when we want to execute a particular function for repeated times we can use setInterval() function.

//logkaro() function gets executed for every 2seconds.  

//if we pass setInterval() return value in clearInterval() then it terminates setInterval function.

var clr=setInterval(logKaro,3000);
//use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout.

