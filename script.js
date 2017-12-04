var snake = document.querySelector(".snake");
var main = document.querySelector(".main");
var posTop = 0;
var posLeft = 0;
var snakeSize = 15;
var time = 200;

// -------main snake intervals star----------//
var topinterval;
var leftinterval;
var rightinterval;
var bottominterval;
// -------main snake intervals end----------//




// -------baby snakes itervals starts------ //
var topSnakesInterval;
var leftSnakesInterval;
var rightSnakesInterval;
var bottomSnakesInterval;
// -------baby snakes itervals end------ //



// -------baby snakes valiables strat-------//
var snakes;
var chechiking = false;
var counter=true;
// -------baby snakes valiables end-------//



// -------snake baby counter variables start----//
var snakesCounter = 1;
var ateSnakes=0;
var topSnakePos;
var leftSnakePos;

// -------snake baby counter variables end------//


function TOP(){
		if(counter==true){
			createSnake();
			counter= false;
		}
			posTop-=snakeSize;
			snake.style.top = posTop+"px";
			snakes = document.querySelectorAll(".snake");
		if(snakes[snakesCounter].style.top==snake.style.top&&snakes[snakesCounter].style.left==snake.style.left){
			chechiking = true;
			counter=true;	
			snakesCounter++;
			ateSnakes++;		
		}
		if(chechiking == true){
			topSnakePos = posTop;
			topSnakes(topSnakePos);
		}
}
function BOTTOM(){	
		if(counter==true){
			createSnake();
			counter=false;
		}
			posTop+=snakeSize;
			snake.style.top = posTop+"px";
			snakes = document.querySelectorAll(".snake");
		if(snakes[snakesCounter].style.top==snake.style.top&&snakes[snakesCounter].style.left==snake.style.left){
			chechiking = true;
			counter=true;
			snakesCounter++;
			ateSnakes++;
		}
		if(chechiking == true){
			topSnakePos = posTop;
			bottomSnakes(topSnakePos);
			
		}
}
function LEFT(){
		if(counter==true){
			createSnake();
			counter=false;
		}
			posLeft-=snakeSize;
			snake.style.left = posLeft+"px";
			snakes = document.querySelectorAll(".snake");
		if(snakes[snakesCounter].style.top==snake.style.top&&snakes[snakesCounter].style.left==snake.style.left){
			chechiking = true;
			counter=true;
			snakesCounter++;
			ateSnakes++;
		}
		if(chechiking == true){
			leftSnakePos = posLeft
			leftSnakes(leftSnakePos);
		}
}
function RIGHT(){
		if(counter==true){
			createSnake();
			counter = false;
		}
			posLeft+=snakeSize;
			snake.style.left = posLeft+"px";
			snakes = document.querySelectorAll(".snake");
		if(snakes[snakesCounter].style.top==snake.style.top&&snakes[snakesCounter].style.left==snake.style.left){
			chechiking = true;
			counter=true;
			snakesCounter++;
			ateSnakes++;
		}
		if(chechiking == true){
			leftSnakePos = posLeft;
			rightSnakes(leftSnakePos)
		}
}


function topSnakes(top){
	for(var i=1; i<=ateSnakes;i++){
		top+=snakeSize;
		snakes[i].style.left = posLeft+"px";
		snakes[i].style.top = top+"px";
	}
}

function bottomSnakes(top){
	for(var i =1; i<=ateSnakes;i++){
		top-=snakeSize;
		snakes[i].style.left = posLeft+"px";
		snakes[i].style.top = top+"px";
	}
}

function leftSnakes(left){
	for(var i =1; i<=ateSnakes;i++){
		left+=snakeSize;
		snakes[i].style.top = posTop+"px";
		snakes[i].style.left = left+"px";
	}
}
function rightSnakes(left){
	for(var i =1; i<=ateSnakes;i++){
		left-=snakeSize;
		snakes[i].style.top = posTop+"px";
		snakes[i].style.left = left+"px";
	}
}







var next=true;
var prev=true;
var up=true;
var down=true;

window.addEventListener("keydown",function(event){	
	if(event.which==37){
		if(prev==true){
			leftinterval=setInterval(LEFT, time);
			clearInterval(bottominterval);
			clearInterval(rightinterval);
			clearInterval(topinterval);
			prev = false;
			next = true;
			up = true;
			down = true;
		}		
	}else if (event.which==38){
		if(up==true){
			topinterval = setInterval(TOP, time);
			clearInterval(bottominterval);
			clearInterval(rightinterval);
			clearInterval(leftinterval);
			up = false;
			next = true;
			prev = true;
			dow = true;
		}
	}else if (event.which==39){
		if(next == true){
			rightinterval = setInterval(RIGHT, time);
			clearInterval(bottominterval);
			clearInterval(topinterval);
			clearInterval(leftinterval);
			next = false;
			up = true;
			prev = true;
			down = true;
		}
	}else if(event.which==40){
		if(down==true){
			bottominterval = setInterval(BOTTOM, time);
			clearInterval(topinterval);
			clearInterval(rightinterval);
			clearInterval(leftinterval);
			down = false;
			up = true;
			next = true;
			prev = true;
		}
	}
})

var score = document.querySelector(".score");
var scoreCount=0;
function createSnake(){	
	var r = Math.floor(Math.random()*250+1);
	var g = Math.floor(Math.random()*250+1);
	var b = Math.floor(Math.random()*250+1);
	var snake = document.createElement("div");
	snake.setAttribute("class", "snake");
	var top = Math.floor(Math.random()*400+1);
	var left = Math.floor(Math.random()*800+1);
	while (top%snakeSize != 0 || left%snakeSize != 0||top>380||left>780){
		top = Math.floor(Math.random()*400+1);
		left = Math.floor(Math.random()*800+1);
	}
	snake.style.top = top+"px";
	snake.style.left = left+"px";
	snake.style.background = "rgba("+r+","+g+","+b+", 1)";
	main.appendChild(snake);
	score.innerHTML = scoreCount;
	score.style.display = "block";
	scoreCount++;
}