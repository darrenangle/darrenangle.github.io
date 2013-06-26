function navfade($t,inbgcolor,outcolor){
    
    var textcolor = "#ecf0f1";
    var bgcolor = "#34495e";
    
    if(!outcolor){
        outcolor = bgcolor;
    };
    $t.hover(
        function(){
            $(this).stop().animate({
                "background-color": inbgcolor,
                "color": textcolor
                }, 200);
        },
        function(){
            $(this).stop().animate({
                "background-color": bgcolor,
                "color": outcolor
                }, 2000);
        }
    );
};

$(function(){
    
    //landing div selectors
    var $c = $("#code"),
        $a = $("#art"),
        $w = $("#writing"),
        $i = $("#info"),
        $l = $("#logo");
    
    //page nav selectors
    var $cn = $("#codenav"),
        $an = $("#artnav"),
        $wn = $("#writingnav"),
        $inn = $("#infonav"),
        $ln = $("#logonav");
    
    //landing page hover animations:
        navfade($c,"#3498db"); 
        navfade($a,"#27ae60");    
        navfade($w,"#8e44ad");
        navfade($i,"#e74c3c");
        navfade($cn,"#3498db","#2c3e50");
        navfade($an,"#27ae60","#2c3e50");
        navfade($wn,"#8e44ad","#2c3e50");
        navfade($inn,"#e74c3c","#2c3e50");
    
    //navigation
        $(".nav2").click(function(){window.location = "code.html"});
        $(".nav3").click(function(){window.location = "art.html"});
        $(".nav4").click(function(){window.location = "writing.html"});
        $(".nav1").click(function(){window.location = "info.html"});
        $(".nav5").click(function(){window.location = "index.html"})
});





