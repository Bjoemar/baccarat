var socket = io();

var today = new Date();
var D = today.getDate();
var M = today.getMonth() + 1;
var Y = today.getFullYear();


if (M < 10) {
	if (D < 10) {
		$('#date-picker').val(Y+'-0'+M+'-0'+D);
	} else {
		$('#date-picker').val(Y+'-0'+M+'-'+D);
	}
}else {
	if (D < 10) {
		$('#date-picker').val(Y+'-'+M+'-0'+D);
	} else {
		$('#date-picker').val(Y+'-'+M+'-'+D);
	}

}

function getCards(name) {
	if (name == 'diamond_1') {
		var card = 'assets/images/DiamondCard/diamond_1.png';
		return card;
	} else if (name == 'diamond_2') {
		var card = 'assets/images/DiamondCard/diamond_2.png';
		return card;
	} else if (name == 'diamond_3') {
		var card = 'assets/images/DiamondCard/diamond_3.png';
		return card;
	} else if (name == 'diamond_4') {
		var card = 'assets/images/DiamondCard/diamond_4.png';
		return card;
	} else if (name == 'diamond_5') {
		var card = 'assets/images/DiamondCard/diamond_5.png';
		return card;
	} else if (name == 'diamond_6') {
		var card = 'assets/images/DiamondCard/diamond_6.png';
		return card;
	} else if (name == 'diamond_7') {
		var card = 'assets/images/DiamondCard/diamond_7.png';
		return card;
	} else if (name == 'diamond_8') {
		var card = 'assets/images/DiamondCard/diamond_8.png';
		return card;
	} else if (name == 'diamond_9') {
		var card = 'assets/images/DiamondCard/diamond_9.png';
		return card;
	} else if (name == 'diamond_10') {
		var card = 'assets/images/DiamondCard/diamond_10.png';
		return card;
	} else if (name == 'diamond_11') {
		var card = 'assets/images/DiamondCard/diamond_11.png';
		return card;
	} else if (name == 'diamond_12') {
		var card = 'assets/images/DiamondCard/diamond_12.png';
		return card;
	} else if (name == 'diamond_13') {
		var card = 'assets/images/DiamondCard/diamond_13.png';
		return card;
	} else if (name == 'flower_1') {
		var card = 'assets/images/FlowerCard/flower_1.png';
		return card;
	} else if (name == 'flower_2') {
		var card = 'assets/images/FlowerCard/flower_2.png';
		return card;
	} else if (name == 'flower_3') {
		var card = 'assets/images/FlowerCard/flower_3.png';
		return card;
	} else if (name == 'flower_4') {
		var card = 'assets/images/FlowerCard/flower_4.png';
		return card;
	} else if (name == 'flower_5') {
		var card = 'assets/images/FlowerCard/flower_5.png';
		return card;
	} else if (name == 'flower_6') {
		var card = 'assets/images/FlowerCard/flower_6.png';
		return card;
	} else if (name == 'flower_7') {
		var card = 'assets/images/FlowerCard/flower_7.png';
		return card;
	} else if (name == 'flower_8') {
		var card = 'assets/images/FlowerCard/flower_8.png';
		return card;
	} else if (name == 'flower_9') {
		var card = 'assets/images/FlowerCard/flower_9.png';
		return card;
	} else if (name == 'flower_10') {
		var card = 'assets/images/FlowerCard/flower_10.png';
		return card;
	} else if (name == 'flower_11') {
		var card = 'assets/images/FlowerCard/flower_11.png';
		return card;
	} else if (name == 'flower_12') {
		var card = 'assets/images/FlowerCard/flower_12.png';
		return card;
	} else if (name == 'flower_13') {
		var card = 'assets/images/FlowerCard/flower_13.png';
		return card;
	} else if (name == 'hearth_1') {
		var card = 'assets/images/HeartCard/heart_1.png';
		return card;
	} else if (name == 'hearth_2') {
		var card = 'assets/images/HeartCard/heart_2.png';
		return card;
	} else if (name == 'hearth_3') {
		var card = 'assets/images/HeartCard/heart_3.png';
		return card;
	} else if (name == 'hearth_4') {
		var card = 'assets/images/HeartCard/heart_4.png';
		return card;
	} else if (name == 'hearth_5') {
		var card = 'assets/images/HeartCard/heart_5.png';
		return card;
	} else if (name == 'hearth_6') {
		var card = 'assets/images/HeartCard/heart_6.png';
		return card;
	} else if (name == 'hearth_7') {
		var card = 'assets/images/HeartCard/heart_7.png';
		return card;
	} else if (name == 'hearth_8') {
		var card = 'assets/images/HeartCard/heart_8.png';
		return card;
	} else if (name == 'hearth_9') {
		var card = 'assets/images/HeartCard/heart_9.png';
		return card;
	} else if (name == 'hearth_10') {
		var card = 'assets/images/HeartCard/heart_10.png';
		return card;
	} else if (name == 'hearth_11') {
		var card = 'assets/images/HeartCard/heart_11.png';
		return card;
	} else if (name == 'hearth_12') {
		var card = 'assets/images/HeartCard/heart_12.png';
		return card;
	} else if (name == 'hearth_13') {
		var card = 'assets/images/HeartCard/heart_13.png';
		return card;
	} else if (name == 'spade_1') {
		var card = 'assets/images/SpadeCard/spade_1.png';
		return card;
	} else if (name == 'spade_2') {
		var card = 'assets/images/SpadeCard/spade_2.png';
		return card;
	} else if (name == 'spade_3') {
		var card = 'assets/images/SpadeCard/spade_3.png';
		return card;
	} else if (name == 'spade_4') {
		var card = 'assets/images/SpadeCard/spade_4.png';
		return card;
	} else if (name == 'spade_5') {
		var card = 'assets/images/SpadeCard/spade_5.png';
		return card;
	} else if (name == 'spade_6') {
		var card = 'assets/images/SpadeCard/spade_6.png';
		return card;
	} else if (name == 'spade_7') {
		var card = 'assets/images/SpadeCard/spade_7.png';
		return card;
	} else if (name == 'spade_8') {
		var card = 'assets/images/SpadeCard/spade_8.png';
		return card;
	} else if (name == 'spade_9') {
		var card = 'assets/images/SpadeCard/spade_9.png';
		return card;
	} else if (name == 'spade_10') {
		var card = 'assets/images/SpadeCard/spade_10.png';
		return card;
	} else if (name == 'spade_11') {
		var card = 'assets/images/SpadeCard/spade_11.png';
		return card;
	} else if (name == 'spade_12') {
		var card = 'assets/images/SpadeCard/spade_12.png';
		return card;
	} else if (name == 'spade_13') {
		var card = 'assets/images/SpadeCard/spade_13.png';
		return card;
	} else {
		var card = 'assets/images/closeCard.png';
		return card;
	}
}
var sort = $ ('#date-picker').val();

