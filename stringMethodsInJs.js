let mystr1="how are you man man man man man";
// string_name.length gives the length of the string:
console.log(mystr1.length);


//finding starting index of a word:
//string_name.indexOf("word");
console.log(mystr1.indexOf("are"));
console.log(mystr1.indexOf("man"));//if there are multiple same words it simply returns first word index.
console.log(mystr1.indexOf("hey"));//if the word is not present it simply returns -1.
//Incase of multiple same words and we want the last word starting index
//then we need to use string_name.lastIndexOf("word");
console.log(mystr1.lastIndexOf("man"));


//For slicing The string:
//string_name.slice(starting_index,ending_index+1);
console.log(mystr1.slice(0,12));//it return "how are you "
//slice return the string from starting index to ending index-1.



//replacing a word in string
//String_name.replace("word1","word2"); it replaces word1 with word2
let xt=mystr1.replace("man","dudes");//if word1 is repeated more than once then it replaces first occurred word.
console.log(xt);
console.log(mystr1);

