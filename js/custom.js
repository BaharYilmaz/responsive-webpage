/* show and hide menu*/

$(document).ready(function(){

  'use strict';/**/

  $(window).scroll(function(){/* */
 
    'use strict';
    if($(window).scrollTop()<80)
    {
        /*scrollTop 80px den küçükse visible yap */
        $('.navbar').css ({
            'margin-top': '-100px',
             'opacity': '0'
             
         });
         $('.navbar-default').css({
             'background-color':' rgba(52, 53, 52,0)'
         });
    }
    else
    {
        $('.navbar').css({
            'margin-top':'0px',
            'opacity':'1'
        });
        $('.navbar-default').css({
            'background-color':' rgba(52, 53, 52,0.9)'
        });
    }
  });
});

//add smooth scrolling
$(document).ready(function(){

    'use strict';

    $('.nav-item, #scroll-top').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
});

//active menu item on click

$(document).ready(function(){
    'use strict';
    $('.navbar-nav li a').click(function(){
        'use strict';
        $('.navbar-nav li a').parent().removeClass("active");//önceden active olanı silme
        $(this).parent().addClass("active");
    });
});

//highlight menu item on scroll
//???

$(document).scroll(function(){
    'use strict';
    $(window).scroll(function(){
       'use strict';
       $("section").each(function(){
           'use strict';
           var bb=$(this).attr("id");//about,contact,download
           var hei=$(this).outerHeight();
           var grttop=$(this).offset().top-70;

         if($(window).scrollTop()>grttop && $(window).scrollTop()<grttop+hei)
         {
            $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
           
         } else 
         {
            $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
         }            
       });
    });
});

//add auto padding to header

$(document).ready(function(){

    'use strict';
    setInterval(function(){
        'use strict';
         var windowHeight=$(window).height();
         var containerHeight=$(".header-container").height();
         var padTop=windowHeight-containerHeight;

         $(".header-container").css({
             'padding-top':Math.round(padTop/2)+'px',
             'padding-bottom':Math.round(padTop/2)+'px'
         });

    },10)
});

//add bx slider to screens

$(document).ready(function(){
    $('.bxSlider').bxSlider({
        slideWidth:292.5,
        auto:true,
        minSlides:1,
        maxSlides:1,
        slideMargin:50
    });
});

//add counter

$(document).ready(function(){
    $('.counter-num').counterUp({
        delay:10,//milisaniye
        time:2000
    });
});

//add animation - initialize woo
$(document).ready(function(){
     'use strict';
     new WOW().init();
});