socket.emit('HistoryClient' , {sort});

socket.on('loadDatahis' , function(data){

	console.log(data)

	var pastLen = data.length;
	var pastimg = "";
	var sniff_data = '';


	for(p = 0; p < pastLen; p++){
		var pastdata = data[p];

		if (pastdata.winner == "banker") {
			var colorResult = 'redResult';
			var gameres = 'BANKER';
		} else if (pastdata.winner == "tie") {
			var colorResult = 'greenResult';
			var gameres = 'TIE';
		} else if (pastdata.winner == "player") {
			var colorResult = 'blueResult';
			var gameres = 'PLAYER';
		}

		var p_card1 = getCards(pastdata.playerRes2);
		var p_card2 = getCards(pastdata.playerRes1);
		var p_card3 = getCards(pastdata.ep2card);


		var b_card1 = getCards(pastdata.BankerRes1);
		var b_card2 = getCards(pastdata.BankerRes2);
		var b_card3 = getCards(pastdata.eb2card);

		$('.gameresult table').append('<tr class="gameobjects"><td class="trounds">'

			+pastdata.round+'</td><td class="thash"><label>'
			+pastdata.hash+'</label></td><td class="tsaltcode">'
			+pastdata._id+'</td><td  class="tcard"><img src="'+p_card3+'"><img src="'+p_card2+'"><img src="'+p_card1+'"> V.S <img src="'+b_card1+'"><img src="'+b_card2+'"><img src="'+b_card3+'"></td>'
			+'<td class="tresult '+colorResult+'">'+gameres+'</td></tr>')
	}


})

