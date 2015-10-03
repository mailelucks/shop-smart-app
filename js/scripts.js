// $(document).ready(function() {
// $('document').ready(function(){

/* Allows user to add list items */
	function addListItem(){
		var itemName = $('#itemName').val();
		var itemPrice = $('#price').val();
		var itemQuantity = $('#quantity').val();
		var itemRetailer = $('#retailer').val();
		var itemRow = $('<div class="item"><ul class="item-details"><li>' + itemName + '</li></ul><ul class="options"><li class="check"><input class="check" type="checkbox" name="checked"></li><li class="delete"><button id="delete">X</button></li></ul></div>' );

		if ($('#itemName').val() != 0) {
    		$('.shop-list').prepend(itemRow);
    		$('itemName').val();
    		$('.error').css("display", "none");
		} else {
			$('.error').css("display", "block");
		};
	}

/* Allows user to delete list items */
function deleteItem() {

    $(this).parent().parent().remove();
}

/* Allows user to check list items */
function checkItem() {

	$(this).parent().parent().toggleClass('checked');
}

	/* Adds item to list */
$(function() {

    $('#addItem').on('click', addListItem);
    $('body').on('click', '.check', checkItem);
    $('body').on('click', '.delete' , deleteItem);
    $('.list-form').keydown(function(e) {
        if (e.which == 13 ) {
            addListItem();
        }
  
    });
     
    
});

// });

// jquery convert integer to price