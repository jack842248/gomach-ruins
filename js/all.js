var s = skrollr.init();


$(document).ready(function(){

    $(".navbar-icon").click(function(e){
    e.stopPropagation();
    $(".navbar-icon").toggleClass("navbar-icon-click"),
    $(".line1").toggleClass("line1-click"),
    $(".line2").toggleClass("line2-click"),
    $(".line3").toggleClass("line3-click"),
    $("#menu").slideToggle();
    if($("#menu").is(":visible")){
        $(document).one("click",function(){
            $("#menu").slideUp();
        });
        }
    });

    $(window).scroll(function(scrollvalue){
    if( $(window).scrollTop()>0 )
        $("nav.navbar.navbar-expand-lg.fixed-top.p-0").addClass("navbar-gb"),
        $("a.nav-link.hover").css("color","#6c757d"),
        $(".fa-dungeon").css("color","#6c757d"),
        $(".navbar-icon").css("border","solid 1px #6c757d"),
        $(".line1").css("background-color","#6c757d"),
        $(".line2").css("background-color","#6c757d"),
        $(".line3").css("background-color","#6c757d"),
        $(".logo").css("background-image","url(../images/logo-black.svg)");
    else
        $("nav.navbar.navbar-expand-lg.fixed-top.p-0").removeClass("navbar-gb"),
        $("a.nav-link.hover").css("color","white"),
        $(".fa-dungeon").css("color","white"),
        $(".navbar-icon").css("border","solid 1px white"),
        $(".line1").css("background-color","white"),
        $(".line2").css("background-color","white"),
        $(".line3").css("background-color","white"),
        $(".logo").css("background-image","url(../images/logo-white.svg)");
    });


});