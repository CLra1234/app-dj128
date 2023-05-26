var scoreRightWrist=0
var scoreLeftWrist=0
var rightWristX=0
var leftWristX=0
var rightWristY=0
var leftWristY=0
var song=""

function preload(){
    song=loadSound("music.mp3")
}

function setup(){
    canva=createCanvas(600,500)
    canva.center()
    video=createCapture(VIDEO)
    video.hide()
    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on("pose", gotPoses)
}


function modelLoaded(){
    console.log("pose net foi inicializado")
}

function gotPoses(results){
    if (results.length>0) {
        console.log(results)
        leftWristX=results[0].pose.leftWrist.x
        leftWristY=results[0].pose.leftWrist.y
        rightWristX=results[0].pose.rightWrist.x
        rightWristY=results[0].pose.rightWrist.y
    }
}

function draw(){
    image(video,0,0,600,500)
}

function play(){
    song.play()
    song.setVolume(0.5)
    song.rate(1)
}