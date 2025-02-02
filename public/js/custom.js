$(document).ready(function(){

  $('#experience-sticky-context .ui.sticky')
    .sticky({
      context: '#experience-sticky-context',
      offset: 60
    })
  ;
  $('#education-sticky-context .ui.sticky')
    .sticky({
      context: '#education-sticky-context',
      offset: 60
    })
  ;

  $('#home')
    .visibility({
      once: false,
      onBottomPassed: function(calculations) {
        $('#transition-menu').transition('fade down').addClass('visible').removeClass('hidden');
        $('#menu-home-button').removeClass('active');
        $('#menu-resume-button').addClass('active');
        $('#mobile-menu-home-button').removeClass('active');
        $('#mobile-menu-resume-button').addClass('active');
      },
      onBottomPassedReverse: function(calculations) {
        $('#transition-menu').transition('fade up').addClass('hidden').removeClass('visible');
        $('#menu-home-button').addClass('active');
        $('#menu-resume-button').removeClass('active');
        $('#mobile-menu-home-button').addClass('active');
        $('#mobile-menu-resume-button').removeClass('active');
      }
    })
  ;

});