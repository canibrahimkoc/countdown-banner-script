/**
Countdown Banner Script
**/
$(function(global) {
    // Countdown Banner On
    var imgOneDesktopImg = "https://www.patirti.com/Content/fileUpload/780x60-Desktop-19.gif"; // Max Width 800px
    var imgOneDesktopHeight = 60;  // Desktop Height
    var imgOneMobileImg = "https://www.patirti.com/Content/fileUpload/400x60-Mobil-19.gif"; // Max Width 400px
    var imgOneMobileHeight = 60;  // Mobile Height
    var imgOneUrl = "/iftardan-sahura-etiketin-yarisi/";  // URL
    var imgOneTarget = "_blank"; // Target
    var imgOneBg = "#001a71"; // Banner Background Color
    var imgOneClose = "off"; // Close Button

    // Countdown Banner Off
    var imgTwoDesktopImg = "https://www.patirti.com/Content/fileUpload/n1000x60.gif"; // Max Width 1000px
    var imgTwoDesktopHeight = 60; // Desktop Height
    var imgTwoMobileImg = "https://www.patirti.com/Content/fileUpload/n400x60.gif"; // Max Width 500px
    var imgTwoMobileHeight = 60; // Mobile Height
    var imgTwoUrl = "/ramazana-ozel-fiyatlar/"; // URL
    var imgTwoTarget = "_blank";  // Target
    var imgTwoBg = "#c9174b"; // Banner Background Color
    var imgTwoClose = "off"; // Close Button

    // Count Settings
    var bannerCountStart = "19"; // Start Time
    var bannerCountEnd = "07"; // End Time
    var bannerCountDate = "2022-01-20"; // End Date
    var bannerCountBg = "rgba(00, 00, 00, 0.4)"; // Count Background Color
    var bannerCountText = "#ffffff"; // Count Text Color

    // Countdown Script
    $("body").prepend('<div class="top-countdown-wrapper"><a class="top-countdown-banner"><div class="container--flush"><img src=""><div class="countdown-area"><span></span><strong></strong></div></div></a><span class="dropdown-close"></span></div>');var bannerCount=setInterval(function(){var o=new Date,n=bannerCountDate+" "+bannerCountEnd+":00:00",e=new Date(n.replace(" ","T")).getTime()-o.getTime(),t=(Math.floor(e/864e5),Math.floor(e%864e5/36e5)),r=Math.floor(e%36e5/6e4),a=Math.floor(e%6e4/1e3);(e<=0||o.getHours()>=bannerCountEnd&&o.getHours()<bannerCountStart)&&(imgOneDesktopImg=imgTwoDesktopImg,imgOneDesktopHeight=imgTwoDesktopHeight,imgOneMobileImg=imgTwoMobileImg,imgOneMobileHeight=imgTwoMobileHeight,imgOneUrl=imgTwoUrl,imgOneTarget=imgTwoTarget,imgOneBg=imgTwoBg,imgOneClose=imgTwoClose,$(".top-countdown-wrapper .countdown-area").hide(),$(".top-countdown-wrapper img").css({margin:"0 auto",padding:"0"}),clearInterval(bannerCount));var i=navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod||Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/);$(window).width()<=700&&i?($(".top-countdown-banner").css({"background-color":imgOneBg,height:imgOneMobileHeight}),$(".top-countdown-banner img").attr("src",imgOneMobileImg),$(".top-countdown-wrapper").addClass("mobile-countdown")):($(".top-countdown-banner").css({"background-color":imgOneBg,height:imgOneDesktopHeight}),$(".top-countdown-banner img").attr("src",imgOneDesktopImg)),"on"==imgOneClose&&$(".top-countdown-wrapper .dropdown-close").show(),$(".top-countdown-wrapper").css("background-color",imgOneBg),$(".top-countdown-wrapper .dropdown-close").css({"background-color":bannerCountBg,color:bannerCountText,"border-color":bannerCountText}),$(".top-countdown-wrapper .top-countdown-banner").attr("href",imgOneUrl),$(".top-countdown-wrapper .top-countdown-banner").attr("target",imgOneTarget),$(".top-countdown-wrapper .countdown-area").css({"background-color":bannerCountBg,color:bannerCountText}),$(".top-countdown-wrapper .countdown-area span").html("<ul><li>"+t+"<span>SA</span></li><li>"+r+"<span>DK</span></li><li>"+a+"<span>SN</span></li></ul>"),$(".top-countdown-wrapper").slideDown(),$(".top-countdown-wrapper .dropdown-close").click(function(){clearInterval(bannerCount),$(".top-countdown-wrapper").slideUp()})},1e3);
});
