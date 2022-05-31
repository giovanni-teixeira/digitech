$( document ).ready(function() {
    // Parallax
  
    // setTimeout serve para carregar primeiro as imagens
    setTimeout(function() {
      $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'});
      $('#apply-area').parallax({imageSrc: 'img/pattern.png'});
    }, 200);
  
    // Filtro portfólio
  
    $('.filter-btn').on('click', function() {
  
      let type = $(this).attr('id');
      let boxes = $('.project-box');
  
      $('.main-btn').removeClass('active');
      $(this).addClass('active');
  
      if(type == 'dsg-btn') {
        eachBoxes('dsg', boxes);
      } else if(type == 'dev-btn') {
        eachBoxes('dev', boxes);
      } else if(type == 'seo-btn') {
        eachBoxes('seo', boxes);
      } else {
        eachBoxes('all', boxes);
      }
  
    });
  
    function eachBoxes(type, boxes) {
  
      if(type == 'all') {
        $(boxes).fadeIn();
      } else {
        $(boxes).each(function() {
          if(!$(this).hasClass(type)) {
            $(this).fadeOut('slow');
          } else {
            $(this).fadeIn();
          }
        });
      }
    }
  
    // scroll para as seções
  
    let navBtn = $('.nav-item');
  
    let bannerSection = $('#mainSlider');
    let aboutSection = $('#about-area');
    let servicesSection = $('#services-area');
    let teamSection = $('#team-area');
    let portfolioSection = $('#portfolio-area');
    let contactSection = $('#contact-area');
  
    let scrollTo = '';
  
    $(navBtn).click(function() {
  
      let btnId = $(this).attr('id');
  
      if(btnId == 'about-menu') {
        scrollTo = aboutSection;
      } else if(btnId == 'services-menu') {
        scrollTo = servicesSection;
      } else if(btnId == 'team-menu') {
        scrollTo = teamSection;
      } else if(btnId == 'contact-menu') {
        scrollTo = contactSection;
      } else {
        scrollTo = bannerSection;
      }
  
      $([document.documentElement, document.body]).animate({
          scrollTop: $(scrollTo).offset().top - 70
      }, 1500);
    });
    
    
});

// Cookies

let cookieModal = document.querySelector(".cookie-consent-modal")
let cancelCookieBtn = document.querySelector(".btn.cancel")
let acceptCookieBtn = document.querySelector(".btn.accept")

cancelCookieBtn.addEventListener("click", function (){
    cookieModal.classList.remove("active")
})
acceptCookieBtn.addEventListener("click", function (){
    cookieModal.classList.remove("active")
    localStorage.setItem("cookieAccepted", "yes")
})

setTimeout(function (){
    let cookieAccepted = localStorage.getItem("cookieAccepted")
    if (cookieAccepted != "yes"){
        cookieModal.classList.add("active")
    }
}, 2000)
  