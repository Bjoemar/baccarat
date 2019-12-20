var socket = io();
socket.emit("newVisitor");

var getPast = true;

$('.gamebody').animate({
	'opacity' : '1',
},1000);

socket.on('seconds',function(data){

	if (data.seconds < 15) {
		getPast = false;
	}
	if (data.seconds < 10) {
		$('#time_text').html("00 : 0"+data.seconds);
		// time_text.text = "00 : 0"+data.seconds;
	} else {
		$('#time_text').html("00 : "+data.seconds);
		// time_text.text = "00 : "+data.seconds;
	}

	if (data.seconds == 60) {
		animateCards();
	} else if (data.seconds == 10) {
		cleanCard();
	}
})


socket.on('loadDataGame',function(data){
	
	if (getPast) {

		$('#p1').attr('src','../assets/images/cards/'+data[0].playerRes1+'.png');
		$('#p2').attr('src','../assets/images/cards/'+data[0].playerRes2+'.png');
		$('#b1').attr('src','../assets/images/cards/'+data[0].BankerRes1+'.png');
		$('#b2').attr('src','../assets/images/cards/'+data[0].BankerRes2+'.png');
		$('#p1').css('opacity' , '1');
		$('#p2').css('opacity' , '1');
		$('#b1').css('opacity' , '1');
		$('#b2').css('opacity' , '1');
		$('#playerScore').show();
		$('#bankerScore').show();
		$('#playerScore').html(data[0].secondLeftVal);
		$('#bankerScore').html(data[0].secondRightVal);
		if (data[0].winner == 'banker') {
			$('.winner img').hide();
				$('#banker_win').show();
				$('#banker_win').animate({
					'left' : '-10px',

				},500);
			

		} else if (data[0].winner == 'player') {

			$('.winner img').hide();
				$('#player_win').show();
				$('#player_win').animate({
					'left' : '-10px',
				},500);
		} else {
			$('.winner img').hide();
				$('#tie_win').show();
				$('#tie_win').animate({
					'left' : '-10px',
				},500);
		}

		if (data[0].eb2card != null) {
			$('#b3').attr('src','../assets/images/cards/'+data[0].eb2card+'.png');
			$('#b3').css('opacity' , '1');
		}

		if (data[0].ep2card != null) {
			$('#p3').attr('src','../assets/images/cards/'+data[0].ep2card+'.png');
			$('#p3').css('opacity' , '1');
		}
	}



	if ((data[0].round + 1) < 10) {
		$('#round_text').html("ROUND 0"+(data[0].round + 1));
	} else {
		$('#round_text').html("ROUND "+(data[0].round + 1));
	}
})


socket.on('player_card1',function(data){

	$('#p2').attr('src','../assets/images/cards/'+data.playerRes1+'.png');
	$('#_p2').addClass('showCard');
	$('#_p2').css({
		'opacity' : '0',
		'transition' : 'all 0.7s',
	});

	$('#p2').addClass('showCard');


	setTimeout(function(){
		$('#_p2').removeClass('showCard');
		$('#_p2').addClass('hideCard');
		
		$('#p2').removeClass('showCard');
		$('#p2').addClass('hideCard');

		$('#p2').css({
			'opacity' : '1',
			'transition' : 'all 0.7s',
		})
		$('#playerScore').show();
		$('#bankerScore').show();
		$('#playerScore').html(data.playerTotal)

	},200)


})


socket.on('banker_card1',function(data){

	$('#b1').attr('src','../assets/images/cards/'+data.BankerRes1+'.png');

	$('#_b1').addClass('showCard');
	$('#_b1').css({
		'opacity' : '0',
		'transition' : 'all 0.7s',
	});

	$('#b1').addClass('showCard');


	setTimeout(function(){
		$('#_b1').removeClass('showCard');
		$('#_b1').addClass('hideCard');

		$('#b1').removeClass('showCard');
		$('#b1').addClass('hideCard');

		$('#b1').css({
			'opacity' : '1',
			'transition' : 'all 0.7s',
		})

		$('#bankerScore').html(data.bankerTotal)

	},200)

	// $('#_b1').addClass('unrotate');

});

