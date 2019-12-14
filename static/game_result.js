var socket = io();
var assets = [];
var stage = new createjs.Stage("result_canvas");

var stageW = $('#gameBackground').width();
var stageH = $('#gameBackground').height();

var card_container = new createjs.Container();

var mainChips = [];

var windowW = window.innerWidth;

var pos_row_X = [windowW,20.5,10.1,6.7,5.05,4.03,3.36,2.89,2.52,2.24,2.02,1.83,1.68,1.55,1.44,1.342,1.26,1.186,1.12,1.06];
var pos_row_Y = [3.72,3.15,2.72,2.40,2.13,1.93];


var top_tbl_X = [1,1.027,1.056,1.086,1.119,1.153,1.189,1.228,1.269,1.313,1.359,1.409,1.462,1.522,1.583,1.652,1.725,1.805,1.895,1.995,2.103,2.223,2.359,2.540,2.710,2.930,3.185,3.461,3.798,4.241,4.761,5.471,6.381,7.751,9.700,13,19.20,40];
var top_tbl_Y = [390,35,18,12.25,9.30,7.5,6.3,5.4,4.75,4.25];


var lastWinner;

var row_down_indicator = 0;
var row_indicator = 0
var looping_win = 0;
var rowplusUsed = false;
var rowplusUsed_c = 0;

var bankerScore = 0;
var playerScore = 0;
var tieScore = 0;
var bankerPairCount = 0;
var playerPairCount = 0;
var naturalCount = 0;

var total = 0;
var today = new Date();
var D = today.getDate();
var M = today.getMonth() + 1;
var Y = today.getFullYear();
var nowdate;

if (M < 10) {
	if (D < 10) {
		nowdate = Y+'-0'+M+'-0'+D;
	} else {
		nowdate = Y+'-0'+M+'-'+D;
	}
}else {
	if (D < 10) {
		nowdate = Y+'-'+M+'-0'+D;
	} else {
		nowdate = Y+'-'+M+'-'+D;
	}

}


manifest = [
	{
		"src" : "assets/images/result_bg.png",
		"id"  : "bg", 
	},
	{
		"src" : "assets/images/Components/P2.png",
		"id"  : "P2", 
	},
	{
		"src" : "assets/images/Components/B2.png",
		"id"  : "B2", 
	},
	{
		"src" : "assets/images/Components/T2.png",
		"id"  : "T2", 
	},
	{
		"src" : "assets/images/Components/bs2.png",
		"id"  : "bs2", 
	},
	{
		"src" : "assets/images/Components/ps2.png",
		"id"  : "ps2", 
	},
	{
		"src" : "assets/images/Components/B.png",
		"id"  : "B", 
	},
	{
		"src" : "assets/images/Components/P.png",
		"id"  : "P", 
	},
	{
		"src" : "assets/images/Components/tie_icon.png",
		"id"  : "tie_icon", 
	},
	{
		"src" : "assets/images/Components/bs.png",
		"id"  : "bs", 
	},

	{
		"src" : "assets/images/Components/ps.png",
		"id"  : "ps", 
	},


	{
		"src" : "assets/images/Components/ntr.png",
		"id"  : "ntr", 
	},


	{
		"src" : "assets/images/Components/result_btn.png",
		"id"  : "result_btn", 
	},



];


loader = new createjs.LoadQueue(true);
loader.on('progress', handleProgress, this);
loader.on("fileload", handleFile);
loader.addEventListener("complete",loadingComplete);
loader.loadManifest(manifest,true);


function handleProgress() {
	total = Math.round(loader.progress / 1 * 100);

	if (total == 100) {
		setTimeout(function(){
			socket.emit("newVisitor2");
			btn_result.addEventListener("click", function(event) { location.replace("gameHashHistory") })

			$('.loading_animation_con').animate({
				'opacity': '0'
			},100);
			$('.loading_animation_con').hide();
			$('#result_bg').animate({
				'opacity': '1'
			},1000);

			$('#result_canvas').animate({
				'opacity': '1'
			},1000);
		},2000);
	}

	$('#percent').html(total+'%');
    // $('.loader p').html(Math.round(loader.progress / 1 * 100) + "%")
}

window.addEventListener("resize",resize);


function handleFile(event) {
}

