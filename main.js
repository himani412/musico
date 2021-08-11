scoreleftwrist=0;
songplay="";
song1="";
song2="";
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;

function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("song2.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}
function modelLoaded(){
    console.log('ModelLoaded');
}
function draw(){
    image(video,0,0,600,500);
     song1="music.mp3";
     song2="song2.mp3"
     fill("#0000FF");
    stroke("#0000FF");
    if(scoreleftwrist > 0.2){
    circle(leftwristx,rightwristx,20);

    song.song2.stop()
    if(song1 == false){
        song.play(song1);
        document.getElementById("heading").innerHTML= "Song Played 1";
}
}
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function gotposes(results){
    if(results.length > 0){
        console.log(results);
        scoreleftwrist=results[0].pose.keypoints[9].score;
        console.log("scoreleftwrist = "+ scoreleftwrist);
        leftwristx=results[0].pose.leftWrist.x;
        leftwristy=results[0].pose.leftWrist.y;
        console.log("LeftWristX = " + leftwristx + " LeftWristY = " + leftwristy);
        rightwristx=results[0].pose.rightWrist.x;
        rightwristy=results[0].pose.rightWrist.y;
        console.log("RightWristX = " + rightwristx + " RightWristY = " + rightwristy);
    }
}