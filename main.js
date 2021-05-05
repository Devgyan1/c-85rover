var canvas=document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");

var marsimgarray =["i1.jpg", "i2.jpg", "i3.jpg", "mars.jpg"];
var ran= Math.floor(Math.random() * 4);
console.log (ran);


var rover_width=100;
var rover_height=90;
var bgimg= marsimgarray[ran];
console.log ("background=" + bgimg);
var roverimg="rover.png";
var rover_x=10;
var rover_y=10;

function add(){
    bgimgtag= new Image();
    bgimgtag.onload=uploadbackground;
    bgimgtag.src=bgimg;

    roverimgtag= new Image;
    roverimgtag.onload=uploadrover;
    roverimgtag.src=roverimg;
}

function uploadbackground(){
    ctx.drawImage(bgimgtag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(roverimgtag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", kedown);

function kedown(e){
    keyp=e.keyCode;
    console.log(keyp);
    if (keyp == '37'){
        left();
        console.log("left");
    }

    if (keyp == '38'){
        up();
        console.log("up");
    }

    if (keyp == '39'){
        right();
        console.log("right");
    }

    if (keyp == '40'){
        down();
        console.log("down");
    }
}

function up(){
    if(rover_y > 0){
        rover_y= rover_y - 10;
        console.log("x=" + rover_x + " , y=" + rover_y);
        uploadbackground();
        uploadrover();
    }
}

function down(){
    if(rover_y < 500){
        rover_y= rover_y + 10;
        console.log("x=" + rover_x + " , y=" + rover_y);
        uploadbackground();
        uploadrover();
    }
}

function left(){
    if(rover_x > 0){
        rover_x= rover_x - 10;
        console.log("x=" + rover_x + " , y=" + rover_y);
        uploadbackground();
        uploadrover();
    }
}

function right(){
    if(rover_x < 700){
        rover_x= rover_x + 10;
        console.log("x=" + rover_x + " , y=" + rover_y);
        uploadbackground();
        uploadrover();
    }
}