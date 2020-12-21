var s = skrollr.init();


$(document).ready(function(){

    $(window).scroll(function(scrollvalue){
    if( $(window).scrollTop()>0 )
        $("nav.navbar.navbar-expand-lg.fixed-top.p-0").addClass("navbar-gb"),
        $("a.nav-link.hover").css("color","#6c757d"),
        $(".fa-dungeon").css("color","#6c757d"),
        $(".icon").css("color","#6c757d");
    else
        $("nav.navbar.navbar-expand-lg.fixed-top.p-0").removeClass("navbar-gb"),
        $("a.nav-link.hover").css("color","white"),
        $(".fa-dungeon").css("color","white"),
        $(".icon").css("color","white");
    });


});