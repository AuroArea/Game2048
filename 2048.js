(function(){
	game = new gameManager();

	//37:left, 38:up, 39:right, 40:down
	window.onkeydown = function(event){
		game.intializeGame();
		if(event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40){
			var direction = event.keyCode;
			game.move(direction);
		}
	}
})();


function gameManager(){
	 this.startTiles = 4;
	 this.cellScore = 0;
	 this.totalScoreOfCell = 0;
	 this.noOfRows = document.getElementsByClassName('row').length;
	 this.noOfCols = document.getElementsByClassName('col').length;
};

gameManager.prototype.intializeGame = function(){
	var arr = [];
	for(var x = 0; x < 4; x++){
	    arr[x] = [];    
	    for(var y = 0; y < 4; y++){ 
	    	if(x==0 & y==4 ){
	    		arr[x][y] =  Math.random() < 0.9 ? 6 : 4 ;
	    	}
	    	else if((x==1 & y==1){
	    		arr[x][y] = Math.random() < 0.9 ? 2 : 4 ;
	    	}
	    	else{
	    		arr[x][y] = undefined;
	    	}
	    }    
	}
	
}

gameManager.prototype.move = function (direction){
	 console.log(direction);


	// var mousePos;
   
 //    setInterval(getNewMousePosition, 100); 

 //    function handleMouseMove(event) {
 //        event = event || window.event; 
 //        mousePos = {
 //            x1: event.clientX,
 //            y1: event.clientY
 //        };
 //    }

 //    function getNewMousePosition() {
 //       newMousePos = {
 //       		x2: event.clientX,
 //       		y2: event.clientY
 //       };
 //    }
	  
}

//if down
gameManager.prototype.addScore = function (){
	this.totalScoreOfCell = this.getCellValue(direction);
}






