function Shape(){
	this.positions = [];
	this.center = [];
	this.x = 7;
	this.y = 1;
	this.backgroundColor;
	this.blockType;
	this.rotate = function(){}
	this.drawShape = function(){}
}
function BlockShape(){
	Shape.apply(this,arguments);
	this.positions = [ [0,0],[0,1],[1,1],[1,0] ];
	this.backgroundColor = "#fefe54";
	this.blockType = 0;
	this.drawShape = function(boxId){
		var nextShape = $('<canvas></canvas>')
			.appendTo(boxId)
			.attr({'width':125,'height':100})
			.css({'position':'absolute','backgroundColor':'#2940b0','top':75,'left':45});
		var ctx = $(nextShape)[0].getContext('2d');
		//draw box outline
		ctx.beginPath();
		ctx.fillStyle = "#fefe54";
		ctx.strokeStyle = "#2b659f";
		ctx.rect(25,25,25,25);
		ctx.fill();
		ctx.stroke();
		ctx.beginPath();
		ctx.rect(50,25,25,25);
		ctx.fill();
		ctx.stroke();
		ctx.rect(25,50,25,25);
		ctx.fill();
		ctx.stroke();
		ctx.rect(50,50,25,25);
		ctx.fill();
		ctx.stroke();
		
	}
}
function LineShape(){
	Shape.apply(this,arguments);
	this.positions = [ [0,0],[-1,0],[1,0],[2,0] ]; //left to right
	this.backgroundColor = "#5ef4fe";
	this.blockType = 1;
	this.rotate = function(){
		for(var p=0; p<this.positions.length; p++){
			var newX = this.positions[p][1];
			var newY = this.positions[p][0];
			this.positions[p][0] = newX;
			this.positions[p][1] = newY;
		}
	}
	this.drawShape = function(boxId){
		var nextShape = $('<canvas></canvas>')
			.appendTo(boxId)
			.attr({'width':125,'height':100})
			.css({'position':'absolute','backgroundColor':'#2940b0','top':85,'left':55});
		var ctx = $(nextShape)[0].getContext('2d');
		//draw box outline
		ctx.beginPath();
		ctx.fillStyle = "#5ef4fe";
		ctx.strokeStyle = "#2b659f";
		ctx.rect(0,25,25,25);
		ctx.fill();
		ctx.stroke();
		ctx.beginPath();
		ctx.rect(25,25,25,25);
		ctx.fill();
		ctx.stroke();
		ctx.rect(50,25,25,25);
		ctx.fill();
		ctx.stroke();
		ctx.rect(75,25,25,25);
		ctx.fill();
		ctx.stroke();
					
	}
}
function LShape(){
	Shape.apply(this,arguments);
	this.positions = [ [0,0],[-1,0],[1,0],[1,-1] ]; //left to right and up
	this.backgroundColor = "#ffa840";
	this.blockType = 2;
	this.rotate = function(){
		for(var p=0; p<this.positions.length; p++){
			if( this.positions[p][0] == -1 && this.positions[p][1] == 0){
				this.positions[p][0] = 0;
				this.positions[p][1] = -1;
			} else if( this.positions[p][0] == 0 && this.positions[p][1] == -1){
				this.positions[p][0] = 1;
				this.positions[p][1] = 0;
			}else if( this.positions[p][0] == 1 && this.positions[p][1] == 0){
				this.positions[p][0] = 0;
				this.positions[p][1] = 1;
			}else if( this.positions[p][0] == 0 && this.positions[p][1] == 1){
				this.positions[p][0] = -1;
				this.positions[p][1] = 0;
			}else if( this.positions[p][0] == 1 && this.positions[p][1] == -1){
				this.positions[p][0] = 1;
				this.positions[p][1] = 1;
			}else if( this.positions[p][0] == 1 && this.positions[p][1] == 1){
				this.positions[p][0] = -1;
				this.positions[p][1] = 1;
			}else if( this.positions[p][0] == -1 && this.positions[p][1] == 1){
				this.positions[p][0] = -1;
				this.positions[p][1] = -1;
			}else if( this.positions[p][0] == -1 && this.positions[p][1] == -1){
				this.positions[p][0] = 1;
				this.positions[p][1] = -1;
			}
		}
	}
	this.drawShape = function(boxId){
		var nextShape = $('<canvas></canvas>')
			.appendTo(boxId)
			.attr({'width':125,'height':100})
			.css({'position':'absolute','backgroundColor':'#2940b0','top':75,'left':55});
		var ctx = $(nextShape)[0].getContext('2d');
		//draw box outline
		ctx.beginPath();
		ctx.fillStyle = "#ffa840";
		ctx.strokeStyle = "#2b659f";
		ctx.rect(0,25,25,25);
		ctx.fill();
		ctx.stroke();
		ctx.beginPath();
		ctx.rect(0,50,25,25);
		ctx.fill();
		ctx.stroke();
		ctx.rect(25,50,25,25);
		ctx.fill();
		ctx.stroke();
		ctx.rect(50,50,25,25);
		ctx.fill();
		ctx.stroke();
		
	}
}
function ZShape(){
	Shape.apply(this,arguments);
	this.positions = [ [0,0],[-1,0],[0,1],[1,1] ]; //left right down right
	this.backgroundColor = "#fe3951";
	this.blockType = 3;
	this.rotate = function(){
		if( this.positions[1][0] == -1 && this.positions[1][1] == 0){
			this.positions[1][0] = 0;
			this.positions[1][1] = -1;
		} else if( this.positions[1][0] == 0 && this.positions[1][1] == -1){
			this.positions[1][0] = -1;
			this.positions[1][1] = 0;
		}
		if( this.positions[2][0] == 0 && this.positions[2][1] == 1){
			this.positions[2][0] = -1;
			this.positions[2][1] = 0;
		}else if( this.positions[2][0] == -1 && this.positions[2][1] == 0){
			this.positions[2][0] = 0;
			this.positions[2][1] = 1;
		}
		if( this.positions[3][0] == 1 && this.positions[3][1] == 1){
			this.positions[3][0] = -1;
			this.positions[3][1] = 1;
		}else if( this.positions[3][0] == -1 && this.positions[3][1] == 1){
			this.positions[3][0] = 1;
			this.positions[3][1] = 1;
		}
	}
	this.drawShape = function(boxId){
		var nextShape = $('<canvas></canvas>')
			.appendTo(boxId)
			.attr({'width':125,'height':100})
			.css({'position':'absolute','backgroundColor':'#2940b0','top':75,'left':55});
		var ctx = $(nextShape)[0].getContext('2d');
		//draw box outline
		ctx.beginPath();
		ctx.fillStyle = "#fe3951";
		ctx.strokeStyle = "#2b659f";
		ctx.rect(0,25,25,25);
		ctx.fill();
		ctx.stroke();
		ctx.beginPath();
		ctx.rect(25,25,25,25);
		ctx.fill();
		ctx.stroke();
		ctx.rect(25,50,25,25);
		ctx.fill();
		ctx.stroke();
		ctx.rect(50,50,25,25);
		ctx.fill();
		ctx.stroke();
					
	}
}
function RLShape(){
	Shape.apply(this,arguments);
	this.positions = [ [0,0],[1,0],[-1,0],[-1,-1] ]; //left down to right
	this.backgroundColor = "#5b53ff";
	this.blockType = 4;
	this.rotate = function(){
		for(var p=0; p<this.positions.length; p++){
			if( this.positions[p][0] == 1 && this.positions[p][1] == 0){
				this.positions[p][0] = 0;
				this.positions[p][1] = 1;
			} else if( this.positions[p][0] == 0 && this.positions[p][1] == 1){
				this.positions[p][0] = -1;
				this.positions[p][1] = 0;
			}else if( this.positions[p][0] == -1 && this.positions[p][1] == 0){
				this.positions[p][0] = 0;
				this.positions[p][1] = -1;
			}else if( this.positions[p][0] == 0 && this.positions[p][1] == -1){
				this.positions[p][0] = 1;
				this.positions[p][1] = 0;
			}else if( this.positions[p][0] == -1 && this.positions[p][1] == -1){
				this.positions[p][0] = 1;
				this.positions[p][1] = -1;
			}else if( this.positions[p][0] == 1 && this.positions[p][1] == -1){
				this.positions[p][0] = 1;
				this.positions[p][1] = 1;
			}else if( this.positions[p][0] == 1 && this.positions[p][1] == 1){
				this.positions[p][0] = -1;
				this.positions[p][1] = 1;
			}else if( this.positions[p][0] == -1 && this.positions[p][1] == 1){
				this.positions[p][0] = -1;
				this.positions[p][1] = -1;
			}
		}
	}
	this.drawShape = function(boxId){
		var nextShape = $('<canvas></canvas>')
			.appendTo(boxId)
			.attr({'width':125,'height':100})
			.css({'position':'absolute','backgroundColor':'#2940b0','top':75,'left':55});
		var ctx = $(nextShape)[0].getContext('2d');
		//draw box outline
		ctx.beginPath();
		ctx.fillStyle = "#5b53ff";
		ctx.strokeStyle = "#2b659f";
		ctx.rect(0,50,25,25);
		ctx.fill();
		ctx.stroke();
		ctx.beginPath();
		ctx.rect(25,50,25,25);
		ctx.fill();
		ctx.stroke();
		ctx.rect(50,50,25,25);
		ctx.fill();
		ctx.stroke();
		ctx.rect(50,25,25,25);
		ctx.fill();
		ctx.stroke();
					
	}
}
function SShape(){
	Shape.apply(this,arguments);
	this.positions = [ [0,0],[1,0],[0,1],[-1,1] ]; //left right up right
	this.backgroundColor = "#40d64f";
	this.blockType = 5;
	this.rotate = function(){
		if( this.positions[1][0] == 1 && this.positions[1][1] == 0){
			this.positions[1][0] = 0;
			this.positions[1][1] = 1;
		} else if( this.positions[1][0] == 0 && this.positions[1][1] == 1){
			this.positions[1][0] = 1;
			this.positions[1][1] = 0;
		}
		if( this.positions[2][0] == 0 && this.positions[2][1] == 1){
			this.positions[2][0] = -1;
			this.positions[2][1] = 0;
		}else if( this.positions[2][0] == -1 && this.positions[2][1] == 0){
			this.positions[2][0] = 0;
			this.positions[2][1] = 1;
		}
		if( this.positions[3][0] == -1 && this.positions[3][1] == 1){
			this.positions[3][0] = -1;
			this.positions[3][1] = -1;
		}else if( this.positions[3][0] == -1 && this.positions[3][1] == -1){
			this.positions[3][0] = -1;
			this.positions[3][1] = 1;
		}
	}
	this.drawShape = function(boxId){
		var nextShape = $('<canvas></canvas>')
			.appendTo(boxId)
			.attr({'width':125,'height':100})
			.css({'position':'absolute','backgroundColor':'#2940b0','top':75,'left':55});
		var ctx = $(nextShape)[0].getContext('2d');
		//draw box outline
		ctx.beginPath();
		ctx.fillStyle = "#40d64f";
		ctx.strokeStyle = "#2b659f";
		ctx.rect(0,50,25,25);
		ctx.fill();
		ctx.stroke();
		ctx.beginPath();
		ctx.rect(25,50,25,25);
		ctx.fill();
		ctx.stroke();
		ctx.rect(25,25,25,25);
		ctx.fill();
		ctx.stroke();
		ctx.rect(50,25,25,25);
		ctx.fill();
		ctx.stroke();
		
	}
}
function HillShape(){
	Shape.apply(this,arguments);
	this.positions = [[0,0],[-1,0],[0,-1],[1,0]];
	this.backgroundColor = "#bb4bfe";
	this.blockType = 6;
	this.rotate = function(){
		for(var p=0; p<this.positions.length; p++){
			if( this.positions[p][0] == 1 && this.positions[p][1] == 0){
				this.positions[p][0] = 0;
				this.positions[p][1] = 1;
			} else if( this.positions[p][0] == 0 && this.positions[p][1] == 1){
				this.positions[p][0] = -1;
				this.positions[p][1] = 0;
			}else if( this.positions[p][0] == -1 && this.positions[p][1] == 0){
				this.positions[p][0] = 0;
				this.positions[p][1] = -1;
			}else if( this.positions[p][0] == 0 && this.positions[p][1] == -1){
				this.positions[p][0] = 1;
				this.positions[p][1] = 0;
			}
		}
	}
	this.drawShape = function(boxId){
		var nextShape = $('<canvas></canvas>')
			.appendTo(boxId)
			.attr({'width':125,'height':100})
			.css({'position':'absolute','backgroundColor':'#2940b0','top':75,'left':55});
		var ctx = $(nextShape)[0].getContext('2d');
		//draw box outline
		ctx.beginPath();
		ctx.fillStyle = "#bb4bfe";
		ctx.strokeStyle = "#2b659f";
		ctx.rect(0,50,25,25);
		ctx.fill();
		ctx.stroke();
		ctx.beginPath();
		ctx.rect(25,50,25,25);
		ctx.fill();
		ctx.stroke();
		ctx.rect(50,50,25,25);
		ctx.fill();
		ctx.stroke();
		ctx.rect(25,25,25,25);
		ctx.fill();
		ctx.stroke();
		
	}
}

