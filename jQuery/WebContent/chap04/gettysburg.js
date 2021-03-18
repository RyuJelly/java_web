$(function(){
	var $speech = $('div.speech');
	var defaultSize = $speech.css('fontSize'); //12px
	
	$('#switcher button').click(function(){
		var num = parseInt($speech.css('fontSize'));
		
		switch(this.id){
		case 'switcher-large':
			num *= 1.2;
			break;
		case 'switcher-small':
			num /= 1.2;
			break;
		default:
			num = parseInt(defaultSize);
			break;
		}
		
		$speech.animate({fontSize: num + 'px'}, 'slow');
		
	});
	
});


$(function(){
	$('div.label').click(function(){
		
		var pWidth = $('div.speech p').outerWidth();		// 안쪽 padding까지 포함된 width값
		var divWidth = $('#switcher').outerWidth();
		
		var num = parseInt(pWidth) - parseInt(divWidth);
		
		$('#switcher').fadeTo('fast', 0.5)
						.animate({marginLeft: num}, 'slow')
						.fadeTo('fast', 1)
						.slideUp('slow', function(){
							$(this).css('background', 'red');
						})
						.slideDown('slow');
		
	});
});


$(function(){
	// 2번쨰 p태그를 화면에서 숨기고
	// slideUp + slideDown => slideToggle
	// read more <==> read less : text(파라미터), text(): 텍스트 뽑아내는 것
	
	var $p = $('div.speech p:nth-child(2)');	// = $('div.speech).eq(1) 
	var $a = $('a.more');

	$p.hide();
	
	$a.click(function(){
		
		$p.slideToggle('slow');
		
		if($a.text() == 'read more'){
			$(this).text('read less');
		}else{
			$a.text('read more');
		}
		
	});
});