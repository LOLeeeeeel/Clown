noseX=0
noseY=0
function preload(){
   clown_nose=loadImage("nose.png")
}

function setup(){
   canvas=createCanvas(300,300)
   canvas.center() 
   video= createCapture(VIDEO)
   video.size(300,300)
   video.hide()
   poseNet= ml5.poseNet(video,modelLoaded)
   poseNet.on("pose",gotPoses)
}

function takeSnapshot(){
 save("messi_is_the_goat.png")
}

function draw(){
   image(video,0,0,300,300)
   fill("red")
   stroke("red")
   
   image(clown_nose,noseX,noseY,30,30)

   
}
function modelLoaded(){
   console.log("poseNet_is_initialized")
}

function gotPoses(results){
   if(results.length>0){
      console.log(results)
      noseX=results[0].pose.nose.x-15
      noseY=results[0].pose.nose.y-15
   }
}