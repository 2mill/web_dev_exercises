$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});
$("ul").on("click", "span", function () {
    $(this).parent().fadeOut(500, () => $(this).remove());
    event.stopPropagation();
})

$("li").on("click", "span", function () {
    $(this).parent().fadeOut(500, () => $(this).remove());
    event.stopPropagation();
})

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        $("ul").append("<li><span><i class='fas fa-trash-alt'/></span> " + $(this).val() + "</li>");
        $(this).val("");
    }
})
