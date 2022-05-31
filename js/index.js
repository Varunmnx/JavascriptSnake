let directions ={'x':0,'y':0};
const foodSound =new Audio('../music/food.mp3');
const gameOverSound = new Audio('../music/gameover.mp3');
const moveSound  = new Audio('../music/move.mp3')
const musicSound = new Audio("../music/music.mp3")
let speed = 2;
let lastPaintTime =0;
let SnakeArr =[
    {x:13,y:15}
]
food ={x:13,y:15}
//for only paint in above .5 seconds
function main(ctime){
    window.requestAnimationFrame(main);
    if ((ctime -lastPaintTime)/1000 < 1/speed){
     return  ; 
    }
    lastPaintTime=ctime;
    gameEngine();

}
function gameEngine( ){
    //update snake array and food
    //display the snake
    board.innerHTML = "";
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;

        if(index === 0){
            snakeElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });
   //display the food
   foodElement = document.createElement('div');
   foodElement.style.gridRowStart = food.y;
   foodElement.style.gridColumnStart = food.x;
   foodElement.classList.add('food');
   board.appendChild(foodElement);


}
