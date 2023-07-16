$(document).ready(function() {

    //--------------- Function to make color darker -----//
    function getTintedColor(color, v) {
        if (color.length >6) { color= color.substring(1,color.length)}
        var rgb = parseInt(color, 16);
        var r = Math.abs(((rgb >> 16) & 0xFF)+v); if (r>255) r=r-(r-255);
        var g = Math.abs(((rgb >> 8) & 0xFF)+v); if (g>255) g=g-(g-255);
        var b = Math.abs((rgb & 0xFF)+v); if (b>255) b=b-(b-255);
        r = Number(r < 0 || isNaN(r)) ? 0 : ((r > 255) ? 255 : r).toString(16);
        if (r.length == 1) r = '0' + r;
        g = Number(g < 0 || isNaN(g)) ? 0 : ((g > 255) ? 255 : g).toString(16);
        if (g.length == 1) g = '0' + g;
        b = Number(b < 0 || isNaN(b)) ? 0 : ((b > 255) ? 255 : b).toString(16);
        if (b.length == 1) b = '0' + b;
        return "#" + r + g + b;
    }
    //------------ Function to check background contrast ---------//
    function CheckContrast(color) {
        var v=0
        if (color.length >6) { color= color.substring(1,color.length)}
        var rgb = parseInt(color, 16);
        var r = Math.abs(((rgb >> 16) & 0xFF)+v); if (r>255) r=r-(r-255);
        var g = Math.abs(((rgb >> 8) & 0xFF)+v); if (g>255) g=g-(g-255);
        var b = Math.abs((rgb & 0xFF)+v); if (b>255) b=b-(b-255);
        // r = Number(r < 0 || isNaN(r)) ? 0 : ((r > 255) ? 255 : r).toString(16);
        // if (r.length == 1) r = '0' + r;
        // g = Number(g < 0 || isNaN(g)) ? 0 : ((g > 255) ? 255 : g).toString(16);
        // if (g.length == 1) g = '0' + g;
        // b = Number(b < 0 || isNaN(b)) ? 0 : ((b > 255) ? 255 : b).toString(16);
        // if (b.length == 1) b = '0' + b;
        if ((r*0.299 + g*0.587 + b*0.114) > 186){
            return true
        }else {
            return false
        }
        // return "#" + r + g + b;
    }
    //------- changing screen size ---------//
    $(".size-tab").on("click",function (){
        $(this).addClass("active-size-tab")
        $(this).siblings().removeClass("active-size-tab")
        if ( $(this).is("#large-screen") ) {
            $(".browser").css('width','100%')

        }else if ($(this).is("#mobile-screen")){
            $(".browser").css('width','360px')

        }

        })


    //------- adjusting rang on load -------//
    var fillColor = "#3B5DCD",
        emptyColor = "#DDDDDD";

    const Size_rangeInputs = document.getElementById("Bubble-Size-range")
    var percent = (100 * (Size_rangeInputs.value - Size_rangeInputs.min)) / (Size_rangeInputs.max - Size_rangeInputs.min) + "%";
    //  this.setAttribute('value', this.value);
    //  this.setAttribute('title', this.value);
    Size_rangeInputs.style.backgroundImage = `linear-gradient( to right, ${fillColor}, 
      ${fillColor} ${percent}, ${emptyColor} ${percent})`;
    const Delay_rangeInputs = document.getElementById("Bubble-Delay-range")
    var percent = (100 * (Delay_rangeInputs.value - Delay_rangeInputs.min)) / (Delay_rangeInputs.max - Delay_rangeInputs.min) + "%";
    //  this.setAttribute('value', this.value);
    //  this.setAttribute('title', this.value);
    Delay_rangeInputs.style.backgroundImage = `linear-gradient( to right, ${fillColor}, 
      ${fillColor} ${percent}, ${emptyColor} ${percent})`;

    const FirstDelay_rangeInputs = document.getElementById("Bubble-FirstMesssage-Delay-range")
    var percent = (100 * (FirstDelay_rangeInputs.value - FirstDelay_rangeInputs.min)) / (FirstDelay_rangeInputs.max - FirstDelay_rangeInputs.min) + "%";
    //  this.setAttribute('value', this.value);
    //  this.setAttribute('title', this.value);
    FirstDelay_rangeInputs.style.backgroundImage = `linear-gradient( to right, ${fillColor}, 
      ${fillColor} ${percent}, ${emptyColor} ${percent})`;
    const Font_rangeInputs = document.getElementById("font-size-range")
    var percent = (100 * (Font_rangeInputs.value - Font_rangeInputs.min)) / (Font_rangeInputs.max - Font_rangeInputs.min) + "%";
    //  this.setAttribute('value', this.value);
    //  this.setAttribute('title', this.value);
    Font_rangeInputs.style.backgroundImage = `linear-gradient( to right, ${fillColor}, 
      ${fillColor} ${percent}, ${emptyColor} ${percent})`;
    //-----------------------------------------------//

    //------- Bubble Title Update -----//
$("#Bubble-Style-Title-Input").on('input',function (){
    $(".exit-btn").click()
    $(".Bubble-Inner-Title").text($(this).val())
})
    //---------- Live chat Name update ----------//
    $("#LiveChat-Name").on('input',function (){
        $(".Bubble-large-container").removeClass("go-down")
        $(".Step-1").addClass("go-left")
       var  str=$(this).val()
        if ($(this).val()=='' ||!str.replace(/\s/g, '').length){
            $(".live-chat-name").text('LIVE CHAT')


        }else {
            $(".live-chat-name").text($(this).val())

        }
    })
    //------- Bubble  Title font size Update -----//


    const rangeInputs = document.querySelectorAll(".input-range--custom")

    rangeInputs.forEach(input => {
        input.addEventListener("input", function () {
            var percent = (100 * (this.value - this.min)) / (this.max - this.min) + "%";
            //  this.setAttribute('value', this.value);
            //  this.setAttribute('title', this.value);
            this.style.backgroundImage = `linear-gradient( to right, ${fillColor}, 
      ${fillColor} ${percent}, ${emptyColor} ${percent})`;
        });
    })

    $("#font-size-range").on('input',function (e){
        e.preventDefault()
        $(".exit-btn").click()

        $("#font-size-Input").val($(this).val())
        $(".Bubble-Inner-Title").css('font-size',$(this).val()+'px')
    })
    $("#font-size-Input").on('input',function (e){
        e.preventDefault()
        $(".exit-btn").click()

        $(".Bubble-Inner-Title").css('font-size',$(this).val()+'px')

        $("#font-size-range").val($(this).val())
        const Font_rangeInputs = document.getElementById("font-size-range")
        var percent = (100 * (Font_rangeInputs.value - Font_rangeInputs.min)) / (Font_rangeInputs.max - Font_rangeInputs.min) + "%";
        //  this.setAttribute('value', this.value);
        //  this.setAttribute('title', this.value);
        Font_rangeInputs.style.backgroundImage = `linear-gradient( to right, ${fillColor}, 
      ${fillColor} ${percent}, ${emptyColor} ${percent})`;
    })
    //---------------------------------//
    //------- Bubble Size Update -----//

    $("#Bubble-Size-range").on('input',function (e){
        e.preventDefault()
        $(".exit-btn").click()

        if ($('input[name="Style"]:checked').val()=='Circle'){
            $("#Bubble-Body").css('width',$(this).val()+'px')
            $("#Bubble-Body").css('height',$(this).val()+'px')
        }else if($('input[name="Style"]:checked').val()=='Rectangle'){
            $("#Bubble-Body").css('width',$(this).val()+'px')
            $("#Bubble-Body").css('height',$(this).val()*1.5+'px')
        }

        $("#Bubble-Size-Input").val($(this).val())
    })
    $("#Bubble-Size-Input").on('input',function (e){
        e.preventDefault()
        $(".exit-btn").click()

        if ($('input[name="Style"]:checked').val()=='Circle'){
            $("#Bubble-Body").css('width',$(this).val()+'px')
            $("#Bubble-Body").css('height',$(this).val()+'px')
        }else if($('input[name="Style"]:checked').val()=='Rectangle'){
            $("#Bubble-Body").css('width',$(this).val()+'px')
            $("#Bubble-Body").css('height',$(this).val()*1.5+'px')
        }


        $("#Bubble-Size-range").val($(this).val())
        const Size_rangeInputs = document.getElementById("Bubble-Size-range")
        var percent = (100 * (Size_rangeInputs.value - Size_rangeInputs.min)) / (Size_rangeInputs.max - Size_rangeInputs.min) + "%";
        //  this.setAttribute('value', this.value);
        //  this.setAttribute('title', this.value);
        Size_rangeInputs.style.backgroundImage = `linear-gradient( to right, ${fillColor}, 
      ${fillColor} ${percent}, ${emptyColor} ${percent})`;
    })
    //-----------------------------------------//
    // ------- Bubble Delay Update -----//

    $("#Bubble-Delay-range").on('input',function (e){
        e.preventDefault()

        $("#Bubble-Delay-Input").val($(this).val())
    })
    $("#Bubble-Delay-Input").on('input',function (e){
        e.preventDefault()


        $("#Bubble-Delay-range").val($(this).val())
        const Size_rangeInputs = document.getElementById("Bubble-Delay-range")
        var percent = (100 * (Size_rangeInputs.value - Size_rangeInputs.min)) / (Size_rangeInputs.max - Size_rangeInputs.min) + "%";
        //  this.setAttribute('value', this.value);
        //  this.setAttribute('title', this.value);
        Size_rangeInputs.style.backgroundImage = `linear-gradient( to right, ${fillColor}, 
      ${fillColor} ${percent}, ${emptyColor} ${percent})`;
    })
    //-----------------------------------------//
    // ------- Bubble first message Delay Update -----//

    $("#Bubble-FirstMesssage-Delay-range").on('input',function (e){
        e.preventDefault()

        $("#Bubble-FirstMesssage-Delay-Input").val($(this).val())
    })
    $("#Bubble-FirstMesssage-Delay-Input").on('input',function (e){
        e.preventDefault()


        $("#Bubble-FirstMesssage-Delay-range").val($(this).val())
        const Size_rangeInputs = document.getElementById("Bubble-FirstMesssage-Delay-range")
        var percent = (100 * (Size_rangeInputs.value - Size_rangeInputs.min)) / (Size_rangeInputs.max - Size_rangeInputs.min) + "%";
        //  this.setAttribute('value', this.value);
        //  this.setAttribute('title', this.value);
        Size_rangeInputs.style.backgroundImage = `linear-gradient( to right, ${fillColor}, 
      ${fillColor} ${percent}, ${emptyColor} ${percent})`;
    })
    //-----------------------------------------//
    //------- Bubble Border-Color Update -----//

    $("#Bubble-Border-Color-Picker").on('input',function (e){
        e.preventDefault()
        $(".exit-btn").click()

        $("#Bubble-Body").css('border-color',$(this).val())
        $("#Bubble-Border-Color-Input").val($(this).val())
    })
    $("#Bubble-Border-Color-Input").on('input',function (e){
        e.preventDefault()
        $(".exit-btn").click()
if ($(this).val()==''){
    $("#Bubble-Body").css('border-color',"#FFFFFF00")
}else {
    $("#Bubble-Body").css('border-color',$(this).val())

    $("#Bubble-Border-Color-Picker").val($(this).val())
}

    })
    //-----------------------------------------//
    //------------------  Large Bubble Background Color update -----------//
    $("#Bubble-BackGround-Color-Picker").on('input',function (e){
        e.preventDefault()
        if (CheckContrast($(this).val())){
            $(".live-chat-name").css('color',"#000000")
            $("#Name-Message").css('color',"#000000")
            $("#Email-Message").css('color',"#000000")
            $(".multi-step-input-label").css('color',"#000000")


        }else {
            $(".live-chat-name").css('color',"#ffffff")
            $("#Name-Message").css('color',"#ffffff")
            $("#Email-Message").css('color',"#ffffff")
            $(".multi-step-input-label").css('color',"#ffffff")

        }
        $(".Bubble-large-container").removeClass("go-down")
        $(".Step-1").addClass("go-left")
        $(".send-message-container").css('background-color',$(this).val())
        $("#Bubble-BackGround-Color-Input").val($(this).val())
    })
    $("#Bubble-BackGround-Color-Input").on('input',function (e){
        e.preventDefault()
        if (CheckContrast($(this).val())){
            $(".live-chat-name").css('color',"#000000")
            $("#Name-Message").css('color',"#000000")
            $("#Email-Message").css('color',"#000000")
            $(".multi-step-input-label").css('color',"#000000")


        }else {
            $(".live-chat-name").css('color',"#ffffff")
            $("#Name-Message").css('color',"#ffffff")
            $("#Email-Message").css('color',"#ffffff")
            $(".multi-step-input-label").css('color',"#ffffff")

        }
        $(".Bubble-large-container").removeClass("go-down")
        // $(".Step-1").addClass("go-left")
        $(".send-message-container").css('background-color',$(this).val())
        $("#Bubble-BackGround-Color-Picker").val($(this).val())
    })
    //---------------------------------------------------//
    //----------------- Large Bubble Button Update --------//
    $("#Bubble-Button-Color-Picker").on('input',function (e){
        e.preventDefault()
        $("#Bubble-Button-Color-Input").val($(this).val())

        $(".Bubble-large-container").removeClass("go-down")
        // $(".Step-1").addClass("go-left")

        var darkenColor=  getTintedColor($(this).val(),-50)
        $(".multi-step-btn").css('background-color',$(this).val())
        $(".sender-left-msg").css("background-color",$(this).val())
        $("#send-msg-btn").css("background-color",$(this).val())
        $(".sender-left-msg").css("border-color",$(this).val())

        $(".multi-step-btn").css('border-color',darkenColor)
        if (CheckContrast($(this).val())){
            $(".multi-step-btn").css('color',"#000000")
            $(".sender-left-msg").css('color',"#000000")
            $("#send-msg-btn").css('color',"#000000")

        }else {
            $(".multi-step-btn").css('color',"#ffffff")
            $(".sender-left-msg").css('color',"#ffffff")
            $("#send-msg-btn").css('color',"#ffffff")

        }

    })
    $("#Bubble-Button-Color-Input").on('input',function (e){
        e.preventDefault()
        $(".Bubble-large-container").removeClass("go-down")
        $(".Step-1").addClass("go-left")

        $(".Bubble-large-container").removeClass("go-down")
        $(".Step-1").addClass("go-left")

        var darkenColor=  getTintedColor($(this).val(),-50)
        $(".multi-step-btn").css('background-color',$(this).val())
        $(".sender-left-msg").css("background-color",$(this).val())
        $("#send-msg-btn").css("background-color",$(this).val())
        $(".sender-left-msg").css("border-color",$(this).val())

        $(".multi-step-btn").css('border-color',darkenColor)
        if (CheckContrast($(this).val())){
            $(".multi-step-btn").css('color',"#000000")
            $(".sender-left-msg").css('color',"#000000")
            $("#send-msg-btn").css('color',"#000000")

        }else {
            $(".multi-step-btn").css('color',"#ffffff")
            $(".sender-left-msg").css('color',"#ffffff")
            $("#send-msg-btn").css('color',"#ffffff")

        }

        $("#Bubble-Button-Color-Picker").val($(this).val())
    })
//-----------------------------------------//
    //------- Bubble Title font family Update -----//
    $("#Bubble-Title-Font-Family-Select").on('change',function (e){
        e.preventDefault()
        $(".exit-btn").click()

        var font_family=$("#Bubble-Title-Font-Family-Select option:selected").text()
        $(".Bubble-Inner-Title").css('font-family',font_family)

    })
//-----------------------------------------//
    //------- Bubble Enter Animation family Update -----//
    $("#Bubble-Enter-Animation-Select").on('click',function (){
        var Position =  $(':radio[name="Position"]').filter(':checked').val()
        if (Position=="Right"){
            $('#Bubble-Enter-Animation-Select option[value="Right-to-left"]').attr('disabled',true)
            $('#Bubble-Enter-Animation-Select option[value="Left-to-right"]').attr('disabled',false)
        }else if (Position=="Left"){
            $('#Bubble-Enter-Animation-Select option[value="Right-to-left"]').attr('disabled',false)
            $('#Bubble-Enter-Animation-Select option[value="Left-to-right"]').attr('disabled',true)
        }
    })
    $("#Bubble-Enter-Animation-Select").on('change',function (e){
        e.preventDefault()

        $(".exit-btn").click()
        console.log(Animation);
        var Animation=$("#Bubble-Enter-Animation-Select option:selected").text()
        if (Animation=="Right to left"){
            $("#Bubble-Body").removeClass("left-to-right")
            $("#Bubble-Body").removeClass("left-to-right-Animation")
            $("#Bubble-Body").removeClass("top-to-bottom-Animation")
            $("#Bubble-Body").removeClass("top-to-bottom")
            $("#Bubble-Body").addClass("right-to-left")
            setTimeout(function (){
                $("#Bubble-Body").addClass("right-to-left-Animation")

            },50)
        }else  if (Animation=="Left to right"){
            $("#Bubble-Body").removeClass("right-to-left")
            $("#Bubble-Body").removeClass("right-to-left-Animation")
            $("#Bubble-Body").removeClass("top-to-bottom-Animation")
            $("#Bubble-Body").removeClass("top-to-bottom")
            $("#Bubble-Body").addClass("left-to-right")
            setTimeout(function (){
                $("#Bubble-Body").addClass("left-to-right-Animation")

            },50)
        }else  if (Animation=="Top to bottom"){
            $("#Bubble-Body").removeClass("left-to-right")
            $("#Bubble-Body").removeClass("left-to-right-Animation")
            $("#Bubble-Body").removeClass("right-to-left-Animation")
            $("#Bubble-Body").removeClass("right-to-left")
            $("#Bubble-Body").addClass("top-to-bottom")
            setTimeout(function (){
                $("#Bubble-Body").addClass("top-to-bottom-Animation")

            },50)
        }
        
        else  if (Animation=="No Animation"){
            $("#Bubble-Body").removeClass("left-to-right")
            $("#Bubble-Body").removeClass("left-to-right-Animation")
            $("#Bubble-Body").removeClass("right-to-left-Animation")
            $("#Bubble-Body").removeClass("right-to-left")
            $("#Bubble-Body").removeClass("top-to-bottom-Animation")
            $("#Bubble-Body").removeClass("top-to-bottom")
        }else {

        }

    })
    $(document).on('click',function (){
        $("#Bubble-Body").removeClass("left-to-right")
        $("#Bubble-Body").removeClass("left-to-right-Animation")
        $("#Bubble-Body").removeClass("right-to-left-Animation")
        $("#Bubble-Body").removeClass("right-to-left")
        $("#Bubble-Body").removeClass("top-to-bottom-Animation")
        $("#Bubble-Body").removeClass("top-to-bottom")
    })
//-----------------------------------------//
    //------- Bubble Darken for text readability Update -----//

$("#Bubble-Darken").on("change",function (e){
    e.preventDefault()
    $(".exit-btn").click()

    if($(this).is(":checked")) {
        $(".Bubble-Video-Overlay").css('background-color','rgba(0,0,0,0.5)')

    }else {
        $(".Bubble-Video-Overlay").css('background-color','transparent')

    }
})
//-----------------------------------------//
    //------- Bubble Shape Update -----//

    $(':radio[name="Style"]').change(function() {
        $(".exit-btn").click()

        var Shape = $(this).filter(':checked').val();
        if(Shape=='Circle') {
            $("#Bubble-Body").css('width',$("#Bubble-Size-Input").val()+'px')
            $("#Bubble-Body").css('height',$("#Bubble-Size-Input").val()+'px')
            $("#Bubble-Body").css('border-radius','50%')

        }else if (Shape=='Rectangle'){
            $("#Bubble-Body").css('width',$("#Bubble-Size-Input").val()+'px')
            $("#Bubble-Body").css('height',$("#Bubble-Size-Input").val()*1.5+'px')
            $("#Bubble-Body").css('border-radius','9px')
        }
    });
//-----------------------------------------//
    //------- Bubble Position Update -----//

    $(':radio[name="Position"]').change(function() {
        $(".exit-btn").click()
        $('#Bubble-Enter-Animation-Select').val("No-Animation").change()

        var Position = $(this).filter(':checked').val();
        if(Position=='Right') {
            $(".Bubble-large-container").css('right','0px')
            $(".Bubble-large-container").css('left','auto')

            $("#Bubble-Body").removeClass('Move-Left')


        }else if (Position=='Left'){
            $(".Bubble-large-container").css('right','auto')

            $(".Bubble-large-container").css('left','0px')

            $("#Bubble-Body").addClass('Move-Left')

        }
    });
    //-------------- making video fit -----------//
    $("#Bubble-Video-Fit").on("change",function (e){
        e.preventDefault()
        $(".Bubble-large-container").removeClass("go-down")
        $(".Step-1").removeClass("go-left")
        $(".Step-2").removeClass("go-left")
        if($(this).is(":checked")) {

            $("#Large-container-video").css('object-fit','cover')

        }else {
            $("#Large-container-video").css('object-fit','contain')

        }
    })

    // ------------ Fade in and fade out Function ---------------//
    function fadeIn(el, time) {
        el.style.opacity = 0;

        var last = +new Date();
        var tick = function() {
            el.style.opacity = +el.style.opacity + (new Date() - last) / time;
            last = +new Date();

            if (+el.style.opacity < 1) {
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            }
        };

        tick();
    }



    //----------- Video Adjustment ---------//



    // (function() {
    //     function getVideoUrl(filename) {
    //         if (Enabler.isServingInLiveEnvironment()) {
    //             return Enabler.getUrl(filename);
    //         } else {
    //             return filename;
    //         }
    //     }
    //
    //     function initAd() {
    //         var video = document.getElementById("Larg-container-video");
    //
    //         var source = document.createElement('source')
    //         source.setAttribute('type', 'video/webm; codecs=vp9')
    //         source.setAttribute('src', getVideoUrl('video.webm'))
    //         video.appendChild(source);
    //
    //         video.play();
    //     }
    //
    //     window.onload = function() {
    //         var isInitialized = Enabler.isInitialized();
    //         isInitialized ? initAd() : Enabler.addEventListener(studio.events.StudioEvent.INIT, initAd);
    //     }
    // }());
    var video1 = document.getElementById('Large-container-video');
    //
    // Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {
    //     studio.video.Reporter.attach('video_1', video1);
    // });

    var playBtn = document.getElementById('play-btn');
    var pauseBtn = document.getElementById('pause-btn');
    var muteBtn = document.getElementById('mute-btn');
    var unmuteBtn = document.getElementById('unmute-btn');
    var stopBtn = document.getElementById('stop-btn');
    var replayBtn = document.getElementById('replay-btn');

    playBtn.addEventListener('click', pausePlayHandler, false);
    pauseBtn.addEventListener('click', pausePlayHandler, false);
    muteBtn.addEventListener('click', muteUnmuteHandler, false);
    unmuteBtn.addEventListener('click', muteUnmuteHandler, false);
    // stopBtn.addEventListener('click', stopHandler, false);
    replayBtn.addEventListener('click', replayHandler, false);

    function pausePlayHandler(e) {
        if (video1.paused) {
            // If paused, then play
            video1.play();
            // Show pause button and hide play button
            $("#play-btn").fadeOut()
            // pauseBtn.style.visibility = 'visible';
            // playBtn.style.visibility = 'hidden';
        } else {
            // If playing, then pause
            video1.pause();
            // Show play button and hide pause button
            // var el = document.getElementById("play-btn");
            // fadeIn(el, 250);
            $("#play-btn").fadeIn()

            // pauseBtn.style.visibility = 'hidden';
            // playBtn.style.visibility = 'visible';
        }
    }

    function muteUnmuteHandler(e) {
        if (video1.volume == 0.0) {
            // If muted, then turn it on
            video1.volume = 1.0;
            // Show mute button and hide unmute button
            muteBtn.style.visibility = 'visible';
            unmuteBtn.style.visibility = 'hidden';
        } else {
            // If unmuted, then turn it off
            video1.volume = 0.0;
            // Show unmute button and hide mute button
            muteBtn.style.visibility = 'hidden';
            unmuteBtn.style.visibility = 'visible';
        }
    }

    function stopHandler(e) {
        // There is no stop method for HTML5 video
        // As a workaround, pause the video
        // and set currentTime to 0
        video1.currentTime = 0;
        video1.pause();
        // Show or hide other video buttons accordingly
    }

    function replayHandler(e) {
        // There is no replay method for HTML5 video
        // As a workaround, set currentTime to 0
        // and play the video
        video1.currentTime = 0;
        video1.play();
        // Show or hide other video buttons accordingly
    }
    video1.addEventListener('play', videoPausePlayHandler, false);
    video1.addEventListener('pause', videoPausePlayHandler, false);

    function videoPausePlayHandler(e) {
        if (e.type == 'play') {
            $("#play-btn").fadeOut()

            // pauseBtn.style.visibility = 'visible';
            // playBtn.style.visibility = 'hidden';
        } else if (e.type == 'pause') {
            // var el = document.getElementById("play-btn");
            // fadeIn(el, 250);
            $("#play-btn").fadeIn()

            // pauseBtn.style.visibility = 'hidden';
            // playBtn.style.visibility = 'visible';
        }
    }
//-------- progress bar ---------------//

    var vid = document.getElementById("Large-container-video");
    vid.ontimeupdate = function(){
        var percentage = ( vid.currentTime / vid.duration ) * 100;
        $(".video-progressbar span").css("width", percentage+"%");
    };

    $(".video-progressbar").on("click", function(e){
        var offset = $(this).offset();
        var left = (e.pageX - offset.left);
        var totalWidth = $(".video-progressbar").width();
        var percentage = ( left / totalWidth );
        var vidTime = vid.duration * percentage;
        vid.currentTime = vidTime;
    });//click()

//----------- Opening and Closing Large Bubble Container --------//

    $("#Bubble-Body").on('click',function (){
        // alert('nice')
            var Position = $(':radio[name="Position"]').filter(':checked').val();
            if(Position=='Right') {
                $(".Bubble-large-container").css('right','0px')
            }else if (Position=='Left'){
                $(".Bubble-large-container").css('left','0px')

            }
        $(".Bubble-large-container").removeClass("go-down")
        video1.pause();
    })
    $(".exit-btn").on('click',function (){
        $(".Bubble-large-container").addClass("go-down")
        setTimeout(function (){
            $(".Step-1").removeClass("go-left")
            $(".Step-1").removeClass("go-right")
            $(".Step-2").removeClass("go-left")
            $(".Step-2").removeClass("go-right")
        },300)
        video1.pause();
    })
    //---------- Switching between steps ----------//
    $("#step-1-btn").on('click',function (){
        $(".contact-form-container").addClass("go-left")
        $(".Step-1").addClass("go-left")
       
        video1.pause();
    })

    $("#contact-button").on('click',function (){
        $(".Step-1").addClass("go-left")
        $(".Fake-Step").addClass("go-left")
        $(".Step-2").addClass("go-left")
        video1.pause();
    })
    $("#step-2-btn").on('click',function (){
        $(".Step-2").addClass("go-left")
        // $(".contact-form-container").addClass("go-left")
        // pauseBtn.click()
    })
    $(".back-btn").on('click',function (){
        $(".contact-form-container").removeClass("go-left")
        if ($(this).parent().parent().hasClass("Step-3")){
        $(".Step-2").removeClass("go-left")
        $(".Step-2").removeClass("go-right")
        }else if ($(this).parent().parent().hasClass("Step-2")){
            $(".Step-1").removeClass("go-left")
            $(".Step-1").removeClass("go-right")

        }
    })

//--------------------- Adding and removing Page Exclusion ----------//
    var Page = $(':radio[name="Pages"]').filter(':checked').val();
    if(Page=='All-Pages-Except') {
        $(".Bubble-ExcPages-Input").attr("disabled",false)
        $(".url-actions").css("pointer-events","auto")
        $(".url-actions").css("opacity","1")


    }else if (Page=='All-Pages'){
        $(".Bubble-ExcPages-Input").attr("disabled",true)
        $(".url-actions").css("pointer-events","none")
        $(".url-actions").css("opacity","0.7")

    }
    $(':radio[name="Pages"]').change(function() {

        var Page = $(this).filter(':checked').val();
        if(Page=='All-Pages-Except') {
            $(".Bubble-ExcPages-Input").attr("disabled",false)
            $(".url-actions").css("pointer-events","auto")
            $(".url-actions").css("opacity","1")


        }else if (Page=='All-Pages'){
            $(".Bubble-ExcPages-Input").attr("disabled",true)
            $(".url-actions").css("pointer-events","none")
            $(".url-actions").css("opacity","0.7")

        }
    });
    $(document).on('click',".add-url",function () {
        $(".url-container").append('  <div class="row mt-2 justify-content-center align-items-center w-100">\n' +
            '                                            <div class="col-10 pl-0">\n' +
            '                                                <input placeholder="e.g. /cart" type="text" value="" class="Bubble-Style-Title-Input Bubble-ExcPages-Input w-100 p-2">\n' +
            '\n' +
            '                                            </div>\n' +
            '                                            <div class="col-2 mb-2 p-0">\n' +
            '                                                <div class="remove-url url-actions text-danger">\n' +
            '                                                    <i class="fa-solid  fa-trash"></i>\n' +
            '                                                </div>\n' +
            '                                            </div>\n' +
            '                                        </div>');
    })
    $(document).on('click',".remove-url",function () {
      $(this).parent().parent().remove()
    })
})




