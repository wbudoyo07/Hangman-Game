 // VARIABLES
 // =======================================================================================

// arrays questions and answers
var questions=[
                {q: "Guess the name",a:"will", },
                {q:"Your fav band", a:"LinkinPark"},
                {q:"Your fav music", a:"Jazz"}
                ];
                    // console.log(questions[0].a.length);
                // var x = document.images[0].src;
                // document.getElementById("demo").innerHTML = x;
                // console.log(questions[0].src)
                // document.getElementById("questionsID").innerHTML= questions[0].src;
                // document.getElementById("questionID").innerHTML;
               
 //  Hold the letters of the answer of the blank (ex: H _ E _ _)       
var answerArray=[];
var answerArray2=[];
var userGuess=""

// Hold the lines of blank's answers(ex: _ _ _ _ _)   
var blankSpaces =[];
var blankAndSuccess=[];

// Computer selected solution will be held here.
var chosenWord = "";
 
// This will break the solution into individual letters to be stored in array.
var lettersInChosenWord = [];

// hold the array  letter of the array when they make the wrong choice
 var wrongGuesses =[];

// var to win, lose  number blank and guessleft count
var winCount=0;
var loseCount=0;
var guessLeft=6;
var numBlank=0;

//randomly choose a choice from the options arrays. computer select the questions and answers
var computerQuestions =questions[Math.floor(Math.random() * questions.length)];
 // FUNCTIONS
// ========================================================================================

// default function when we start the game
function hangMangame(){

    //reset the guesses back to 5
    guessLeft= 6;


//randomly choose a choice from the options arrays. computer select the questions and answers
// var computerQuestions =questions[Math.floor(Math.random() * questions.length)];
console.log(" this is the questions  " +  computerQuestions.q);
console.log(" this is the answer   " +  computerQuestions.a);

//testing,debugging, or double check to see the questions and answers as same as the output
// console.log(computerQuestions.q);
// console.log(computerQuestions.a);

// print out the questions output
 document.getElementById("questionID").innerHTML = computerQuestions.q + " ? " ;

 // reset the blank spaces guess  if we dont reset it show the previeus answer or the letter we used
blankSpaces=[];

//reset the letter of the wrong guesses
wrongGuesses=[];

 // the words is broken into individual letters
 



 // testing
// console.log(answerArray);
 
 // iterrate the blankspaces as same length as the hidden answers
 for(var i=0; i<computerQuestions.a.length; i++){
     blankAndSuccess.push("_");

 }

  console.log("blankAndSuccess= " + blankAndSuccess);
 // Prints the blanks at the beginning of each round in the HTML.
   document.getElementById("blankSpaceID").innerHTML = blankAndSuccess.join(" ")

    //reprint the guess left to 5
 document.getElementById("counterID").innerHTML=guessLeft;
 

//  Clears the wrong guesses from the previous round.
   document.getElementById("wrongGuessesID").innerHTML = wrongGuesses.join(" ");


   myCanvasDefault();

}// end hangManGame function

//function to iterate the blank number
function compareLetters(userLetter){

    
  
  for(var i=0; i<computerQuestions.a.length; i++){
    
    // push answer array to answer array by single character
    answerArray2.push(computerQuestions.a.charAt(i));
    
  }// end for loop
  console.log("answe Array 2 " +answerArray2);
 // This boolean will be toggled based on whether or not
  // a user letter is found anywhere in the word.
  var letterInWord = false;

  //check the user guess is it inside the array answer
for(var i=0;i<blankAndSuccess.length; i++){

    if(answerArray2[i]=== userLetter){

        letterInWord= true;
    }
    console.log(letterInWord);
}// end for

// if the user guess find in the answer array then we need to print it out
if(letterInWord){
    
    //loop throught the word
    for(var i=0; i< answerArray2.length; i++){

        if(answerArray2[i]=== userLetter){

            blankAndSuccess[i]= userLetter;

        }

    }
    console.log("test 1"+blankAndSuccess);
    console.log ("test 2"+ userLetter);
}

// if the user guess the wrong letter 
else{
    wrongGuesses.push(userLetter);
    console.log("wrong guess" +wrongGuesses);
    guessLeft--;

}

 
  
}// compareletters function

//canvas default 
function myCanvasDefault(){
    // creating hangman image 
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.moveTo(0,20);
ctx.lineTo(100,20);
ctx.moveTo(100,20);
ctx.lineTo(100,50);
ctx.stroke();

}




//Call FUNCTION
//=======================================================================================


// iterate the array questions to html
    
    // answerArray.push(computerQuestions.a.charAt(i))    ;
    
//============================================
// start the game 
 hangMangame();
 
 //  user input when they press the keyboard
 document.onkeyup= function(event){

    //convert the users' press to lowercase letters
    letters= String.fromCharCode(event.which).toLocaleLowerCase();
   console.log(letters);
    // compare the user input with the correct answer by calling the method we created
    compareLetters(letters);


     
 }// end function event 


 

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

  