socket.on('pageCount',function(data) {


	if (data == 0) {
		$('.pagination').hide();
	} else {
		$('.pagination').show();
	var current_page = 1;
	var records_per_page = 10;
	var pages = data / 10;
	pages = Math.ceil(pages);
	var lastone = pages % 10;

	changePage(pages);

	if (pages < 11) {
		$('#prevpage').hide();
		$('#nextpage').hide();
	}




	function prevPage() {
		
		if (records_per_page == pages) {

				current_page = current_page - 10;

				if (lastone == 0) {
					records_per_page = records_per_page - 10;
				} else {

					records_per_page = records_per_page - lastone;
				}
				changePage();

		} else {

			if (current_page > 1) {
				current_page = current_page - 10;
				records_per_page = records_per_page - 10;
				changePage();
			}

		}
	}

	function nextPage() {

		if (lastone == 0){

			var rs_limiter = records_per_page;

		}else {

			var rs_limiter = records_per_page + 10;

		}

		var curpage = curpage + 10;


		if (records_per_page == pages || curpage == pages) {

		} else {

			if (rs_limiter < pages) {

				current_page = current_page + 10;
				records_per_page = records_per_page + 10;
				changePage()
				
				} else {

					current_page = current_page + 10;
					records_per_page = records_per_page + lastone;
					changePage();
			}
		}
	}

}

$('#prevpage').click(function(){
	prevPage(pages);
})

$('#nextpage').click(function(){
	nextPage(pages);
})


function changePage(page){

		// $('.gameobjects').remove();
		$('.page_content').html('');

		if (pages > 10) {

			for(x = current_page; x <= records_per_page; x++) {
				$('.page_content').append('<li class="page-item" ><a class="page-link loadpagesbtn"  href="#">'+x+'</a></li>')
			}

		} else {

			for(x = current_page; x <= pages; x++) {
				$('.page_content').append('<li class="page-item" ><a class="page-link loadpagesbtn"  href="#">'+x+'</a></li>')
			}
		}
		

	}

})


$('#checkResult').click(function(){

	var hash = $('#hashtext').val();
	var salt = $('#salttext').val();
	var round = $('#roundtxt').val();

	if(hash.length == 0 || salt.length == 0 || round.length == 0 ) {
		$('#errorModal .modal-body p').html('');
		$('#errorModal .modal-body p').html('정보가 일치하지 않습니다.');
		$('#errorModal').modal('show');
	} else if (salt.length < 24 || salt.length > 24 ) {
		$('#errorModal .modal-body p').html('');
		$('#errorModal .modal-body p').html('정보가 일치하지 않습니다.');
		$('#errorModal').modal('show');
	}else {
		socket.emit('searchDatahis' , {hashcode: hash , saltcode : salt, roundcode : round});
	}
})

socket.on('resdata' , function(data){

	if (data.length > 0) {
		$('#invalidtxt').hide();
		$('#result_round').html(data[0].round);



		if (data[0].winner == "banker") {
			var gameres = 'Banker';
		} else if (data[0].winner == "tie") {
			var gameres = 'TIE';
		} else if (data[0].winner == "player") {
			var gameres = 'PLAYER';
		}


		var Ppair = "NO";
		var Bpair = "NO";

		if (data[0].bankerPair) {
			var Bpair = "YES";
		}
		
		if (data[0].playerPair) {
			var Ppair = "YES";
		}


		$('#player_pair').html(Ppair);
		$('#banker_pair').html(Bpair);
		$('#result_num').html(gameres);
		$('#restext').show();

	}
})


