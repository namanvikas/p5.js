function preload(){

}
function setup(){
    Canvas=createCanvas(640,480);
    Canvas.position(150,150)
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,640,480);
    rect(0,0,55,55);
    ellipse(,46,55,55);
    circle(30,30,20)
}
function take_snapshot(){
    save("supa strikas.jpg");
}