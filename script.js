// On SS1 Click
$(".ss1").click(function () {
    $(".i1").removeClass("fa-plus");
    $(".i1").addClass("fa-minus");
    $(".ss1a").toggleClass("block");
    $(".ss1b").toggleClass("block");
    $(".ss1c").toggleClass("block");
    $(".ya li").css("display", "none");
    $(".yb li").css("display", "none");
    $(".yc li").css("display", "none");
})

// On SS2 Click
$(".ss2").click(function () {
    $(".ss2a").toggleClass("block");
    $(".ss2b").toggleClass("block");
    $(".ss2c").toggleClass("block");
    $(".ss2d").toggleClass("block");
    $(".za li").css("display", "none");
    $(".zb li").css("display", "none");
    $(".zc li").css("display", "none");
    $(".zd li").css("display", "none");
})

// On SS1a Click
$(".ss1a").click(function () {
    if($(".ya li").css("display") == "block"){
        $(".ya li").css("display", "none");
    }else{
        $(".ya li").css("display", "block");
    }
})

// On SS1b Click
$(".ss1b").click(function () {
    if($(".yb li").css("display") == "block"){
        $(".yb li").css("display", "none");
    }else{
        $(".yb li").css("display", "block");
    }
})

// On SS1c Click
$(".ss1c").click(function () {
    if($(".yc li").css("display") == "block"){
        $(".yc li").css("display", "none");
    }else{
        $(".yc li").css("display", "block");
    }
})

// On SS2a Click
$(".ss2a").click(function () {
    if($(".za li").css("display") == "block"){
        $(".za li").css("display", "none");
    }else{
        $(".za li").css("display", "block");
    }
})