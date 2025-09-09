// $(document).ready(function(){
//     let $container = $("#name-text");
//     let words = $container.text().trim().split(" ");
//     $container.empty();
//     $.each(words, function(i, word){
//     let $span = $("<span class='word'>" + word + " </span>");
//     $container.append($span);
//     // Fade + slide effect with delay for each word
//     $span.delay(i * 400).animate(
//         {opacity: 1, top: "-10px"},
//         600
//     );
//     });
// });


$(document).on("click", ".back-to-top", function () {
    const target = $(".home.container");
    if (target.length) {
        $("html, body").animate({
            scrollTop: target.offset().top - 150
        }, 600);
    } else {
        console.warn("Target element not found.");
    }
});

