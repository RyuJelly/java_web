/*$(function() {
	$.ajax({
		url : 'server.jsp',
		type : 'post',
		dataType : 'json',
		success : successHandler
	});
	
	function successHandler(data){
		$.each(data, function(index, blog) {			
			var html = '<div class="blog">';
			html += '<div class="title">tilte: ' + blog.title + '</div><br>';
			html += '<div class="writer">writer: ' + blog.writer + '</div>';
			html += '<div class="contents">contents: ' + blog.contents + '</div>';
			html += '</div>';
			
			$('#list').append(html);
		});
	}
});*/


$(function() {
	$.ajax({
		url : 'server.jsp',
		type : 'post',
		dataType : 'json',
		success : successHandler
	});
	
	$('form').submit(function() {
		$.ajax({
			url : 'server.jsp',
			type : 'post',
			dataType : 'json',
			data : $(this).serialize(),
			success : successHandler
		});
		return false;
	});
	
	function successHandler(data){
		$('div#list').empty();
		
		$.each(data, function(index, blog) {
			var html = '<div class="blog">';
			html += '<div class="title">tilte: ' + blog.title + '</div><br>';
			html += '<div class="writer">writer: ' + blog.writer + '</div>';
			html += '<div class="contents">contents: ' + blog.contents + '</div>';
			html += '</div>';
			
			$('#list').append(html);
		});
	}
});



$(function(){
//	$.ajax({
//		url : 'dummy.json',
//		dataType : 'json',
//		success : function(data){
//			$.each(data, function(index, m){
//				var html = '<div class="blog">' + m.name + ', ' + m.email + ', ' + m.gender;
//				$('#js').append(html);
//			});
//		}
//	});
	
	$.getJSON('dummy.json', function(data){
		$.each(data, function(index, m){
			var html = '<div class="blog f1">' + m.name + ', ' + m.email + ', ' + m.gender;
			$('#js').append(html);
		});
		
		$('.f1').wrapInner('<a href="#" />');
	});
		
});