socket.on('player_card2',function(data){


	// $('#_p2').animate({
	// 	'left' : '-428px',
	// 	'top' : '0',
	// 	'transform' : 'rotate(0deg)',
	// },500);

	// $('#_p2').addClass('unrotate');

	$('#p1').attr('src','../assets/images/cards/'+data.playerRes2+'.png');

	$('#_p1').addClass('showCard');
	$('#_p1').css({
		'opacity' : '0',
		'transition' : 'all 0.7s',
	});

	$('#p1').addClass('showCard');


	setTimeout(function(){
		$('#_p1').removeClass('showCard');
		$('#_p1').addClass('hideCard');
		
		$('#p1').removeClass('showCard');
		$('#p1').addClass('hideCard');

		$('#p1').css({
			'opacity' : '1',
			'transition' : 'all 0.7s',
		})

		$('#playerScore').html(data.playerTotal)

	},200);



})

socket.on('game_round',function(data){
	$('#time_text').html(data.game_round);
});

socket.on('banker_card2',function(data){


	$('#b2').attr('src','../assets/images/cards/'+data.BankerRes2+'.png');

	$('#_b2').addClass('showCard');
	$('#_b2').css({
		'opacity' : '0',
		'transition' : 'all 0.7s',
	});

	$('#b2').addClass('showCard');


	setTimeout(function(){
		$('#_b2').removeClass('showCard');
		$('#_b2').addClass('hideCard');
		
		$('#b2').removeClass('showCard');
		$('#b2').addClass('hideCard');

		$('#b2').css({
			'opacity' : '1',
			'transition' : 'all 0.7s',
		})

		$('#bankerScore').html(data.bankerTotal)

	},200)
});


socket.on('dataTotalPlayer',function(data){
	if (data.playerRes3) {


		$('#p3').attr('src','../assets/images/cards/'+data.playerRes3+'.png');
 
		$('#_p3').show();
		$('#_p3').animate({
			'left' : '-499px',
			'top' : '0',
			'transform' : 'rotate(0deg)',
		},500);

		setTimeout(function(){

			$('#_p3').addClass('showCard');
			$('#_p3').css({
				'opacity' : '0',
				'transition' : 'all 0.7s',
			});

			$('#p3').addClass('showCard');


			setTimeout(function(){
				$('#_p3').removeClass('showCard');
				$('#_p3').addClass('hideCard');
				
				$('#p3').removeClass('showCard');
				$('#p3').addClass('hideCard');

				$('#p3').css({
					'opacity' : '1',
					'transition' : 'all 0.7s',
				})
				$('#playerScore').html(data.playerTotal)


			},200)
		},1000)

	}

});



socket.on('dataTotalBanker',function(data){
	if (data.BankerRes3) {

		$('#b3').attr('src','../assets/images/cards/'+data.BankerRes3+'.png');



		$('#_b3').show();
		$('#_b3').animate({
			'left' : '-133px',
			'top' : '0',
			'transform' : 'rotate(0deg)',
		},500);


		setTimeout(function(){

			$('#_b3').addClass('showCard');
			$('#_b3').css({
				'opacity' : '0',
				'transition' : 'all 0.7s',
			});

			$('#b3').addClass('showCard');


			setTimeout(function(){
				$('#_b3').removeClass('showCard');
				$('#_b3').addClass('hideCard');
				
				$('#b3').removeClass('showCard');
				$('#b3').addClass('hideCard');

				$('#b3').css({
					'opacity' : '1',
					'transition' : 'all 0.7s',
				})

				$('#bankerScore').html(data.bankerTotal)
			},200)
		},1000)

	}

});

socket.on("bankerWin",function(){

	$('.winner img').hide();
	$('#banker_win').show();
	$('#banker_win').animate({
		'left' : '-10px',

	},500);

});


socket.on("tieGame",function(){
	$('.winner img').hide();
	$('#tie_win').show();
	$('#tie_win').animate({
		'left' : '-10px',
	},500);

	
});


socket.on("playerWin",function(){

	$('.winner img').hide();
	$('#player_win').show();
	$('#player_win').animate({
		'left' : '-10px',
	},500);

});


