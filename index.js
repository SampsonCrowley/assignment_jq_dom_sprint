$('h1').text("Go jump off a bridge");

li = $("<li>").text("Item");
ol = $("<ol>").append(li);
$('.info-box.sad').append(ol);

$('.sad').addClass('happy').removeClass('sad');

var popup = $("#annoying-popup")
              .css("right", 30)
              .css("top", "+=30")
              .children("a")
              .attr('href', "http://www.cashcats.biz");

var list = $(".suggested-topics > ul").children("li:contains(...)");

list.text("Something super cool");

var input = $("form input[type='text']")

input.replaceWith($("<textarea>"));
