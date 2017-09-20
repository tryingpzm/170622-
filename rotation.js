var galleryUl = $(".gallery>ul");
var menuUl = $(".menu>ul");
$(menuUl).on("click", "li", function (e) {
    e.preventDefault();
    var menuLi = e.currentTarget;
    // let index=$(menuLi).index();
    // let width=$(galleryUl).width();

    // $(menuLi).addClass("active");
    // $(menuLi).siblings().removeClass("active");

    // $(galleryUl).css({
    //     transform:"translateX("+-index*width+"px)"
    // });
    toIndex($(menuLi).index());

});
function toIndex(i) {
    var width = $(galleryUl).width();
    var menuLi = $(menuUl).children().eq(i);
    $(menuLi).addClass("active");
    $(menuLi).siblings().removeClass("active");

    $(galleryUl).css({
        transform: "translateX(" + -i * width + "px)"
    });
}
var aim = 0;

setInterval(function () {
    var menuUlChildren = $(menuUl).children();
    for (var i = 0; i < menuUlChildren.length; i++) {
        if ($(menuUlChildren[i]).attr("class") === "active") {
            aim = i;
            break;
        }
    }
    if(aim===3){
        toIndex(0);
    }else toIndex(aim + 1);
    console.log(aim);

}, 3000);