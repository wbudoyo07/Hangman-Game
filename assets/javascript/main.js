//VARIABLES
// arrays hold questions and answers 
var hangManArray= [{q: "what is the name nfl team in philadelphia ", a: "eagles"},
                   {q: " who is the CEO of tesla", a :"elonmusk"},
                   {q: "what is the name of nba team in philadelphia", a:"sixers"},
                   {q: "most selling item in Wallmart ", a:"banana"},
                   {q: "MLB team's in philadelphia ", a:"philloes"},   
                  
                    
                ];

// hold the answer lettter in  arrays, hold the blank spaces(ex : _  _ _ _ ), and hold the wrong letters
var randomArray=[];
var answerArray=[];
var blankSpaces=[];
var wrongGuesses= [];

// counter win and loss. also the lives of the player
var winCounter= 0;
var lossCounter=0;
var playerLives= 0;

// for canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
//=================================================================================================
//FUNCTION

// default function when the game is start

function hangManGameDefault()
{

    //reset the game from the beginning
   answerArray=[];
   blankSpaces=[];
   wrongGuesses=[];
   playerLives=6;

  

    // randomize the questions and answer array
   randomArray=hangManArray[Math.floor(Math.random() * hangManArray.length)];

   for(i=0; i<randomArray.a.length; i++)
   {
       answerArray.push(randomArray.a.charAt(i));
       blankSpaces.push("_");
   }

   // assign to html
   document.getElementById("questions").innerHTML=randomArray.q + " ? ";
   document.getElementById("blanksSpacesID").innerHTML=blankSpaces.join(" ");
   document.getElementById("wrongGuessID").innerHTML= wrongGuesses;
   document.getElementById("guessLivesID").innerHTML= playerLives;
   document.getElementById("winCounterID").innerHTML= winCounter;
   document.getElementById("lossCounterID").innerHTML= lossCounter;

   
   //testing
   console.log(answerArray);
   console.log(blankSpaces);

   myCanvasDefault();

}// end  function hangManGameDefault


function compareLetter(letterCompare)
{
    
    // check the letter if in the array
    var checkLetter = false;

    for(i=0; i<randomArray.a.length; i++)
    {
        if(answerArray[i] === letterCompare)
            checkLetter = true;

            console.log("letter is in array : "+ checkLetter);
    }// end for

    // if player pick the right letter then run this
    if(checkLetter)
    {
        
        for(i=0; i<randomArray.a.length; i++)
        {
            if( answerArray[i]=== letterCompare)
            {
                console.log("yeah");
                blankSpaces[i]= letterCompare;
                
            }// end if
        }// end for

    }// end if checkLetter

    // run if the letter not in array or wrong guess
else
{
    // print out the player letter that didnt match
    wrongGuesses.push(letterCompare);

    // decrement the player live.
    playerLives--;
}//end else

    console.log(blankSpaces);

}// end function compareLetter

function roundComplete()
{   
    //printout the html
    document.getElementById("blanksSpacesID").innerHTML=blankSpaces.join(" ");
    document.getElementById("guessLivesID").innerHTML=playerLives;
    document.getElementById("wrongGuessID").innerHTML= wrongGuesses.join(" ");


    // check if all the letters match then increment the win
    if (answerArray.toString()=== blankSpaces.toString())
    {
        // increment the win counter
        winCounter++;


        

        document.getElementById("winCounterID").innerHTML= winCounter;

        //restart the game
        var myResetGame = setTimeout(function() { hangManGameDefault();}, 500);
        myResetGame;
        var alerting = setTimeout(function() { alert("You Win");}, 700);
            alerting;
            
        myCanvasDefault();

    }// end if
    
    //if user have 5 lives
    else if( playerLives === 5)
    {
        ctx.beginPath();
       
        ctx.arc(100,50,10,0,2*Math.PI);
        ctx.stroke(); 
    }// end elseif player lives 5

    //if user have 5 lives
    else if( playerLives === 4)
    {
        ctx.moveTo(100,80);
        ctx.lineTo(100,60);
        ctx.stroke();
    }// end elseif player lives 5

    //if user have 3 lives
    else if( playerLives === 3)
    {
        ctx.moveTo(100,60);
        ctx.lineTo(60,50);
        ctx.stroke();
    }// end elseif player lives 5
    //if user have 5 lives
    else if( playerLives === 2)
    {
        ctx.moveTo(130,30);
        ctx.lineTo(40,20);
        ctx.stroke();
    }// end elseif player lives 5
    //if user have 5 lives
    else if( playerLives === 1)
    {
        ctx.moveTo(100,80);
        ctx.lineTo(60,100);
        ctx.stroke();
    }// end elseif player lives 5

    // if  player use all their lives then restart the game
    else if(playerLives === 0)
    {
        lossCounter++;
        alert("you lose");

        //update the html of loss counter
        document.getElementById("lossCounterID").innerHTML= lossCounter;

        // reset the game
        hangManGameDefault();
        myCanvasDefault();
      
    }
}// end round complete

//canvas default 
function myCanvasDefault(){
    // creating hangman image 

ctx.moveTo(0,20);
ctx.lineTo(100,20);
ctx.moveTo(100,20);
ctx.lineTo(100,40);

         
ctx.stroke();

}// end myCanvasDefault

//=================================================================================================
//MAIN PROCESS



// start the game
hangManGameDefault();



//eventlistner
document.onkeyup= function(event)
{
    var playerGuess = String.fromCharCode(event.which).toLowerCase();
   compareLetter(playerGuess);
   roundComplete();
    console.log(playerGuess);
}// end event function


