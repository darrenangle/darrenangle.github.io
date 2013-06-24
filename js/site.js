$(function(){
     



    //Nav hover animations:
    $("#code").hover(
        function(){
            $(this).stop().animate({
                "background-color": "#16a085",
                "color": "#ecf0f1"
                }, 200);
        },
        function(){
            $(this).stop().animate({
                "background-color": "#34495e",
                "color": "#34495e"
                }, 2000);
            
        }
    );

    $("#art").hover(
        function(){
            $(this).stop().animate({
                "background-color": "#27ae60",
                "color": "#ecf0f1"
                }, 200);
        },
        function(){
            $(this).stop().animate({
                "background-color": "#34495e",
                "color": "#34495e"
                }, 2000);
            
        }
    );

    $("#writing").hover(
        function(){
            $(this).stop().animate({
                "background-color": "#9b59b6",
                "color": "#ecf0f1"
                }, 200);
        },
        function(){
            $(this).stop().animate({
                "background-color": "#34495e",
                "color": "#34495e"
                }, 2000);
            
        }
    );

    $("#info").hover(
        function(){
            $(this).stop().animate({
                "background-color": "#e74c3c",
                "color": "#ecf0f1"
                }, 200);
        },
        function(){
            $(this).stop().animate({
                "background-color": "#34495e",
                "color": "#34495e"
                }, 2000);
            
        }
    );

});



