$(document).ready(function() {


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

                if (data.FileName!=''&& data.FileName!=undefined){
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
                        BubbleGreetMsg,
                        BubblePosition,
                        BubbleVideoFit,
                        BubbleAnimation
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
                    $.ajax({
                        type: "POST",
                        url: "/users/Bubble/Creation",
                        data: {BubbleName,
                            BubbleVideo,
                            BubbleGif,
                            BubbleFontSize,
                            BubbleTitle,
                            BubbleSize,
                            BubbleDelay,
                            ExcludedPages,
                            PagesFlag,
                            BubbleDeactivated,
                            BubbleBorderColor,
                            BubbleBackgroundColor,
                            BubbleButtonColor,
                            BubbleFontFamily,
                            BubbleDarken,
                            BubbleGreetMsg,
                            BubbleStyle,
                            BubblePosition,
                            BubbleVideoFit,
                            BubbleFirstMessageDelay,
                            BubbleAnimation},
                        success: function (data, status) {
                           if (data.Status=="Success"){
                               location.reload();
                           }else {
                               $(".Toast-Warning").removeClass('d-none')
                               $(".Toast-Warning .toast-body").text(data.err)
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
                    $(".Toast-Warning .toast-body").text(data.error.message)
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
    $(".Bubble-Save").on('click',function (e){
        e.preventDefault()

    })

    var RecordedVideo
    let recordedBlob
    //---------- displaying uploaded video ------------//

    document.getElementById("Video-Upload-input")
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
            $('#pills-Bubble').removeClass('show')
            setTimeout(function (){
                $('#pills-Bubble').removeClass('active')

                $('#Bubble-Creation').tab('show')
                 popWindow = true;
                window.onbeforeunload = function() {
                    if(popWindow == true) {
                        // popWindow = false;
                        return "Sure?";
                    }
                }

            },150)
            let blobURL = URL.createObjectURL(file);
            RecordedVideo=undefined
            document.getElementById("video-bubble").src = blobURL;
            document.getElementById("Large-container-video").src = blobURL;
        }

    }
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
    // document.getElementById("Video-Upload")
    //     .onchange = function(event) {
    //     let file = event.target.files[0];
    //     $('#pills-Bubble').removeClass('show')
    //     setTimeout(function (){
    //         $('#pills-Bubble').removeClass('active')
    //
    //         $('#Bubble-Creation').tab('show')
    //
    //     },150)
    //     let blobURL = URL.createObjectURL(file);
    //     document.getElementById("video-bubble").src = blobURL;
    //     document.getElementById("Large-container-video").src = blobURL;
    // }

    // ------------ Sending Data to Backend -------------//
    $(".Bubble-Save").on('click',function (){
        popWindow = false;

        $(".Bubble-Save").css("pointer-events",'none')
        if (RecordedVideo!=null && RecordedVideo!=undefined &&RecordedVideo!=''){
            var formData = new FormData( document.getElementById("Video-Upload"));
            formData.append('Bubble-Video-file', RecordedVideo);

            SendingBubbleData(formData)
        }
        else if ( document.getElementById("Video-Upload-input2").files.length == 0 &&document.getElementById("Video-Upload-input").files.length != 0){
            $("#Video-Upload").submit()


        }else if ( document.getElementById("Video-Upload-input2").files.length == 0 && document.getElementById("Video-Upload-input").files.length == 0){
            $(".Toast-Warning").removeClass('d-none')
            $(".Toast-Warning .toast-body").text("No Video Selected")
            $(".Toast-Warning").toast('show')
            setTimeout(function (){
                $(".Toast-Warning").addClass('d-none')

            },3500)
            $(".Bubble-Save").css("pointer-events",'auto')

        }else {
            $("#Video-Upload2").submit()

        }
    })
    $("#Video-Upload").submit(function (e) {
        e.preventDefault()
        var formData = new FormData( document.getElementById("Video-Upload"));

            SendingBubbleData(formData)

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
                var input = document.querySelector('#Video-Upload');
                document.getElementById("Video-Upload-input").value = "";

                RecordedVideo = new File([recordedBlob], 'video_file.webm',{type: 'video/webm'});
                var datTran = new ClipboardEvent('').clipboardData || new DataTransfer();
                datTran.items.add(RecordedVideo);  // Add the file to the DT object
                input.files = datTran.files; // overwrite the input file list with ours
                var formData = new FormData( document.getElementById("Video-Upload"));
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
             popWindow = true;
            window.onbeforeunload = function() {
                if(popWindow == true) {
                    // popWindow = false;
                    return "Sure?";
                }
            }

        },150)
        $('#Record-Modal').modal('hide')


    })
    $("#Delete-Record").on('click',function (){

         RecordedVideo=undefined

        document.getElementById("video-bubble").src ='/videos/demo.mp4'
        document.getElementById("Large-container-video").src = '/videos/demo.mp4'

    })
})