function loadingComplete(){
	var windowH = window.innerHeight;
	var windowW = window.innerWidth;

	bg = new createjs.Bitmap(loader.getResult("bg"));


	P2 = new createjs.Bitmap(loader.getResult("P2"));
	B2 = new createjs.Bitmap(loader.getResult("B2"));
	T2 = new createjs.Bitmap(loader.getResult("T2"));

	bs2 = new createjs.Bitmap(loader.getResult("bs2"));
	ps2 = new createjs.Bitmap(loader.getResult("ps2"));

	B_top = new createjs.Bitmap(loader.getResult("B"));
	P_top = new createjs.Bitmap(loader.getResult("P"));


	tie_icon = new createjs.Bitmap(loader.getResult("tie_icon"));
	bs = new createjs.Bitmap(loader.getResult("bs"));
	ps = new createjs.Bitmap(loader.getResult("ps"));
	ntr = new createjs.Bitmap(loader.getResult("ntr"));

	btn_result = new createjs.Bitmap(loader.getResult("result_btn"));

	btn_text =  new createjs.Text("Hash Code + Salt Code 결과값 조회하기", "20px Arial", "BLACK");

	banker_DiplayScore =  new createjs.Text(bankerScore, "20px digital7", "yellow");
	player_DiplayScore =  new createjs.Text(playerScore, "20px digital7", "yellow");
	tie_DiplayScore =  new createjs.Text(tieScore, "20px digital7", "yellow");
	banker_Pair_DiplayScore =  new createjs.Text(bankerPairCount, "20px digital7", "yellow");
	player_Pair_DiplayScore =  new createjs.Text(playerPairCount, "20px digital7", "yellow");
	natural_display_score = new createjs.Text(naturalCount, "20px digital7", "yellow");



	scoreContainer = new createjs.Container();
	mainContainer = new createjs.Container();
	mainContainer.addChild(P2,B2,T2,bs2,ps2,B_top,P_top,tie_icon,bs,ps,ntr);
	scoreContainer.addChild(banker_DiplayScore,player_DiplayScore,tie_DiplayScore,banker_Pair_DiplayScore,player_Pair_DiplayScore,natural_display_score,btn_result,btn_text)

	appendedChips = new createjs.Container();

	stage.addChild(mainContainer,appendedChips,scoreContainer);
	stage.update();
	resize();

}

