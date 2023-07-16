$(document).ready(function() {
    //-------------- Checking If image is selected ----------//
    if (document.getElementById("image")){
        document.getElementById("image")
            .onchange = function(event) {
            const files = this.files[0];
            const  fileType = files['type'];
            const validImageTypes = ['image/gif', 'image/jpeg','image/jpg','image/webp', 'image/png'];
            if (!validImageTypes.includes(fileType)) {
                $(".Toast-Warning").removeClass('d-none')
                $(".Toast-Warning .toast-body").text('please select a valid image')
                $(".Toast-Warning").toast('show')
                setTimeout(function (){
                    $(".Toast-Warning").addClass('d-none')

                },3500)

            }else {
                $(".Toast-Success").removeClass('d-none')
                $(".Toast-Success .toast-body").text('Image Being Uploaded')
                $(".Toast-Success").toast('show')
                setTimeout(function (){
                    $(".Toast-Success").addClass('d-none')

                },3500)
                $("#upload").submit()

            }

        }
    }


    $("#upload").submit(function (e) {
        e.preventDefault();
        var formData = new FormData(document.getElementById("upload"));
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "/upload",
            data: formData,
            processData: false,
            contentType: false,


            success: function (data, status) {
                if (data.error) {
                    $(".Toast-Warning").removeClass('d-none')
                    $(".Toast-Warning .toast-body").text("Failed: "+data.error)
                    $(".Toast-Warning").toast('show')
                    setTimeout(function (){
                        $(".Toast-Warning").addClass('d-none')

                    },3500)

                } else if (data.Success = "Success") {
                    $(".Toast-Success").removeClass('d-none')
                    $(".Toast-Success .toast-body").text("Image Uploaded")
                    $(".Toast-Success").toast('show')
                    setTimeout(function (){
                        $(".Toast-Success").addClass('d-none')
                        location.reload()
                    },3500)
                }
            },
            error: function (data) {

            }

        })

    })
    //------------ Playing sound when message -------------//
    function unlockAudio() {
        const sound = new Audio(NotificationSound);

        sound.play();
        sound.pause();
        sound.currentTime = 0;

        document.body.removeEventListener('click', unlockAudio)
        document.body.removeEventListener('touchstart', unlockAudio)
    }

    document.body.addEventListener('click', unlockAudio);
    document.body.addEventListener('touchstart', unlockAudio);
    function playSound(url) {
        const audio = new Audio(NotificationSound);
        audio.play();
    }
    var  socket=io();

    Chats.forEach(function (chat){
        socket.on(chat.ChatCode,(msg,RelatedChat)=>{

            if(msg.SenderID==UserID){

            }else {
                playSound("https://assets.mixkit.co/sfx/preview/mixkit-happy-bells-notification-937.mp3")
$(".button__badge").removeClass("d-none")
                if (UserPushNotification=="true"){
                notifyMe()
                }
            }
        })
    })
    socket.on('new chat',(chat,msg)=>{

        if(msg.SenderID==UserID){

        }else {
            playSound("https://assets.mixkit.co/sfx/preview/mixkit-happy-bells-notification-937.mp3")
            $(".button__badge").removeClass("d-none")
            if (UserPushNotification=="true"){
                notifyMe()
            }
        }

    })

    //--------- Changing Live on CHat preferences -------//
    $("#LiveOnChat").on("change",function (e){
        e.preventDefault()
        let LiveOnChat=$(this).is(':checked')
        $(this).css("pointer-events","none")
        $.ajax({
            type: "POST",
            url: "/Users/LiveOnChatUpdate",
            data:{
                LiveOnChat,
            },


            success: function (data, status) {
                if (data.Status=='Success'){
                    $(".Toast-Success").removeClass('d-none')
                    $(".Toast-Success .toast-body").text("Updated")
                    $(".Toast-Success").toast('show')
                    setTimeout(function (){
                        $(".Toast-Success").addClass('d-none')
                        $("#LiveOnChat").css("pointer-events","auto")

                    },3500)
                }else if (data.Status=='fail') {

                }
            },
            error: function (data) {
                window.location.href='https://completegreet.com/login';
            }
        })

    })
    $("#SendEmail").on("change",function (e){
        e.preventDefault()
        let SendEmail=$(this).is(':checked')
        $(this).css("pointer-events","none")
        $.ajax({
            type: "POST",
            url: "/Users/SendEmailUpdate",
            data:{
                SendEmail,
            },


            success: function (data, status) {
                if (data.Status=='Success'){
                    $(".Toast-Success").removeClass('d-none')
                    $(".Toast-Success .toast-body").text("Updated")
                    $(".Toast-Success").toast('show')
                    setTimeout(function (){
                        $(".Toast-Success").addClass('d-none')
                        $("#SendEmail").css("pointer-events","auto")

                    },3500)
                }else if (data.Status=='fail') {

                }
            },
            error: function (data) {
                window.location.href='https://completegreet.com/login';
            }
        })

    })
    $("#PushNotification").on("change",function (e){
        e.preventDefault()
        let PushNotification=$(this).is(':checked')
        if (PushNotification==true){
            if (!("Notification" in window)) {
                // Check if the browser supports notifications
                alert("This browser does not support desktop notification");
            } else if (Notification.permission === "granted") {
                $(this).prop('checked', true);

                // Check whether notification permissions have already been granted;
                // if so, create a notification
                $(this).css("pointer-events","none")
                $.ajax({
                    type: "POST",
                    url: "/Users/PushNotificationUpdate",
                    data:{
                        PushNotification,
                    },


                    success: function (data, status) {
                        if (data.Status=='Success'){
                            $(".Toast-Success").removeClass('d-none')
                            $(".Toast-Success .toast-body").text("Updated")
                            $(".Toast-Success").toast('show')
                            setTimeout(function (){
                                $(".Toast-Success").addClass('d-none')
                                $("#PushNotification").css("pointer-events","auto")

                            },3500)
                        }else if (data.Status=='fail') {

                        }
                    },
                    error: function (data) {
                        window.location.href='https://completegreet.com/login';
                    }
                })
                // const notification = new Notification("Hi there!");
                // …
            } else if (Notification.permission !== "denied") {
                // We need to ask the user for permission

                Notification.requestPermission().then((permission) => {
                    // If the user accepts, let's create a notification
                    if (permission === "granted") {
                        $(this).prop('checked', true);

                        // Check whether notification permissions have already been granted;
                        // if so, create a notification
                        $(this).css("pointer-events","none")
                        $.ajax({
                            type: "POST",
                            url: "/Users/PushNotificationUpdate",
                            data:{
                                PushNotification,
                            },


                            success: function (data, status) {
                                if (data.Status=='Success'){
                                    $(".Toast-Success").removeClass('d-none')
                                    $(".Toast-Success .toast-body").text("Updated")
                                    $(".Toast-Success").toast('show')
                                    setTimeout(function (){
                                        $(".Toast-Success").addClass('d-none')
                                        $("#PushNotification").css("pointer-events","auto")

                                    },3500)
                                }else if (data.Status=='fail') {

                                }
                            },
                            error: function (data) {
                                window.location.href='https://completegreet.com/login';
                            }
                        })

                    }else {
                        $(this).prop('checked', false);

                    }
                });
            }else {
                $(".Toast-Warning").removeClass('d-none')
                $(".Toast-Warning .toast-body").text("Notification Blocked")
                $(".Toast-Warning").toast('show')
                setTimeout(function (){
                    $(".Toast-Warning").addClass('d-none')

                },3500)
                $(this).prop('checked', false);

            }
        }else {
            $(this).css("pointer-events","none")
            $.ajax({
                type: "POST",
                url: "/Users/PushNotificationUpdate",
                data:{
                    PushNotification,
                },


                success: function (data, status) {
                    if (data.Status=='Success'){
                        $(".Toast-Success").removeClass('d-none')
                        $(".Toast-Success .toast-body").text("Updated")
                        $(".Toast-Success").toast('show')
                        setTimeout(function (){
                            $(".Toast-Success").addClass('d-none')
                            $("#PushNotification").css("pointer-events","auto")

                        },3500)
                    }else if (data.Status=='fail') {

                    }
                },
                error: function (data) {
                    window.location.href='https://completegreet.com/login';
                }
            })
        }


    })

    function notifyMe() {
        if (!("Notification" in window)) {
            // Check if the browser supports notifications
            alert("This browser does not support desktop notification");
        } else if (Notification.permission === "granted") {
            // Check whether notification permissions have already been granted;
            // if so, create a notification
            const img = 'https://completegreet.com/images/CompleteGreet/FavIcon.png';
            const text = `You have a new message.`;
            const notification = new Notification('Complete Greet', { body: text, icon: img });
            notification.onclick = (event) => {
                event.preventDefault(); // prevent the browser from focusing the Notification's tab
                window.open('https://completegreet.com/users/livechat', '_blank');
            }
            // const notification = new Notification("Hi there!");
            // …
        } else if (Notification.permission !== "denied") {
            // We need to ask the user for permission
            Notification.requestPermission().then((permission) => {
                // If the user accepts, let's create a notification
                if (permission === "granted") {
                    const img = 'https://completegreet.com/images/CompleteGreet/FavIcon.png';
                    const text = `You have a new message.`;
                    const notification = new Notification('Complete Greet', { body: text, icon: img });
                    // …
                    notification.onclick = (event) => {
                        event.preventDefault(); // prevent the browser from focusing the Notification's tab
                        window.open('https://completegreet.com/users/livechat', '_blank');
                    }
                }
            });
        }

        // At last, if the user has denied notifications, and you
        // want to be respectful there is no need to bother them anymore.
    }

    //------- Adding Notes --------//
    $("#Notes-Btn").on('click',function (e){
        e.preventDefault()

        var NoteText=$("#Notes").val()
        if (NoteText!=''||!NoteText.replace(/\s/g, '').length){
            $("#Notes-Btn").css("pointer-events",'none')

            $.ajax({
                type: "POST",
                url: "/Users/AddNote",
                data:{
                    NoteText,
                },


                success: function (data, status) {
                    if (data.Status=='Success'){
                        $(".Notes-Container").prepend('                                        <div class="Note-Text mt-3 position-relative">\n' +
                            '\n' +
                            '                                                <div style="border-bottom:2px solid #3B5DCD " class="card-body position-relative">\n' +
                            '                                                    <div style="cursor: pointer" data-notecode="'+data.Note.NoteCode+'" class="remove-note text-right ">\n' +
                            '                                                        <i class="fa-solid fa-xmark"></i>\n' +
                            '                                                    </div>\n' +
                            '                                                    '+data.Note.NoteText+'\n' +
                            '                                                    <span class="text-muted" style="position: absolute;bottom: -5px;font-size: 12px;right: 0px;">\n' +
                            '                                               '+data.Note.createdAt.replace("T"," ").slice(0,-8)+'\n' +
                            '                                            </span>\n' +
                            '                                                </div>\n' +
                            '\n' +
                            '\n' +
                            '\n' +
                            '                                        </div>\n')

                        $(".Toast-Success").removeClass('d-none')
                        $(".Toast-Success .toast-body").text("Note Added")
                        $(".Toast-Success").toast('show')
                        setTimeout(function (){
                            $(".Toast-Success").addClass('d-none')

                        },3500)
                        $("#Notes-Btn").css("pointer-events",'auto')
                        $("#Notes").val('')

                    }else if (data.Status=='fail') {

                    }
                },
                error: function (data) {
                    window.location.href='https://completegreet.com/login';
                }
            })

        }else {

        }
        })
    $.ajax({
        type: "POST",
        url: "/Users/getNotes",


        success: function (data, status) {
            if (data.Status=='Success'){
                if (data.Notes!=''){
                data.Notes.forEach(function (Note){
                    $(".Notes-Container").prepend('                                        <div class="Note-Text mt-3 position-relative">\n' +
                        '\n' +
                        '                                                <div style="border-bottom:2px solid #3B5DCD " class="card-body position-relative">\n' +
                        '                                                    <div style="cursor: pointer" data-notecode="'+Note.NoteCode+'" class="remove-note text-right ">\n' +
                        '                                                        <i class="fa-solid fa-xmark"></i>\n' +
                        '                                                    </div>\n' +
                        '                                                    '+Note.NoteText+'\n' +
                        '                                                    <span class="text-muted" style="position: absolute;bottom: -5px;font-size: 12px;right: 0px;">\n' +
                        '                                               '+Note.createdAt.replace("T"," ").slice(0,-8)+'\n' +
                        '                                            </span>\n' +
                        '                                                </div>\n' +
                        '\n' +
                        '\n' +
                        '\n' +
                        '                                        </div>\n')

                })
                }

            }else if (data.Status=='fail') {

            }
        },
        error: function (data) {
            window.location.href='https://completegreet.com/login';
        }
    })
    $(document).on('click',".remove-note",function (e){
        e.preventDefault()
        var notecode=$(this).attr("data-notecode")
        $.ajax({
            type: "POST",
            url: "/Users/deleteNote",
            data:{
                notecode,
            },


            success: function (data, status) {
                if (data.Status=='Success'){
                    $("div").find("[data-notecode='" + notecode + "']").parent().parent().remove()
                    $(".Toast-Success").removeClass('d-none')
                    $(".Toast-Success .toast-body").text("Note Removed")
                    $(".Toast-Success").toast('show')
                    setTimeout(function (){
                        $(".Toast-Success").addClass('d-none')

                    },3500)

                }else if (data.Status=='fail') {
                    alert("Note not found");

                }
            },
            error: function (data) {
                window.location.href='https://completegreet.com/login';
            }
        })


    })
    //---- Adding Bugs ---------------//
    $("#Bugs-Btn").on('click',function (e){
        e.preventDefault()

        var BugText=$("#Bugs").val()
        if (BugText!=''||!BugText.replace(/\s/g, '').length){
            $("#Bugs-Btn").css("pointer-events",'none')

            $.ajax({
                type: "POST",
                url: "/Users/AddBug",
                data:{
                    BugText,
                },


                success: function (data, status) {
                    if (data.Status=='Success'){
                        $(".Bugs-Container").prepend('                                        <div class="Note-Text mt-3 position-relative">\n' +
                            '\n' +
                            '                                                <div style="border-bottom:2px solid #3B5DCD " class="card-body position-relative">\n' +
                            '                                                    <div style="cursor: pointer" data-bugcode="'+data.Bug.BugCode+'" class="remove-bug text-right ">\n' +
                            '                                                        <i class="fa-solid fa-xmark"></i>\n' +
                            '                                                    </div>\n' +
                            '                                                    '+data.Bug.BugText+'\n' +
                            '                                                    <span class="text-muted" style="position: absolute;bottom: -5px;font-size: 12px;right: 0px;">\n' +
                            '                                               '+data.Bug.createdAt.replace("T"," ").slice(0,-8)+'\n' +
                            '                                            </span>\n' +
                            '                                                </div>\n' +
                            '\n' +
                            '\n' +
                            '\n' +
                            '                                        </div>\n')

                        $(".Toast-Success").removeClass('d-none')
                        $(".Toast-Success .toast-body").text("Issue reported")
                        $(".Toast-Success").toast('show')
                        setTimeout(function (){
                            $(".Toast-Success").addClass('d-none')

                        },3500)
                        $("#Bugs-Btn").css("pointer-events",'auto')
                        $("#Bugs").val('')

                    }else if (data.Status=='fail') {

                    }
                },
                error: function (data) {
                    window.location.href='https://completegreet.com/login';
                }
            })

        }else {

        }
        })
    $.ajax({
        type: "POST",
        url: "/Users/getBugs",


        success: function (data, status) {
            if (data.Status=='Success'){
                if (data.Bugs!=''){
                data.Bugs.forEach(function (Bug){
                    $(".Bugs-Container").prepend('                                        <div class="Note-Text mt-3 position-relative">\n' +
                        '\n' +
                        '                                                <div style="border-bottom:2px solid #3B5DCD " class="card-body position-relative">\n' +
                        '                                                    <div style="cursor: pointer" data-bugcode="'+Bug.BugCode+'" class="remove-bug text-right ">\n' +
                        '                                                        <i class="fa-solid fa-xmark"></i>\n' +
                        '                                                    </div>\n' +
                        '                                                    '+Bug.BugText+'\n' +
                        '                                                    <span class="text-muted" style="position: absolute;bottom: -5px;font-size: 12px;right: 0px;">\n' +
                        '                                               '+Bug.createdAt.replace("T"," ").slice(0,-8)+'\n' +
                        '                                            </span>\n' +
                        '                                                </div>\n' +
                        '\n' +
                        '\n' +
                        '\n' +
                        '                                        </div>\n')

                })
                }

            }else if (data.Status=='fail') {

            }
        },
        error: function (data) {
            window.location.href='https://completegreet.com/login';
        }
    })
    $(document).on('click',".remove-bug",function (e){
        e.preventDefault()
        var bugcode=$(this).attr("data-bugcode")
        $.ajax({
            type: "POST",
            url: "/Users/deleteBug",
            data:{
                bugcode,
            },


            success: function (data, status) {
                if (data.Status=='Success'){
                    $("div").find("[data-bugcode='" + bugcode + "']").parent().parent().remove()
                    $(".Toast-Success").removeClass('d-none')
                    $(".Toast-Success .toast-body").text("Issue Removed")
                    $(".Toast-Success").toast('show')
                    setTimeout(function (){
                        $(".Toast-Success").addClass('d-none')

                    },3500)

                }else if (data.Status=='fail') {
                    alert("Note not found");

                }
            },
            error: function (data) {
                window.location.href='https://completegreet.com/login';
            }
        })


    })

    // --------- Toggling dropDown Menu ------------//
    $(".three-dots").on('click',function (e) {
        e.preventDefault()
        $(".dropdown").addClass("d-none")
        $(this).siblings(".dropdown").toggleClass("d-none")

    })
    $(document).click(function(event) {
        var $target = $(event.target);
        if(!$target.closest('.three-dots').length && !$target.closest('.dropdown').length) {
            $(".dropdown").addClass("d-none")
        }
    });
    $(".Delete-Bubble").on('click',function (e){
        e.preventDefault()
        var BubbleCode=$(this).attr("data-BubbleCode")
        var Bubble=$('#Case'+BubbleCode).parent();

        $.ajax({
            type: "POST",
            url: "/users/Bubble/Delete",
            data: {BubbleCode},
            success: function (data, status) {
                if (data.Status=="Success"){
                    $('#Info'+BubbleCode).modal('hide')
                    Bubble.remove()
                    $(".Toast-Success").removeClass('d-none')
                    $(".Toast-Success .toast-body").text("Bubble Deleted")
                    $(".Toast-Success").toast('show')
                    setTimeout(function (){
                        $(".Toast-Success").addClass('d-none')

                    },3500)
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
    })

    function CopyEmbed(CurrentBubble) {
        // Get the text field
        // var copyText = document.getElementById("myInput");
        //
        // // Select the text field
        // copyText.select();
        // copyText.setSelectionRange(0, 99999); // For mobile devices
        var Code=$(CurrentBubble).data("bubblecode")
        // Copy the text inside the text field
        var text= '<script>window.CompleteGreet_ID="'+Code+'";(function (s, a, l, u, t, e) {t = a.createElement(l),e = a.getElementsByTagName(l)[0];t.async = 1;t.src = u;e.parentNode.insertBefore(t, e)})(window, document, \'script\', \'https://completegreet.com/js/CompleteGreetInstallation.js\');</script>'

        // var text= '<script>\n' +
        // "    window.CompleteGreet_ID='"+Code+"';\n" +
        // '    (function (s, a, l, u, t, e) {\n' +
        // '        t = a.createElement(l),\n' +
        // '            e = a.getElementsByTagName(l)[0];\n' +
        // '        t.async = 1;\n' +
        // '        t.src = u;\n' +
        // '        e.parentNode.insertBefore(t, e)\n' +
        // '    })(window, document, \'script\', \'https://completegreet.com/js/CompleteGreetAPI.js\');\n' +
        // '\n' +
        // '\n' +
        // '</script>'
        navigator.clipboard.writeText(text);

        // Alert the copied text
        $(".Toast-Success").removeClass('d-none')
        $(".Toast-Success .toast-body").text("Copied to Clipboard")
        $(".Toast-Success").toast('show')
        setTimeout(function (){
            $(".Toast-Success").addClass('d-none')

        },3500)
        $(".dropdown").addClass("d-none")

    }
    $(".Copy-Embed").on('click',function (e) {
        e.preventDefault()
        CopyEmbed(this)
    })

    $('#Bubble-Search').on('input',function (){
        var txt = $(this).val();
        if (txt!=''||!txt.replace(/\s/g, '').length){
            $('.Bubble-Container-Name').each(function(){
                if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
                    $(this).parent().parent().parent().show();
                }else {
                    $(this).parent().parent().parent().hide();
                }

            });
        }else {
            $('.Bubble-Container-Name').each(function(){
                $(this).parent().parent().parent().show();
            });
        }
    })

    //--------------- Changing Greet Message ----------//
    // $("#Save-GreetMsg").on('click',function (e){
    //     e.preventDefault()
    //     var GreetMsg=$("#GreetMsg-Input").val()
    //     if(!$.trim($("#GreetMsg-Input").val())) {
    //         $("#GreetMsg-Input").val("Hey, thanks for visiting! Feel free to ask anything.")
    //
    //     }else {
    //         $("#Save-GreetMsg").css("pointer-events","none")
    //         $.ajax({
    //             type: "POST",
    //             url: "/Users/GreetMsgUpdate",
    //             data:{
    //                 GreetMsg,
    //             },
    //
    //
    //             success: function (data, status) {
    //                 setTimeout(function (){
    //                     $("#Save-GreetMsg").css("pointer-events","auto")
    //
    //                 },3000)
    //
    //                 if (data.Status=='Success'){
    //                     $(".Toast-Success").removeClass('d-none')
    //                     $(".Toast-Success .toast-body").text("Message Updated")
    //                     $(".Toast-Success").toast('show')
    //                     setTimeout(function (){
    //                         $(".Toast-Success").addClass('d-none')
    //
    //                     },3500)
    //
    //                 }else if (data.Status=='fail') {
    //                     alert("Empty Message");
    //
    //                 }
    //             },
    //             error: function (data) {
    //                 window.location.href='https://completegreet.com/login';
    //             }
    //         })
    //
    //     }
    //
    // })
})