var questions = [
    "What is the capital of Iraq?",
    "What is a popular food/dish in Iraq?",
    "What colors are the stripes on the Iraqi flag?",
    "On average, how much rainfall does Iraq get per year?",
    "What is the most populated city in Iraq?",
    "What is the average temperature in Iraq?",
    "What is the national language?",
    "Which country borders Iraq to the east?",
    "What is the area/land size of the country?",
    "What is the closest large body of water?"
];

var answers = [
    ["Amman", "Damascus", "Baghdad", "Rabat"],
    ["Gyro", "Dolma", "Rice", "Hummus"],
    ["red, white, blue", "red, black, green", "green, black, yellow", "red, white, black"],
    ["1-3 inches", "4-7 inches", "8-10 inches", "11-15 inches"],
    ["Amman", "Damascus", "Baghdad", "Basra"],
    ["100 degrees F", "100 degrees C", "120 degrees F", "80 degrees F"],
    ["Arabic", "Farsi", "Hindi", "French"],
    ["Syria", "Iran", "Libya", "Jordan"],
    ["186,754 square miles", "148,754 square miles", "128,754 square miles", "168,754 square miles"],
    ["Mediterranean Sea", "Red Sea", "Arabic Sea", "Black Sea"]
];

var correctAnswers = [2, 1, 3, 1, 2, 0, 0, 1, 3, 2];
//this hides the next question button
$("#next-button").hide();
var questionCounter = 0;


///this is the button to start the game
$("#start-button").on("click", function() {
    $("#start-button").remove();
    writeQuestionandAnswers(questionCounter);
    console.log(questionCounter)


});

///this is where the user picks the answer
$(".option").on("click", function() {
    $("#next-button").show();
    var answerPicked = this.id;

    var rightAnswer = correctAnswers[0];

    var answerText = answers[0][rightAnswer]

    $("#0").hide();
    $("#1").hide();
    $("#2").hide();
    $("#3").hide();
    if (this.id === correctAnswers[0]) {
        console.log("CORRECT ANSWER!!!!")
        $("#user-answered").text("You are right!");
    } else {
        console.log("WRONG ANSWER!!!!")
        $("#user-answered").text("You are wrong! The correct answer is " + answerText);
    }
});

$("#next-button").on("click", function() {
    questionCounter++
    writeQuestionandAnswers(questionCounter);
})

function writeQuestionandAnswers(i) {
    console.log(i)
    $("#0").show();
    $("#1").show();
    $("#2").show();
    $("#3").show();


    $("#question").text(questions[i]);
    $("#0").text(answers[i][0]);
    $("#1").text(answers[i][1]);
    $("#2").text(answers[i][2]);
    $("#3").text(answers[i][3]);


}

var counter = 30;
       var clock;
       function timer(counter, clock, questionCount) {
       countdown = setInterval(thirtySeconds, 1000);

       function thirtySeconds() {
           if (counter === 0) {
               clearInterval(countdown);
               triviaGame.timesUp(questionCount, countdown);
           }
           if (counter > 0) {
               counter--;
           }
           $("#timer").html(counter);
       }
     }