function resize(){

	stage.canvas.width = $('#result_bg').width();
	stage.canvas.height = $('#result_bg').height();

	var windowW = window.innerWidth;

	bottom_t_y = windowW / 2.02;
	objScale = (windowW - (windowW / 2.15)) / bg.image.height;


	top_obj_scale = (windowW - (windowW / 2.05)) / bg.image.height;


	main1_row_posX = windowW / 1.06;
	main1_row_posY = windowW / 5.93;

	btn_result.scaleX = (windowW - (windowW / 2.8)) / bg.image.height;
	btn_result.scaleY = (windowW - (windowW / 1.7)) / bg.image.height;
	btn_result.y =  windowW / 2.17;
	btn_result.x = $('#result_bg').width() - ($('#result_bg').width() / 1.01);

	btn_text.x = $('#result_bg').width() - ($('#result_bg').width() / 1.03);
	btn_text.y = windowW / 1.64;
	btn_text.scaleX = btn_text.scaleY = (windowW - (windowW / 3)) / bg.image.height;;


	banker_DiplayScore.y = windowW / 1.72;
	banker_DiplayScore.x = $('#result_bg').width() - ($('#result_bg').width() / 3.2);
	banker_DiplayScore.scaleX = banker_DiplayScore.scaleY = objScale;

	player_DiplayScore.y = windowW / 1.64;
	player_DiplayScore.x = $('#result_bg').width() - ($('#result_bg').width() / 3.2);
	player_DiplayScore.scaleX = player_DiplayScore.scaleY = objScale;

	tie_DiplayScore.y = windowW / 1.565;
	tie_DiplayScore.x = $('#result_bg').width() - ($('#result_bg').width() / 3.2);
	tie_DiplayScore.scaleX = tie_DiplayScore.scaleY = objScale;


	banker_Pair_DiplayScore.y = windowW / 1.72;
	banker_Pair_DiplayScore.x = $('#result_bg').width() - ($('#result_bg').width() / 16.7);
	banker_Pair_DiplayScore.scaleX = banker_Pair_DiplayScore.scaleY = objScale;

	player_Pair_DiplayScore.y = windowW / 1.64;
	player_Pair_DiplayScore.x =  $('#result_bg').width() - ($('#result_bg').width() / 16.7);
	player_Pair_DiplayScore.scaleX = player_Pair_DiplayScore.scaleY = objScale;

	natural_display_score.y = windowW / 1.565;
	natural_display_score.x = $('#result_bg').width() - ($('#result_bg').width() / 16.7);
	natural_display_score.scaleX = natural_display_score.scaleY = objScale;

	P2.x = 0;
	P2.y = main1_row_posY;
	P2.scaleX = P2.scaleY = objScale;
	P2.alpha = 0;

	ps2.y = P2.y;
	ps2.scaleX = ps2.scaleY = objScale;
	ps2.alpha = 0;

	bs2.y = P2.y;
	bs2.scaleX = bs2.scaleY = objScale;
	bs2.alpha = 0;


	B2.x = main1_row_posX;
	B2.y = windowW / 4.6;
	B2.scaleX = B2.scaleY = objScale;
	B2.alpha = 0;


	T2.x = main1_row_posX;
	T2.y = windowW / 2.40;
	T2.scaleX = T2.scaleY = objScale;
	T2.alpha = 0;

	P_top.x = $('#result_bg').width() - ($('#result_bg').width() / 1);
	P_top.y = windowW / 350;
	P_top.scaleX = P_top.scaleY = top_obj_scale;
	P_top.alpha = 0;

	B_top.x = $('#result_bg').width() - ($('#result_bg').width() / 1);
	B_top.y =  windowW / 350;
	B_top.scaleX = B_top.scaleY = top_obj_scale;
	B_top.alpha = 0;


	tie_icon.x = $('#result_bg').width() - ($('#result_bg').width() / 1);
	tie_icon.y = windowW / 350;
	tie_icon.scaleX = tie_icon.scaleY = top_obj_scale;
	tie_icon.alpha = 0;

	bs.x = $('#result_bg').width() - ($('#result_bg').width() / 1);
	bs.y = windowW / 350;
	bs.scaleX = bs.scaleY = top_obj_scale;
	bs.alpha = 0;


	ps.x = $('#result_bg').width() - ($('#result_bg').width() / 1);
	ps.y = windowW / 350;
	ps.scaleX = ps.scaleY = top_obj_scale;
	ps.alpha = 0;

	ntr.x =  $('#result_bg').width() - ($('#result_bg').width() / 1);
	ntr.y = windowW / 350;
	ntr.scaleX = ntr.scaleY = top_obj_scale;
	ntr.alpha = 0;


	for(i = 0; i < mainChips.length; i++) {


		if (i > 5) {
			y = Math.floor(i % 5.99);
		} else {
			y = i;
		}

		x = Math.floor(i / 5.99);




		mainChips[i]['obj']['x'] = windowW / pos_row_X[x];
		mainChips[i]['obj']['y'] = windowW / pos_row_Y[y];
		mainChips[i]['obj']['scaleX'] = mainChips[i]['obj']['scaleY'] = objScale;



		mainChips[i]['obj_pair_P']['x'] = windowW / pos_row_X[x];
		mainChips[i]['obj_pair_P']['y'] = windowW / pos_row_Y[y];
		mainChips[i]['obj_pair_B']['y'] = windowW / pos_row_Y[y];
		mainChips[i]['obj_pair_B']['x'] = windowW / pos_row_X[x];


		if (mainChips[i]['obj_top'] != null) {
			mainChips[i]['obj_top']['x'] = $('#result_bg').width() - ($('#result_bg').width() / top_tbl_X[mainChips[i]['xIndicator']]);
			mainChips[i]['obj_top']['y'] = windowW / top_tbl_Y[mainChips[i]['yIndicator']];
			mainChips[i]['obj_top']['scaleX'] = mainChips[i]['obj_top']['scaleY'] = top_obj_scale;
			// mainChips[i]['obj_top']['alpha'] = 1;

		}




		mainChips[i]['obj_top_tie']['x'] = $('#result_bg').width() - ($('#result_bg').width() / top_tbl_X[mainChips[i]['xIndicator']]);
		mainChips[i]['obj_top_tie']['y'] = windowW / top_tbl_Y[mainChips[i]['yIndicator']];
		mainChips[i]['obj_top_tie']['scaleX'] = mainChips[i]['obj_top_tie']['scaleY'] = top_obj_scale;



		mainChips[i]['obj_top_pair_b']['x'] = $('#result_bg').width() - ($('#result_bg').width() / top_tbl_X[mainChips[i]['xIndicator']])
		mainChips[i]['obj_top_pair_p']['x'] = $('#result_bg').width() - ($('#result_bg').width() / top_tbl_X[mainChips[i]['xIndicator']])
		mainChips[i]['obj_top_pair_b']['y'] = windowW / top_tbl_Y[mainChips[i]['yIndicator']];
		mainChips[i]['obj_top_pair_p']['y'] = windowW / top_tbl_Y[mainChips[i]['yIndicator']];



		mainChips[i]['obj_pair_P']['scaleX'] = mainChips[i]['obj_pair_P']['scaleY'] = objScale;
		mainChips[i]['obj_pair_B']['scaleX'] = mainChips[i]['obj_pair_B']['scaleY'] = objScale;

		mainChips[i]['obj_top_pair_b']['scaleX'] = mainChips[i]['obj_top_pair_b']['scaleY'] = top_obj_scale;
		mainChips[i]['obj_top_pair_p']['scaleX'] = mainChips[i]['obj_top_pair_p']['scaleY'] = top_obj_scale;


		if (mainChips[i]['bankerPair'] == true) {
			mainChips[i]['obj_pair_B']['alpha'] = 1;
			mainChips[i]['obj_top_pair_b']['alpha'] = 1;
		}


		if (mainChips[i]['playerPair'] == true) {
			mainChips[i]['obj_pair_P']['alpha'] = 1;
			mainChips[i]['obj_top_pair_p']['alpha'] = 1;

		}



		if (mainChips[i]['playerNatural'] == true || mainChips[i]['bankerNatural'] == true ) {

			mainChips[i]['obj_natural']['x'] = $('#result_bg').width() - ($('#result_bg').width() / top_tbl_X[mainChips[i]['xIndicator']]);
			mainChips[i]['obj_natural']['y'] = windowW / top_tbl_Y[mainChips[i]['yIndicator']];
			mainChips[i]['obj_natural']['scaleX'] = mainChips[i]['obj_natural']['scaleY'] = top_obj_scale;
			mainChips[i]['obj_natural']['alpha'] = 1;

		}





	}



	stage.update();
}





