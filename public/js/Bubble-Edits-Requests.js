$(document).ready(function() {

    //---------- Required Functions -------------//
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
    //-------------------------------------------//
//------------- Adding Current Bubble Styles ------------//
    $("#Bubble-Style-Title-Input").val(Bubble.BubbleTitle)
    $(".Bubble-Inner-Title").text(Bubble.BubbleTitle)
    //------------------------------------//
    if (Bubble.BubbleName=='' ||!Bubble.BubbleName.replace(/\s/g, '').length){
        $(".live-chat-name").text('LIVE CHAT')

    }else {
        $(".live-chat-name").text(Bubble.BubbleName)

    }
    //------------------------------//
    $(".Bubble-Inner-Title").css('font-size',Bubble.BubbleFontSize+'px')
    //-----------------------------------//
    if (Bubble.BubbleStyle=='Circle'){
        $("#Bubble-Body").css('width',Bubble.BubbleSize+'px')
        $("#Bubble-Body").css('height',Bubble.BubbleSize+'px')
    }else if(Bubble.BubbleStyle=='Rectangle'){
        $("#Bubble-Body").css('width',Bubble.BubbleSize+'px')
        $("#Bubble-Body").css('height',Bubble.BubbleSize*1.5+'px')
    }
    //----------------------------------//
    $("#Bubble-Body").css('border-color',Bubble.BubbleBorderColor)
    //--------------------------------------------//
    if (CheckContrast(Bubble.BubbleBackgroundColor)){
        $(".live-chat-name").css('color',"#000000")
        $(".multi-step-input-label").css('color',"#000000")
        $("#Name-Message").css('color',"#000000")
        $("#Email-Message").css('color',"#000000")

    }else {
        $(".live-chat-name").css('color',"#ffffff")
        $(".multi-step-input-label").css('color',"#ffffff")
        $("#Name-Message").css('color',"#ffffff")
        $("#Email-Message").css('color',"#ffffff")

    }
    $(".send-message-container").css('background-color',Bubble.BubbleBackgroundColor)
    //----------------------------------//
    var darkenColor=  getTintedColor(Bubble.BubbleButtonColor,-50)
    $(".multi-step-btn").css('background-color',Bubble.BubbleButtonColor)
    $(".sender-left-msg").css("background-color",Bubble.BubbleButtonColor)
    $("#send-msg-btn").css("background-color",Bubble.BubbleButtonColor)
    $(".sender-left-msg").css("border-color",Bubble.BubbleButtonColor)

    $(".multi-step-btn").css('border-color',darkenColor)
    if (CheckContrast(Bubble.BubbleButtonColor)){
        $(".multi-step-btn").css('color',"#000000")
        $(".sender-left-msg").css('color',"#000000")
        $("#send-msg-btn").css('color',"#000000")

    }else {
        $(".multi-step-btn").css('color',"#ffffff")
        $(".sender-left-msg").css('color',"#ffffff")
        $("#send-msg-btn").css('color',"#ffffff")

    }
    //------------------------------------//
    $(".Bubble-Inner-Title").css('font-family',Bubble.BubbleFontFamily)
        $('#Bubble-Title-Font-Family-Select').val(Bubble.BubbleFontFamily).change()

//---------------------------------------//

        $('#Bubble-Enter-Animation-Select').val(Bubble.BubbleAnimation).change()

//---------------------------------------//
    if(Bubble.BubbleDarken) {
        $(".Bubble-Video-Overlay").css('background-color','rgba(0,0,0,0.5)')

    }else {
        $(".Bubble-Video-Overlay").css('background-color','transparent')

    }
//-------------------------------------//
    if(Bubble.BubbleStyle=='Circle') {
        $("#Bubble-Body").css('width',$("#Bubble-Size-Input").val()+'px')
        $("#Bubble-Body").css('height',$("#Bubble-Size-Input").val()+'px')
        $("#Bubble-Body").css('border-radius','50%')

    }else if (Bubble.BubbleStyle=='Rectangle'){
        $("#Bubble-Body").css('width',$("#Bubble-Size-Input").val()+'px')
        $("#Bubble-Body").css('height',$("#Bubble-Size-Input").val()*1.5+'px')
        $("#Bubble-Body").css('border-radius','9px')
    }
    //-------------------------------------//
    if(Bubble.BubblePosition=='Right') {
        $(".Bubble-large-container").css('right','0px')
        $(".Bubble-large-container").css('left','auto')

        $("#Bubble-Body").removeClass('Move-Left')


    }else if (Bubble.BubblePosition=='Left'){
        $(".Bubble-large-container").css('right','auto')

        $(".Bubble-large-container").css('left','0px')

        $("#Bubble-Body").addClass('Move-Left')

    }
    //-------------------------------------------//
    if(Bubble.BubbleVideoFit) {

        $("#Large-container-video").css('object-fit','cover')

    }else {
        $("#Large-container-video").css('object-fit','contain')

    }
//------------ -------------- ----------------------//
    //----------- Saving Bubble to Database ------------//
    function SendingBubbleData(formData){
        $.ajax({
            xhr: function() {
                var xhr = new window.XMLHttpRequest();

                xhr.upload.addEventListener("progress", function(evt) {
                    if (evt.lengthComputable) {
                        var percentComplete = evt.loaded / evt.total;
                        percentComplete = parseInt(percentComplete * 100);
                        $(".upload-progress-bar").parent().removeClass("d-none")

                        $(".upload-progress-bar .progress-bar").attr("aria-valuenow",percentComplete)
                        $(".upload-progress-bar .progress-bar").css("width",percentComplete+"%")
                        $(".upload-progress-bar .progress-bar").text(percentComplete+"%")

                        if (percentComplete === 100) {
                            $(".upload-progress-bar").parent().addClass("d-none")

                        }

                    }
                }, false);

                return xhr;
            },
            type: "POST",
            url: "/users/Bubble/Video/Upload",
            data: formData,
            processData: false,
            contentType: false,
            success: function (data, status) {
                $(".Bubble-Save").css("pointer-events",'auto')

                if (data.FileName!=''||data.FileName!=undefined){
                    var PagesFlag
                    var ExcludedPages=[]

                    ExcludedPages.push($(".Bubble-ExcPages-Input").map(function(){return $(this).val();}).get())
                    var ExcPagesCheck = $(':radio[name="Pages"]').filter(':checked').val();
                    if (ExcPagesCheck=="All-Pages-Except"){
                        PagesFlag=false
                    }else if (ExcPagesCheck=="All-Pages") {
                        PagesFlag=true
                    }
                    var BubbleName,
                        BubbleVideo,
                        BubbleGif,
                        BubbleFontSize,
                        BubbleTitle,
                        BubbleSize,
                        BubbleBorderColor,
                        BubbleBackgroundColor,
                        BubbleButtonColor,
                        BubbleFontFamily,
                        BubbleDarken,
                        BubbleStyle,
                        BubbleDeactivated,
                        BubblePosition,
                        BubbleVideoFit,
                        BubbleFirstMessageDelay,
                        BubbleAnimation,
                        BubbleDelay,
                        BubbleGreetMsg,
                        BubbleCode
                    BubbleName=$("#LiveChat-Name").val()
                    BubbleVideo=data.FileName
                    BubbleGif=data.FileName.substr(0, data.FileName.lastIndexOf(".")) + ".gif",
                        BubbleFontSize=$("#font-size-Input").val()
                    BubbleTitle=$("#Bubble-Style-Title-Input").val()
                    BubbleSize=$("#Bubble-Size-Input").val()
                    BubbleDelay=$("#Bubble-Delay-Input").val()
                    BubbleFirstMessageDelay=$("#Bubble-FirstMesssage-Delay-Input").val()
                    BubbleBorderColor=$("#Bubble-Border-Color-Input").val()
                    BubbleBackgroundColor=$("#Bubble-BackGround-Color-Input").val()
                    BubbleButtonColor=$("#Bubble-Button-Color-Input").val()
                    BubbleFontFamily=$("#Bubble-Title-Font-Family-Select option:selected").val()
                    BubbleDarken=$("#Bubble-Darken").is(':checked')
                    BubbleStyle=$('input[name="Style"]:checked').val()
                    BubblePosition=$('input[name="Position"]:checked').val()
                    BubbleVideoFit=$("#Bubble-Video-Fit").is(':checked')
                    BubbleDeactivated=$("#Bubble-Deactivate").is(':checked')
                    BubbleGreetMsg=$("#GreetMsg-Input").val()
                    BubbleAnimation=$("#Bubble-Enter-Animation-Select option:selected").val()
                    BubbleCode=Bubble.BubbleCode
                    $.ajax({
                        type: "POST",
                        url: "/users/Bubble/Edit",
                        data: {BubbleName,
                            BubbleVideo,
                            BubbleGif,
                            BubbleFontSize,
                            BubbleTitle,
                            BubbleSize,
                            BubbleDelay,
                            PagesFlag,
                            ExcludedPages,
                            BubbleBorderColor,
                            BubbleFirstMessageDelay,
                            BubbleBackgroundColor,
                            BubbleButtonColor,
                            BubbleFontFamily,
                            BubbleDarken,
                            BubbleDeactivated,
                            BubbleStyle,
                            BubblePosition,
                            BubbleVideoFit,
                            BubbleAnimation,
                            BubbleGreetMsg,
                            BubbleCode},
                        success: function (data, status) {
                            $(".Bubble-Save").css("pointer-events",'auto')

                            if (data.Status=="Success"){
                               window.location.href='https://completegreet.com/users/bubble'

                           }else {
                               $(".Toast-Warning").removeClass('d-none')
                               $(".Toast-Warning .toast-body").text(data.error)
                               $(".Toast-Warning").toast('show')
                               setTimeout(function (){
                                   $(".Toast-Warning").addClass('d-none')

                               },3500)
                           }


                        },
                        error: function (data) {
                            window.location.href='https://completegreet.com/login';
                        }
                    })
                }else {
                    $(".Toast-Warning").removeClass('d-none')
                    $(".Toast-Warning .toast-body").text(data.error)
                    $(".Toast-Warning").toast('show')
                    setTimeout(function (){
                        $(".Toast-Warning").addClass('d-none')

                    },3500)
                }

            },
            error: function (data) {
                window.location.href='https://completegreet.com/login';
            }
        })
    }
    function SendingBubbleDataWithoutVideo(){
        var PagesFlag
        var ExcludedPages=[]

        ExcludedPages.push($(".Bubble-ExcPages-Input").map(function(){return $(this).val();}).get())
        var ExcPagesCheck = $(':radio[name="Pages"]').filter(':checked').val();
        if (ExcPagesCheck=="All-Pages-Except"){
            PagesFlag=false
        }else if (ExcPagesCheck=="All-Pages") {
            PagesFlag=true
        }
            var BubbleName,
                BubbleVideo,
                BubbleGif,
                BubbleFontSize,
                BubbleTitle,
                BubbleSize,
                BubbleDelay,
                BubbleFirstMessageDelay,
                BubbleBorderColor,
                BubbleBackgroundColor,
                BubbleButtonColor,
                BubbleFontFamily,
                BubbleDarken,
                BubbleStyle,
                BubbleDeactivated,
                BubblePosition,
                BubbleVideoFit,
                BubbleAnimation,
                BubbleGreetMsg,
                BubbleCode
            BubbleName=$("#LiveChat-Name").val()
            BubbleVideo=Bubble.BubbleVideo
            BubbleGif=Bubble.BubbleVideo.substr(0, Bubble.BubbleVideo.lastIndexOf(".")) + ".gif",
            BubbleFontSize=$("#font-size-Input").val()
            BubbleTitle=$("#Bubble-Style-Title-Input").val()
            BubbleSize=$("#Bubble-Size-Input").val()
        BubbleDelay=$("#Bubble-Delay-Input").val()
        BubbleFirstMessageDelay=$("#Bubble-FirstMesssage-Delay-Input").val()
        BubbleBorderColor=$("#Bubble-Border-Color-Input").val()
            BubbleBackgroundColor=$("#Bubble-BackGround-Color-Input").val()
            BubbleButtonColor=$("#Bubble-Button-Color-Input").val()
            BubbleFontFamily=$("#Bubble-Title-Font-Family-Select option:selected").val()
            BubbleDarken=$("#Bubble-Darken").is(':checked')
            BubbleStyle=$('input[name="Style"]:checked').val()
            BubblePosition=$('input[name="Position"]:checked').val()
            BubbleVideoFit=$("#Bubble-Video-Fit").is(':checked')
        BubbleDeactivated=$("#Bubble-Deactivate").is(':checked')
        BubbleGreetMsg=$("#GreetMsg-Input").val()
        BubbleAnimation=$("#Bubble-Enter-Animation-Select option:selected").val()
            BubbleCode=Bubble.BubbleCode
            $.ajax({
                xhr: function() {
                    var xhr = new window.XMLHttpRequest();

                    xhr.upload.addEventListener("progress", function(evt) {
                        if (evt.lengthComputable) {
                            var percentComplete = evt.loaded / evt.total;
                            percentComplete = parseInt(percentComplete * 100);
                            $(".upload-progress-bar").parent().removeClass("d-none")

                            $(".upload-progress-bar .progress-bar").attr("aria-valuenow",percentComplete)
                            $(".upload-progress-bar .progress-bar").css("width",percentComplete+"%")
                            $(".upload-progress-bar .progress-bar").text(percentComplete+"%")

                            if (percentComplete === 100) {
                                $(".upload-progress-bar").parent().addClass("d-none")

                            }

                        }
                    }, false);

                    return xhr;
                },
                type: "POST",
                url: "/users/Bubble/Edit",
                data: {BubbleName,
                    BubbleVideo,
                    BubbleGif,
                    BubbleFontSize,
                    BubbleTitle,
                    BubbleSize,
                    BubbleDelay,
                    BubbleBorderColor,
                    BubbleBackgroundColor,
                    BubbleButtonColor,
                    BubbleFontFamily,
                    BubbleDarken,
                    BubbleDeactivated,
                    BubbleFirstMessageDelay,
                    BubbleStyle,
                    PagesFlag,
                    ExcludedPages,
                    BubblePosition,
                    BubbleVideoFit,
                    BubbleGreetMsg,
                    BubbleAnimation,
                    BubbleCode},
                success: function (data, status) {
                    $(".Bubble-Save").css("pointer-events",'auto')

                    if (data.Status=="Success"){
                        window.location.href='https://completegreet.com/users/bubble'
                    }else {
                        $(".Toast-Warning").removeClass('d-none')
                        $(".Toast-Warning .toast-body").text(data.error)
                        $(".Toast-Warning").toast('show')
                        setTimeout(function (){
                            $(".Toast-Warning").addClass('d-none')

                        },3500)
                    }


                },
                error: function (data) {
                    window.location.href='https://completegreet.com/login';
                }
            })

    }
    var popWindow

     popWindow = true;
    window.onbeforeunload = function() {
        if(popWindow == true) {
            return "Sure?";
        }
    }

    var RecordedVideo
    let recordedBlob
    //---------- displaying uploaded video ------------//


    document.getElementById("Video-Upload-input2")
        .onchange = function(event) {
        const files = this.files[0];
        const  fileType = files['type'];
        const validImageTypes = ['video/mp4','video/mov','video/wmv','video/avi','video/mkv', 'video/webm', 'video/ogg'];
        if (!validImageTypes.includes(fileType)) {
            $(".Toast-Warning").removeClass('d-none')
            $(".Toast-Warning .toast-body").text('please select a valid video')
            $(".Toast-Warning").toast('show')
            setTimeout(function (){
                $(".Toast-Warning").addClass('d-none')

            },3500)

        }else {
            let file = event.target.files[0];

            let blobURL = URL.createObjectURL(file);
            RecordedVideo=undefined
            document.getElementById("video-bubble").src = blobURL;
            document.getElementById("Large-container-video").src = blobURL;
        }

    }


    // ------------ Sending Data to Backend -------------//
    $(".Bubble-Save").on('click',function (){
        popWindow = false;

        $(".Bubble-Save").css("pointer-events",'none')

        if (RecordedVideo!=null && RecordedVideo!=undefined &&RecordedVideo!=''){
            var formData = new FormData( document.getElementById("Video-Upload2"));
            formData.append('Bubble-Video-file', RecordedVideo);

            SendingBubbleData(formData)
        }
        else if ( document.getElementById("Video-Upload-input2").files.length != 0 ){
            $("#Video-Upload2").submit()

        }else {

            SendingBubbleDataWithoutVideo()
        }
    })

    $("#Video-Upload2").submit(function (e) {
        e.preventDefault()
        var formData = new FormData( document.getElementById("Video-Upload2"));

        SendingBubbleData(formData)

    })

    //--------- Recording video -------------//
    let preview = document.getElementById("preview");
    let recording = document.getElementById("recording");
    let startButton = document.getElementById("startButton");
    let stopButton = document.getElementById("stopButton");
    // let downloadButton = document.getElementById("downloadButton");
    let logElement = document.getElementById("log");
    let recordingTimeMS = 6000;

    function log(msg,reset) {
        if (reset){
            logElement.innerHTML=''

        }
        logElement.innerHTML += `${msg}\n`;
    }

    function wait(delayInMS) {
        return new Promise((resolve) => setTimeout(resolve, delayInMS));
    }

    function startRecording(stream, lengthInMS) {
        let recorder = new MediaRecorder(stream);
        let data = [];
        recorder.ondataavailable = (event) => data.push(event.data);
        recorder.start();

        log(`${recorder.state}…`,true);
        let stopped = new Promise((resolve, reject) => {
            recorder.onstop = resolve;
            recorder.onerror = (event) => reject(event.name);
        });
        // let recorded = wait(lengthInMS).then(
        //     () => {
        //         if (recorder.state === "recording") {
        //             recorder.stop();
        //         }
        //     },
        // );
        return Promise.all([
            stopped,
            // recorded
        ])
            .then(() => data);
    }


    function stop(stream) {
        stream.getTracks().forEach((track) => track.stop());
    }



    startButton.addEventListener("click", () => {
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        }).then((stream) => {
            preview.srcObject = stream;
            // downloadButton.href = stream;
            preview.captureStream = preview.captureStream || preview.mozCaptureStream;
            return new Promise((resolve) => preview.onplaying = resolve);
        }).then(() => startRecording(preview.captureStream(), recordingTimeMS))
            .then ((recordedChunks) => {
                 recordedBlob = new Blob(recordedChunks, { type: "video/webm" });
                document.getElementById("Video-Upload-input2").value = "";

                RecordedVideo = new File([recordedBlob], 'video_file.webm',{type: 'video/webm'});

                var formData = new FormData( document.getElementById("Video-Upload2"));
                formData.append('Bubble-Video-file', RecordedVideo);
                // $.ajax({
                //     type: "POST",
                //     url: "/users/Bubble/Video/Upload",
                //     data: formData,
                //     processData: false,
                //     contentType: false,
                //     success: function (data, status) {
                //         console.log(data);
                //
                //     },
                //     error: function (data) {
                //         window.location.href='https://completegreet.com/login';
                //     }
                // })
                recording.classList.remove("d-none")
                recording.src = URL.createObjectURL(recordedBlob);
                // downloadButton.href = recording.src;
                // downloadButton.download = "RecordedVideo.webm";
                // ${recordedBlob.size} bytes of ${recordedBlob.type} media

                log(`Successfully recorded.`,false);
            })
            .catch((error) => {
                if (error.name === "NotFoundError") {
                    log("Camera or microphone not found. Can't record.",false);
                } else {
                    log(error,false);
                }
            });
    }, false);
    stopButton.addEventListener("click", () => {
        stop(preview.srcObject);
    }, false);
//--------- Saving recorded video and displaying it ------//
    $("#Save-Record").on('click',function (){
        stopButton.click()
        document.getElementById("video-bubble").src = URL.createObjectURL(recordedBlob);
        document.getElementById("Large-container-video").src = URL.createObjectURL(recordedBlob);
        $('#pills-Bubble').removeClass('show')
        setTimeout(function (){
            $('#pills-Bubble').removeClass('active')

            $('#Bubble-Creation').tab('show')

        },150)
        $('#Record-Modal').modal('hide')


    })
    $("#Delete-Record").on('click',function (){

         RecordedVideo=undefined

        document.getElementById("video-bubble").src ='/files/users/'+Bubble.UserId+'/Bubble-Videos/'+Bubble.BubbleVideo
        document.getElementById("Large-container-video").src = '/files/users/'+Bubble.UserId+'/Bubble-Videos/'+Bubble.BubbleVideo

    })

})