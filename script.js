/* Nim Trainer by [Caiden Charon]
 * based on this flowchart:
 * https://lucid.app/lucidchart/2018baaf-4c26-4a76-a0d5-93c97f444425/view
 */

/* Global Variables */
var trainer = false;
var count = 0;

/** 
 * main  
 * Handles new Nim games with gametype choice simple or trainer and a play again option. 
 * @param none 
 * @return none
 */
/* Main */
function main(){
   let again = true;
   trainer = confirm("do you want to watch the computer win?");
   playNim();
   again = confirm("Play again?");
   if (again == true) main();
}

/** 
 * playNim 
 * plays a game with user first and computer second. Winner declared in an alert box. 
 * @param none 
 * @return none
 */
function playNim(){
   let count = 0;
    while (count < 20) {
        userTurn();
        if (count > 20) alert("CPU wins");
        else cpuTurn();
        if (count > 20) alert("userWins")
    }
}

/** 
 * userTurn  
 * User enters a turn. Validation against cheating handled by recursion.
 * @param none 
 * @return none
 */
function userTurn(){
    count+=3; 
    alert("user count 3");
}

/** 
 * cpuTurn 
 * Generate computer's turn without losing on purpose.  Different turns if trainer or simple.  
 * @param none 
 * @return none
 */
function cpuTurn(){
    count+=1; 
    alert("cpu count 1. count is "+count);
}
