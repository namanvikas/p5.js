function preload(){

}
function setup(){
    Canvas=createCanvas(640,480);
    Canvas.position(150,150)
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,230,150,220,200);
    fill(255,0,0)
    
    circle(30,30,20);
    circle(30,400,20);
    circle(590,30,20);
    circle(590,400,20);
fill(0,255,0);
rect(40,20,540,20);
rect(20,40,20,350);
rect(40,390,540,20);
rect(580,40,20,350);

}
function take_snapshot(){
    save("supa strikas.jpg");
}