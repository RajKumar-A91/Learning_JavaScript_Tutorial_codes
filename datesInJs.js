let myDate=new Date();
console.log(myDate);
//return current date and time.
console.log(myDate.getTime());//Javascript date getTime() method returns the numeric value corresponding to the time for the specified date according to universal time. The value returned by the getTime method is the number of milliseconds since 1 January 1970 00:00:00. You can use this method to help assign a date and time to another Date object.
console.log(myDate.getFullYear());//returns current year.
console.log(myDate.getMonth());//jan-->0 dec-->11 returns curent month numerical value
console.log(myDate.getDay());//sun-->0 and satur-->6 returns current day numerical value.
console.log(myDate.getMilliseconds());
console.log(myDate.getSeconds());
console.log(myDate.getDate());//returns date in current month.
console.log(myDate.getTimezoneOffset());
console.log(myDate.getHours());


// Creating Date Objects
// Date objects are created with the new Date() constructor.

// There are 4 ways to create a new date object:

// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// new Date(milliseconds)
// new Date(date string)

let d=new Date();
let d1=new Date(2021,5,14,23,35,22,76);
console.log(d1);
let d2=new Date(133750738);
console.log(d2);
let d3=new Date("October 13, 2014 11:13:00");
console.log(d3);