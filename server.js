 // Dependencies
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
var app = express();
var server = http.Server(app);
var io = socketIO(server);
var moment = require('moment');
require('moment-timezone');
moment.tz('Asia/Tokyo');
var crypto = require('crypto');

var ObjectId = require('mongodb').ObjectID;

// Open Shift Config

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'


var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/baccarats";
// var url = "mongodb://joemar12:joemar12@ds329058.mlab.com:29058/baccarat";
// var url = "mongodb://joemargame12:joemargame12@ds329698-a0.mlab.com:29698,ds329698-a1.mlab.com:29698/baccarat?replicaSet=rs-ds329698";


// Main Database url 
var url = "mongodb+srv://joemar12:joemar12@baccarats-oh6ud.mongodb.net/test?retryWrites=true&w=majority";


var roundxs = moment().format('HH') * 60;
var roundys = moment().format('mm');
var gameRound = (parseInt(roundxs) + parseInt(roundys));

var table_count = 0;
var lastWinner = null;
var roundCount = 0;


MongoClient.connect(url, function(err , db){
	var dbo = db.db("baccarat");
	dbo.collection('game').find().sort({_id : -1}).limit(1).toArray(function(err , result) {
		if (result.length > 0) {	
			console.log(result)
			roundCount = result[0]['roundCount'];
			table_count =  result[0]['table_count'];
			lastWinner = result[0]['winner'];
			
			console.log(roundCount);
			console.log(table_count);
			console.log(lastWinner);
			console.log(gameRound)
		}
	})
});

app.set('port',5000);


app.get('/', function(request , response) {
    response.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/tableresult', function(request , response) {
    response.sendFile(path.join(__dirname, 'game_result_2.html'));
});


app.get('/gameHashHistory', function (request, response) {
  response.sendFile(path.join(__dirname, 'gameHashHistory.html'));
});


app.get('/result', function(request, response) {
  response.sendFile(path.join(__dirname, 'result.json'));
});


app.get('/d216562cb392efa26d79cd4a8a5938cb', function(request , response) {
    response.sendFile(path.join(__dirname, 'admin.html'));
});



app.use(express.static('./'));


// server.listen(server_port , server_ip_address , function(){
// 	console.log('Listening on' + server_ip_address + ', port' + server_port);	
// })




server.listen(5000,function(){
	console.log('Starting server on port5000');
})


