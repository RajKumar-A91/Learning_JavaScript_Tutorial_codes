console.log("Different looping statements in javaScript:")
//loops in javaScript:
var arr=[1,2,3,5,6,7];
console.log(arr);


//for loop:
console.log("this is for loop:")
for(var i=0;i<arr.length;i++) {
    console.log(arr[i]);
}
//arr.length gives the no.of elements in array or size of array.

//while loop in javaScript:
console.log("this is while loop:")
i=0;
while(i<arr.length) {
    console.log(arr[i]);
    i++;
}

//do-while loop in javaScript:
console.log("this is do-while loop:")
i=0;
do{
    console.log(arr[i]);
    i++;
}while(i<arr.length);


//for-each loop in javascript:
console.log("this is forEach loop:")
arr.forEach(function(element) {
    console.log(element);
});