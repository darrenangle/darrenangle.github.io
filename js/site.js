//function for creating navigation hover animations
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

//sequencer for multiple function calls with multiple params
Function.prototype.sequence = function(vals) {
   for (var i = 0; i < vals.length; ++i) this.apply(null,vals[i]);
}

$(function(){
    
    //bind $navs to hover with navfade & sequencer
    navfade.sequence([
        [$("#code"),"#3498db"],
        [$("#art"),"#27ae60"],
        [$("#writing"),"#8e44ad"],
        [$("#info"),"#e74c3c"],
        [$("#codenav"),"#3498db","#2c3e50"],
        [$("#artnav"),"#27ae60","#2c3e50"],
        [$("#infonav"),"#e74c3c","#2c3e50"],
        [$("#writingnav"),"#8e44ad","#2c3e50"]
    ]);
    
    //navigation urls
        $(".nav2").click(function(){window.location = "code.html"});
        $(".nav3").click(function(){window.location = "art.html"});
        $(".nav4").click(function(){window.location = "writing.html"});
        $(".nav1").click(function(){window.location = "info.html"});
        $(".nav5").click(function(){window.location = "index.html"})
});





    