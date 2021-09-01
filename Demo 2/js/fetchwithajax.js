$(document).ready(function(){

    $('.btnfetch').click(function(){

        $.ajax({

            url : "item.json",
            success : function(result) {
                $('td').html(result);
            }

        });

    });

});