socket.on("bankerWin",function(data){

	bankerScore++;
	banker_DiplayScore.text = bankerScore;

	var windowW = window.innerWidth;

	var res = B2.clone();
	var res_top = B_top.clone();

	var res_pair_P = ps2.clone();
	var res_pair_B = bs2.clone();


	var res_top_pair_p = ps.clone();
	var res_top_pair_b = bs.clone();
	var res_top_tie = tie_icon.clone();
	var res_natural = ntr.clone();

	res.alpha = 1;
	res_pair_P.alpha = 0;
	res_pair_B.alpha = 0;

	res_top.alpha = 1;


	if (row_indicator > 37) {
		lastWinner = null;
		row_indicator = 0;
		row_down_indicator = 0;
		looping_win = 0;
		rowplusUsed = 0;
		rowplusUsed_c = false;
		mainChips = [];
		appendedChips.removeAllChildren();
	}
	

	if (lastWinner == null) {
		lastWinner = 'banker';
	} else if (lastWinner == 'banker') {

		if (looping_win >= 9) {
			rowplusUsed_c++;
			looping_win++;
			rowplusUsed = true;
			row_indicator++;
			lastWinner = 'banker';

		} else {
			looping_win++;
			row_down_indicator++;
			lastWinner = 'banker';

		}
	} else {

		if (rowplusUsed == true) {
			row_indicator -= rowplusUsed_c;
			rowplusUsed = false;
		}

		looping_win = 0;
		lastWinner = 'banker';
		row_indicator++;
		row_down_indicator = 0;
	}



	if (data.bankerPair == true) {	
		bankerPairCount++;
		banker_Pair_DiplayScore.text = bankerPairCount;
	}

	if (data.playerPair == true) {
		playerPairCount++;
		player_Pair_DiplayScore.text = playerPairCount;
	}

	if (data.playerNatural == true) {
		naturalCount++;
		natural_display_score.text = naturalCount;
	}

	if (data.BankerNatural == true) {
		naturalCount++;
		natural_display_score.text = naturalCount;
	}


	res_obj = {
		"obj" : res,
		"obj_pair_P" : res_pair_P,
		"obj_pair_B" : res_pair_B,
		"obj_top" : res_top,
		"obj_top_pair_p" : res_top_pair_p,
		"obj_top_pair_b" : res_top_pair_b,
		"obj_top_tie" : res_top_tie ,
		"obj_natural" : res_natural,
		"playerNatural" : data.playerNatural,
		"bankerNatural" : data.BankerNatural,
		"playerPair" : data.playerPair,
		"bankerPair" : data.bankerPair,
		"yIndicator" : row_down_indicator,
		"xIndicator" : row_indicator,
	}


	mainChips.push(res_obj);

	appendedChips.addChild(res,res_pair_P,res_pair_B,res_top,res_top_pair_p,res_top_pair_b,res_top_tie,res_natural);



	resize();
	stage.update();



});

