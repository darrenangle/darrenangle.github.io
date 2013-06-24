$(function(){


    var $c = $("#code"),
        $a = $("#art"),
        $w = $("#writing"),
        $i = $("#info"),
        $l = $("#logo");

    //Nav hover animations:
    
    $c.hover(
        function(){
            $(this).stop().animate({
                "background-color": "#3498db",
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

    $a.hover(
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

    $w.hover(
        function(){
            $(this).stop().animate({
                "background-color": "#8e44ad",
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

    $i.hover(
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

    //Landing Nav click functionality
    $c.click(function(){window.location = "/code.html"});
    $a.click(function(){window.location = "art.html"});
    $w.click(function(){window.location = "/writing.html"});
    $i.click(function(){window.location = "/info.html"});
    $l.click(function(){window.location = "landing.html"});



});