var draw_cards = [
	{
		"card_name" : "diamond1",
		"draw_count" : 0,
	},
	{
		"card_name" : "diamond2",
		"draw_count" : 0,
	},
	{
		"card_name" : "diamond3",
		"draw_count" : 0,
	},
	{
		"card_name" : "diamond4",
		"draw_count" : 0,
	},
	{
		"card_name" : "diamond5",
		"draw_count" : 0,
	},
	{
		"card_name" : "diamond6",
		"draw_count" : 0,
	},
	{
		"card_name" : "diamond7",
		"draw_count" : 0,
	},
	{
		"card_name" : "diamond8",
		"draw_count" : 0,
	},
	{
		"card_name" : "diamond9",
		"draw_count" : 0,
	},
	{
		"card_name" : "diamond10",
		"draw_count" : 0,
	},
	{
		"card_name" : "diamond11",
		"draw_count" : 0,
	},
	{
		"card_name" : "diamond12",
		"draw_count" : 0,
	},
	{
		"card_name" : "diamond13",
		"draw_count" : 0,
	},

	{
		"card_name" : "flower1",
		"draw_count" : 0,
	},
	{
		"card_name" : "flower2",
		"draw_count" : 0,
	},
	{
		"card_name" : "flower3",
		"draw_count" : 0,
	},
	{
		"card_name" : "flower4",
		"draw_count" : 0,
	},
	{
		"card_name" : "flower5",
		"draw_count" : 0,
	},
	{
		"card_name" : "flower6",
		"draw_count" : 0,
	},
	{
		"card_name" : "flower7",
		"draw_count" : 0,
	},
	{
		"card_name" : "flower8",
		"draw_count" : 0,
	},
	{
		"card_name" : "flower9",
		"draw_count" : 0,
	},
	{
		"card_name" : "flower10",
		"draw_count" : 0,
	},
	{
		"card_name" : "flower11",
		"draw_count" : 0,
	},
	{
		"card_name" : "flower12",
		"draw_count" : 0,
	},
	{
		"card_name" : "flower13",
		"draw_count" : 0,
	},


	{
		"card_name" : "hearth1",
		"draw_count" : 0,
	},
	{
		"card_name" : "hearth2",
		"draw_count" : 0,
	},
	{
		"card_name" : "hearth3",
		"draw_count" : 0,
	},
	{
		"card_name" : "hearth4",
		"draw_count" : 0,
	},
	{
		"card_name" : "hearth5",
		"draw_count" : 0,
	},
	{
		"card_name" : "hearth6",
		"draw_count" : 0,
	},
	{
		"card_name" : "hearth7",
		"draw_count" : 0,
	},
	{
		"card_name" : "hearth8",
		"draw_count" : 0,
	},
	{
		"card_name" : "hearth9",
		"draw_count" : 0,
	},
	{
		"card_name" : "hearth10",
		"draw_count" : 0,
	},
	{
		"card_name" : "hearth11",
		"draw_count" : 0,
	},
	{
		"card_name" : "hearth12",
		"draw_count" : 0,
	},
	{
		"card_name" : "hearth13",
		"draw_count" : 0,
	},

	{
		"card_name" : "spade1",
		"draw_count" : 0,
	},
	{
		"card_name" : "spade2",
		"draw_count" : 0,
	},
	{
		"card_name" : "spade3",
		"draw_count" : 0,
	},
	{
		"card_name" : "spade4",
		"draw_count" : 0,
	},
	{
		"card_name" : "spade5",
		"draw_count" : 0,
	},
	{
		"card_name" : "spade6",
		"draw_count" : 0,
	},
	{
		"card_name" : "spade7",
		"draw_count" : 0,
	},
	{
		"card_name" : "spade8",
		"draw_count" : 0,
	},
	{
		"card_name" : "spade9",
		"draw_count" : 0,
	},
	{
		"card_name" : "spade10",
		"draw_count" : 0,
	},
	{
		"card_name" : "spade11",
		"draw_count" : 0,
	},
	{
		"card_name" : "spade12",
		"draw_count" : 0,
	},
	{
		"card_name" : "spade13",
		"draw_count" : 0,
	},

];



function processCard(){

	var noCard = false;
	var card_used_count = 0;

	card = getNum();
	card_shape = getShape();

	var card_compare = card_shape+card;

	for(c = 0; c < draw_cards.length; c++)
	{

		card_used_count += draw_cards[c]['draw_count'];
	}


	if (card_used_count > 313){
		// clearInterval(shit);
		for(c = 0; c < draw_cards.length; c++)
		{
			draw_cards[c]['draw_count'] = 0;
			card_used_count = 0;
		}
	}


	for (i = 0; i < draw_cards.length; i++)
	{
		if (card_compare == draw_cards[i]['card_name']) 
		{
			if (draw_cards[i]['draw_count'] >= 8) 
			{
				var newCardNum = getNum();
				var newCardShape = getShape();

				return processCard();
			}
			else
			{	
				draw_cards[i]['draw_count']++;
				return {card,card_shape};
			}
		}
	}
}


var gameResult = new Array();


getResult(gameResult);


