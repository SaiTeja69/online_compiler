$("document").ready(function(){
    $("#send").click(function(){
        var message = $("#message").val();
        $.ajax({
            url: "/api",
            type: "POST",
            dataType:"json",
            data: {"message": message},
            success: function(data){
                document.getElementById('compiler').innerHTML=data['message'];
                console.log(data);
            }
        });
    });
});
