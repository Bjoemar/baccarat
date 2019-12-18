var socket = io();

socket.emit("newVisitor2");

var banker_score = 0;
var banker_pair = 0;
var player_score = 0;
var player_pair = 0;
var tie_score = 0;
var natural_score = 0;

var prev_Win;

var rl = 0; // Result Left

var brd = 0; // Bottom Result Down

var cb_content = 0;

var bottom_empty = true;

socket.on('loadData',function(data){

	runToptables(data);

});

socket.on("bankerWin",function(data){
	console.log(data)
	var winner = data.winner;
	if (winner == 'tie') 
	{
		tieChips(prev_Win);

		b_tie()
		b_playerPair(data.playerPair);
		b_bankerPair(data.bankerPair);
		tie_score++;
		$('#tie_score').html(tie_score);
	
	} 
	else if (winner == prev_Win) {

		if (winner == 'banker')
		{
			bankerInside();
			b_banker();
			b_playerPair(data.playerPair);
			b_bankerPair(data.bankerPair);
				// 	}
			prev_Win = winner;
			banker_score++;
			$('#banker_score').html(banker_score)

		}
		else if (winner == 'player')
		{
			playerInside();
			b_player();
			b_playerPair(data.playerPair);
			b_bankerPair(data.bankerPair);
				// 	}
			prev_Win = winner;
			player_score++;
			$('#player_score').html(player_score)
		}

		playerPair(data['playerPair']);
		bankerPair(data['bankerPair']);


	} else {

		if (winner == 'banker')
		{
			bankerChips();
			b_banker();
			b_playerPair(data.playerPair);
			b_bankerPair(data.bankerPair);
			banker_score++;
			$('#banker_score').html(banker_score)

				// 	}
			prev_Win = winner;
			rl++;
		}
		else if (winner == 'player')
		{
			playerChips();
			b_player();
			b_playerPair(data.playerPair);
			b_bankerPair(data.bankerPair);
			player_score++;
			$('#player_score').html(player_score)
				// 	}
			prev_Win = winner;
			rl++;
		}

		playerPair(data.playerPair);
		bankerPair(data.bankerPair);

		if (data.playerNatural) {
			natural(true);
		} else if (data.BankerNatural) {
			natural(true);
		}
		

	}

	if (rl == 38) {
		$('.chips_top').html('');
		$('.chips_bottom').html('');
		banker_score = 0;
		banker_pair = 0;
		player_score = 0;
		player_pair = 0;
		tie_score = 0;
		natural_score = 0;
	}

})

socket.on("tieGame",function(data){
	var winner = data.winner;
	var winner = data.winner;
	if (winner == 'tie') 
	{
		tieChips(prev_Win);

		b_tie()
		b_playerPair(data.playerPair);
		b_bankerPair(data.bankerPair);
		tie_score++;
		$('#tie_score').html(tie_score);
	
	} 
	else if (winner == prev_Win) {

		if (winner == 'banker')
		{
			bankerInside();
			b_banker();
			b_playerPair(data.playerPair);
			b_bankerPair(data.bankerPair);
				// 	}
			prev_Win = winner;
			banker_score++;
			$('#banker_score').html(banker_score)

		}
		else if (winner == 'player')
		{
			playerInside();
			b_player();
			b_playerPair(data.playerPair);
			b_bankerPair(data.bankerPair);
				// 	}
			prev_Win = winner;
			player_score++;
			$('#player_score').html(player_score)
		}

		playerPair(data['playerPair']);
		bankerPair(data['bankerPair']);


	} else {

		if (winner == 'banker')
		{
			bankerChips();
			b_banker();
			b_playerPair(data.playerPair);
			b_bankerPair(data.bankerPair);
			banker_score++;
			$('#banker_score').html(banker_score)

				// 	}
			prev_Win = winner;
			rl++;
		}
		else if (winner == 'player')
		{
			playerChips();
			b_player();
			b_playerPair(data.playerPair);
			b_bankerPair(data.bankerPair);
			player_score++;
			$('#player_score').html(player_score)
				// 	}
			prev_Win = winner;
			rl++;
		}

		playerPair(data.playerPair);
		bankerPair(data.bankerPair);

		if (data.playerNatural) {
			natural(true);
		} else if (data.BankerNatural) {
			natural(true);
		}
		

	}

	if (rl == 38) {
		$('.chips_top').html('');
		$('.chips_bottom').html('');
		banker_score = 0;
		banker_pair = 0;
		player_score = 0;
		player_pair = 0;
		tie_score = 0;
		natural_score = 0;
	}

})



