$(document).ready(function() {

var clickedBoxes = 0;
var turn = 1;
var tieCount = 0
var player1Score = 0
var player2Score = 0
var gameWon = "false"

$(".row").click(function() {
    var clicked = $(this).html()
    if (turn % 2 == 1 && clicked == "") {
        $(this).text("X")
        turn++
        clickedBoxes++
    }
    else if (turn % 2 == 0 && clicked == "") {
        $(this).text("O");
        turn++
        clickedBoxes++
    }
    else {}
    if (clickedBoxes == 9) {
        checkWinner()
        if (gameWon == "false") {
        tieCount++
        $(".tieCount").text("Ties: " + tieCount)
        var readyToReset = prompt("The game is a tie, please type anything to try again or press Cancel to view the board.");
        if (readyToReset == 0) {
            alert("Click any box and type anything in the prompt to restart the game.")
        }
        else {
            $(".row").html("")
            clickedBoxes = 0
            turn = 1
            tieCount++
        } }
        else {
            gameWon = "false"
        }
    }
    checkWinner()
})

function checkWinner() {

var status1 = $(".1").text()
var status2 = $(".2").text()
var status3 = $(".3").text()
var status4 = $(".4").text()
var status5 = $(".5").text()
var status6 = $(".6").text()
var status7 = $(".7").text()
var status8 = $(".8").text()
var status9 = $(".9").text()

console.log(status1)
if (status1 == "X" && status2 == "X" && status3 == "X") {
    var readyToReset = prompt("Player 1 has won the game, please type anything to try again or press Cancel to view the board.");
        if (readyToReset == 0) {
            alert("Click any box and type anything in the prompt to restart the game.")
        }
        else {
            $(".row").html("")
            clickedBoxes = 0
            turn = 1
            player1Score++ 
$(".player1Score").text("Player 1: " + player1Score)
gameWon = "true"
        }
    }
if (status4 == "X" && status5 == "X" && status6 == "X") {
    var readyToReset = prompt("Player 1 has won the game, please type anything to try again or press Cancel to view the board.");
        if (readyToReset == 0) {
            alert("Click any box and type anything in the prompt to restart the game.")
        }
        else {
            $(".row").html("")
            clickedBoxes = 0
            turn = 1
            player1Score++ 
$(".player1Score").text("Player 1: " + player1Score)
gameWon = "true"
        }
    }
if (status7 == "X" && status8 == "X" && status9 == "X") {
    var readyToReset = prompt("Player 1 has won the game, please type anything to try again or press Cancel to view the board.");
        if (readyToReset == 0) {
            alert("Click any box and type anything in the prompt to restart the game.")
        }
        else {
            $(".row").html("")
            clickedBoxes = 0
            turn = 1
            player1Score++ 
$(".player1Score").text("Player 1: " + player1Score)
gameWon = "true"
        }
    }
if (status1 == "X" && status4 == "X" && status7 == "X") {
    var readyToReset = prompt("Player 1 has won the game, please type anything to try again or press Cancel to view the board.");
        if (readyToReset == 0) {
            alert("Click any box and type anything in the prompt to restart the game.")
        }
        else {
            $(".row").html("")
            clickedBoxes = 0
            turn = 1
            player1Score++ 
$(".player1Score").text("Player 1: " + player1Score)
gameWon = "true"
        }
    }
if (status2 == "X" && status5 == "X" && status8 == "X") {
    var readyToReset = prompt("Player 1 has won the game, please type anything to try again or press Cancel to view the board.");
        if (readyToReset == 0) {
            alert("Click any box and type anything in the prompt to restart the game.")
        }
        else {
            $(".row").html("")
            clickedBoxes = 0
            turn = 1
            player1Score++ 
$(".player1Score").text("Player 1: " + player1Score)
gameWon = "true"
        }
    }
if (status3 == "X" && status6 == "X" && status9 == "X") {
    var readyToReset = prompt("Player 1 has won the game, please type anything to try again or press Cancel to view the board.");
        if (readyToReset == 0) {
            alert("Click any box and type anything in the prompt to restart the game.")
        }
        else {
            $(".row").html("")
            clickedBoxes = 0
            turn = 1
            player1Score++ 
$(".player1Score").text("Player 1: " + player1Score)
gameWon = "true"
        }
    }
if (status1 == "X" && status5 == "X" && status9 == "X") {
    var readyToReset = prompt("Player 1 has won the game, please type anything to try again or press Cancel to view the board.");
        if (readyToReset == 0) {
            alert("Click any box and type anything in the prompt to restart the game.")
        }
        else {
            $(".row").html("")
            clickedBoxes = 0
            turn = 1
            player1Score++ 
$(".player1Score").text("Player 1: " + player1Score)
gameWon = "true"
        }
    }
if (status3 == "X" && status5 == "X" && status7 == "X") {
    var readyToReset = prompt("Player 1 has won the game, please type anything to try again or press Cancel to view the board.");
        if (readyToReset == 0) {
            alert("Click any box and type anything in the prompt to restart the game.")
        }
        else {
            $(".row").html("")
            clickedBoxes = 0
            turn = 1
            player1Score++ 
$(".player1Score").text("Player 1: " + player1Score)
gameWon = "true"
        }
    }
if (status1 == "O" && status2 == "O" && status3 == "O") {
    var readyToReset = prompt("Player 2 has won the game, please type anything to try again or press Cancel to view the board.");
        if (readyToReset == 0) {
            alert("Click any box and type anything in the prompt to restart the game.")
        }
        else {
            $(".row").html("")
            clickedBoxes = 0
            turn = 1
            player2Score++ 
$(".player2Score").text("Player 2: " + player2Score)
gameWon = "true"
        }
    }
if (status4 == "O" && status5 == "O" && status6 == "O") {
    var readyToReset = prompt("Player 2 has won the game, please type anything to try again or press Cancel to view the board.");
        if (readyToReset == 0) {
            alert("Click any box and type anything in the prompt to restart the game.")
        }
        else {
            $(".row").html("")
            clickedBoxes = 0
            turn = 1
            player2Score++ 
$(".player2Score").text("Player 2: " + player2Score)
gameWon = "true"
        }
    }
if (status7 == "O" && status8 == "O" && status9 == "O") {
    var readyToReset = prompt("Player 2 has won the game, please type anything to try again or press Cancel to view the board.");
        if (readyToReset == 0) {
            alert("Click any box and type anything in the prompt to restart the game.")
        }
        else {
            $(".row").html("")
            clickedBoxes = 0
            turn = 1
            player2Score++ 
$(".player2Score").text("Player 2: " + player2Score)
gameWon = "true"
        }
    }
if (status1 == "O" && status4 == "O" && status7 == "O") {
    var readyToReset = prompt("Player 2 has won the game, please type anything to try again or press Cancel to view the board.");
        if (readyToReset == 0) {
            alert("Click any box and type anything in the prompt to restart the game.")
        }
        else {
            $(".row").html("")
            clickedBoxes = 0
            turn = 1
            player2Score++ 
$(".player2Score").text("Player 2: " + player2Score)
gameWon = "true"
        }
    }
if (status2 == "O" && status5 == "O" && status8 == "O") {
    var readyToReset = prompt("Player 2 has won the game, please type anything to try again or press Cancel to view the board.");
        if (readyToReset == 0) {
            alert("Click any box and type anything in the prompt to restart the game.")
        }
        else {
            $(".row").html("")
            clickedBoxes = 0
            turn = 1
            player2Score++ 
$(".player2Score").text("Player 2: " + player2Score)
gameWon = "true"
        }
    }
if (status3 == "O" && status6 == "O" && status9 == "O") {
    var readyToReset = prompt("Player 2 has won the game, please type anything to try again or press Cancel to view the board.");
        if (readyToReset == 0) {
            alert("Click any box and type anything in the prompt to restart the game.")
        }
        else {
            $(".row").html("")
            clickedBoxes = 0
            turn = 1
            player2Score++ 
$(".player2Score").text("Player 2: " + player2Score)
gameWon = "true"
        }
    }
if (status1 == "O" && status5 == "O" && status9 == "O") {
    var readyToReset = prompt("Player 2 has won the game, please type anything to try again or press Cancel to view the board.");
        if (readyToReset == 0) {
            alert("Click any box and type anything in the prompt to restart the game.")
        }
        else {
            $(".row").html("")
            clickedBoxes = 0
            turn = 1
            player2Score++ 
$(".player2Score").text("Player 2: " + player2Score)
gameWon = "true"
        }
    }
if (status3 == "O" && status5 == "O" && status7 == "O") {
    var readyToReset = prompt("Player 2 has won the game, please type anything to try again or press Cancel to view the board.");
        if (readyToReset == 0) {
            alert("Click any box and type anything in the prompt to restart the game.")
        }
        else {
            $(".row").html("")
            clickedBoxes = 0
            turn = 1
            player2Score++ 
$(".player2Score").text("Player 2: " + player2Score)
gameWon = "true"
        }
    }
}
})