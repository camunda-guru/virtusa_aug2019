$(document).ready(function () {

    $("#search-form").submit(function (event) {

        //stop submit the form, we will post it manually.
        event.preventDefault();

        fire_ajax_submit();

    });

});

function fire_ajax_submit() {

    var customerId = $("#customerId").val();
    
    $("#btn-search").prop("disabled", true);

    var customer={
    		"customerId":customerId
    }
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/getcustomerbyid",
        data: JSON.stringify(customer),
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {

          
        	$("#feedback tr").remove();
        	var $tr = $('<tr>');
        	 $.each(data, function(i, item) {
        		
        		 $tr.append(
        	            $('<td>').text(item)
        	        ); //.appendTo('#records_table');
        	       
        	    });
        	 $('#feedback').append($tr);
        	 
            $("#btn-search").prop("disabled", false);

        },
        error: function (e) {

            var json = "<h4>Ajax Response</h4><pre>"
                + e.responseText + "</pre>";
            $('#feedback').html(json);

            console.log("ERROR : ", e);
            $("#btn-search").prop("disabled", false);

        }
    });

}