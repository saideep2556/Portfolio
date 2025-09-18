$(document).on("click", ".back-to-top", function () {
    const target = $(".home.container");
    if (target.length) {
        $("html, body").animate({
            scrollTop: target.offset().top - 150
        }, 600);
    }
});

$(document).on("click", ".nav-item-about", function () {
    const target = $("#about");
    if (target.length) {
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 600);
    }
});

$(document).on("click", ".nav-item-exp", function () {
    const target = $("#experience");
    if (target.length) {
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 600);
    }
});

$(document).on("click", ".nav-item-footer", function () {
    const target = $("#footer");
    if (target.length) {
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 600);
    }
});

$(window).on("load", function () {
    $(".nav-tabs li").on("click", function (e) {
        e.preventDefault();
        var activeTab = $(this).find("a").attr("href");
        var selectedTab = $(this).find("a")
        var hiddenTab = $(this).siblings().find("a");
        if (!$(this).hasClass("active")) {
            $(this).addClass("active").siblings().removeClass("active");
            $(".tab-pane").removeClass("active");
            $(activeTab).addClass("active");
            $(selectedTab).addClass("active");
            $(hiddenTab).removeClass("active");
        }
    });
});
