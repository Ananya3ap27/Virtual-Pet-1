//Create variables here
var  dog, happyDog, database, foodS = 20, foodStock,dogImg,dogHImg;
function preload()
{
  //load images here
  dogImg=loadImage("Dog.png");
  dogHImg=loadImage("happydog.png");
}

function setup() {
	database=firebase.database();
    canvas=createCanvas(500,500);

    dog=createSprite(250,250,10,10);
    dog.addImage(dogImg);
    dog.scale=0.2;

    getCount();
    update(20);
}


function draw() { 
  background(rgb(200,170,140));
  if(keyWentDown(UP_ARROW)){
    if(foodS<=0){
      foodS=0;
    }else{
      foodS=foodS-1;
    }
    update(foodS);
    dog.addImage(dogHImg);
  }
  
  text("Food : "+foodS,250,100);
  drawSprites();

  
  //stroke ("white"); 
}
function getCount(){
  var foodStock=database.ref('food');
  foodStock.on("value",function(data){
      foodS=data.val();
  });
}
function update(count){
  database.ref('/').update({
      food:count
  })
}