socket.on("tieGame",function(data){

	if (row_indicator == 37) {
		lastWinner = null;
		row_indicator = 0;
		row_down_indicator = 0;
		looping_win = 0;
		rowplusUsed = 0;
		rowplusUsed_c = false;
		mainChips = [];
		appendedChips.removeAllChildren();
	}

	tieScore++;
	tie_DiplayScore.text = tieScore;

	var windowW = window.innerWidth;

	var res = T2.clone();

	if (lastWinner == 'banker') {
		var res_top = B_top.clone();
		res_top.alpha = 1;
	} else if (lastWinner == 'player') {
		var res_top = P_top.clone();
		res_top.alpha = 1;
	} else {
		var res_top;
	}
	
	
	var res_pair_P = ps2.clone();
	var res_pair_B = bs2.clone();


	var res_top_pair_p = ps.clone();
	var res_top_pair_b = bs.clone();
	var res_top_tie = tie_icon.clone();
	var res_natural = ntr.clone();

	res.alpha = 1;
	res_pair_P.alpha = 0;
	res_pair_B.alpha = 0;
	res_top_tie.alpha = 1;

	if (lastWinner != null) {
		if (lastWinner == 'banker') {

			if (lastWinner == null) {
				lastWinner = 'banker';
			} else if (lastWinner == 'banker') {
				if (looping_win >= 9) {
					rowplusUsed_c++;
					looping_win++;
					rowplusUsed = true;
					row_indicator++;
					lastWinner = 'banker';
				} else {
					looping_win++;
					row_down_indicator++;
					lastWinner = 'banker';
				}
			} else {
				if (rowplusUsed = true) {
					row_indicator-= rowplusUsed_c;
					rowplusUsed = false;
				}
				looping_win = 0;
				rowplusUsed = false;
				lastWinner = 'banker';
				row_indicator++;
				row_down_indicator = 0;
			}


		} else if (lastWinner == 'player') {

			if (lastWinner == null) {
				lastWinner = 'player';
			} else if (lastWinner == 'player') {
				if (looping_win >= 9) {
					rowplusUsed_c++;
					looping_win++;
					rowplusUsed = true;
					row_indicator++;
					lastWinner = 'player';
				} else {
					looping_win++;
					row_down_indicator++;
					lastWinner = 'player';
				}
			} else {
				if (rowplusUsed == true) {
					row_indicator-= rowplusUsed_c;
					rowplusUsed = false;
				}
				looping_win = 0;
				rowplusUsed = false;
				lastWinner = 'player';
				row_indicator++;
				row_down_indicator = 0;
			}

		}
	} 

	
	if (data.bankerPair == true) {	
		bankerPairCount++;
		banker_Pair_DiplayScore.text = bankerPairCount;
	}

	if (data.playerPair == true) {
		playerPairCount++;
		player_Pair_DiplayScore.text = playerPairCount;
	}

	if (data.playerNatural == true) {
		naturalCount++;
		natural_display_score.text = naturalCount;
	}

	if (data.BankerNatural == true) {
		naturalCount++;
		natural_display_score.text = naturalCount;
	}



	res_obj = {
		"obj" : res,
		"obj_pair_P" : res_pair_P,
		"obj_pair_B" : res_pair_B,
		"obj_top" : res_top,
		"obj_top_pair_p" : res_top_pair_p,
		"obj_top_pair_b" : res_top_pair_b,
		"obj_top_tie" : res_top_tie ,
		"obj_natural" : res_natural,
		"playerNatural" : data.playerNatural,
		"bankerNatural" : data.BankerNatural,
		"playerPair" : data.playerPair,
		"bankerPair" : data.bankerPair,
		"yIndicator" : row_down_indicator,
		"xIndicator" : row_indicator,
	}

	mainChips.push(res_obj);

	appendedChips.addChild(res,res_pair_P,res_pair_B,res_top,res_top_pair_p,res_top_pair_b,res_top_tie,res_natural);



	resize();
	stage.update();


});

