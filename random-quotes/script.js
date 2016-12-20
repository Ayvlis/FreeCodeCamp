var loading = false;

$(document).ready(function() {
	getQuote(".quote-content");
}) 

$(".get-new").click(function(e) {
  e.preventDefault();
	if(!loading) {
      getQuote(".quote-content", e.target);
}
  });

function getQuote(div, button) {
	$(button).html("<i class='fa fa-circle-o-notch fa-spin fa-2x fa-fw'></i><span class='sr-only'>Loading...</span>");
 
loading = true;
  $.ajax( {
      url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift();
        $(div).html(post.content);
        $(div).append("<span class='cite right' >"+post.title+"</span>");
        $(".author-link").attr("href", "https://www.google.com/search?q=who+is+"+post.title.replace(" ", "+"));
        $(".tweet").attr("href", "http://twitter.com/home/?status="+getPContent(post.content+" -"+post.title));
$(button).html("Another quote"); 
loading = false;

      },
      cache: false
    });

}

function getSearchQuery(string) {
  return string.replace(" ", "+");
}

function getPContent(string) {
  newstr = string.replace("<p>", '"');
  newstr = newstr.replace("</p>", '"');

  return  newstr;
}
