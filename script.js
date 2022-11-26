let phase = 1,playerTurn,otherPlayer,flagToDisable, playerOneBoard = 0, playerTwoBoard = 0;

function moveAdjacent(currentid){
	currentid = '#' + currentid;

	if(currentid === '#zero'){
		if(!$('#one').hasClass('pRed') && !$('#one').hasClass('pBlue')){
			$('#one').addClass('highlight-nodes');
		}
		if(!$('#nine').hasClass('pRed') && !$('#nine').hasClass('pBlue')){
			$('#nine').addClass('highlight-nodes');
		}
	}
	else if(currentid === '#one'){
		if(!$('#zero').hasClass('pRed') && !$('#zero').hasClass('pBlue')){
			$('#zero').addClass('highlight-nodes');
		}
		if(!$('#four').hasClass('pRed') && !$('#four').hasClass('pBlue')){
			$('#four').addClass('highlight-nodes');
		}
		if(!$('#two').hasClass('pRed') && !$('#two').hasClass('pBlue')){
			$('#two').addClass('highlight-nodes');
		}
	}
	else if(currentid === '#two'){
		if(!$('#one').hasClass('pRed') && !$('#one').hasClass('pBlue')){
			$('#one').addClass('highlight-nodes');
		}
		if(!$('#fourteen').hasClass('pRed') && !$('#fourteen').hasClass('pBlue')){
			$('#fourteen').addClass('highlight-nodes');
		}
	}
	else if(currentid === '#three'){
		if(!$('#four').hasClass('pRed') && !$('#four').hasClass('pBlue')){
			$('#four').addClass('highlight-nodes');
		}
		if(!$('#ten').hasClass('pRed') && !$('#ten').hasClass('pBlue')){
			$('#ten').addClass('highlight-nodes');
		}
	}
	else if(currentid === '#four'){
		if(!$('#five').hasClass('pRed') && !$('#five').hasClass('pBlue')){
			$('#five').addClass('highlight-nodes');
		}
		if(!$('#one').hasClass('pRed') && !$('#one').hasClass('pBlue')){
			$('#one').addClass('highlight-nodes');
		}
		if(!$('#three').hasClass('pRed') && !$('#three').hasClass('pBlue')){
			$('#three').addClass('highlight-nodes');
		}
		if(!$('#seven').hasClass('pRed') && !$('#seven').hasClass('pBlue')){
			$('#seven').addClass('highlight-nodes');
		}
	}
	else if(currentid === '#five'){
		if(!$('#four').hasClass('pRed') && !$('#four').hasClass('pBlue')){
			$('#four').addClass('highlight-nodes');
		}
		if(!$('#thirteen').hasClass('pRed') && !$('#thirteen').hasClass('pBlue')){
			$('#thirteen').addClass('highlight-nodes');
		}
	}
	else if(currentid === '#six'){
		if(!$('#seven').hasClass('pRed') && !$('#seven').hasClass('pBlue')){
			$('#seven').addClass('highlight-nodes');
		}
		if(!$('#eleven').hasClass('pRed') && !$('#eleven').hasClass('pBlue')){
			$('#eleven').addClass('highlight-nodes');
		}
	}
	else if(currentid === '#seven'){
		if(!$('#six').hasClass('pRed') && !$('#six').hasClass('pBlue')){
			$('#six').addClass('highlight-nodes');
		}
		if(!$('#eight').hasClass('pRed') && !$('#eight').hasClass('pBlue')){
			$('#eight').addClass('highlight-nodes');
		}
		if(!$('#four').hasClass('pRed') && !$('#four').hasClass('pBlue')){
			$('#four').addClass('highlight-nodes');
		}
	}
	else if(currentid === '#eight'){
		if(!$('#seven').hasClass('pRed') && !$('#seven').hasClass('pBlue')){
			$('#seven').addClass('highlight-nodes');
		}
		if(!$('#twelve').hasClass('pRed') && !$('#twelve').hasClass('pBlue')){
			$('#twelve').addClass('highlight-nodes');
		}
	}
	else if(currentid === '#nine'){
		if(!$('#zero').hasClass('pRed') && !$('#zero').hasClass('pBlue')){
			$('#zero').addClass('highlight-nodes');
		}
		if(!$('#twenty-one').hasClass('pRed') && !$('#twenty-one').hasClass('pBlue')){
			$('#twenty-one').addClass('highlight-nodes');
		}
		if(!$('#ten').hasClass('pRed') && !$('#ten').hasClass('pBlue')){
			$('#ten').addClass('highlight-nodes');
		}
	}
	else if(currentid === '#ten'){
		if(!$('#eleven').hasClass('pRed') && !$('#eleven').hasClass('pBlue')){
			$('#eleven').addClass('highlight-nodes');
		}
		if(!$('#nine').hasClass('pRed') && !$('#nine').hasClass('pBlue')){
			$('#nine').addClass('highlight-nodes');
		}
		if(!$('#three').hasClass('pRed') && !$('#three').hasClass('pBlue')){
			$('#three').addClass('highlight-nodes');
		}
		if(!$('#eighteen').hasClass('pRed') && !$('#eighteen').hasClass('pBlue')){
			$('#eighteen').addClass('highlight-nodes');
		}
	}
	else if(currentid === '#eleven'){
		if(!$('#ten').hasClass('pRed') && !$('#ten').hasClass('pBlue')){
			$('#ten').addClass('highlight-nodes');
		}
		if(!$('#six').hasClass('pRed') && !$('#six').hasClass('pBlue')){
			$('#six').addClass('highlight-nodes');
		}
		if(!$('#fifteen').hasClass('pRed') && !$('#fifteen').hasClass('pBlue')){
			$('#fifteen').addClass('highlight-nodes');
		}
	}
	else if(currentid === '#twelve'){
		if(!$('#thirteen').hasClass('pRed') && !$('#thirteen').hasClass('pBlue')){
			$('#thirteen').addClass('highlight-nodes');
		}
		if(!$('#eight').hasClass('pRed') && !$('#eight').hasClass('pBlue')){
			$('#eight').addClass('highlight-nodes');
		}
		if(!$('#seventeen').hasClass('pRed') && !$('#seventeen').hasClass('pBlue')){
			$('#seventeen').addClass('highlight-nodes');
		}
	}
	else if(currentid === '#thirteen'){
		if(!$('#twelve').hasClass('pRed') && !$('#twelve').hasClass('pBlue')){
			$('#twelve').addClass('highlight-nodes');
		}
		if(!$('#fourteen').hasClass('pRed') && !$('#fourteen').hasClass('pBlue')){
			$('#fourteen').addClass('highlight-nodes');
		}
		if(!$('#five').hasClass('pRed') && !$('#five').hasClass('pBlue')){
			$('#five').addClass('highlight-nodes');
		}
		if(!$('#twenty').hasClass('pRed') && !$('#twenty').hasClass('pBlue')){
			$('#twenty').addClass('highlight-nodes');
		}
	}
	else if(currentid === '#fourteen'){
		if(!$('#thirteen').hasClass('pRed') && !$('#thirteen').hasClass('pBlue')){
			$('#thirteen').addClass('highlight-nodes');
		}
		if(!$('#two').hasClass('pRed') && !$('#two').hasClass('pBlue')){
			$('#two').addClass('highlight-nodes');
		}
		if(!$('#twenty-three').hasClass('pRed') && !$('#twenty-three').hasClass('pBlue')){
			$('#twenty-three').addClass('highlight-nodes');
		}
	}
	else if(currentid === '#fifteen'){
		if(!$('#eleven').hasClass('pRed') && !$('#eleven').hasClass('pBlue')){
			$('#eleven').addClass('highlight-nodes');
		}
		if(!$('#sixteen').hasClass('pRed') && !$('#sixteen').hasClass('pBlue')){
			$('#sixteen').addClass('highlight-nodes');
		}
	}
	else if(currentid === '#sixteen'){
		if(!$('#fifteen').hasClass('pRed') && !$('#fifteen').hasClass('pBlue')){
			$('#fifteen').addClass('highlight-nodes');
		}
		if(!$('#seventeen').hasClass('pRed') && !$('#seventeen').hasClass('pBlue')){
			$('#seventeen').addClass('highlight-nodes');
		}
		if(!$('#nineteen').hasClass('pRed') && !$('#nineteen').hasClass('pBlue')){
			$('#nineteen').addClass('highlight-nodes');
		}
	}
	else if(currentid === '#seventeen'){
		if(!$('#sixteen').hasClass('pRed') && !$('#sixteen').hasClass('pBlue')){
			$('#sixteen').addClass('highlight-nodes');
		}
		if(!$('#twelve').hasClass('pRed') && !$('#twelve').hasClass('pBlue')){
			$('#twelve').addClass('highlight-nodes');
		}
	}
	else if(currentid === '#eighteen'){
		if(!$('#ten').hasClass('pRed') && !$('#ten').hasClass('pBlue')){
			$('#ten').addClass('highlight-nodes');
		}
		if(!$('#nineteen').hasClass('pRed') && !$('#nineteen').hasClass('pBlue')){
			$('#nineteen').addClass('highlight-nodes');
		}
	}
	else if(currentid === '#nineteen'){
		if(!$('#eighteen').hasClass('pRed') && !$('#eighteen').hasClass('pBlue')){
			$('#eighteen').addClass('highlight-nodes');
		}
		if(!$('#twenty').hasClass('pRed') && !$('#twenty').hasClass('pBlue')){
			$('#twenty').addClass('highlight-nodes');
		}
		if(!$('#sixteen').hasClass('pRed') && !$('#sixteen').hasClass('pBlue')){
			$('#sixteen').addClass('highlight-nodes');
		}
		if(!$('#twenty-two').hasClass('pRed') && !$('#twenty-two').hasClass('pBlue')){
			$('#twenty-two').addClass('highlight-nodes');
		}
	}
	else if(currentid === '#twenty'){
		if(!$('#thirteen').hasClass('pRed') && !$('#thirteen').hasClass('pBlue')){
			$('#thirteen').addClass('highlight-nodes');
		}
		if(!$('#nineteen').hasClass('pRed') && !$('#nineteen').hasClass('pBlue')){
			$('#nineteen').addClass('highlight-nodes');
		}
	}
	else if(currentid === '#twenty-one'){
		if(!$('#twenty-two').hasClass('pRed') && !$('#twenty-two').hasClass('pBlue')){
			$('#twenty-two').addClass('highlight-nodes');
		}
		if(!$('#nine').hasClass('pRed') && !$('#nine').hasClass('pBlue')){
			$('#nine').addClass('highlight-nodes');
		}
	}
	else if(currentid === '#twenty-two'){
		if(!$('#twenty-one').hasClass('pRed') && !$('#twenty-one').hasClass('pBlue')){
			$('#twenty-one').addClass('highlight-nodes');
		}
		if(!$('#twenty-three').hasClass('pRed') && !$('#twenty-three').hasClass('pBlue')){
			$('#twenty-three').addClass('highlight-nodes');
		}
	}
	else if(currentid === '#twenty-three'){
		if(!$('#twenty-two').hasClass('pRed') && !$('#twenty-two').hasClass('pBlue')){
			$('#twenty-two').addClass('highlight-nodes');
		}
		if(!$('#fourteen').hasClass('pRed') && !$('#fourteen').hasClass('pBlue')){
			$('#fourteen').addClass('highlight-nodes');
		}
	}
}

