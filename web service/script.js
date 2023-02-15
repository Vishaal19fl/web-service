let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');


menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
    
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
    
}
$(document).ready(function(){
    $('section').each(function(){

        let top = $(window).scrollTop();
        let offset = $(this).offset().top - 200;
        let id = $(this).attr('id');
        let height = $(this).height();
    
        if(top > offset && top < offset + height){
          $('.navbar a').removeClass('active');
          $('.navbar').find(`[href="#${id}"]`).addClass('active');
        }
    
      });
})
$(document).ready(function(){

  $('#menu-bar').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('load scroll',function(){

    $('#menu-bar').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if($(window).scrollTop() > 0){
      $('header').addClass('sticky');
    }else{
      $('header').removeClass('sticky');
    }

    if($(window).scrollTop() > 0){
      $('.scroll-top').show();
    }else{
      $('.scroll-top').hide();
    }

    // scroll spy 

    $('section').each(function(){

      let top = $(window).scrollTop();
      let offset = $(this).offset().top - 200;
      let id = $(this).attr('id');
      let height = $(this).height();

      if(top > offset && top < offset + height){
        $('.navbar a').removeClass('active');
        $('.navbar').find(`[href="#${id}"]`).addClass('active');
      }

    });

  });

});  