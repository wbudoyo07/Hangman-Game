 // VARIABLES
 // =======================================================================================

// arrays questions and answers
var questions=[
                {q: "Guess the name",a:"will"},
                {q:"Your fav band", a:"LinkinPark"},
                {q:"Your fav music", a:"Jazz"}
                ];
               
               
 //  Hold the letters of the answer of the blank (ex: H _ E _ _)       
var answerArray=[];

// Hold the lines of blank's answers(ex: _ _ _ _ _)   
var blankSpaces =[];

// Computer selected solution will be held here.
var chosenWord = "";
 
// This will break the solution into individual letters to be stored in array.
var lettersInChosenWord = [];

// var to win, lose  number blank and guessleft count
var winCount=0;
var loseCount=0;
var guessLeft=0;
var numBlank=0;

 // FUNCTIONS
// ========================================================================================


function hangMangame(){

    //reset the guesses back to 5
    guessLeft= 5;


//randomly choose a choice from the options arrays. computer select the questions and answers
var computerQuestions =questions[Math.floor(Math.random() * questions.length)];

//testing,debugging, or double check to see the questions and answers as same as the output
console.log(computerQuestions.q);
console.log(computerQuestions.a);

// print out the questions output
 document.getElementById("questionID").innerHTML = computerQuestions.q + " ? " ;

 // the words is broken into individual letters
 answerArray = chosenWord.split("");


 // iterrate the blankspaces as same length as the hidden answers
 for(var i=0; i<computerQuestions.a.length; i++){
     blankSpaces.push("_");

 }

 //reprint the guess left to 5
 document.getElementById("counterID").innerHTML=guessLeft.toString();
 
   // Prints the blanks at the beginning of each round in the HTML.
   document.getElementById("blankSpaceID").innerHTML = blankSpaces.join(" ");

   // Clears the wrong guesses from the previous round.
//    document.getElementById("wrongGuessesID").innerHTML = wrongGuesses.join(" ");



 //

}// end hangManGame function

//function to iterate the blank number
function compareLetters(){

    for(var i= 0; i< numBlank; i++){


    }

};






//Call FUNCTION
//=======================================================================================


// iterate the array questions to html
    
    // answerArray.push(computerQuestions.a.charAt(i))    ;
    
   


 hangMangame();


//======================================================================================
// This function is compare to user input and answer of the array. We also lower case all text
// // in order to avoid mistake if the user use Capitalize letter.
// if(userGuess.toLocaleLowerCase()===computerQuestions.a.toLocaleLowerCase() ){
//     console.log(computerQuestions.a);
//     console.log("you are right")
// }else{
//     console.log("You are wrong")
// }
// end of logic 

  

