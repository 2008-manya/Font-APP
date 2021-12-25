nose_x=0;
nose_y=0;

leftwrist_x=0;
rightwrist_x=0;
difference=0;

function setup(){
    canvas = createCanvas(400 , 400);
    canvas.position(620,180);

    video = createCapture(VIDEO);
    video.size(400 , 400);
    video.position(150,150)

    poseNet = ml5.poseNet(video , modelLoaded);

    poseNet.on('pose' , gotPoses);
}

function modelLoaded(){
    console.log("PoseNet Is Initialized");
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);

        leftwrist_x = results[0].pose.leftWrist.x;
        rightwrist_x = results[0].pose.rightWrist.x;
        difference = floor(leftwrist_x-rightwrist_x);

        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        
        console.log("left= " + leftwrist_x + "right = " +rightwrist_x + "difference= " + difference);
    }
    }

function draw(){
background('orange');
document.getElementById("result1").innerHTML= "Width and height of the text will be = " + difference + "px";
textSize(difference);
fill(document.getElementById('colour').value)
text(document.getElementById('name1').value , nose_x, nose_y);
}