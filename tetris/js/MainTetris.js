"use strict";


var Tetris = (function(MainTetris) {
	
	//=================================//
	//===========FUNCTIONS=============//
	//=================================//

	MainTetris.playGame = () => {
		Tetris.draw();
		if (moveCounter === 0) {
				Tetris.createGamePiece();
		}
		myTimeout = setTimeout(function(){
			Tetris.checkIfClearDown();
			if (collisionDown){
				Tetris.turn2sTo1s();
				Tetris.checkIfRowIsFull();
				Tetris.resetLetter();
				Tetris.startOver();
				Tetris.createGamePiece();
				Tetris.playGame();
				return;
			};
			moveCounter++;
			Tetris.moveGBDown();
			Tetris.moveDown();
			Tetris.clearToMove();
			Tetris.playGame();

		}, waitTime);
	};

	MainTetris.startOver = () => {
		let randomNum = Math.floor((Math.random() * 49) + 1);
		let updateWhoseMove = (me, move, string, color, position) => {
			whoseMove.me = me;
			whoseMove.move = move;
			whoseMove.string = string;
			whoseMove.color = color;
			whoseMove.position = position;
		};
		
		if (randomNum < 7) {
			updateWhoseMove(square, moveDown, "square", "red", 0);
		} else if (randomNum >= 7 && randomNum < 14) {
			updateWhoseMove(I, moveDown, "I", "green", 1);
		} else if (randomNum >= 14 && randomNum < 21) {
			updateWhoseMove(J, moveDown, "J", "cyan", 2);
		} else if (randomNum >= 21 && randomNum < 28) {
			updateWhoseMove(L, moveDown, "L", "orange", 3);
		} else if (randomNum >= 28 && randomNum < 35) {
			updateWhoseMove(S, moveDown, "S", "yellow", 4);
		} else if (randomNum >= 35 && randomNum < 42) {
			updateWhoseMove(T, moveDown, "T", "blue", 5);
		} else if (randomNum >= 42 && randomNum <= 49) {
			updateWhoseMove(Z, moveDown, "Z", pink, 6);
		}
		moveCounter = 0;
		waitTime = 500;
	};

	MainTetris.draw = () => {
		ctx.fillStyle = whoseMove.color;  
		lastLetter = [];
		potato = whoseMove.me
		for (var i = 0; i < potato.length; i++) {
		    ctx.fillRect(potato[i].x, potato[i].y, w, h);
		    var potatoBox = {};
		    potatoBox.x = Number(potato[i].x);
		    potatoBox.y = Number(potato[i].y);
		    lastLetter.push(potatoBox);
		}
	};

	MainTetris.turn2sTo1s = () => {
		for (var i = 2; i < 22; i++) {
			for (var n = 0; n < 12; n++) {
				if (gameboard[i][n] === 2) {
					gameboard[i][n] = 1;
				}
			}
		}
	};

	MainTetris.createGamePiece = () => {
		switch (whoseMove.string) {
			case "square":
				gameboard[0] = originals.gameboardSquare[0];
				gameboard[1] = originals.gameboardSquare[1];
				break;
			case "L": 
				gameboard[0] = originals.gameboardL[0];
				gameboard[1] = originals.gameboardL[1];
				break;
			case "J": 
				gameboard[0] = originals.gameboardJ[0];
				gameboard[1] = originals.gameboardJ[1];
				break;
			case "Z": 
				gameboard[0] = originals.gameboardZ[0];
				gameboard[1] = originals.gameboardZ[1];
				break;
			case "S": 
				gameboard[0] = originals.gameboardZ[0];
				gameboard[1] = originals.gameboardZ[1];
				break;
			case "I": 
				gameboard[0] = originals.gameboardI[0];
				gameboard[1] = originals.gameboardI[1];
				break;
			case "T":
				gameboard[0] = originals.gameboardT[0];
				gameboard[1] = originals.gameboardT[1];
				break;
			}
			
		}
	};

	return MainTetris;

})(Tetris || {});

