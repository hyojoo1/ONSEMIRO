//hamberger_btn
$(document).ready(function(){
 
    $('.menu_btn>a').on('click', function(){
        $('.menu_bg').show(); 
        $('.sidebar_menu').show().animate({
            left:0
        });  
    });
    $('.close_btn>a').on('click', function(){
        $('.menu_bg').hide(); 
        $('.sidebar_menu').animate({
            left: '-' + 100 + '%'
                    },function(){
                        $('.sidebar_menu').hide();          
                    });  
    });

});
$(document).ready(function(){ 

    // Header scroll class
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#header_wrap').addClass('header-scrolled');
      } else {
        $('#header_wrap').removeClass('header-scrolled');
      }
    })
  
   });
   $(document).ready(function(){ 

    // Header scroll class
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.submenu li:nth-child(1)').addClass('header-scrolled');
      } else {
        $('.submenu li:nth-child(1)').removeClass('header-scrolled');
      }
    })
  
   });
   $(document).ready(function(){ 

    // Header scroll class
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.submenu li:nth-child(1) a').addClass('header-scrolled');
      } else {
        $('.submenu li:nth-child(1) a').removeClass('header-scrolled');
      }
    })
  
   });
   $(function(){
    AOS.init();	
  });
  AOS.init(); //에오스