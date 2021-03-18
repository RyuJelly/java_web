$(function(){
	$('<ol id="notes"></ol>').insertBefore($('#footer'));
	
	$('span.footnote').each(function(i){
		$(this).before('<a id="context-' + (i+1) + '">[' + (i+1) + ']</a>')
			.appendTo('#notes')
			.append('&nbsp; <a href="#context-' + (i+1) + '">context-' + (i+1) + '</a>')
			.wrap('<li></li>');
	});
	
});