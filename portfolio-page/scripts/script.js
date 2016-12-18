$(document).ready(function(){
    $('.scrollspy').scrollSpy({scrollOffset: 250});
  });

/*animate section change
$('a').click(function(e) {
  parent=e.target.parentElement;
  $('body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 50
      }, 900, function(e) {
        $("nav li").removeClass("active");
        $(parent).addClass("active");
      });
});
*/
