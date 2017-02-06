"use strict";


var Tetris = (function(NewPiece) {
	
	//=================================//
	//===========JSON UPLOAD===========//
	//=================================//

	NewPiece.resetLetter = () => {

		let shapeReset = (shape) => {
			for (var i = 0; i < square.length; i++) {
				shape[i].x = Number(originals.shape[i].x);
				shape[i].y = Number(originals.shape[i].y);
			}
		};

		switch (whoseMove.string) {

			case "square": 
				shapeReset(square);
			case "L": 
				shapeReset(L);
			case "J": 
				shapeReset(J);
			case "Z": 
				shapeReset(Z);
			case "S":
				shapeReset(S);
			case "I":
				shapeReset(I);
			case "T":
				shapeReset(T);
			}
		}
	};


	return NewPiece;

})(Tetris || {});