socket.on("playerWin",function(data){
	var winner = data.winner;
	if (winner == 'tie') 
	{
		tieChips(prev_Win);

		b_tie()
		b_playerPair(data.playerPair);
		b_bankerPair(data.bankerPair);
		tie_score++;
		$('#tie_score').html(tie_score);
	
	} 
	else if (winner == prev_Win) {

		if (winner == 'banker')
		{
			bankerInside();
			b_banker();
			b_playerPair(data.playerPair);
			b_bankerPair(data.bankerPair);
				// 	}
			prev_Win = winner;
			banker_score++;
			$('#banker_score').html(banker_score)

		}
		else if (winner == 'player')
		{
			playerInside();
			b_player();
			b_playerPair(data.playerPair);
			b_bankerPair(data.bankerPair);
				// 	}
			prev_Win = winner;
			player_score++;
			$('#player_score').html(player_score)
		}

		playerPair(data['playerPair']);
		bankerPair(data['bankerPair']);


	} else {

		if (winner == 'banker')
		{
			bankerChips();
			b_banker();
			b_playerPair(data.playerPair);
			b_bankerPair(data.bankerPair);
			banker_score++;
			$('#banker_score').html(banker_score)

				// 	}
			prev_Win = winner;
			rl++;
		}
		else if (winner == 'player')
		{
			playerChips();
			b_player();
			b_playerPair(data.playerPair);
			b_bankerPair(data.bankerPair);
			player_score++;
			$('#player_score').html(player_score)
				// 	}
			prev_Win = winner;
			rl++;
		}

		playerPair(data.playerPair);
		bankerPair(data.bankerPair);

		if (data.playerNatural) {
			natural(true);
		} else if (data.BankerNatural) {
			natural(true);
		}
		

	}

	if (rl == 38) {
		$('.chips_top').html('');
		$('.chips_bottom').html('');
		banker_score = 0;
		banker_pair = 0;
		player_score = 0;
		player_pair = 0;
		tie_score = 0;
		natural_score = 0;
	}

})




$('#hashbtn').click(function(){
	location.replace("gameHashHistory")
})




function runToptables(data) {
	for(i = 0; i < data.length; i++)
	{	
		var winner = data[i]['winner'];
		var obj = data[i];

		if (winner == 'tie') 
		{
			tieChips(prev_Win);

			b_tie()
			b_playerPair(obj['playerPair']);
			b_bankerPair(obj['bankerPair']);
			tie_score++;
			$('#tie_score').html(tie_score);
		
		} 
		else if (winner == prev_Win) {

			if (winner == 'banker')
			{
				bankerInside();
				b_banker();
				b_playerPair(obj['playerPair']);
				b_bankerPair(obj['bankerPair']);
					// 	}
				prev_Win = winner;
				banker_score++;
				$('#banker_score').html(banker_score)

			}
			else if (winner == 'player')
			{
				playerInside();
				b_player();
				b_playerPair(obj['playerPair']);
				b_bankerPair(obj['bankerPair']);
					// 	}
				prev_Win = winner;
				player_score++;
				$('#player_score').html(player_score)
			}

			playerPair(obj['playerPair']);
			bankerPair(obj['bankerPair']);


		} else {

			if (winner == 'banker')
			{
				bankerChips();
				b_banker();
				b_playerPair(obj['playerPair']);
				b_bankerPair(obj['bankerPair']);
				banker_score++;
				$('#banker_score').html(banker_score)

					// 	}
				prev_Win = winner;
				rl++;
			}
			else if (winner == 'player')
			{
				playerChips();
				b_player();
				b_playerPair(obj['playerPair']);
				b_bankerPair(obj['bankerPair']);
				player_score++;
				$('#player_score').html(player_score)
					// 	}
				prev_Win = winner;
				rl++;
			}

			playerPair(obj['playerPair']);
			bankerPair(obj['bankerPair']);

			if (obj['playerNatural']) {
				natural(true);
			} else if (obj['BankerNatural']) {
				natural(true);
			}
			

		}

		if (rl == 38) {
			$('.chips_top').html('');
			$('.chips_bottom').html('');
			banker_score = 0;
			banker_pair = 0;
			player_score = 0;
			player_pair = 0;
			tie_score = 0;
			natural_score = 0;
		}
	}
}