function getResult(gameResult){


	var bankerPair = false;
	var playerPair = false;
	var playerNatural = false;
	var BankerNatural = false;

	var slot1;
	var slot2;

	var comp_1_card = processCard();

	var p1card =  comp_1_card['card'];
	var p1cardShape = comp_1_card['card_shape'];

	var comp_2_card = processCard();

	var p2card =  comp_2_card['card'];
	var p2cardShape = comp_2_card['card_shape'];

	var comb_1_card = processCard();

	var b1card = comb_1_card['card'];
	var b1cardShape = comb_1_card['card_shape'];


	var comb_2_card = processCard();

	var b2card = comb_2_card['card'];
	var b2cardShape = comb_2_card['card_shape'];



	if (p1card == p2card) {
		playerPair = true;
	}

	if (b1card == b2card) {
		bankerPair = true;
	}


	var playerRes1 = p1cardShape +'_'+ p1card;
	var playerRes2 = p2cardShape +'_'+ p2card;
	var BankerRes1 = b1cardShape +'_'+ b1card;
	var BankerRes2 = b2cardShape +'_'+ b2card;

	if (p1card == 10 || p1card == 11 || p1card == 12 || p1card == 13) {
		p1card = 0;
	}

	if (p2card == 10 || p2card == 11 || p2card == 12 || p2card == 13) {
		p2card = 0;
	}


	if (b1card == 10 || b1card == 11 || b1card == 12 || b1card == 13) {
		b1card = 0;
	}


	if (b2card == 10 || b2card == 11 || b2card == 12 || b2card == 13) {
		b2card = 0;
	}


	if (((p1card + p2card) % 10)  > 7) {
		playerNatural = true;
	}

	if (((b1card + b2card) % 10)  > 7) {
		BankerNatural = true;
	}


	var firstLefttVal = p1card;
	var firstRightVal = b1card;
	var leftVal = (p1card + p2card) % 10;
	var rightVal = (b1card + b2card) % 10;


	var ep2card;
	var eb2card;
	var secondLeftVal = 0;
	var secondRightVal = 0;


	// Player Extra card
	var epcard = 0;
	var epcardShape


	// Banker Extra Card
	var ebcard = 0;
	var ebcardShape;
	

	if (rightVal < 8) {

		if (leftVal < 6) {	

			var player_Extra_card = processCard();

			epcard = player_Extra_card['card'];
			epcardShape =  player_Extra_card['card_shape'];
			ep2card = epcardShape +'_'+ epcard;

			if (epcard == 10 || epcard == 11 || epcard == 12 || epcard == 13) {
				epcard = 0;
			}

			secondLeftVal = leftVal + epcard;
			secondLeftVal = secondLeftVal % 10;
			
		}
	}


	if (leftVal == 8 || leftVal == 9) {
		// Stands
	} else if (rightVal == 1) {

		if ((leftVal == 1 || leftVal == 2 || leftVal == 3 || leftVal == 4 || leftVal == 5 || leftVal == 6 || leftVal == 7 || leftVal == 9 || leftVal == 10) || (secondLeftVal == 1 || secondLeftVal == 2 || secondLeftVal == 3 || secondLeftVal == 4 || secondLeftVal == 5 || secondLeftVal == 6 || secondLeftVal == 7 || secondLeftVal == 9)) {

			var banker_Extra_card = processCard();
		
			ebcard = banker_Extra_card['card'];;
			ebcardShape =  banker_Extra_card['card_shape'];

			eb2card = ebcardShape +'_'+ ebcard;

			if (ebcard == 10 || ebcard == 11 || ebcard == 12 || ebcard == 13) {
				ebcard = 0;
			}
			secondRightVal = rightVal + ebcard;
			// secondRightVal = secondRightVal % 10;

		} else if(rightVal < leftVal || rightVal < secondLeftVal) {
			
			var banker_Extra_card = processCard();

			ebcard = banker_Extra_card['card'];;
			ebcardShape =  banker_Extra_card['card_shape'];

			eb2card = ebcardShape +'_'+ ebcard;

			if (ebcard == 10 || ebcard == 11 || ebcard == 12 || ebcard == 13) {
				ebcard = 0;
			}

			secondRightVal = rightVal + ebcard;
			// secondRightVal = secondRightVal % 10;
		}

	} else if (rightVal == 2) {


		if ((leftVal == 2 || leftVal == 3 || leftVal == 4 || leftVal == 5 || leftVal == 6 || leftVal == 7 || leftVal == 9 || leftVal == 10) || (secondLeftVal == 2 || secondLeftVal == 3 || secondLeftVal == 4 || secondLeftVal == 5 || secondLeftVal == 6 || secondLeftVal == 7 || secondLeftVal == 9)) {

			var banker_Extra_card = processCard();
		
			ebcard = banker_Extra_card['card'];;
			ebcardShape =  banker_Extra_card['card_shape'];

			eb2card = ebcardShape +'_'+ ebcard;

			if (ebcard == 10 || ebcard == 11 || ebcard == 12 || ebcard == 13) {
				ebcard = 0;
			}
			secondRightVal = rightVal + ebcard;
			// secondRightVal = secondRightVal % 10;

		} else if(rightVal < leftVal || rightVal < secondLeftVal) {
			
			var banker_Extra_card = processCard();

			ebcard = banker_Extra_card['card'];;
			ebcardShape =  banker_Extra_card['card_shape'];

			eb2card = ebcardShape +'_'+ ebcard;

			if (ebcard == 10 || ebcard == 11 || ebcard == 12 || ebcard == 13) {
				ebcard = 0;
			}

			secondRightVal = rightVal + ebcard;
			// secondRightVal = secondRightVal % 10;
		}

	} else if (rightVal == 3) {

		if ((leftVal == 3 || leftVal == 4 || leftVal == 5 || leftVal == 6 || leftVal == 7 || leftVal == 9 || leftVal == 10) || (secondLeftVal == 3 || secondLeftVal == 4 || secondLeftVal == 5 || secondLeftVal == 6 || secondLeftVal == 7 || secondLeftVal == 9)) {

			var banker_Extra_card = processCard();
 
			ebcard = banker_Extra_card['card'];;
			ebcardShape =  banker_Extra_card['card_shape'];

			eb2card = ebcardShape +'_'+ ebcard;

			if (ebcard == 10 || ebcard == 11 || ebcard == 12 || ebcard == 13) {
				ebcard = 0;
			}
			secondRightVal = rightVal + ebcard;
			// secondRightVal = secondRightVal % 10;

		} else if(rightVal < leftVal || rightVal < secondLeftVal) {
			
			var banker_Extra_card = processCard();

			ebcard = banker_Extra_card['card'];;
			ebcardShape =  banker_Extra_card['card_shape'];

			eb2card = ebcardShape +'_'+ ebcard;

			if (ebcard == 10 || ebcard == 11 || ebcard == 12 || ebcard == 13) {
				ebcard = 0;
			}

			secondRightVal = rightVal + ebcard;
			// secondRightVal = secondRightVal % 10;
		}

	} else if (rightVal == 4) {

		if ((leftVal == 4 || leftVal == 5 || leftVal == 6 || leftVal == 7) || (secondLeftVal >= 4)) {
			
			var banker_Extra_card = processCard();

			ebcard = banker_Extra_card['card'];;
			ebcardShape =  banker_Extra_card['card_shape'];

			eb2card = ebcardShape +'_'+ ebcard;

			if (ebcard == 10 || ebcard == 11 || ebcard == 12 || ebcard == 13) {
				ebcard = 0;
			}

			secondRightVal = rightVal + ebcard;
			// secondRightVal = secondRightVal % 10;
			
		} else if(rightVal < leftVal || rightVal < secondLeftVal) {
			
			var banker_Extra_card = processCard();

			ebcard = banker_Extra_card['card'];;
			ebcardShape =  banker_Extra_card['card_shape'];

			eb2card = ebcardShape +'_'+ ebcard;

			if (ebcard == 10 || ebcard == 11 || ebcard == 12 || ebcard == 13) {
				ebcard = 0;
			}

			secondRightVal = rightVal + ebcard;
			// secondRightVal = secondRightVal % 10;
		}

	} else if (rightVal == 5) {


		if ((leftVal == 6 || leftVal == 7) || (secondLeftVal >= 5 )) {
			
			var banker_Extra_card = processCard();

			ebcard = banker_Extra_card['card'];;
			ebcardShape =  banker_Extra_card['card_shape'];

			eb2card = ebcardShape +'_'+ ebcard;

			if (ebcard == 10 || ebcard == 11 || ebcard == 12 || ebcard == 13) {
				ebcard = 0;
			}

			secondRightVal = rightVal + ebcard;
			// secondRightVal = secondRightVal % 10;
		} else if (rightVal < leftVal || rightVal < secondLeftVal) {


			if (leftVal == 4 || leftVal == 5 || leftVal == 6 || leftVal == 7) {
				
				var banker_Extra_card = processCard();

				ebcard = banker_Extra_card['card'];;
				ebcardShape =  banker_Extra_card['card_shape'];

				eb2card = ebcardShape +'_'+ ebcard;

				if (ebcard == 10 || ebcard == 11 || ebcard == 12 || ebcard == 13) {
					ebcard = 0;
				}

				secondRightVal = rightVal + ebcard;
				// secondRightVal = secondRightVal % 10;
				
			}	

		} 
	
	} else if (rightVal == 6) {

		// if (leftVal == 7) {
				
		// 		var banker_Extra_card = processCard();

		// 		ebcard = banker_Extra_card['card'];;
		// 		ebcardShape =  banker_Extra_card['card_shape'];

		// 		eb2card = ebcardShape +'_'+ ebcard;

		// 		if (ebcard == 10 || ebcard == 11 || ebcard == 12 || ebcard == 13) {
		// 			ebcard = 0;
		// 		}

		// 		secondRightVal = rightVal + ebcard;
		// 		// secondRightVal = secondRightVal % 10;
				
		// 	} else if(rightVal < leftVal){
			
		// 	var banker_Extra_card = processCard();

		// 	ebcard = banker_Extra_card['card'];;
		// 	ebcardShape =  banker_Extra_card['card_shape'];

		// 	eb2card = ebcardShape +'_'+ ebcard;

		// 	if (ebcard == 10 || ebcard == 11 || ebcard == 12 || ebcard == 13) {
		// 		ebcard = 0;
		// 	}

		// 	secondRightVal = rightVal + ebcard;
		// 	// secondRightVal = secondRightVal % 10;
		// }


	} else if (rightVal == 7) {
/*
		if ((secondLeftVal >= 7 )) {
			
			var banker_Extra_card = processCard();

			ebcard = banker_Extra_card['card'];;
			ebcardShape =  banker_Extra_card['card_shape'];

			eb2card = ebcardShape +'_'+ ebcard;

			if (ebcard == 10 || ebcard == 11 || ebcard == 12 || ebcard == 13) {
				ebcard = 0;
			}

			secondRightVal = rightVal + ebcard;
			// secondRightVal = secondRightVal % 10;
		} else if (rightVal < leftVal || rightVal < secondLeftVal) {


			if (leftVal == 4 || leftVal == 5 || leftVal == 6 || leftVal == 7) {
				
				var banker_Extra_card = processCard();

				ebcard = banker_Extra_card['card'];;
				ebcardShape =  banker_Extra_card['card_shape'];

				eb2card = ebcardShape +'_'+ ebcard;

				if (ebcard == 10 || ebcard == 11 || ebcard == 12 || ebcard == 13) {
					ebcard = 0;
				}

				secondRightVal = rightVal + ebcard;
				// secondRightVal = secondRightVal % 10;
				
			}	

		} */
		

	} else if (rightVal == 8 || rightVal == 9) {
		// Stands
	} else {
		var banker_Extra_card = processCard();

		ebcard = banker_Extra_card['card'];;
		ebcardShape =  banker_Extra_card['card_shape'];

		eb2card = ebcardShape +'_'+ ebcard;
		
		if (ebcard == 10 || ebcard == 11 || ebcard == 12 || ebcard == 13) {
			ebcard = 0;
		}
			secondRightVal = rightVal + ebcard;
			// secondRightVal = secondRightVal % 10;
		
	}


	// Score Logic Result
	gameResult['firstLefttVal'] = firstLefttVal;
	gameResult['firstRightVal'] = firstRightVal;
	gameResult['bankerPair'] = bankerPair;
	gameResult['playerPair'] = playerPair;
	gameResult['playerNatural'] = playerNatural;
	gameResult['BankerNatural'] = BankerNatural;
	gameResult['leftVal'] = leftVal;
	gameResult['rightVal'] = rightVal;

	if (secondLeftVal > 0) { //  Decrease Because if greater than 20 the total is having a additional 1 that don't need
		if (secondLeftVal >= 20) {
			secondLeftVal--;
		}
		secondLeftVal = secondLeftVal % 10;
		gameResult['secondLeftVal'] = secondLeftVal;
	} else {
		gameResult['secondLeftVal'] = leftVal;
	}


	if (secondRightVal > 0) { //  Decrease Because if greater than 20 the total is having a additional 1 that don't need
		if (secondRightVal >= 20 ) {
			secondRightVal--;
		}
		secondRightVal = secondRightVal % 10;
		gameResult['secondRightVal'] = secondRightVal;
	} else {
		gameResult['secondRightVal'] = rightVal;
	}

	 // Animation Result
	 gameResult['playerRes1'] = playerRes1;
	 gameResult['playerRes2'] = playerRes2;
	 gameResult['BankerRes1'] = BankerRes1;
	 gameResult['BankerRes2'] = BankerRes2;
	 gameResult['ep2card'] = ep2card;
	 gameResult['eb2card'] = eb2card;


	 return gameResult;

}

