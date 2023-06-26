leftWristX = 0
leftWristY = 0
rightWristX = 0
rightWristY = 0
music1 = ""
music2 =  ""
function setup(){
    canvas = createCanvas(400, 400)
    background("black")
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}
function preload(){
    music1 = loadSound("music.mp3")
    music2 = loadSound("music2.mp3")
}
function draw(){
    image(video, 0, 0, 400, 400)
}
function modelLoaded(){
    console.log("Modelo carregado")
}
function gotPoses(results){
    if(results.lenght>0){
       console.log(results)
        scoreRightWristX = results[0].pose.keypoints[10].score
        scoreLeftWristX = results[0].pose.keypoints[9].score
        leftWristX = results[0].pose.leftWrist.x
        leftWristY = results[0].pose.leftWrist.y
        rightWristX = results[0].pose.rightWrist.x
        rightWristY = results[0].pose.rightWrist.y
      if(leftWristY <= 200){
        music1.play()
      }
      else if(rightWristY <= 200){
        music2.play()
      }
    }
}