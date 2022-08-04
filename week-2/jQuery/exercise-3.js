
$("body").append("<div class='box'></div>")
$("body").append("<div class='box'></div>")
$(".box").css("width", "70px")
$(".box").css("hight", "70px")
$(".box").css("margin", "10px")
$(".box").css("background-color", "#8e44ad")
$(".box").css("display", "inline-block")

$(".box").hover(function () {
    $(this).css("background-color", "#e74c3c")
})

$(".box").mouseleave(function () {
    $(this).css("background-color", "#8e44ad")
})