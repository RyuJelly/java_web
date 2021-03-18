// step1
$(function(){
	$('#letter-a a').click(function(e){
		$('#dictionary').hide().load('a.html', function(){
			$(this).fadeIn();
		});
		
		e.preventDefault;
		// return false;
	});
});

//step2
/*$(function(){
	$('#letter-b a').click(function(e){
		$.getJSON('b.json', function(data){ 			// 변수안에 json값이 들어온다
			$('#dictionary').empty();
			$.each(data, function(index, item){
				var html = '<div class="entry">';
				html += '<h3 class="term">' + item.term + '</h3>';
				html += '<div class="part">' + item.part + '</div>';
				html += '<div class="definition">' + item.definition + '</div>';
				html += '</div>';
				
				$('#dictionary').append(html);
			});//end each
		});// end getJSON
		
		e.preventDefault;
		// return false;
	});// end click
});// end function
*/

//step2-1
$(function(){
	$('#letter-b a').click(function(e){
		$.ajax({
			url : 'b.json',
			type : 'get',
			dataType : 'json',
			success : function(data){
				$('#dictionary').empty();
				
				data.sort(function(a,b){
					if(a.term < b.term){
						return 1;	//자리바꿈
					}else if(a.term > b.term){
						return -1;
					}else{
						return 0;
					}
				});
				
				$.each(data, function(index, item){
					var html = '<div class="entry">';
					html += '<h3 class="term">' + item.term + '</h3>';
					html += '<div class="part">' + item.part + '</div>';
					html += '<div class="definition">' + item.definition + '</div>';
					html += '</div>';
					
					$('#dictionary').append(html);
				});//end each
			}
		});
		
		e.preventDefault;
		// return false;
	});
});


//step3
$(function(){
	$('#letter-c a').click(function(e){
		$.getScript('c.js');
		
		e.preventDefault;
		// return false;
	});
});


//step4
/*$(function(){
	$('#letter-d a').click(function(e){
		$.get('d.xml', function(data){				// data = entries
			$(data).find('entry').each(function(index){
				$entry = $(this);
				var html = '<div class="entry">';
				html += '<h3 class="term">' + $entry.attr('term') + '</h3>';
				html += '<div class="part">' + $entry.attr('part') + '</div>';
				html += '<div class="definition">' + $entry.find('definition').text() + '</div>';
				html += '</div>';
				
				$('#dictionary').append(html);
			});
		});
		
		e.preventDefault;
		// return false;
	});
});
*/

//step4-2
$(function(){
	$('#letter-d a').click(function(e){
		$.ajax({
			url : 'd.xml',
			type : 'get',
			dataType : 'xml',
			success : function(data){
				$(data).find('entry').each(function(index){
					$entry = $(this);
					var html = '<div class="entry">';
					html += '<h3 class="term">' + $entry.attr('term') + '</h3>';
					html += '<div class="part">' + $entry.attr('part') + '</div>';
					html += '<div class="definition">' + $entry.find('definition').text() + '</div>';
					html += '</div>';
					
					$('#dictionary').append(html);
				});
			}
		});
		
		e.preventDefault;
		// return false;
	});
});


//step5
/*$(function(){
	$('#letter-e a').click(function(e){
		$.get('server3.jsp', {'term' : $(this).text()}, function(data){
			$('#dictionary').html(data);
		});
		
		e.preventDefault;
		// return false;
	});
});*/


//step5-2
$(function(){
	$('#letter-e a').click(function(e){
		$.ajax({
			url : 'server3.jsp',
			type : 'get',
			dataType : 'text',
			data : {'term' : $(this).text()},
			success : function(data){
				$('#dictionary').html(data);
			}
		});
		
		e.preventDefault;
		// return false;
	});
});


//step6
$(function(){
	$('#letter-f form').submit(function(e){
		$.ajax({
			url : 'server3.jsp',
			type : 'post',
			dataType : 'text',
			data : $(this).serialize(),							// serialize() => form태그 안의 값을 key, value 값으로 변환
			success : successHandler
		});
		
		//e.preventDefault;
		return false;
	});
	
	function successHandler(data){
		$('#dictionary').html(data);
	}
});