function getShape(){

	var shape = Math.floor(Math.random() * 4) + 1;
	var res;

	if (shape == 1) {
		res = "diamond";
	} else if (shape == 2) {
		res = "flower";
	} else if (shape == 3) { 
		res = "hearth";
	} else {
		res = "spade";
	}

	return res;
}

function getNum(){
	return Math.floor(Math.random() * 13) + 1;
}

function getChance(){
	return Math.floor(Math.random() * 100) + 1;
}



setInterval(function(){
	var seconds = 60 - moment().format('ss');
	var roundx = moment().format('HH') * 60;
	var roundy = moment().format('mm');
	var rounds = (parseInt(roundy) + parseInt(roundx));



	io.sockets.emit('seconds', {seconds});
	io.sockets.emit('rounds' , {'round' : gameRound + 1});

	if (seconds == 58) {

		
		var secret_code = rounds+'baccarat'+moment().format('DD-MM-YYYY');
		var hash = crypto.createHmac('sha256',secret_code).digest('hex'); // Hash of the game
		var nowdate = moment().format('YYYY-MM-DD');

			MongoClient.connect(url ,{ useNewUrlParser : true ,  useUnifiedTopology: true } , function(err ,db){
				if (err) throw err;

				var dbo = db.db("baccarat");

				 if ((gameResult.secondRightVal % 10) > (gameResult.secondLeftVal % 10)) {
				 	winner = "banker";
				 }else if((gameResult.secondRightVal % 10) == (gameResult.secondLeftVal % 10)){
				 	winner = "tie";
				 }else {
				 	winner = "player";
				 }


				 if (lastWinner == null) {
				 	lastWinner = winner;
				 } else {
				 	if (lastWinner != 'tie') {
					 	if (lastWinner != winner) {
					 		roundCount++;
					 		console.log('ROUND COUNT IS '+ roundCount)
					 		if (roundCount == 37) {
					 			table_count += 1;
					 			roundCount = 0;
					 		}

					 		lastWinner = winner;
					 	}
				 	} else {
				 		lastWinner = winner;
				 	}
				 }
				 // console.log(table_count)

				var myobj = {
					"table_count" : table_count,
					"roundCount" : roundCount,
					"winner" : winner,
					"round" : rounds,
					"hash" : hash,
					"nowdate" : nowdate, 
					"bankerPair" : gameResult['bankerPair'],
					"playerPair" : gameResult['playerPair'],
					"playerNatural" : gameResult['playerNatural'],
					"BankerNatural" : gameResult['BankerNatural'],
					"leftVal" : gameResult['leftVal'],
					"rightVal" : gameResult['rightVal'],
					"secondLeftVal" : gameResult['secondLeftVal'],
					"secondRightVal" : gameResult['secondRightVal'],
					"playerRes1" : gameResult['playerRes1'],
					"playerRes2" : gameResult['playerRes2'],
					"BankerRes1" : gameResult['BankerRes1'],
					"BankerRes2" : gameResult['BankerRes2'],
					"bankerPair" : gameResult['bankerPair'],
					"eb2card" : gameResult['eb2card'],
					"ep2card" : gameResult['ep2card'],
				};


				if (winner == 'banker') {
					var pass_winner = 'BANKER';
				} else if (winner == 'player') {
					var pass_winner = 'PLAYER';
				} else {
					var pass_winner = 'TIE';
				}

				var Ppair = "NO";
				var Bpair = "NO";


				if (gameResult['playerPair']) {
					var Ppair = "YES";
				}
				
				if (gameResult['bankerPair']) {
					var Bpair = "YES";
				}


		  		var jsonObj = {
		  			rounds : rounds,
		  			win : pass_winner,
		  			Ppair : Ppair,
		  			Bpair : Bpair,
		  		}

		  		var fs = require('fs');
		  		var data = JSON.stringify(jsonObj);

		  		fs.writeFileSync('result.json', data);
			  	setTimeout(function(){

			  // 		dbo.collection("game").insertOne(myobj, function(err, res){
					//     console.log("ROUND "+rounds+" RECORDER");
					//     db.close();
					// }); //End of insertOne

			  	},10000)



			}) //end MongoClient



		// setTimeout(function(){
		// 	io.sockets.emit("dataTotal" , {"bankerTotal" : gameResult.rightVal, "playerTotal" : gameResult.leftVal});
		// })	

		// setTimeout(function(){
		// 	io.sockets.emit("dataTotal" , {"bankerTotal" : gameResult.rightVal, "playerTotal" : gameResult.leftVal});
		// },3500);

		setTimeout(function(){
			// First Card of the player
			
			io.sockets.emit("player_card1",{"playerRes1" : gameResult.playerRes1, "playerTotal" : gameResult.firstLefttVal});
		},1000);

		setTimeout(function(){
			// First Card of the banker
			io.sockets.emit("banker_card1",{"BankerRes1" : gameResult.BankerRes1, "bankerTotal" : gameResult.firstRightVal});
		},2000);

		setTimeout(function(){
			// First Card of the player

			io.sockets.emit("player_card2",{"playerRes2" : gameResult.playerRes2, "playerTotal" : gameResult.leftVal});
		},3000);

		setTimeout(function(){
			// First Card of the banker
			io.sockets.emit("banker_card2",{"BankerRes2" : gameResult.BankerRes2, "bankerTotal" : gameResult.rightVal});
		},5000);




			setTimeout(function(){

				if (gameResult.secondLeftVal != null) {
					io.sockets.emit("dataTotalPlayer" , {"playerRes3" :gameResult.ep2card,"playerTotal" : gameResult.secondLeftVal});
				} 
			},6000);


			setTimeout(function(){
				if (gameResult.secondRightVal != null) {
					io.sockets.emit("dataTotalBanker" , {"BankerRes3" : gameResult.eb2card , "bankerTotal" : gameResult.secondRightVal});
				}

			},9000);

		// io.sockets.emit("datavalue", {"playerRes1" : gameResult.playerRes1, "playerRes2" : gameResult.playerRes2 , "BankerRes1" : gameResult.BankerRes1 , "BankerRes2" : gameResult.BankerRes2 , "ep2card" : gameResult.ep2card, "eb2card" : gameResult.eb2card});





		setTimeout(function(){
			if (winner == 'banker') {
				io.sockets.emit("bankerWin", {"bankerPair" : gameResult.bankerPair , "playerPair" : gameResult.playerPair , "playerNatural" : gameResult.playerNatural , "BankerNatural" : gameResult.BankerNatural , 'winner' : winner});
			}else if(winner == 'tie'){
				io.sockets.emit("tieGame", {"bankerPair" : gameResult.bankerPair , "playerPair" : gameResult.playerPair , "playerNatural" : gameResult.playerNatural , "BankerNatural" : gameResult.BankerNatural , 'winner' : winner});
			}else if (winner == 'player'){
				io.sockets.emit("playerWin", {"bankerPair" : gameResult.bankerPair , "playerPair" : gameResult.playerPair , "playerNatural" : gameResult.playerNatural , "BankerNatural" : gameResult.BankerNatural , 'winner' : winner});
			}

			setTimeout(function(){
				gameRound = rounds;
				io.sockets.emit('gameRounds',{'game_round' : gameRound + 1});
			},45000)

			setTimeout(function(){
				gameResult = [];
				getResult(gameResult);
			},1000)
		},13000);


	}


},1000);


