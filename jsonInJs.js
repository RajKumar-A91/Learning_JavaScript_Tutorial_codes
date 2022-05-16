////JSON:java script object notation
//open source file format used to lightweight exchage method of data.
//we can transport json file by converting it to string 
//and when data got received we can again convert it to json file.
let obj={name:'raj',sportify:'AllDTime Brha',rollNo:565,ark:{this:"that",that:"this"}};
console.log(typeof(obj));
js=JSON.stringify(obj);//we are simply converting a object into string.
console.log(js);
console.log(typeof(js));
let parsed=JSON.parse('{"name":"John", "age":30, "city":"New York"}');
//converts a string to an object.
console.log(parsed);
console.log(typeof(parsed));