function checkMill(player,nodeID){
	nodeID = '#' + nodeID;

	if(player === 'pRed'){
		otherPlayer = '.pBlue';
	}
	else{
		otherPlayer = '.pRed';
	}

	flagToDisable = false;
	if(nodeID === '#zero'){
		if($('#one').hasClass(player) && $('#two').hasClass(player)){
			//highlight all other player's pieces so user can select one to remove
			$(otherPlayer).addClass('highlight-nodes');
			//unbind the click ability of all playernodes
			flagToDisable = true; 
		}
		else if($('#nine').hasClass(player) && $('#twenty-one').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
	}
	else if(nodeID === '#one'){
		if($('#zero').hasClass(player) && $('#two').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
		else if($('#four').hasClass(player) && $('#seven').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
	}
	else if(nodeID === '#two'){
		if($('#zero').hasClass(player) && $('#one').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
		else if($('#twenty-three').hasClass(player) && $('#fourteen').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
	}
	else if(nodeID === '#three'){
		if($('#four').hasClass(player) && $('#five').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
		else if($('#ten').hasClass(player) && $('#eighteen').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
	}
	else if(nodeID === '#four'){
		if($('#five').hasClass(player) && $('#three').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
		else if($('#one').hasClass(player) && $('#seven').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
	}
	else if(nodeID === '#five'){
		if($('#three').hasClass(player) && $('#four').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
		else if($('#thirteen').hasClass(player) && $('#twenty').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
	}
	else if(nodeID === '#six'){
		if($('#seven').hasClass(player) && $('#eight').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
		else if($('#eleven').hasClass(player) && $('#fifteen').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
	}
	else if(nodeID === '#seven'){
		if($('#six').hasClass(player) && $('#eight').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
		else if($('#one').hasClass(player) && $('#four').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
	}
	else if(nodeID === '#eight'){
		if($('#six').hasClass(player) && $('#seven').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
		else if($('#twelve').hasClass(player) && $('#seventeen').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
	}
	else if(nodeID === '#nine'){
		if($('#ten').hasClass(player) && $('#eleven').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
		else if($('#zero').hasClass(player) && $('#twenty-one').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
	}
	else if(nodeID === '#ten'){
		if($('#nine').hasClass(player) && $('#eleven').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
		else if($('#three').hasClass(player) && $('#eighteen').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
	}
	else if(nodeID === '#eleven'){
		if($('#nine').hasClass(player) && $('#ten').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
		else if($('#six').hasClass(player) && $('#fifteen').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
	}
	else if(nodeID === '#twelve'){
		if($('#thirteen').hasClass(player) && $('#fourteen').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
		else if($('#eight').hasClass(player) && $('#seventeen').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
	}
	else if(nodeID === '#thirteen'){
		if($('#twelve').hasClass(player) && $('#fourteen').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
		else if($('#five').hasClass(player) && $('#twenty').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
	}
	else if(nodeID === '#fourteen'){
		if($('#twelve').hasClass(player) && $('#thirteen').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
		else if($('#two').hasClass(player) && $('#twenty-three').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
	}
	else if(nodeID === '#fifteen'){
		if($('#sixteen').hasClass(player) && $('#seventeen').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
		else if($('#six').hasClass(player) && $('#eleven').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
	}
	else if(nodeID === '#sixteen'){
		if($('#fifteen').hasClass(player) && $('#seventeen').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
		else if($('#nineteen').hasClass(player) && $('#twenty-two').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
	}
	else if(nodeID === '#seventeen'){
		if($('#fifteen').hasClass(player) && $('#sixteen').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
		else if($('#eight').hasClass(player) && $('#twelve').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
	}
	else if(nodeID === '#eighteen'){
		if($('#nineteen').hasClass(player) && $('#twenty').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
		else if($('#three').hasClass(player) && $('#ten').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
	}
	else if(nodeID === '#nineteen'){
		if($('#eighteen').hasClass(player) && $('#twenty').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
		else if($('#twenty-two').hasClass(player) && $('#sixteen').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
	}
	else if(nodeID === '#twenty'){
		if($('#eighteen').hasClass(player) && $('#nineteen').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
		else if($('#five').hasClass(player) && $('#thirteen').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
	}
	else if(nodeID === '#twenty-one'){
		if($('#twenty-two').hasClass(player) && $('#twenty-three').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
		else if($('#zero').hasClass(player) && $('#nine').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
	}
	else if(nodeID === '#twenty-two'){
		if($('#twenty-one').hasClass(player) && $('#twenty-three').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
		else if($('#nineteen').hasClass(player) && $('#sixteen').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
	}
	else if(nodeID === '#twenty-three'){
		if($('#twenty-one').hasClass(player) && $('#twenty-two').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
		else if($('#two').hasClass(player) && $('#fourteen').hasClass(player)){
			$(otherPlayer).addClass('highlight-nodes');
			flagToDisable = true;
		}
	}

	if(flagToDisable){
		return true;
	}
	else{
		return false;
	}
}

$(document).ready(function(){
	let playerOnePieces = 9, playerTwoPieces = 9, removePhase = false;

	$('.node').click(function(){

		if(phase === 1 && !removePhase){
			if(playerTurn === "pRed"){
				//signal that it is this current player's turn
				$('.player1').fadeOut(50).slideDown(600);
				//if that node doesn't have a piece on it
				if(!$(this).hasClass("pRed") && !$(this).hasClass("pBlue")){
					$(this).addClass(playerTurn);

					if(checkMill(playerTurn,this.id)){
						$('.node').addClass('is-disabled');
						$('.pBlue').removeClass('is-disabled');
						removePhase = true;
						playerOnePieces--;
						playerOneBoard++;
					}
					else{
						playerTurn = "pBlue";	//change turn
						playerOnePieces--;
						playerOneBoard++;
					}
				}
				else{
					alert("Please select a correct location");
				}
			}
			else{
				$('.player2').fadeOut(50).slideDown(600);
				if(!$(this).hasClass("pRed") && !$(this).hasClass("pBlue")){
					$(this).addClass(playerTurn);

					if(checkMill(playerTurn,this.id)){
						$('.node').addClass('is-disabled');
						$('.pRed').removeClass('is-disabled');
						removePhase = true;
						playerTwoPieces--;
						playerTwoBoard++;
					}
					else{
						playerTurn = "pRed";	//change turn
						playerTwoPieces--;
						playerTwoBoard++;
					}
				}
				else{
					alert("Please select a correct location");
				}
			}
		}
		else if(phase === 2 && !removePhase){
			if(playerTurn === 'pRed'){
				$('.player1').fadeOut(50).slideDown(600);
				if($(this).hasClass('pRed')){
					$(this).removeClass('pRed');
					moveAdjacent(this.id);	//highlights possible move locations
					$('.node').addClass('is-disabled'); //check to make sure that next click node is highlight-nodes or else do nothing(disabled class)
					$('.highlight-nodes').removeClass('is-disabled');
				}
				else if($(this).hasClass('highlight-nodes')) {

					//put the new location of the token(illusion of sliding)
					$(this).addClass('pRed');
					$('.highlight-nodes').removeClass('highlight-nodes');
					$('.node').removeClass('is-disabled');
					//check if we form a mill after every slide
					if(checkMill(playerTurn,this.id)){
						$('.node').addClass('is-disabled');
						$('.pBlue').removeClass('is-disabled');
						removePhase = true;
					}
					else{
						playerTurn = "pBlue";	//change turn
					}
				}
				else{
					alert('Please make a correct move');
				}

				if(playerTwoBoard <= 3){	
					phase = 3;
				}
			}
			else{
				$('.player2').fadeOut(50).slideDown(600);
				if($(this).hasClass('pBlue')){
					$(this).removeClass('pBlue');
					moveAdjacent(this.id);
					$('.node').addClass('is-disabled'); //check to make sure that next click node is highlight-nodes or else do nothing(disabled class)
					$('.highlight-nodes').removeClass('is-disabled');
				}
				else if($(this).hasClass('highlight-nodes')) {

					//put the new location of the token(illusion of sliding)
					$(this).addClass('pBlue');
					$('.highlight-nodes').removeClass('highlight-nodes');
					$('.node').removeClass('is-disabled');
					//check if we form a mill after every slide
					if(checkMill(playerTurn,this.id)){
						$('.node').addClass('is-disabled');
						$('.pRed').removeClass('is-disabled');
						removePhase = true;
					}
					else{
						playerTurn = "pRed";	//change turn
					}
				}
				else{
					alert('Please make a correct move');
				}

				if(playerOneBoard <= 3){
					alert('changing to phase 3');
					phase = 3;
				}
			}
		}
		else if(phase === 3 && !removePhase){
			if(playerTurn === 'pRed'){
				if($(this).hasClass('pRed')){
					//pick a piece to move
					$('.node').addClass('highlight-nodes');	//highlight all the pieces
					$('.pRed').removeClass('highlight-nodes');	//only keep empty nodes highlighted
					$('.pBlue').removeClass('highlight-nodes');
					$(this).removeClass('pRed');	//remove piece

					//remove ability to click other spots, only click highlighted spots
					$('.node').addClass('is-disabled');
					$('.highlight-nodes').removeClass('is-disabled');
				}
				else if($(this).hasClass('highlight-nodes')){
					$(this).addClass('pRed');
					$('.highlight-nodes').removeClass('highlight-nodes');
					$('.node').removeClass('is-disabled');
					if(checkMill(playerTurn,this.id)){
						$('.node').addClass('is-disabled');
						$('.pBlue').removeClass('is-disabled');
						removePhase = true;
					}
					else{
						playerTurn = "pBlue";
					}

					//check if we have to switch back to phase 2 for the other player
					if(playerTwoBoard > 3){
						phase = 2;
					}
				}
			}
			else{
				if($(this).hasClass('pBlue')){
					//pick a piece to move
					$('.node').addClass('highlight-nodes');	//highlight all the pieces
					$('.pRed').removeClass('highlight-nodes');	//only keep empty nodes highlighted
					$('.pBlue').removeClass('highlight-nodes');
					$(this).removeClass('pBlue');	//remove piece

					//remove ability to click other spots, only click highlighted spots
					$('.node').addClass('is-disabled');
					$('.highlight-nodes').removeClass('is-disabled');
				}
				else if($(this).hasClass('highlight-nodes')){
					$(this).addClass('pBlue');
					$('.highlight-nodes').removeClass('highlight-nodes');
					$('.node').removeClass('is-disabled');
					if(checkMill(playerTurn, this.id)){
						$('.node').addClass('is-disabled');
						$('.pRed').removeClass('is-disabled');
						removePhase	= true;
					}
					else{
						playerTurn = "pRed";
					}

					if(playerOneBoard > 3){
						phase = 2;
					}
				}
			}
		}
		else if(removePhase){	//remove phase, used for any phase
			$(this).removeClass(otherPlayer.substring(1));

			//decrease number of tokens on board
			if(otherPlayer === '.pBlue'){
				playerTwoBoard--;
				if(playerTwoBoard <= 3 && phase === 2){
					phase = 3;
				}
			}
			else{
				playerOneBoard--;
				if(playerOneBoard <= 3 && phase === 2){
					phase = 3;
				}
			}

			$('.highlight-nodes').removeClass('highlight-nodes');
			$('.node').removeClass('is-disabled');
			removePhase = false;
			playerTurn = otherPlayer.substring(1);

		}

		//if no more pieces to place for both players
		if(playerOnePieces === 0 && playerTwoPieces === 0 && phase === 1){
			phase = 2;
		}

		/*
		if(phase === 2 && (playerOneBoard <= 3 || playerTwoBoard <= 3) && ){	
			//need to add another expression so it doesn't keep switching back to phase 3 even if we try to change to phase 2 for the 
			//other player. This is the case because phase 3 is associated with each player, not the game.
			phase = 3;
		}*/

		if((playerOneBoard < 3 || playerTwoBoard < 3) && phase === 3){
			alert("Game Over!");
			$('.node').addClass('is-disabled');
		}

		$('.player1').html(playerOnePieces + ' Pieces');
		$('.player2').html(playerTwoPieces + ' Pieces');
	});
	
});