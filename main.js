noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
Difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550, 450);
    canvas.position(560, 150);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw(){
    background("#ff0303");
    fill("#000000");
    stroke("#000000");
    square(noseX, noseY, Difference);
    document.getElementById("square_sides").innerHTML = "Width And Height Of The Square = " + Difference + "Px";
}

function modelLoaded(){
    console.log("PoseNet Is Initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose x = " + noseX + " Nose Y = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        Difference = floor(leftWristX - rightWristX);
        console.log("Left Wrist X = " + leftWristX + " Right Wrist Y " + rightWristX + " Difference = " + Difference);
    }
}