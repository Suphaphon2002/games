var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var scores = document.getElementById('score');
var points = document.getElementById('point');
var marks = document.getElementById('mark');
var answers = document.getElementById('answer');
var results = document.getElementById('result');

var number1 = 0, number2 = 0, total = 0, score = 0, point = 0;

marks.innerHTML = "+"
scores.innerHTML = score;
points.innerHTML = point;

function random() {
    number1 = Math.floor(Math.random() * 11);
    number2 = Math.floor(Math.random() * 11);
    num1.innerHTML = number1;
    num2.innerHTML = number2;
    answers.value = "";
}

function start() {
    score = 0;
    point = 0;
    scores.innerHTML = score;
    points.innerHTML = point;
    random();
    results.innerHTML = "";
}

function symbol(value) {
    if (value == "+") { marks.innerHTML = "+" }
    else if (value == "-") { marks.innerHTML = "-" }
    else if (value == "x") { marks.innerHTML = "x" }
    else if (value == "÷") { marks.innerHTML = "÷" }
}

function answer() {
    mark();
    if (total == answers.value) {
        score += 1;
        results.innerHTML = "ถูกต้อง";
        results.style.color = "green";
    } else {
        results.innerHTML = "ไม่ถูกต้อง";
        results.style.color = "red";
    }
    point += 1;
    scores.innerHTML = score;
    points.innerHTML = point;
    random();
}

function mark() {
    if (marks.innerHTML == "+") { total = number1 + number2 }
    else if (marks.innerHTML == "-") { total = number1 - number2 }
    else if (marks.innerHTML == "x") { total = number1 * number2 }
    else if (marks.innerHTML == "÷") { total = number1 / number2 }
}

random();