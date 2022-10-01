// var myName="Beau"
// myName=8
// Let ourName="freeCodeCamp"
// const pi=3.14

// var a;
// var b=2;
// console.log(a);

// a=7;
// b=a;

// console.log(a);


// var a=5;
// var b=10;
// var c="I am a ";
// a=a+1;
// b=b+5;
// c=c+"String";
// console.log(a);console.log(b);console.log(c);

// var myStr="I am a\"double quoted\" string inside \"double quotes";
// console.log(myStr);

// var mystr='<a href="http://www.example.com" target="_blank">Link</a>'
// console.log(mystr)



// var lastNameLength=0;
// var lastName="Lovelace"; 
// lastNameLength=lastName.length;
// console.log(lastNameLength)



// var firstLetterOfLastName="";
// var lastName="Lavelace";
// firstLetterOfLastName=lastName[0];
// console.log(firstLetterOfLastName);



// var lastName="Lovelace";
// var lastLetterOfLastName=lastName[lastName.length-1];
// console.log(lastLetterOfLastName);



function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result="";
    result+="The "+ myAdjective+" "+myNoun+" "+myVerb+" to the store "+myAdverb;
    return result;
}

console.log(wordBlanks("dogs","big","ran","quickly"));