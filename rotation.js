var galleryUl = $(".gallery>ul");
var menuUl = $(".menu>ul");
$(menuUl).on("click", "li", function (e) {
    e.preventDefault();
    let menuLi = e.currentTarget;
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
    let width = $(galleryUl).width();
    let menuLi = $(menuUl).children().eq(i);
    $(menuLi).addClass("active");
    $(menuLi).siblings().removeClass("active");

    $(galleryUl).css({
        transform: "translateX(" + -i * width + "px)"
    });
}
var aim = 0;

setInterval(function () {
    let menuUlChildren = $(menuUl).children();
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