socket.on("playerWin",function(data){


	playerScore++;
	player_DiplayScore.text = playerScore;

	var windowW = window.innerWidth;

	var res = P2.clone();
	var res_top = P_top.clone();

	var res_pair_P = ps2.clone();
	var res_pair_B = bs2.clone();


	var res_top_pair_p = ps.clone();
	var res_top_pair_b = bs.clone();
	var res_top_tie = tie_icon.clone();
	var res_natural = ntr.clone();

	res.alpha = 1;
	res_pair_P.alpha = 0;
	res_pair_B.alpha = 0;

	res_top.alpha = 1;


	if (row_indicator == 37) {
		lastWinner = null;
		row_indicator = 0;
		row_down_indicator = 0;
		looping_win = 0;
		rowplusUsed = 0;
		rowplusUsed_c = false;
		mainChips = [];
		appendedChips.removeAllChildren();
	}




	if (lastWinner == null) {
		lastWinner = 'player';
	} else if (lastWinner == 'player') {
		if (looping_win >= 9) {
			rowplusUsed_c++;
			looping_win++;
			rowplusUsed = true;
			row_indicator++;
			lastWinner = 'player';
		} else {
			looping_win++;
			row_down_indicator++;
			lastWinner = 'player';
		}
	} else {

		if (rowplusUsed == true) {
			row_indicator-= rowplusUsed_c;
			rowplusUsed = false;
		}

		looping_win = 0;
		lastWinner = 'player';
		row_indicator++;
		row_down_indicator = 0;
	}


	
	if (data.bankerPair == true) {	
		bankerPairCount++;
		banker_Pair_DiplayScore.text = bankerPairCount;
	}

	if (data.playerPair == true) {
		playerPairCount++;
		player_Pair_DiplayScore.text = playerPairCount;
	}

	if (data.playerNatural == true) {
		naturalCount++;
		natural_display_score.text = naturalCount;
	}

	if (data.BankerNatural == true) {
		naturalCount++;
		natural_display_score.text = naturalCount;
	}


	res_obj = {
		"obj" : res,
		"obj_pair_P" : res_pair_P,
		"obj_pair_B" : res_pair_B,
		"obj_top" : res_top,
		"obj_top_pair_p" : res_top_pair_p,
		"obj_top_pair_b" : res_top_pair_b,
		"obj_top_tie" : res_top_tie ,
		"obj_natural" : res_natural,
		"playerNatural" : data.playerNatural,
		"bankerNatural" : data.BankerNatural,
		"playerPair" : data.playerPair,
		"bankerPair" : data.bankerPair,
		"yIndicator" : row_down_indicator,
		"xIndicator" : row_indicator,
	}

	mainChips.push(res_obj);

	appendedChips.addChild(res,res_pair_P,res_pair_B,res_top,res_top_pair_p,res_top_pair_b,res_top_tie,res_natural);


	resize();
	stage.update();

});


