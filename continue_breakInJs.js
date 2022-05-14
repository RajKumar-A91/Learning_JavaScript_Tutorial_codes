var arr=[1,2,33,455,6,7,8,10];
console.log(arr);
console.log("We have used continue statement when arr[i] value is 455:")
//when continue statement encountered it simply skips remaining part for that particular iteration.
for(let i=0;i<arr.length;i++) {
    if(arr[i]==455) 
    continue;
    console.log(arr[i]);
}

console.log(arr);
console.log("we have used break statement when arr[i] value is 7:")
//when break statement is encountered the program counter simply comes out of loop:
for(let i=0;i<arr.length;i++) {
    if(arr[i]==7)
    break;
    console.log(arr[i]);
}