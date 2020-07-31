var CLOSED = true;
var CLOSED2 = true;

function button1() {
    if (CLOSED) {


        document.getElementById('survive').style.display = "block";

        CLOSED = false;

    } else {

        document.getElementById('survive').style.display = "none";


        CLOSED = true;
    }
}




function button2() {
    if (CLOSED2) {


        document.getElementById('safe').style.display = "block";

        CLOSED2 = false;

    } else {

        document.getElementById('safe').style.display = "none";


        CLOSED2 = true;
    }
}

var options = ['Go outside', 'Board Games','non E-sports','meet survivers']

var imgs= ['','images/boardGame.jpg', 'images/sports.jpg', 'images/meeting.jpg']




function things() {

    var rand = Math.floor(Math.random() * options.length);
    
    
    
    
    document.getElementById('')
    document.getElementById('text').innerHTML = options[rand];
    document.getElementById('thingsImg').src = imgs[rand];
}




