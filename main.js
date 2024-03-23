img = "";
wristX = 0;
wristY = 0;
pingX = 325;
pongY = 300;
rightWrist = 0;

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(pingpong);
    video = createCapture(VIDEO);
  	video.size(600,400);

  poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);

}

function draw() {
  background(220);
  if(rightWrist > 0.2)
  { 
    fill('#f6546a')
    stroke('#668f25')
    circle(wristX, wristY, 2)
  }
}

function modelLoaded() {
	console.log('Model Loaded!');
  }

  function gotPoses(results)
  {
	if(results.length > 0)
	{
	  wristX = results[0].pose.wrist.x;
	  wristY = results[0].pose.wrist.y;
	  console.log("wristX = " + wristX +", wristY = " + wristY);
	}
  }
