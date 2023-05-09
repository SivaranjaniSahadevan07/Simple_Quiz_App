var pos = 0, board, ques, choice, a, b, c, cor = 0;
var questions = [
    ["Shortcut of COPY", "CTRL+A", "CTRL+C", "CTRL+S", "b"],
    ["Shortcut of SAVE", "CTRL+Y", "CTRL+C", "CTRL+S", "c"],
    ["Shortcut of CUT", "CTRL+A", "CTRL+X", "CTRL+V", "b"],
    ["Shortcut of PASTE", "CTRL+V", "CTRL+P", "CTRL+S", "a"]
];
function displayQuestions() {
    board = document.getElementById("board");
    if (pos >= questions.length) {
        board.innerHTML = "<b>You got </b>" + cor + "<b> of </b>" + questions.length;
        document.getElementById("status").innerHTML = "<h2>Quiz completed!</h2>";
        document.getElementById("next").innerHTML = "<button onclick='chechAns()'>Next</button>";
        pos = 0;
        cor = 0;
        return false;
    }
    document.getElementById("status").innerHTML = "<h2>Question <h2>" + (pos + 1) + " of " + questions.length;
    ques = questions[pos][0];
    a = questions[pos][1];
    b = questions[pos][2];
    c = questions[pos][3];
    board.innerHTML = "<h3>" + ques + "</h3>";
    board.innerHTML += "<label><input type='radio' name='choice' value='a'>" + a + "</label><br>";
    board.innerHTML += "<label><input type='radio' name='choice' value='b'>" + b + "</label><br>";
    board.innerHTML += "<label><input type='radio' name='choice' value='c'>" + c + "</label><br>";
    board.innerHTML += "<button onclick='chechAns()'>Next</button>";
}
function chechAns() {
    var choices;
    choice = document.getElementsByName("choice");
    for (var i = 0; i < choice.length; i++) {
        if (choice[i].checked) {
            choices = choice[i].value;
        }
    }
    if (choices == questions[pos][4]) {
        cor++;
    }
    pos++;
    displayQuestions();
}