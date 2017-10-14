var main = new function() {
    this.touch = {
        x: false,
        y: false,
        allow: true,
        time: 650
    };
    this.click = {
        allow: true,
        time: 500
    };
    this.touchSever = {
        time: 120,
        last: 0
    };
    this.touchAllow = false;
    this.scrollTop;
    this.scrollHeight;
    this.windowHeight;
    this.handDir = new remTools.handDir();
    this.page2Allow = false;
    this.toupn = 0;
    this.pageNow = 1;
    this.pageTotal = 5;
    this.pageAllow = [false, false, true, true, true, true]
};
main.init = function() {
    this.page1()
};
main.pageChange = function(A) {
    if (A) {
        this.toupn += 1;
        if (this.toupn >= 2) {
            this.page2Allow = true
        }
        if (this.pageNow == 1) {
            if (this.scrollTop + this.windowHeight >= this.scrollHeight) {
                setTimeout(function() {
                    main.page2Allow = true
                }, 100);
                if (MtaH5) {
                    MtaH5.clickStat("page1")
                }
                if (this.page2Allow) {
                    this.pageNow += 1;
                    this["page" + this.pageNow](true)
                }
            }
        } else {
            if (this.pageNow < this.pageTotal) {
                this.pageNow += 1;
                this["page" + this.pageNow](true)
            }
        }
    } else {
        if (this.pageNow > 1) {
            this.pageNow -= 1;
            this["page" + this.pageNow](false)
        }
    }
};
main.videoChange = function(A, C, E) {
    var B = C;
    var D = E ? E : B.attr("class").substr(1, 1);
    if (A) {
        if (MtaH5) {
            MtaH5.clickStat("video" + D)
        }
        B.hide();
        main.g("video" + D).play();
        $("#video" + D).show()
    } else {
        main.g("video" + D).pause();
        $(".p" + D + "_playIcon").show();
        $("#video" + D).hide()
    }
};
main.videoRe = function() {
    var A = $("video");
    for (var B = 0; B < A.length; B++) {
        A[B].pause()
    }
    for (var B = 1; B <= 4; B++) {
        $(".p" + B + "_playIcon").show()
    }
};
main.page1 = function(A) {
    this.pageNow = 1;
    if (A) {
        this.t(".p1_text1", 500, "move_from_down_short");
        this.t(".p1_text2", 600, "move_from_down_short");
        this.t(".p1_text3", 700, "move_from_down_short");
        this.t(".p1_phone", 800, "move_from_down_short");
        $(".p1_btn").delay(1000).fadeIn(500)
    } else {
        this.cp($("#page2")).show().addClass("move_to_down_page");
        this.cp($("#page1")).show().addClass("move_from_up_page")
    }
};
main.page2 = function(A) {
    this.pageNow = 2;
    if (A) {
        if (MtaH5) {
            MtaH5.clickStat("page2")
        }
        this.cp($("#page1")).show().addClass("move_to_up_page");
        this.cp($("#page2")).show().addClass("move_from_down_page");
        if (this.pageAllow[2]) {
            this.pageAllow[2] = false;
            this.t(".p2_text1", 500, "move_from_down_short");
            this.t(".p2_text2", 600, "move_from_down_short");
            this.t(".p2_phone", 700, "move_from_down_short");
            this.t(".p2_text3", 800, "move_from_down_short");
            $(".p2_arrow").delay(1000).fadeIn(500);
            $(".p2_text4").delay(1000).fadeIn(500);
            $(".p2_btn").delay(1000).fadeIn(500)
        }
    } else {
        this.cp($("#page3")).show().addClass("move_to_down_page");
        this.cp($("#page2")).show().addClass("move_from_up_page")
    }
};
main.page3 = function(A) {
    this.pageNow = 3;
    if (A) {
        if (MtaH5) {
            MtaH5.clickStat("page3")
        }
        this.cp($("#page2")).show().addClass("move_to_up_page");
        this.cp($("#page3")).show().addClass("move_from_down_page");
        if (this.pageAllow[3]) {
            this.pageAllow[3] = false;
            this.t(".p3_text1", 500, "move_from_down_short");
            this.t(".p3_text2", 600, "move_from_down_short");
            this.t(".p3_text3", 700, "move_from_down_short");
            this.t(".p3_text4", 800, "move_from_down_short");
            this.t(".p3_phone", 900, "move_from_down_short");
            $(".p3_arrow").delay(1000).fadeIn(500);
            $(".p3_text5").delay(1000).fadeIn(500);
            $(".p3_btn").delay(1000).fadeIn(500)
        }
    } else {
        this.cp($("#page4")).show().addClass("move_to_down_page");
        this.cp($("#page3")).show().addClass("move_from_up_page")
    }
};
main.page4 = function(A) {
    this.pageNow = 4;
    if (A) {
        if (MtaH5) {
            MtaH5.clickStat("page4")
        }
        this.cp($("#page3")).show().addClass("move_to_up_page");
        this.cp($("#page4")).show().addClass("move_from_down_page");
        if (this.pageAllow[4]) {
            this.pageAllow[4] = false;
            this.t(".p4_text1", 500, "move_from_down_short");
            this.t(".p4_text2", 600, "move_from_down_short");
            this.t(".p4_text3", 700, "move_from_down_short");
            this.t(".p4_phone", 800, "move_from_down_short");
            $(".p4_arrow").delay(1000).fadeIn(500);
            $(".p4_text4").delay(1000).fadeIn(500);
            $(".p4_btn").delay(1000).fadeIn(500)
        }
    } else {
        this.cp($("#page5")).show().addClass("move_to_down_page");
        this.cp($("#page4")).show().addClass("move_from_up_page")
    }
};
main.page5 = function(A) {
    this.pageNow = 5;
    if (A) {
        MtaH5.clickStat("page5");
        this.cp($("#page4")).show().addClass("move_to_up_page");
        this.cp($("#page5")).show().addClass("move_from_down_page");
        this.t(".p5_luhan", 500, "move_from_down_short");
        this.t(".p5_text1", 600, "move_from_down_short");
        this.t(".p5_text2", 700, "move_from_down_short");
        this.t(".p5_text3", 800, "move_from_down_short");
        this.t(".p5_text4", 900, "move_from_down_short");
        this.t(".p5_btn", 1000, "move_from_down_short")
    }
};
main.fadeIn = function(C, B, A) {
    C = C ? C : "body";
    B = B ? B : 10;
    A = A ? A : 500;
    setTimeout(function() {
        $(C).fadeIn(A)
    }, B)
};
main.fadeOut = function(C, B, A) {
    C = C ? C : "body";
    B = B ? B : 10;
    A = A ? A : 500;
    setTimeout(function() {
        $(C).fadeOut(A)
    }, B)
};
main.playByWx = function() {
    document.addEventListener("WeixinJSBridgeReady", function() {
        var A = $("audio");
        for (var B = 0; B < A.length; B++) {
            A[B].play();
            A[B].pause()
        }
        main.g("music").play()
    }, false)
};
main.playByWxAgain = function(B) {
    var A = this.g(B);
    A.currentTime = 0;
    if (typeof WeixinJSBridge != "undefined") {
        WeixinJSBridge.invoke("getNetworkType", {}, function(C) {
            A.play()
        })
    } else {
        A.play()
    }
};
main.now = (Date.now || function() {
    return new Date().getTime()
});
main.g = function(A) {
    return document.getElementById(A)
};
main.t = function(B, C, A) {
    setTimeout(function() {
        $(B).show().addClass(A)
    }, C)
};
main.cc = function(B, A, D, C) {
    C = C ? C : 0;
    setTimeout(function() {
        $(B).removeClass(A).addClass(D)
    }, C)
};
main.rand = function(A, B) {
    return ~~((Math.random() * (B - A + 1)) + A)
};
main.random_arr = function(A) {
    A.sort(function() {
        return 0.5 - Math.random()
    });
    return A
};
main.cp = function(A) {
    A = $(A).removeClass("move_to_left_page").removeClass("move_from_left_page").removeClass("move_to_right_page").removeClass("move_from_right_page").removeClass("move_to_up_page").removeClass("move_from_up_page").removeClass("move_to_down_page").removeClass("move_from_down_page");
    return A
};
main.checkMobile = function(A) {
    if (!(/^1[3|4|5|7|8][0-9]\d{8}$/.test(A))) {
        return false
    } else {
        return true
    }
};
main.getScrollTop = function() {
    var A;
    if (window.pageYOffset) {
        A = window.pageYOffset
    } else {
        if (document.compatMode && document.compatMode != "BackCompat") {
            A = document.documentElement.scrollTop
        } else {
            if (document.body) {
                A = document.body.scrollTop
            }
        }
    }
    return A
};