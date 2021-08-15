// On SS1 Click
$(".ss1").click(function () {
    $(".i1").toggleClass("fa-plus");
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
    $(".i2").toggleClass("fa-plus");
    $(".i2").addClass("fa-minus");
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
    $(".i1a").toggleClass("fa-plus");
    $(".i1a").addClass("fa-minus");
    if($(".ya li").css("display") == "block"){
        $(".ya li").css("display", "none");
    }else{
        $(".ya li").css("display", "block");
    }
})

// On SS1b Click
$(".ss1b").click(function () {
    $(".i1b").toggleClass("fa-plus");
    $(".i1b").addClass("fa-minus");
    if($(".yb li").css("display") == "block"){
        $(".yb li").css("display", "none");
    }else{
        $(".yb li").css("display", "block");
    }
})

// On SS1c Click
$(".ss1c").click(function () {
    $(".i1c").toggleClass("fa-plus");
    $(".i1c").addClass("fa-minus");
    if($(".yc li").css("display") == "block"){
        $(".yc li").css("display", "none");
    }else{
        $(".yc li").css("display", "block");
    }
})

// On SS2a Click
$(".ss2a").click(function () {
    $(".i2a").toggleClass("fa-plus");
    $(".i2a").addClass("fa-minus");
    if($(".za li").css("display") == "block"){
        $(".za li").css("display", "none");
    }else{
        $(".za li").css("display", "block");
    }
})

// On SS2b Click
$(".ss2b").click(function () {
    $(".i2b").toggleClass("fa-plus");
    $(".i2b").addClass("fa-minus");
    if($(".zb li").css("display") == "block"){
        $(".zb li").css("display", "none");
    }else{
        $(".zb li").css("display", "block");
    }
})

// On SS2c Click
$(".ss2c").click(function () {
    $(".i2c").toggleClass("fa-plus");
    $(".i2c").addClass("fa-minus");
    if($(".zc li").css("display") == "block"){
        $(".zc li").css("display", "none");
    }else{
        $(".zc li").css("display", "block");
    }
})

// On SS2d Click
$(".ss2d").click(function () {
    $(".i2d").toggleClass("fa-plus");
    $(".i2d").addClass("fa-minus");
    if($(".zd li").css("display") == "block"){
        $(".zd li").css("display", "none");
    }else{
        $(".zd li").css("display", "block");
    }
})