socket.on('loadData',function(data){

	lastWinner = null;
	row_indicator = 0;
	row_down_indicator = 0;
	looping_win = 0;
	rowplusUsed = 0;
	rowplusUsed_c = false;
	mainChips = [];
	appendedChips.removeAllChildren();

	bankerScore = 0;
	playerScore = 0;
	tieScore = 0;
	bankerPairCount = 0;
	playerPairCount = 0;
	naturalCount = 0;

	if (data.length > 0) {



		for(p = 0; p < data.length; p++){
			var pastdata = data[p];


			if (pastdata.winner == "banker") {
				
				bankerScore++;
				banker_DiplayScore.text = bankerScore;

				var windowW = window.innerWidth;

				var res = B2.clone();
				var res_top = B_top.clone();

				var res_pair_P = ps2.clone();
				var res_pair_B = bs2.clone();


				var res_top_pair_p = ps.clone();
				var res_top_pair_b = bs.clone();
				var res_top_tie = tie_icon.clone();
				var res_natural = ntr.clone();


				res.alpha = 1;
				res_pair_P.alpha = 0;
				res_pair_B.alpha = 0;

				res_top.alpha = 1;


				if (row_indicator == 37) {
					lastWinner = null;
					row_indicator = 0;
					row_down_indicator = 0;
					looping_win = 0;
					rowplusUsed = 0;
					rowplusUsed_c = false;
					mainChips = [];
					appendedChips.removeAllChildren();

					bankerScore = 0;
					playerScore = 0;
					tieScore = 0;
					bankerPairCount = 0;
					playerPairCount = 0;
					naturalCount = 0;

				}
				

				if (lastWinner == null) {
					lastWinner = 'banker';
				} else if (lastWinner == 'banker') {

					if (looping_win >= 9) {
						rowplusUsed_c++;
						looping_win++;
						rowplusUsed = true;
						row_indicator++;
						lastWinner = 'banker';
					} else {
						looping_win++;
						row_down_indicator++;
						lastWinner = 'banker';
					}
				} else {
					if (rowplusUsed == true) {
						row_indicator -= rowplusUsed_c;
						rowplusUsed = false;
					}
					looping_win = 0;
					lastWinner = 'banker';
					row_indicator++;
					row_down_indicator = 0;
				}

				
				if (pastdata.bankerPair == true) {	
					bankerPairCount++;
					banker_Pair_DiplayScore.text = bankerPairCount;
				}

				if (pastdata.playerPair == true) {
					playerPairCount++;
					player_Pair_DiplayScore.text = playerPairCount;
				}

				if (pastdata.playerNatural == true) {
					naturalCount++;
					natural_display_score.text = naturalCount;
				}

				if (pastdata.BankerNatural == true) {
					naturalCount++;
					natural_display_score.text = naturalCount;
				}


				res_obj = {
					"obj" : res,
					"obj_pair_P" : res_pair_P,
					"obj_pair_B" : res_pair_B,
					"obj_top" : res_top,
					"obj_top_pair_p" : res_top_pair_p,
					"obj_top_pair_b" : res_top_pair_b,
					"obj_top_tie" : res_top_tie ,
					"obj_natural" : res_natural,
					"playerNatural" : pastdata.playerNatural,
					"bankerNatural" : pastdata.BankerNatural,
					"playerPair" : pastdata.playerPair,
					"bankerPair" : pastdata.bankerPair,
					"yIndicator" : row_down_indicator,
					"xIndicator" : row_indicator,
				}


				mainChips.push(res_obj);

				appendedChips.addChild(res,res_pair_P,res_pair_B,res_top,res_top_pair_p,res_top_pair_b,res_top_tie,res_natural);


				
				stage.update();
				resize();

			} else if (pastdata.winner == "tie") {
				
				if (row_indicator == 37) {
					lastWinner = null;

					row_indicator = 0;
					row_down_indicator = 0;
					looping_win = 0;
					rowplusUsed = 0;
					rowplusUsed_c = false;
					mainChips = [];
					appendedChips.removeAllChildren();

					bankerScore = 0;
					playerScore = 0;
					tieScore = 0;
					bankerPairCount = 0;
					playerPairCount = 0;
					naturalCount = 0;
				}

				tieScore++;
				tie_DiplayScore.text = tieScore;

				var windowW = window.innerWidth;

				var res = T2.clone();

				if (lastWinner == 'banker') {
					var res_top = B_top.clone();
					res_top.alpha = 1;
				} else if (lastWinner == 'player') {
					var res_top = P_top.clone();
					res_top.alpha = 1;
				} else {
					var res_top;
				}
				
				
				var res_pair_P = ps2.clone();
				var res_pair_B = bs2.clone();


				var res_top_pair_p = ps.clone();
				var res_top_pair_b = bs.clone();
				var res_top_tie = tie_icon.clone();
				var res_natural = ntr.clone();


				res.alpha = 1;
				res_pair_P.alpha = 0;
				res_pair_B.alpha = 0;
				res_top_tie.alpha = 1;

				if (lastWinner != null) {
					if (lastWinner == 'banker') {

						if (lastWinner == null) {
							lastWinner = 'banker';
						} else if (lastWinner == 'banker') {
							if (looping_win >= 9) {
								rowplusUsed_c++;
								looping_win++;
								rowplusUsed = true;
								row_indicator++;
								lastWinner = 'banker';
							} else {
								looping_win++;
								row_down_indicator++;
								lastWinner = 'banker';
							}
						} else {
							if (rowplusUsed = true) {
								row_indicator-= rowplusUsed_c;
								rowplusUsed = false;
							}
							looping_win = 0;
							rowplusUsed = false;
							lastWinner = 'banker';
							row_indicator++;
							row_down_indicator = 0;
						}


					} else if (lastWinner == 'player') {

						if (lastWinner == null) {
							lastWinner = 'player';
						} else if (lastWinner == 'player') {
							if (looping_win >= 9) {
								rowplusUsed_c++;
								looping_win++;
								rowplusUsed = true;
								row_indicator++;
								lastWinner = 'player';
							} else {
								looping_win++;
								row_down_indicator++;
								lastWinner = 'player';
							}
						} else {
							if (rowplusUsed == true) {
								row_indicator-= rowplusUsed_c;
								rowplusUsed = false;
							}
							looping_win = 0;
							rowplusUsed = false;
							lastWinner = 'player';
							row_indicator++;
							row_down_indicator = 0;
						}

					}
				} 

				
				if (pastdata.bankerPair == true) {	
					bankerPairCount++;
					banker_Pair_DiplayScore.text = bankerPairCount;
				}

				if (pastdata.playerPair == true) {
					playerPairCount++;
					player_Pair_DiplayScore.text = playerPairCount;
				}

				if (pastdata.playerNatural == true) {
					naturalCount++;
					natural_display_score.text = naturalCount;
				}

				if (pastdata.BankerNatural == true) {
					naturalCount++;
					natural_display_score.text = naturalCount;
				}



				res_obj = {
					"obj" : res,
					"obj_pair_P" : res_pair_P,
					"obj_pair_B" : res_pair_B,
					"obj_top" : res_top,
					"obj_top_pair_p" : res_top_pair_p,
					"obj_top_pair_b" : res_top_pair_b,
					"obj_top_tie" : res_top_tie ,
					"obj_natural" : res_natural,
					"playerNatural" : pastdata.playerNatural,
					"bankerNatural" : pastdata.BankerNatural,
					"playerPair" : pastdata.playerPair,
					"bankerPair" : pastdata.bankerPair,
					"yIndicator" : row_down_indicator,
					"xIndicator" : row_indicator,
				}

				mainChips.push(res_obj);

				appendedChips.addChild(res,res_pair_P,res_pair_B,res_top,res_top_pair_p,res_top_pair_b,res_top_tie,res_natural);



				stage.update();
				resize();


			} else if (pastdata.winner == "player") {
				
				playerScore++;
				player_DiplayScore.text = playerScore;

				var windowW = window.innerWidth;

				var res = P2.clone();
				var res_top = P_top.clone();

				var res_pair_P = ps2.clone();
				var res_pair_B = bs2.clone();


				var res_top_pair_p = ps.clone();
				var res_top_pair_b = bs.clone();
				var res_top_tie = tie_icon.clone();
				var res_natural = ntr.clone();

				res.alpha = 1;
				res_pair_P.alpha = 0;
				res_pair_B.alpha = 0;

				res_top.alpha = 1;


				if (row_indicator == 37) {
					lastWinner = null;
					row_indicator = 0;
					row_down_indicator = 0;
					looping_win = 0;
					rowplusUsed = 0;
					rowplusUsed_c = false;
					mainChips = [];
					appendedChips.removeAllChildren();


					bankerScore = 0;
					playerScore = 0;
					tieScore = 0;
					bankerPairCount = 0;
					playerPairCount = 0;
					naturalCount = 0;
				}




				if (lastWinner == null) {
					lastWinner = 'player';
				} else if (lastWinner == 'player') {
					if (looping_win >= 9) {
						rowplusUsed_c++;
						looping_win++;
						rowplusUsed = true;
						row_indicator++;
						lastWinner = 'player';
					} else {
						looping_win++;
						row_down_indicator++;
						lastWinner = 'player';
					}
				} else {

					if (rowplusUsed == true) {
						row_indicator-= rowplusUsed_c;
						rowplusUsed = false;
					}

					looping_win = 0;
					lastWinner = 'player';
					row_indicator++;
					row_down_indicator = 0;
				}


				
				if (pastdata.bankerPair == true) {	
					bankerPairCount++;
					banker_Pair_DiplayScore.text = bankerPairCount;
				}

				if (pastdata.playerPair == true) {
					playerPairCount++;
					player_Pair_DiplayScore.text = playerPairCount;
				}

				if (pastdata.playerNatural == true) {
					naturalCount++;
					natural_display_score.text = naturalCount;
				}

				if (pastdata.BankerNatural == true) {
					naturalCount++;
					natural_display_score.text = naturalCount;
				}


				res_obj = {
					"obj" : res,
					"obj_pair_P" : res_pair_P,
					"obj_pair_B" : res_pair_B,
					"obj_top" : res_top,
					"obj_top_pair_p" : res_top_pair_p,
					"obj_top_pair_b" : res_top_pair_b,
					"obj_top_tie" : res_top_tie ,
					"obj_natural" : res_natural,
					"playerNatural" : pastdata.playerNatural,
					"bankerNatural" : pastdata.BankerNatural,
					"playerPair" : pastdata.playerPair,
					"bankerPair" : pastdata.bankerPair,
					"yIndicator" : row_down_indicator,
					"xIndicator" : row_indicator,
				}

				mainChips.push(res_obj);

				appendedChips.addChild(res,res_pair_P,res_pair_B,res_top,res_top_pair_p,res_top_pair_b,res_top_tie,res_natural);


				stage.update();
				resize();

			}
			
		}


	}
});
