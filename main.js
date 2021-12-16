nosex=0;
nosey=0;

function preload(){
lips = loadImage('https://i.postimg.cc/76xVy3Lw/l1.png');
}

function setup(){
canvas = createCanvas(400,400);
canvas.center();
video =createCapture(VIDEO);
video.size(400,400);
video.hide();

poseNet= ml5.poseNet (video , modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
console.log('poseNet is Initialized');

}

function draw(){
image(video,0,0,300,300);
image(lips,noseX,noseY,30,30);
}

function take_snapshot(){
save('myFilterImage.png');
}

function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
nosex = + results[0].pose.nose.x;
nosey = + results[0].pose.nose.y;
console.log("nose x =" + nosex);
console.log("nose y =" + noseY);
}
    }