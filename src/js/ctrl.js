$(document).ready(function() {
    $("a").click(function() {
        if ($(this).hasClass("same-box")) {
            $(".toggle:visible").slideUp();
            $($(this).attr("href")).slideDown();
            return false;
        }
        var myelement = $(this).attr("href");
        $(myelement).slideToggle("fast");
        $(".toggle:visible").not(myelement).slideUp();
    });
});