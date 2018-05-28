 // VARIABLES
 // =======================================================================================

// arrays questions and answers
var questions=["Guess the cities ? " ,"Guess the food ?", "Guess the name ?"];
var answers=["Philadelphia", "chicken","will"];

//randomly choose a choice from the options arrays. computer select the questions and answers
var computerQuestions =questions[Math.floor(Math.random() * questions.length)];
var computerAnswer =answers[Math.floor(Math.random() * answers.length)];

 // Determines which key was pressed.
 var userGuess = event.key;

// var to count
var guessCount= 0;

 // FUNCTIONS
// ========================================================================================


//loops the array of questions
for(var i=0; i<questions.length; i++){

    //logs the questions of arrays at index position i to console . this code executed each we go through the loop
    console.log(questions[i]);

} // end array of questions

// loops the array of answers
for (var i=0; i<answer.length;i++){

    if(computerAnswer.charAt===userGuess){
        
        // log the the answer
        console.log(answer[i]);
    }
    
  

}// end loops arrays of answers
