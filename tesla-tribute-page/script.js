$(document).ready(function() {
    lit();
})

/*ranom interval maker*/
function getInterval() {
    var min = 30;
    var max = 200;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*blinking text*/

/*text color to yellow*/
function lit() {
    $(".lit").css("color", "#FFD700");
  var newTimeout = getInterval() * 10; //stay lit more than unlit
    setTimeout(unlit, newTimeout);
}

/*text color back to black*/
function unlit() {
  var newTimeout = getInterval();
	if(!$("a.lit").is(":hover") && !$("a.lit").is(":focus")){
  	$(".lit").css("color", "black");
    setTimeout(lit, newTimeout);
  }
}
