$(document).ready(function() {
    height_r1 = $(".row1").height();
    document.getElementById("c-b1").style.height = height_r1 + 20 + "px";
    document.getElementById("c-b2").style.height = height_r1 + 45 + "px";
	change_carousel_picture();
});

window.onresize = function() {
	change_carousel_picture();
}

function change_carousel_picture() {
	var totalWidth = $(window).width();
    if(totalWidth < 760) {
        $("#carousel-picture-1").attr("src", "pictures/carousel_slide/1-small.jpg");
        $("#carousel-picture-2").attr("src", "pictures/carousel_slide/2-small.jpg");
        $("#carousel-picture-3").attr("src", "pictures/carousel_slide/3-small.jpg");
    }
    if(totalWidth < 1370) {
        $("#carousel-picture-1").attr("src", "pictures/carousel_slide/1-middle.jpg");
        $("#carousel-picture-2").attr("src", "pictures/carousel_slide/2-middle.jpg");
        $("#carousel-picture-3").attr("src", "pictures/carousel_slide/3-middle.jpg");
    }
    else if(totalWidth < 1930) {
        $("#carousel-picture-1").attr("src", "pictures/carousel_slide/1-large.jpg");
        $("#carousel-picture-2").attr("src", "pictures/carousel_slide/2-large.jpg");
        $("#carousel-picture-3").attr("src", "pictures/carousel_slide/3-large.jpg");
    }
    else {
        $("#carousel-picture-1").attr("src", "pictures/carousel_slide/1-original.jpg");
        $("#carousel-picture-2").attr("src", "pictures/carousel_slide/2-original.jpg");
        $("#carousel-picture-3").attr("src", "pictures/carousel_slide/3-original.jpg");
    }
}
