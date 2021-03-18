$(function(){
	$('#selected-plays > li').addClass('horizontal');
	$('#selected-plays li:not("#selected-plays > li")').addClass('sub-level');
	$('a[href $= pdf]').addClass('pdflink');
	$('a[href ^= mailto]').addClass('mailto');
	
	$('a[href *= henry]:not(.mailto)').addClass('henrylink');
	//$('a[href *= henry]').not('.mailto').addClass('henrylink');
	
	//$('tr:nth-child(2n)').addClass('alt');
	//$('tr:odd').addClass('alt');					// 짝수번째
	//$('tr:nth-child(odd)').addClass('alt');		// 홀수번째
	$('tr').filter(':odd').addClass('alt');			// 짝수번째
	
	//$('td:contains(Henry)').nextAll().addClass('highlight');
	
	//$('td:contains(Henry)').nextAll().andSelf().addClass('highlight');
	//$('td:contains(Henry)').parent().find('td').addClass('highlight');
	$('td:contains(Henry)').parent().find('td:eq(0)').addClass('highlight')
	.end().find('td:eq(1)').addClass('highlight');
});