function b_banker() {


	if (bottom_empty) {
		$('.chips_bottom').append('<div class="cb_holder">'+
			'<div class="chipsB">'+
				'<img src="assets/images/Components/B2.png">'+
				'<img class="hidden" src="assets/images/Components/bs2.png">'+
				'<img class="hidden" src="assets/images/Components/ps2.png">'+
			'</div>'+'</div>')

		bottom_empty = false;
	} 
	else if (cb_content > 4 ) 
	{

		$('.chips_bottom').append('<div class="cb_holder">'+
			'<div class="chipsB">'+
				'<img src="assets/images/Components/B2.png">'+
				'<img class="hidden" src="assets/images/Components/bs2.png">'+
				'<img class="hidden" src="assets/images/Components/ps2.png">'+
			'</div>'+'</div>')
		cb_content = 0;
	} 
	else 
	{
		$('.chips_bottom .cb_holder').last().append('<div class="chipsB">'+
				'<img src="assets/images/Components/B2.png">'+
				'<img class="hidden" src="assets/images/Components/Bs2.png">'+
				'<img class="hidden" src="assets/images/Components/ps2.png">'+
			'</div>');
		cb_content++;
	}
}


function b_player() {

	if (bottom_empty) {
		$('.chips_bottom').append('<div class="cb_holder">'+
			'<div class="chipsB">'+
				'<img src="assets/images/Components/P2.png">'+
				'<img class="hidden" src="assets/images/Components/bs2.png">'+
				'<img class="hidden" src="assets/images/Components/ps2.png">'+
			'</div>'+'</div>')

		bottom_empty = false;
	} 
	else if (cb_content > 4 ) 
	{
		$('.chips_bottom').append('<div class="cb_holder">'+
			'<div class="chipsB">'+
				'<img src="assets/images/Components/P2.png">'+
				'<img class="hidden" src="assets/images/Components/bs2.png">'+
				'<img class="hidden" src="assets/images/Components/ps2.png">'+
			'</div>'+'</div>')
		cb_content = 0;
	} 
	
	else 
	{
		$('.chips_bottom .cb_holder').last().append('<div class="chipsB">'+
				'<img src="assets/images/Components/P2.png">'+
				'<img class="hidden" src="assets/images/Components/bs2.png">'+
				'<img class="hidden" src="assets/images/Components/ps2.png">'+
			'</div>');
		cb_content++;
	}
}


function b_tie() {

	if (bottom_empty) {
		$('.chips_bottom').append('<div class="cb_holder">'+
			'<div class="chipsB">'+
				'<img src="assets/images/Components/T2.png">'+
				'<img class="hidden" src="assets/images/Components/bs2.png">'+
				'<img class="hidden" src="assets/images/Components/ps2.png">'+
			'</div>'+'</div>')

		bottom_empty = false;
	} 
	else if (cb_content > 4 ) 
	{
		$('.chips_bottom').append('<div class="cb_holder">'+
			'<div class="chipsB">'+
				'<img src="assets/images/Components/T2.png">'+
				'<img class="hidden" src="assets/images/Components/bs2.png">'+
				'<img class="hidden" src="assets/images/Components/ps2.png">'+
			'</div>'+'</div>')
		cb_content = 0;
	} 
	
	else 
	{
		$('.chips_bottom .cb_holder').last().append('<div class="chipsB">'+
				'<img src="assets/images/Components/T2.png">'+
				'<img class="hidden" src="assets/images/Components/bs2.png">'+
				'<img class="hidden" src="assets/images/Components/ps2.png">'+
			'</div>');
		cb_content++;
	}
}




