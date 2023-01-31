status = "";
video=""

function preload()
{

}

function setup()
{
canvas = createCanvas(350, 350);
canvas.position(595, 350);

video = createCapture(VIDEO);
video.hide();
video.size(350, 350)
}

function draw()
{
    image(video, 0, 0, 350,350);
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "Object detection has started";
    object =document.getElementById("object_input").value;
}

function modelloaded(){
    console.log("model loaded");
    status=true;
}