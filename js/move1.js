$(window).scroll(function() {
    main.scrollTop = $(this).scrollTop();
    main.scrollHeight = $(document).height();
    main.windowHeight = $(this).height()
});
main.scrollTop = $(window).scrollTop();
main.scrollHeight = $(document).height();
main.windowHeight = $(window).height();
var btns = [".p1_btn", ".p2_btn", ".p3_btn", ".p4_btn", ".p5_btn"];
for (var i = 0; i < btns.length; i++) {
    $(btns[i]).bind("touchstart", function() {
        window.location.href = "https://shop.vivo.com.cn/wap/campaign/page/x20?cid=z-1-weixin_zhineng"
    })
}
for (var i = 1; i <= 4; i++) {
    $(".p" + i + "_playIcon").bind("touchend", function() {
        main.videoRe();
        main.videoChange(true, $(this))
    });
    $("#video" + i).bind("ended", function() {
        var D = $(this);
        var C = D.attr("id").substr(5, 1);
        main.videoChange(false, D, C)
    }).bind("touchstart", function() {
        /*var D = $(this);
         var C = D.attr("id").substr(5, 1);
         main.videoChange(false, D, C)*/
    })
}
for (var i = 1; i <= 4; i++) {
    $("#p" + i + "_arrow_btn").bind("touchstart", function() {
        if (main.click.allow) {
            var D = $(this);
            var C = parseInt(D.attr("id").substr(1, 1)) + 1;
            main["page" + C](true)
        }
    })
}
$(".music").bind("touchstart", function() {
    var B = main.g("music");
    if (B.paused) {
        B.play();
        $(".music").removeClass("music_a").addClass("music_a")
    } else {
        B.pause();
        $(".music").removeClass("music_a")
    }
});
$(window).bind("touchstart", function() {
    if (main.click.allow) {
        main.click.allow = false;
        setTimeout(function() {
            main.click.allow = true
        }, main.click.time)
    }
    main.touchSever.last = main.now()
});
$(window).bind("touchmove", function(C) {
    if (main.pageNow != 1) {
        C.preventDefault()
    }
    var D = main.handDir.getDir(C);
    if (D == 1) {
        main.pageChange(true)
    } else {
        if (D == 2) {
            main.pageChange(false)
        }
    }
});
$(window).bind("touchend", function() {
    main.handDir.reHandTouch()
});
$(window).bind("orientationchange", function(B) {
    if (window.orientation == 0 || window.orientation == 180) {
        $("#hp").hide()
    } else {
        if (window.orientation == 90 || window.orientation == -90) {
            $("#hp").show()
        }
    }
});