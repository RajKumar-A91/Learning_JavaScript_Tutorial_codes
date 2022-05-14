//Conditionals IN JavaScript:
console.log("This is conditional Statements in JavaScript:");
console.log("Conditionals in JavaScript");
function votingEligible(age) {
    console.log("age:",age);
    if(age>=18) {
        console.log("you are eligible to make a vote");
    }
    else {
        console.log("you are not eligible to make a vote");
    }
}
votingEligible(18);
votingEligible(3);
votingEligible(45);

//else if ladder:

function vowelOrNot(char) {
    if(char=='a'||char=='A'){
        console.log("vowel");
    }
    else if(char=='e'||char=='E'){
        console.log("vowel");
    }
    else if(char=='i'||char=='I'){
        console.log("vowel");
    }
    else if(char=='o'||char=='O'){
        console.log("vowel");
    }
    else if(char=='u'||char=='U'){
        console.log("vowel");
    }
    else{
        console.log("consonant");
    }
}
vowelOrNot('a');
vowelOrNot('Z');
vowelOrNot('U');
vowelOrNot('l');


//Nested if-else

function largestOfThreeNums(n1,n2,n3) {
    if(n1>n2) {
        if(n1>n3) {
            console.log(n1);
        }
        else {
            console.log(n3);
        }
    }
    else {
        if(n2>n3) {
            console.log(n2);
        }
        else {
            console.log(n3);
        }
    }
}

largestOfThreeNums(3,5,6);
largestOfThreeNums(-122,5567,233454);

//switch statement in javaScript:
function offON(x) {
    switch (x) {
        case 0:
          text = "Off";
          break;
        case 1:
          text = "On";
          break;
        default:
          text = "No value found";
      }
      console.log(text);
}

offON(1);
offON(0);
