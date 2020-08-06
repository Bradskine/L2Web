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

var options = ['music', 'art', 'Board Games', 'sports', 'meet survivers']

var imgs = ['images/music.jpg', 'images/art.jpg', 'images/boardGame.jpg', 'images/sports.jpg', 'images/meeting.jpg']

//arrays with diffirent images with subtitles mathcing


function things() {
  
   var rand = Math.floor(Math.random() * options.length); //gets a random number based on lenth of arrays


    document.getElementById('text').innerHTML = options[rand];
    document.getElementById('thingsImg').src = imgs[rand];
    document.getElementById('thingsImg').style.border = '0.2vw solid white';
    //changes html and css based of what the randomley selected number from array is made
}




















