const World=Matter.World
const Engine=Matter.Engine
const Bodies=Matter.Bodies

var backgroundimg,snowObj
var engine,world
var snow=[]

function preload(){
  backgroundimg=loadImage("snow3.jpg")
}

function setup() {
  createCanvas(1600,1100);
  engine=Engine.create()
  world=engine.world
  
}

function draw() {
  Engine.update(engine)
  background(backgroundimg);  
  
  rand=Math.round(random(1,4))
  if(frameCount%5===0){
    snow.push(new Snow(random(0,1600),30,50,50))
  }
  for (var j=0; j<snow.length; j++){
    snow[j].display()
  }
  
  drawSprites();
}