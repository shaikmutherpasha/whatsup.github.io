$(document).ready(function() {
    $.ajax({
        url: 'https://whatsup-43720.firebaseio.com/.json',
        type: "GET",
        data: JSON,
        success: function(data) {
            console.log(data);
            $.each(data, function(i, v) {

                $('#ol-list').append('<li>' + v + '</li>');
            })
        },
        error: function(error) {
            alert("error: something went wrong!");
        }
    });


    $('#post-form').submit(function(event) {
        event.preventDefault();
        var $message = $("#message").val();
        var url = $(this).attr('action');
        $.post(url, { message: $message }).done(function(data) {
            console.log(data);
        })


    });


});