function Menu(){
	this.menu = $("<div></div>")
		.attr({"id":"menu"})
		.css({"background-color":"#211b55", "position":"relative", "width":"1900px", "height":"860px"})
		.appendTo("#board");
	this.logo = $("<img>")
		.attr({"id":"logo","src":"tetris.png"})
		.css({"position":"absolute","top":"100px","left":"720px"})
		.appendTo("#menu");
	this.playButton = $("<input>")
		.attr({"type":"button","id":"play","value":"PLAY GAME","onclick":"playGame()"})
		.css({"position":"absolute", "width":"250px", "height":"100px", "top":"490px", "left":"825px", "font-size":"30px", "font":"impact"})
		.click(function(){
			$("#menu").fadeOut("slow");
		})
		.appendTo("#menu");
	this.displayInstruction = $("<input>")
		.attr({"type":"button", "id":"instruction", "value":"INSTRUCTIONS"})
		.css({"position":"absolute", "width":"250px", "height":"100px", "top":"655px", "left":"825px", "font-size":"30px", "font":"impact"})
		.click(function(){
			$("#instructions").toggle();
		})
		.appendTo("#menu");
	this.instructions = $("<div>HOW TO PLAY TETRIS: Complete rows to score. If the blocks reach the top, game over.<br><br>CONTROLS:<br> Use the left arrow key to move left. Use the right arrow key to move right. Use the up arrow key to rotate. Use the spacebar to drop the block. Use 'P' to pause the game. Use 'SHIFT' to hold a block.</div>")
		.attr({"id":"instructions"})
		.css({"position":"absolute","width":"475px","height":"475px","top":"150px","left":"694px", "font-size":"35px", "background-color":"#001d36","color":"white","padding":"15px","opacity":"0.98"})
		.hide()
		.appendTo("#menu");
	this.pause = $("<div>PAUSE</div>")
		.attr({"id":"pause"})
		.css({"background-color":"#322e5a","font-size":"130px","left":"625px","top":"100px","position":"absolute", "width":"510px", "height":"660px","text-align":"center","line-height":"600px","opacity":".9","display":"none", "color":"white"})
		.appendTo("#board");	
	this.replay = $("<div>GAME OVER<br>Play Again?</div>")
		.attr({"id":"replay"})
		.css({"background-color":"#322e5a","font-size":"100px", "position":"relative", "width":"1900px", "height":"860px","text-align":"center","line-height":"275px","display":"none", "opacity":"0.9", "color":"white"})
		.appendTo("#board");
	this.replayButton = $("<input>")
		.attr({"type":"button","id":"replayA","value":"YES"})
		.css({"position":"absolute", "width":"250px", "height":"100px", "top":"600px", "left":"625px", "font-size":"30px", "font":"impact"})
		.click(function(){
			$('#replay').css({"display": "none"});
			document.getElementById('score').innerHTML = 0;
			score =0;
			pause = false;
			startGame();
			console.log('here')
		})
		.appendTo("#replay");
	this.replayButton2 = $("<input>")
		.attr({"type":"button","id":"replayB","value":"NO"})
		.css({"position":"absolute", "width":"250px", "height":"100px", "top":"600px", "left":"1025px", "font-size":"30px", "font":"impact"})
		.click(function(){
			$('#replay').css({"display": "none"});
			$('#end')[0].innerHTML = "YOUR SCORE WAS: " +(score/16)+ " ";
			$('#end').css({"display": "block"});
		})
		.appendTo("#replay");
	this.replay = $("<div></div>")
		.attr({"id":"end"})
		.css({"background-color":"#322e5a","font-size":"100px", "position":"relative", "width":"1900px", "height":"860px","text-align":"center","line-height":"700px","display":"none", "color":"white"})
		.appendTo("#board");
}

function Square(x,y) {
			this.div = $("<div></div>")
				.attr({"class":"squares","name":"open","id":x+","+y})
				.css({"z-index":"1","width":"30px","height":"30px","box-shadow":"0px 0px 0px 1px #2b659f inset","float":"left"})
				//.text( x+","+y )
				.appendTo("#game");
			this.x = x;
			this.y = y;
			this.blockType = -1;
			this.backgroundColor = "#0a223d";
}