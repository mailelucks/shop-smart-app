// $(document).ready(function() {
// $('document').ready(function(){

/* Allows user to add list items */
	function addListItem(){
		var itemName = $('#itemName').val();
		var itemPrice = $('#price').val();
		var itemQuantity = $('#quantity').val();
		var itemRetailer = $('#retailer').val();
		var itemRow = $('<div class="item"><ul class="item-details"><li>' + itemName + '</li><li>' + itemPrice +'</li><li>' + itemQuantity + '</li><li>' + itemRetailer + '</li></ul><ul class="options"><li class="check"><input class="check" type="checkbox" name="checked"></li><li class="switch"><input id="toggle" class="toggle toggle-round" type="checkbox"><label for="toggle"></label>	</li><li class="delete"><button id="delete">X</button></li></ul></div>' );

		$('.shop-list').prepend(itemRow);
    	$('#itemName').val();
	}

	/* Allows user to delete list items */
function deleteItem() {

    $(this).parent().parent().remove();
}

	/* Adds item to list */
$(function() {

    $('#addItem').on('click', addListItem);
    // $('#itemList').on('click', '.checkbox', tickItem);
    $('.item').on('click', '.delete' , deleteItem);
    $('.list-form').keydown(function(e) {
        if (e.which == 13) {
            addListItem();
        }
  
    });
     
    
});

// });

// jquery convert integer to price