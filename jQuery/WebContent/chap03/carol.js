// step1
/*$(function(){
	$('#switcher-large').on('click', function(){
		$('body').addClass('large');
	});
});*/

// step2 removeClass('')
/*$(function(){
	$('#switcher-default').on('click', function(){
		$('body').removeClass('large').removeClass('narrow').removeClass('selected');
		$(this).addClass('selected');
	});
	
	$('#switcher-narrow').on('click', function(){
		$('body').removeClass('large').addClass('narrow').removeClass('selected');
		$(this).addClass('selected');
	});
	
	$('#switcher-large').click(function(){
		$('body').removeClass('narrow').addClass('large').removeClass('selected');
		$(this).addClass('selected');
	});`
	
});*/


// step3: 클릭한 버튼만 selected 스타일 적용
/*$(function(){
	$('#switcher-default').on('click', function(){
		$('body').removeClass('large').removeClass('narrow');
		$('#switcher-narrow, #switcher-large').removeClass('selected');
		$(this).addClass('selected');
	});
	
	$('#switcher-narrow').on('click', function(){
		$('body').removeClass('large').addClass('narrow');
		$('#switcher-default').add('#switcher-large').removeClass('selected');
		$(this).addClass('selected');
	});
	
	$('#switcher-large').click(function(){
		$('body').removeClass('narrow').addClass('large');
		//$('div').not('#swicher-large').removeClass('selected');
		$('div').not(this).removeClass('selected');
		$(this).addClass('selected');
	});
	
});*/


// step4: selected 관련된 중복된 코드를 최소화 하자.
/*$(function(){
	$('#switcher-default').on('click', function(){
		$('body').removeClass('large').removeClass('narrow');
	});
	
	$('#switcher-narrow').on('click', function(){
		$('body').removeClass('large').addClass('narrow');
	});
	
	$('#switcher-large').click(function(){
		$('body').removeClass('narrow').addClass('large');
	});
	
	$('#switcher > div.button').click(function(){
		$('#switcher > div.button').removeClass('selected');
		$(this).addClass('selected');
	});
	
});*/

// step5: 중복된 코드를  최적화.
/*$(function(){
	$('#switcher > div.button').click(function(){
		$('#switcher > div.button').removeClass('selected');
		$(this).addClass('selected');
		$('body').removeClass();					// .removeClass(); => addClass로 추가한 모든 class제거
	});
	
	$('#switcher-narrow').on('click', function(){
		$('body').addClass('narrow');
	});
	
	$('#switcher-large').click(function(){
		$('body').addClass('large');
	});
	
});*/

// step6: button에 모두 포함 => id로 구별 (this.id)
/*$(function(){
	$('#switcher > div.button').click(function(){	
		$('#switcher > div.button').removeClass('selected');
		$(this).addClass('selected');
		$('body').removeClass();
		
		if(this.id == 'switcher-narrow'){
			$('body').addClass('narrow');
		}else if(this.id == 'switcher-large'){
			$('body').addClass('large');
		}		
	});	
});*/


// step8: hover 이벤트
$(function(){
	$('#switcher > div.button').hover(function(){	
		$(this).addClass('hover');
	}, function(){
		$(this).removeClass('hover');
	});	
});


// step9: 스타일변환기를 클릭시 버튼 3개가 화면에서 사라짐.
/*$(function(){
	$('#switcher > h3').click(function(){
		$('#switcher > div.button').toggleClass('hidden');
	});
	
	$('#switcher > div.button').click(function(){	
		$('#switcher > div.button').removeClass('selected');
		$(this).addClass('selected');
		$('body').removeClass();
		
		if(this.id == 'switcher-narrow'){
			$('body').addClass('narrow');
		}else if(this.id == 'switcher-large'){
			$('body').addClass('large');
		}		
	});	
});*/


//step10: 이벤트 버블링 방지
/*$(function(){
	$('#switcher').click(function(){
		$('#switcher > div.button').toggleClass('hidden');
	});
	
	$('#switcher > div.button').click(function(e){		
		$('#switcher > div.button').removeClass('selected');
		$(this).addClass('selected');
		$('body').removeClass();
		
		if(this.id == 'switcher-narrow'){
			$('body').addClass('narrow');
		}else if(this.id == 'switcher-large'){
			$('body').addClass('large');
		}	
		
		e.stopPropagation();							// 이벤트 버블링
	});	
});*/


//step11: 	on()으로 이벤트를 발생 => off('click')으로 이벤트 해제
//			large, narrow 버튼을 클릭 후 hidden 이벤트 해제.
$(function(){
	$('#switcher').on('click.kosta1', function(){
		$('#switcher > div.button').toggleClass('hidden');
	});
	
//	$('#switcher').on('click.kosta2', function(){
//		alert('다른 이벤트 결과');
//	});
	
	$('#switcher > div.button').click(function(e){
		$('#switcher > div.button').removeClass('selected');
		$(this).addClass('selected');
		$('body').removeClass();
		
		if(this.id == 'switcher-narrow'){
			$('body').addClass('narrow');
			//$('#switcher').off();
		}else if(this.id == 'switcher-large'){
			$('body').addClass('large');
			//$('#switcher').off();
		}
		
		e.stopPropagation();						// 이벤트 버블링
	});	
	
	$('#switcher-narrow, #switcher-large').click(function(){
		$('#switcher').off('click.kosta1');
	});
	
	$('#switcher').trigger('click.kosta1');
	
});