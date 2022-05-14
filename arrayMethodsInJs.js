var arr=["raj", "ark",97, 79,undefined, null,true,false];
console.log(arr.length);
for(let i=0;i<arr.length;i++) {
    console.log(arr[i]);
}

//pop() method: used to delete last element in array
console.log(arr);
console.log("After using pop() method:");
arr.pop();
console.log(arr);

//push() method: used to append or add and element to the array last last index
console.log("after push('ram') to arrray:");
arr.push("ram");
console.log(arr);


//shift() method: used to remove or delete first element in array:
console.log("after shift() method:");
arr.shift();
console.log(arr);


//unshift() method: used to add or append an element in first position of array
console.log("after unshift('sita') method:");
arr.unshift('sita');
console.log(arr);


//console.log(arr.unshift('sita'));//this return new arrays length.


//ToString method:
console.log(arr.toString());


//Sort method sorts values lower to increasing order:
console.log(arr.sort());


//Joint method also joins array elements into string:
console.log(arr.join());
console.log(arr.join('!'));
console.log(arr.join(''));


/* JavaScript Array delete()
// Warning !
// Array elements can be deleted using the JavaScript operator delete.

// Using delete leaves undefined holes in the array.

// Use pop() or shift() instead.*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
delete fruits[0];
console.log(fruits);


// Merging (Concatenating) Arrays
// The concat() method creates a new array by merging (concatenating) existing arrays:
console.log(arr.concat(fruits));

const myGirls = ["Cecilie", "Lone"];
console.log(myGirls);
const myBoys = ["Emil", "Tobias", "Linus"];
console.log(myBoys);

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);
// The concat() method can also take strings as arguments:
console.log(myChildren.concat("Ramco"));
