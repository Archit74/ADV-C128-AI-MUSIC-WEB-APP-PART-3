song = "";

left_wrist_x = 0;
right_wrist_x = 0;

left_wrist_y = 0;
right_wrist_y = 0;

function preload() {
    song = loadSound("music.mp3", "music2.mp3");
}

function setup()
{
   canvas = createCanvas(500, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on("pose", gotPoses);
}

function modelloaded() {
    console.log("modelloaded");
}

function gotPoses(results) {
    if (results.length > 0)
     {
        console.log(results);

        left_wrist_x = results[0].pose.leftWrist.x;
        left_wrist_y = results[0].pose.leftWrist.y;

        right_wrist_x = results[0].pose.rightWrist.x;
        right_wrist_y = results[0].pose.rightWrist.y;
    }
}

function draw()
{
    image(video, 0, 0, 500, 300);
}