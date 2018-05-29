 // VARIABLES
 // =======================================================================================

// arrays questions and answers
var questions=["Guess the name ?", "your brother name ?"];
var answers=["will", "ben", "hey", "you",];
var userGuess=prompt("guess?");

//randomly choose a choice from the options arrays. computer select the questions and answers
var computerQuestions =questions[Math.floor(Math.random() * questions.length)];
var computerAnswer =answers[Math.floor(Math.random() * answers.length)];

//debugging
console.log(computerQuestions);
console.log(computerAnswer);
 // Determines which key was pressed.
 

// var to win, lose and guessleft count
var winCount=0;
var loseCount=0;
var guessleft=0;

 // FUNCTIONS
// ========================================================================================

document.onkeyup= function(event){

    
   userGuess= event.key;
//     prompt("user guess"+ userGuess);
// console.log(userGuess);
//loops the array of questions
for(var i=0; i<questions.length; i++){

    //logs the questions of arrays at index position i to console . this code executed each we go through the loop
    console.log(questions[i]);

} // end array of questions

// loops the array of answers
for (var i=0; i<answers.length;i++){
    console.log(computerAnswer[i]);
    if(computerAnswer[i].charAt(i)==="u"){

    //     alert("you are right");
    //     // log the the answer
        console.log("you got it");
    // }else{
    //     alert("you are wrong!");
    };
    
};
  

}// end loops arrays of answers