function playerPair(con) {
	if (con) {
		var chips = $('.chips_top .c_holder').last().find('.chips').find('img').first().next().next().removeClass('hidden');
		player_pair++;
		$('#player_pair').html(player_pair)
	}
}

function bankerPair(con) {
	if (con) {
		$('.chips_top .c_holder').last().find('.chips').find('img').last().prev().prev().removeClass('hidden');
		banker_pair++;
		$('#banker_pair').html(banker_pair);
	}
}


function natural(con) {
	if (con) {
		$('.chips_top .c_holder').last().find('.chips').find('img').last().prev().removeClass('hidden');
		natural_score++;
		$('#natural_score').html(natural_score);
	}
}


function b_playerPair(con) {
	if (con) {
		var chips = $('.chips_bottom .cb_holder').last().find('.chipsB').last().find('img').last().removeClass('hidden');
	}
}

function b_bankerPair(con) {

	if (con) {
		$('.chips_bottom .cb_holder').last().find('.chipsB').last().find('img').first().next().removeClass('hidden');
	}
}







function tieChips(win) {
	// console.log(win)
	if (win == 'player') {
		$('.chips_top .c_holder').last().append('<div class="chips">'+
			'<img class="hidden" src="assets/images/Components/B.png">'+
			'<img src="assets/images/Components/P.png">'+
			'<img class="hidden" src="assets/images/Components/ps.png">'+
			'<img class="hidden" src="assets/images/Components/bs.png">'+
			'<img class="hidden" src="assets/images/Components/ntr.png">'+
			'<img src="assets/images/Components/tie_icon.png">'+'</div>')

	} else if (win == 'banker') {
		$('.chips_top .c_holder').last().append('<div class="chips">'+
			'<img src="assets/images/Components/B.png">'+
			'<img class="hidden" src="assets/images/Components/P.png">'+
			'<img class="hidden" src="assets/images/Components/ps.png">'+
			'<img class="hidden" src="assets/images/Components/bs.png">'+
			'<img class="hidden" src="assets/images/Components/ntr.png">'+
			'<img  src="assets/images/Components/tie_icon.png">'+'</div>')
	}
}

function bankerChips() {
	$('.chips_top').append('<div class="c_holder">'+
		'<div class="chips">'+
		'<img src="assets/images/Components/B.png">'+
		'<img class="hidden" src="assets/images/Components/P.png">'+
		'<img class="hidden" src="assets/images/Components/ps.png">'+
		'<img class="hidden" src="assets/images/Components/bs.png">'+
		'<img class="hidden" src="assets/images/Components/ntr.png">'+
		'<img class="hidden" src="assets/images/Components/tie_icon.png">'+'</div></div>');
}


function playerChips() {
	$('.chips_top').append('<div class="c_holder">'+
		'<div class="chips">'+
		'<img class="hidden" src="assets/images/Components/B.png">'+
		'<img src="assets/images/Components/P.png">'+
		'<img class="hidden" src="assets/images/Components/ps.png">'+
		'<img class="hidden" src="assets/images/Components/bs.png">'+
		'<img class="hidden" src="assets/images/Components/ntr.png">'+
		'<img class="hidden" src="assets/images/Components/tie_icon.png">'+'</div></div>');
}


function bankerInside(){
	$('.chips_top .c_holder').last().append('<div class="chips">'+
		'<img src="assets/images/Components/B.png">'+
		'<img class="hidden" src="assets/images/Components/P.png">'+
		'<img class="hidden" src="assets/images/Components/ps.png">'+
		'<img class="hidden" src="assets/images/Components/bs.png">'+
		'<img class="hidden" src="assets/images/Components/ntr.png">'+
		'<img class="hidden" src="assets/images/Components/tie_icon.png">'+'</div>')
}


function playerInside() {
	$('.chips_top .c_holder').last().append('<div class="chips">'+
		'<img class="hidden" src="assets/images/Components/B.png">'+
		'<img src="assets/images/Components/P.png">'+
		'<img class="hidden" src="assets/images/Components/ps.png">'+
		'<img class="hidden" src="assets/images/Components/bs.png">'+
		'<img class="hidden" src="assets/images/Components/ntr.png">'+
		'<img class="hidden" src="assets/images/Components/tie_icon.png">'+'</div>')
}