function cleanCard(){

	
	$('#p1').removeClass('hideCard');
	$('#_p1').removeClass('hideCard');

	$('#p1').addClass('showCard');
	$('#p1').css({
		'opacity' : '0',
		'transition' : 'all 0.7s',
	});

	$('#_p1').addClass('showCard');


	setTimeout(function(){
		$('#p1').removeClass('showCard');
		$('#p1').addClass('hideCard');
		
		$('#_p1').removeClass('showCard');
		$('#_p1').addClass('hideCard');

		$('#_p1').css({
			'opacity' : '1',
			'transition' : 'all 0.7s',
		});

		setTimeout(function(){
			$('#_p1').css({
				'left' : '-620px',
				'transition' : '0.5s',
			});

			setTimeout(function(){
				$('#_p1').hide()
				$('#_p1').css('left' , '0');
				$('#p1').removeClass('hideCard');
				$('#_p1').removeClass('hideCard');
				$('#p1').attr('src','assets/images/closeCard.png');
			},500)		
		},500)	

	},200);



	// $('#_p2').hide()
	// $('#_p2').css('left' , '0');

	$('#p2').removeClass('hideCard');
	$('#_p2').removeClass('hideCard');
	
	$('#p2').addClass('showCard');
	$('#p2').css({
		'opacity' : '0',
		'transition' : 'all 0.7s',
	});

	$('#_p2').addClass('showCard');


	setTimeout(function(){
		$('#p2').removeClass('showCard');
		$('#p2').addClass('hideCard');
		
		$('#_p2').removeClass('showCard');
		$('#_p2').addClass('hideCard');

		$('#_p2').css({
			'opacity' : '1',
			'transition' : 'all 0.7s',
		});

		setTimeout(function(){
			$('#_p2').css({
				'left' : '-620px',
				'transition' : '0.5s',
			});

			setTimeout(function(){
				$('#_p2').hide()
				$('#_p2').css('left' , '0');
				$('#p2').removeClass('hideCard');
				$('#_p2').removeClass('hideCard');
				$('#p2').attr('src','assets/images/closeCard.png');
			},500)		
		},500)	


	},200)


	// $('#_p3').hide()
	// $('#_p3').css('left' , '0');

	$('#p3').removeClass('hideCard');
	$('#_p3').removeClass('hideCard');
	
	$('#p3').addClass('showCard');
	$('#p3').css({
		'opacity' : '0',
		'transition' : 'all 0.7s',
	});

	$('#_p3').addClass('showCard');


	setTimeout(function(){
		$('#p3').removeClass('showCard');
		$('#p3').addClass('hideCard');
		
		$('#_p3').removeClass('showCard');
		$('#_p3').addClass('hideCard');

		$('#_p3').css({
			'opacity' : '1',
			'transition' : 'all 0.7s',
		});


		setTimeout(function(){
			$('#_p3').css({
				'left' : '-620px',
				'transition' : '0.5s',
			});

			setTimeout(function(){
				$('#_p3').hide()
				$('#_p3').css('left' , '0');
				$('#p3').removeClass('hideCard');
				$('#_p3').removeClass('hideCard');
				$('#p3').attr('src','assets/images/closeCard.png');
			},500)		
		},500)	

	},200)


	// $('#_b1').hide()
	// $('#_b1').css('left' , '0');

	$('#b1').removeClass('hideCard');
	$('#_b1').removeClass('hideCard');
	
	$('#b1').addClass('showCard');
	$('#b1').css({
		'opacity' : '0',
		'transition' : 'all 0.7s',
	});

	$('#_b1').addClass('showCard');


	setTimeout(function(){
		$('#b1').removeClass('showCard');
		$('#b1').addClass('hideCard');
		
		$('#_b1').removeClass('showCard');
		$('#_b1').addClass('hideCard');

		$('#_b1').css({
			'opacity' : '1',
			'transition' : 'all 0.7s',
		});


		setTimeout(function(){
			$('#_b1').css({
				'left' : '-620px',
				'transition' : '0.5s',
			});

			setTimeout(function(){
				$('#_b1').hide()
				$('#_b1').css('left' , '0');
				$('#b1').removeClass('hideCard');
				$('#_b1').removeClass('hideCard');
				$('#b1').attr('src','assets/images/closeCard.png');
			},500)		
		},500)	


	},200)


	// $('#_b2').hide()
	// $('#_b2').css('left' , '0');


	$('#b2').removeClass('hideCard');
	$('#_b2').removeClass('hideCard');
	
	$('#b2').addClass('showCard');
	$('#b2').css({
		'opacity' : '0',
		'transition' : 'all 0.7s',
	});

	$('#_b2').addClass('showCard');


	setTimeout(function(){
		$('#b2').removeClass('showCard');
		$('#b2').addClass('hideCard');
		
		$('#_b2').removeClass('showCard');
		$('#_b2').addClass('hideCard');

		$('#_b2').css({
			'opacity' : '1',
			'transition' : 'all 0.7s',
		});


		setTimeout(function(){
			$('#_b2').css({
				'left' : '-620px',
				'transition' : '0.5s',
			});

			setTimeout(function(){
				$('#_b2').hide()
				$('#_b2').css('left' , '0');
				$('#b2').removeClass('hideCard');
				$('#_b2').removeClass('hideCard');
				$('#b2').attr('src','assets/images/closeCard.png');
			},500)		
		},500)	

	},200)


	$('#b3').removeClass('hideCard');
	$('#_b3').removeClass('hideCard');
	
	$('#b3').addClass('showCard');
	$('#b3').css({
		'opacity' : '0',
		'transition' : 'all 0.7s',
	});

	$('#_b3').addClass('showCard');


	setTimeout(function(){
		$('#b3').removeClass('showCard');
		$('#b3').addClass('hideCard');
		
		$('#_b3').removeClass('showCard');
		$('#_b3').addClass('hideCard');

		$('#_b3').css({
			'opacity' : '1',
			'transition' : 'all 0.7s',
		});


		setTimeout(function(){
			$('#_b3').css({
				'left' : '-620px',
				'transition' : '0.5s',
			});

			setTimeout(function(){
				$('#_b3').hide()
				$('#_b3').css('left' , '0');
				$('#b3').removeClass('hideCard');
				$('#_b3').removeClass('hideCard');
				$('#b3').attr('src','assets/images/closeCard.png');
			},500)		
		},500)	

	},200)


	setTimeout(function(){
		$('#banker_win').css({
			'left' : '1500px',
			'opacity' : '0',
			'transition' : 'all 0.8s'
		})

		setTimeout(function(){
			$('#banker_win').css({
				'left' : '-1500px',
				'opacity' : '1',
				'transition' : 'left 0'
			})
		})
	},1000)
	setTimeout(function(){
		$('#tie_win').css({
			'left' : '1500px',
			'opacity' : '0',
			'transition' : 'all 0.8s'
		})

		setTimeout(function(){
			$('#tie_win').css({
				'left' : '-1500px',
				'opacity' : '1',
				'transition' : 'left 0'
			})
		})
	},1000)
	setTimeout(function(){
		$('#player_win').css({
			'left' : '1500px',
			'opacity' : '0',
			'transition' : 'all 0.8s'
		})

		setTimeout(function(){
			$('#player_win').css({
				'left' : '-1500px',
				'opacity' : '1',
				'transition' : 'left 0'
			})
		})
	},1000)


	$('#playerScore').hide();
	$('#bankerScore').hide();
	$('#playerScore').html('0');
	$('#bankerScore').html('0');



}



function animateCards(){


	// NEW 

	$('#_p2').show();
	$('#_p2').animate({
		'left' : '-428px',
		'top' : '0',
		'transform' : 'rotate(0deg)',
	},500);


	setTimeout(function(){
		$('#_b1').show();
		$('#_b1').animate({
			'left' : '-261px',
			'top' : '0',
			'transform' : 'rotate(0deg)',
		},500);


	},1000)


	setTimeout(function(){
		
		$('#_p1').show();
		$('#_p1').animate({
			'left' : '-358px',
			'top' : '0',
			'transform' : 'rotate(0deg)',
		},500);




	},2000);



	setTimeout(function(){
		$('#_b2').show();
		$('#_b2').animate({
			'left' : '-193px',
			'top' : '0',
			'transform' : 'rotate(0deg)',
		},500);

	},3000);

}

socket.on('gameRounds',function(data){
	$('#round_text').html('ROUND '+data.game_round);
})

// animateCards();


