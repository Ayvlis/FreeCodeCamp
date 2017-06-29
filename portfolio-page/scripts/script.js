$(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });

$('a').click(function(e) {
  parent=e.target.parentElement;
  $('body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 50
      }, 900, function(e) {
        $("nav li").removeClass("active");
        $(parent).addClass("active");
      });
});


function sendMail() {
    var link = "mailto:floriosg@gmail.com"
             + "?subject=" +$("#name").val() + escape(" from Codepen")
             + "&body=" + escape($('#myText').val())
    ;

    window.location.href = link;
}