io.on('connection',function(socket){
	socket.on('modifyResult',function(data){
		// console.log(data)
		// gameResult = [];
		// console.log(gameResult)

		// Score Logic Result
		gameResult['bankerPair'] = data.bankerPair;
		gameResult['playerPair'] = data.playerPair;
		gameResult['playerNatural'] = data.playerNatural;
		gameResult['BankerNatural'] = data.BankerNatural;
		gameResult['firstLefttVal'] = data.firstLefttVal;
		gameResult['firstRightVal'] = data.firstRightVal;
		gameResult['leftVal'] = data.leftVal;
		gameResult['rightVal'] = data.rightVal;
		gameResult['secondLeftVal'] = data.secondLeftVal;
		gameResult['secondRightVal'] = data.secondRightVal;

		 // Animation Result
		 gameResult['playerRes1'] = getShape() +'_'+ data.playerRes1;
		 gameResult['playerRes2'] = getShape() +'_'+ data.playerRes2;
		 gameResult['BankerRes1'] = getShape() +'_'+ data.BankerRes1;
		 gameResult['BankerRes2'] = getShape() +'_'+ data.BankerRes2;

		 if (data.ep2card == "") {
		 	gameResult['ep2card'] = "";
		 } else {
		 	gameResult['ep2card'] = getShape() +'_'+ data.ep2card;
		 }

		 if (data.eb2card == "") {
		 	gameResult['eb2card'] = "";
		 } else {
		 	gameResult['eb2card'] = getShape() +'_'+ data.eb2card;
		 }
		 
			
		 // console.log(gameResult)
		 return gameResult;
	});

	socket.on('clearData',function(){
		gameResult = [];
		getResult(gameResult);
	});

	// socket.on('getRounds',function(){
	// 	socket.emit('rounds' , {'round' : gameRound});
	// });



	socket.on('newVisitor',function(){
		
		socketid = socket.id;

		MongoClient.connect(url, { useNewUrlParser: true }, function(err , db){
			if (err) throw err;

			var dbo = db.db('baccarat');
			var mysort = {_id : -1};		

			dbo.collection('game').find().limit(1).sort(mysort).toArray(function(err , result){
				if (err) throw err;

				socket.emit('loadDataGame' , result);
				db.close();
			})
		})
	})




	socket.on('newVisitor2',function(date){


		socketid = socket.id;

		MongoClient.connect(url, { useNewUrlParser: true ,  useUnifiedTopology: true}, function(err , db){
			if (err) throw err;

			var dbo = db.db('baccarat');
			// console.log(roundCount);
			var datenow = moment().format('YYYY-MM-DD');

			var query = {'table_count' : table_count , 'nowdate' : datenow};


			dbo.collection('game').find(query).toArray(function(err , result){
				if (result.length > 0) {
					if (err) throw err;
						socket.emit('loadData' , result);

					}
				db.close();

			})

			// console.log(innerTbleCount)

		})
	})




	socket.on('HistoryClient' , function(date){
		socketid = socket.id;
		MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true} , function(err , db){
			if (err) throw err;
			var dbo = db.db('baccarat');
			var mysort = {_id: -1};


			var query = {nowdate : date.sort};
			dbo.collection('game').find(query).limit(10).sort(mysort).toArray(function(err, result) {
					if(err) throw err;
					io.to(socketid).emit('loadDatahis' , result);
					db.close();
			});

			dbo.collection('game').find(query).count(function(err, dataCount) {
				      io.to(socketid).emit('pageCount', dataCount);
				      db.close();
				});			

		})
	})



	socket.on('searchDatahis',function(data){
		socketid = socket.id;
		MongoClient.connect(url, function(err, db) {

		  if (err) throw err;
		  var dbo = db.db("baccarat");

		  var dbrounds = parseInt(data.roundcode);
		  var dbgameid = ObjectId(data.saltcode);
		  var query = { _id : dbgameid , hash : data.hashcode , round : dbrounds};
		   // { $and : [{ hash : data.hashcode } , {rounds : data.roundcode }] };
		  dbo.collection("game").find(query).toArray(function(err, result) {
		  	if (result.length > 0) {
		  		 io.to(socketid).emit('resdata', result);
		  		
		  	} else {
		    	 io.to(socketid).emit('invalid');
		  	}
		    db.close();
		  });
		});
	})



	socket.on('page_control' , function(data){

		socketid = socket.id;

		MongoClient.connect(url, function(err , db){
			var mysort = {_id : -1};
			var query = {nowdate : data.sort};
			if (err) throw err;
			var dbo = db.db('baccarat');
			dbo.collection('game').find(query).skip(data.skip).limit(10).sort(mysort).toArray(function(err, result){
				io.to(socketid).emit('getpageload', result);
				db.close();

			});
		});

	});

});

// setTimeout(function(){

// 	io.sockets.emit("banker_card1",{"BankerRes1" : "spade_12", "bankerTotal" : 0});
// },3000)