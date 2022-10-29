noseX=0;
noseY=0;
lipX=0
lipY=0
function preload(){
mustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
lipstick=loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);

}
function modelLoaded(){
    console.log('The poseNet is initialized');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nosex="+results[0].pose.nose.x);
        console.log("nosey"+results[0].pose.nose.y);
noseX=results[0].pose.nose.x-20;
noseY=results[0].pose.nose.y+2;
lipX=results[0].pose.nose.x-17;
lipY=results[0].pose.nose.y+20;

    }
}
function draw(){
image(video,0,0,300,300);
image(mustache,noseX,noseY,40,20);
image(lipstick,lipX,lipY,30,10)

}
function snapshot(){
save('My_filter_img.png');
}