//4.DataTypes in JavaScript:
console.log("DataTypes in JavaScript:")
//Numbers:
var num=97;
console.log(num);
//String:
var str1="this is a string";
var str2='this is also a string';
console.log(str1);
console.log(str2);
//Objects:Similar to key-value pairs
var marks= {
    ark: 99,
    srk: 100,
    puli: 99,
    aj: 98.998,
    hafeez: 100,
    t2: 98.997
}; 
console.log(marks);

//Booleans:
var flag1='true';
var flag2='false';
console.log(flag1,flag2);

//Undefined:
var und=undefined;
console.log(und);
console.log(undefined);

//By only declaring variable without intializing:
var x;
console.log(x);

//null:
/* null and undefined are two different, null means there is nothing in that variable and undefined means we only declared a variable without intializing it.*/
var y=null;
console.log(y);

//There are two types of dataTypes are there in JavaScript :
//primitive:undefined,null,string,number,boolean,symbol.
//reference:Arrays, Objects.


//Arrays:Used to store multiple elements in a single variable.
var arr=[1,2,3,4,5];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);//value is undefined
console.log(arr[100]);//value is undefine
//indexing in javascript starts from zero.
//arrays in javascript are not homogeneous
//we can store different datatype elements in an array
var arr1=["Raj","ARK",97,79];
console.log(arr1);
//document.getElementById("paa").innerHTML=arr1;


let x2=16+"RangeRover";//When adding a number and a string, JavaScript will treat the number as a string.
//o/p:16RangeRover.
console.log(x2);


let x3=97+79+"Ferrari";//JavaScript expression evaluates form left to right and it adds 97+79=176 and adds it to Ferrari
//o/p:176Ferrari.
console.log(x3);

let x4="AstonMartin"+16+61;
console.log(x4);//op:AstonMartin1661

//JavaScript types are dynamic:
//That is same variable can be used to store different datatype values.
let x5;//value is undefined
console.log(x5);
console.log(typeof(x5));
x5=99;//value is 99 and datatype is number
console.log(x5);
console.log(typeof(x5));
x5="RajKumar";//value is RajKumar and datatype is string.
console.log(x5);
console.log(typeof(x5));