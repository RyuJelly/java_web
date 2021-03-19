$(function(){
	$('.quantity input').change(function(){
		
		var totalCost = 0;
		var totalQuantity = 0;
		
		$('table tbody tr').each(function(index){
			var price = parseFloat($(this).find('.price').text().replace(/^[^\d.]/, ''));
			price = isNaN(price) ? 0 : price;
			
			var quantity = parseInt($(this).find('.quantity input').val());
			quantity = isNaN(quantity)? 0 : quantity;
			
			var cost = price * quantity;
			$(this).find('.cost').text('$'+cost.toFixed(2));					// toFixed(n) => 소수점 n자리까지만 나타냄
			
			totalCost += cost;
			totalQuantity += quantity;
			
		});
		
		$('.subtotal .cost').text('$' + totalCost.toFixed(2));
		
		$('.shopping .quantity').text(totalQuantity);
		
		/*var subtotal = 0;
		$('tbody td.cost').each(function(){			
			subtotal += parseFloat($(this).text().replace(/^[^\d.]/, ''));
			$('.subtotal .cost').text('$' + subtotal.toFixed(2));
		});
		
		var shoppingQuantity = 0;
		$('.quantity input').each(function(){
			shoppingQuantity += parseInt($(this).val());
			$('.shopping .quantity').text(shoppingQuantity);			
		});*/
		
	});
});



