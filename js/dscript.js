$(document).ready(function() {
   $('.homepageslider').slick({
      infinite: true,
      arrows:false,
      slidesToShow: 4,
      responsive: [{
         breakpoint: 1191,
         settings:{
            slidesToShow:3
         }
         },
         {
            breakpoint: 992,
            settings: {
               slidesToShow:2,
            }
         },
         {
            breakpoint: 600,
            settings:{
               slidesToShow:1,
               variableWidth: true,
               centerMode: true
            }
         },
      
         
         
   ]
   });
});

$(document).ready(function () {
   $('.slider-news').slick({
      infinite: true,
      fade:true,
      dots:true,
      arrows: false,
      slidesToShow: 1,

      responsive: [{
         breakpoint: 550,
         settings:{
            dots:false
         }
      }]
   });
});
$(document).ready(function () {
   $('.rayon-slider').slick({
      slidesToShow: 4,
      arrows:false,
      responsive: [{
         breakpoint: 1191,
         settings:{
            slidesToShow:3
         }
      },
      {
         breakpoint: 992,
         settings:{
            slidesToShow:2
         }
      }, 
      {
         breakpoint: 600,
         settings:{
            slidesToShow:1
         }
      }
   ]
   });
});

$(document).ready(function (){
   $('.slider-baryga-photo').slick({
      slidesToShow:2,
      arrows: false,
      dots:false,
      responsive:[
         {
            breakpoint: 992, 
            settings: {
               slidesToShow: 1
            }
         },
      ]
   });
});

$(".contact-pop-it").on("click", function(){
   $(".pop-up").attr('style', 'display:block;');
});
$(".pop-up").on("click", function(){
   $(".pop-up").attr('style', 'display:none;');
});

$(".gallery").on("click", function(){
   $(".gallerycon").attr('style', 'display:flex;');
});
$(".closebutton").on("click", function(){
   $(".gallerycon").attr('style', 'display:none;');
});