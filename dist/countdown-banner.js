/**
Countdown Banner Script v2
**/
$(function(global) {
    // Countdown Banner On
    var ımgOneDesktopImg = "https://www.patirti.com/Content/fileUpload/780x60-Desktop-19.gif"; //Max Width 800px
    var ımgOneDesktopHeight = 60; //Masaüstü Yükseklik
    var ımgOneMobileImg = "https://www.patirti.com/Content/fileUpload/400x60-Mobil-19.gif"; //Max Width 400px
    var ımgOneMobileHeight = 80; //Mobil Yükseklik
    var ımgOneUrl = "/iftardan-sahura-etiketin-yarisi/"; //Banner Bağlantı URL
    var ımgOneTarget = "_blank"; //Banner Bağlantı Açılış Şekli
    var ımgOneBg = "#001a71"; //Banner Arka Plan Rengi
    var ımgOneClose = "on"; //Banner Kapatma Buttonu

    // Countdown Banner Off
    var ımgTwoDesktopImg = "https://www.patirti.com/Content/fileUpload/780x60-Desktop-19.gif"; //Max Width 800px
    var ımgTwoDesktopHeight = 60; //Masaüstü Yükseklik
    var ımgTwoMobileImg = "https://www.patirti.com/Content/fileUpload/400x60-Mobil-19.gif"; //Max Width 400px
    var ımgTwoMobileHeight = 80; //Mobil Yükseklik
    var ımgTwoUrl = "/ramazana-ozel-fiyatlar/"; //Banner Bağlantı URL
    var ımgTwoTarget = "_blank"; //Banner Bağlantı Açılış Şekli
    var ımgTwoBg = "#001a71"; //Banner Arka Plan Rengi
    var ımgTwoClose = "off"; //Banner Kapatma Buttonu

    // Count Settings
    var bannerCountStart = "19"; // Start Time
    var bannerCountEnd = "07"; // End Time
    var bannerCountDate = "2022-01-20"; // End Date
    var bannerCountBg = "rgba(00, 00, 00, 0.4)"; // Count Background Color
    var bannerCountText = "#ffffff"; // Count Text Color

    // Countdown Script
    $("body").prepend('<div class="top-countdown-wrapper"><a class="top-countdown-banner"><div class="container--flush"><img src=""><div class="countdown-area"><span></span><strong></strong></div></div></a><span class="dropdown-close"></span></div>');var bannerCount=setInterval(function(){var o=new Date,n=bannerCountDate+" "+bannerCountEnd+":00:00",e=new Date(n.replace(" ","T")).getTime()-o.getTime(),t=(Math.floor(e/864e5),Math.floor(e%864e5/36e5)),r=Math.floor(e%36e5/6e4),a=Math.floor(e%6e4/1e3);(e<=0||o.getHours()<bannerCountStart)&&(ımgOneDesktopImg=ımgTwoDesktopImg,ımgOneDesktopHeight=ımgTwoDesktopHeight,ımgOneMobileImg=ımgTwoMobileImg,ımgOneMobileHeight=ımgTwoMobileHeight,ımgOneUrl=ımgTwoUrl,ımgOneTarget=ımgTwoTarget,ımgOneBg=ımgTwoBg,ımgOneClose=ımgTwoClose,$(".top-countdown-wrapper .countdown-area").hide(),$(".top-countdown-wrapper img").css({margin:"0 auto",padding:"0"}),clearInterval(bannerCount));var p=navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod||Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/);$(window).width()<=700&&p?($(".top-countdown-banner").css({"background-color":bannerBg,height:ımgOneMobileHeight}),$(".top-countdown-banner img").attr("src",ımgOneMobileImg),$(".top-countdown-wrapper").addClass("mobile-countdown")):($(".top-countdown-banner").css({"background-color":ımgOneBg,height:ımgOneDesktopHeight}),$(".top-countdown-banner img").attr("src",ımgOneDesktopImg)),"on"==ımgOneClose&&$(".top-countdown-wrapper .dropdown-close").show(),$(".top-countdown-wrapper").css("background-color",ımgOneBg),$(".top-countdown-wrapper .dropdown-close").css({"background-color":bannerCountBg,color:bannerCountText,"border-color":bannerCountText}),$(".top-countdown-wrapper .top-countdown-banner").attr("href",ımgOneUrl),$(".top-countdown-wrapper .top-countdown-banner").attr("target",ımgOneTarget),$(".top-countdown-wrapper .countdown-area").css({"background-color":bannerCountBg,color:bannerCountText}),$(".top-countdown-wrapper .countdown-area span").html("<ul><li>"+t+"<span>SA</span></li><li>"+r+"<span>DK</span></li><li>"+a+"<span>SN</span></li></ul>"),$(".top-countdown-wrapper").slideDown(),$(".top-countdown-wrapper .dropdown-close").click(function(){clearInterval(bannerCount),$(".top-countdown-wrapper").slideUp()})},1e3);
});