socket.on('invalid' , function(data){
	$('#invalidtxt').show();
	$('#restext').hide();
	$('#invalidtxt').html('정보가 일치하지 않습니다.');
})

 $('#date-picker').change(function(){
 	var sort = $(this).val();


 	socket.emit('HistoryClient' , {sort});
 	$('.gameresult table .gameobjects').remove();
 })

 $(document).ready(function(){

 	$(document).on('click','.loadpagesbtn',function(){
 		var skip = 10 * $(this).html();
 		skip = skip - 10;
 		var sort = $('#date-picker').val();

 		socket.emit('page_control',{skip : skip , sort : sort});
 	})



 	socket.on('getpageload',function(data){
 		$('.gameobjects').remove();
		var pastLen = data.length;

		for(p = 0; p < pastLen; p++) {

			var pastdata = data[p];
			
			if (pastdata.winner == "banker") {
				var colorResult = 'redResult';
				var gameres = 'BANKER';
			} else if (pastdata.winner == "tie") {
				var colorResult = 'greenResult';
				var gameres = 'TIE';
			} else if (pastdata.winner == "player") {
				var colorResult = 'blueResult';
				var gameres = 'PLAYER';
			}

		
		var p_card1 = getCards(pastdata.playerRes1);
		var p_card2 = getCards(pastdata.playerRes2);
		var p_card3 = getCards(pastdata.ep2card);


		var b_card1 = getCards(pastdata.BankerRes1);
		var b_card2 = getCards(pastdata.BankerRes2);
		var b_card3 = getCards(pastdata.eb2card);

		$('.gameresult table').append('<tr class="gameobjects"><td class="trounds">'

			+pastdata.round+'</td><td class="thash"><label>'
			+pastdata.hash+'</label></td><td class="tsaltcode">'
			+pastdata._id+'</td><td  class="tcard"><img src="'+p_card3+'"><img src="'+p_card1+'"><img src="'+p_card2+'"> V.S <img src="'+b_card1+'"><img src="'+b_card2+'"><img src="'+b_card3+'"></td>'
			+'<td class="tresult '+colorResult+'">'+gameres+'</td></tr>')
		
		}

 	})


 })
 
 	socket.on('loadsort',function(sortres){
		var pastLen = sortres.length;

		for(p = 0; p < pastLen; p++) {

			var pastdata = sortres[p];

			if (pastdata.gameResult == 1) {
				var colorResult = 'blueResult';
				var gameres = 'A';
			} else if (pastdata.gameResult == 2) {
				var colorResult = 'greenResult';
				var gameres = 'B';
			} else if (pastdata.gameResult == 3) {
				var colorResult = 'redResult';
				var gameres = 'C';
			}


			$('.gameresult table').append('<tr class="gameobjects"><td class="trounds">'
				+pastdata.rounds+'</td><td class="thash">'
				+pastdata.hash+'</td><td class="tsaltcode">'
				+pastdata._id+'</td><td class="tresult '+colorResult+'">'
				+gameres+'</td></tr>')
		}
 })


$(document).ready(function(){


	$(document).on('click' , '.trounds' , function(){

		var copytext = $(this).html();
		$('#roundtxt').val('');
		$('#roundtxt').val(copytext);

	});


	$(document).on('click' , '.thash' , function(){
		var copytext = $(this).find('label').html();
		$('#hashtext').val('');
		$('#hashtext').val(copytext);

	});


	$(document).on('click' , '.tsaltcode' , function(){
		var copytext = $(this).html();
		$('#salttext').val('');
		$('#salttext').val(copytext);

	});
})

$(document).ready(function(){

	var screenlength = $(window).width();
	var ua = navigator.userAgent.toLowerCase(); 

	if (ua.indexOf('safari') != -1) { 
	  if (ua.indexOf('chrome') > -1) {
	  } else {

	  	setTimeout(function(){
		  	$('.page-item a').css({
		  		'font-size' : '12px',
		  	})

		  	$('.page-link').css({
		  		'font-size' : '12px',
		  	})
	  	},1000)


	  }
	}
})