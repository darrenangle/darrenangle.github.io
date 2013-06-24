

$(function(){

    

    var $c = $("#code"),
        $a = $("#art"),
        $w = $("#writing"),
        $i = $("#info"),
        $l = $("#logo");


    //landing page hover animations:
    
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
    $c.click(function(){window.location = "code.html"});
    $a.click(function(){window.location = "art.html"});
    $w.click(function(){window.location = "writing.html"});
    $i.click(function(){window.location = "info.html"});
    $l.click(function(){window.location = "index.html"});

    //poll screen size hackery

    var $cn = $("#codenav"),
        $an = $("#artnav"),
        $wn = $("#writingnav"),
        $inn = $("#infonav"),
        $ln = $("#logonav");

    $cn.hover(
        function(){
            $(this).stop().animate({
                "background-color": "#3498db",
                "color": "#ecf0f1"
                }, 200);
        },
        function(){
            $(this).stop().animate({
                "background-color": "#34495e",
                "color": "#2c3e50"
                }, 2000);
            
        }
    );

    $an.hover(
        function(){
            $(this).stop().animate({
                "background-color": "#27ae60",
                "color": "#ecf0f1"
                }, 200);
        },
        function(){
            $(this).stop().animate({
                "background-color": "#34495e",
                "color": "#2c3e50"
                }, 2000);
            
        }
    );

    $wn.hover(
        function(){
            $(this).stop().animate({
                "background-color": "#8e44ad",
                "color": "#ecf0f1"
                }, 200);
        },
        function(){
            $(this).stop().animate({
                "background-color": "#34495e",
                "color": "#2c3e50"
                }, 2000);
            
        }
    );

    $inn.hover(
        function(){
            $(this).stop().animate({
                "background-color": "#e74c3c",
                "color": "#ecf0f1"
                }, 200);
        },
        function(){
            $(this).stop().animate({
                "background-color": "#34495e",
                "color": "#2c3e50"
                }, 2000);
            
        }
    );
    
    $cn.click(function(){window.location = "code.html"});
    $an.click(function(){window.location = "art.html"});
    $wn.click(function(){window.location = "writing.html"});
    $inn.click(function(){window.location = "info.html"});
    $ln.click(function(){window.location = "index.html"});


});





