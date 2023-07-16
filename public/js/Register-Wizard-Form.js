$(document).ready(function() {
    $(document).on('input',"#Password",function (){
        if ($("#Password").val().length<6&&$("#Password").val().length>=0){
            
            $(".six-char").css("color","inherit")
            $(".six-char").css("list-style","disc")
            $(".six-char").removeClass("Success")
        } else {
           
            $(".six-char").css("color","#00b200")
            $(".six-char").css("list-style","none")
            $(".six-char").addClass("Success")

        }
        if (!hasNumber($("#Password").val())){
            
            $(".one-no").css("color","inherit")
            $(".one-no").css("list-style","disc")
            $(".one-no").removeClass("Success")
        } else {
           
            $(".one-no").css("color","#00b200")
            $(".one-no").css("list-style","none")
            $(".one-no").addClass("Success")

        }
        if (!allCases($("#Password").val())){
            
            $(".u-l-case").css("color","inherit")
            $(".u-l-case").css("list-style","disc")
            $(".u-l-case").removeClass("Success")
        } else {
           
            $(".u-l-case").css("color","#00b200")
            $(".u-l-case").css("list-style","none")
            $(".u-l-case").addClass("Success")

        }
        if ($("#Password").val().length<6&&$("#Password").val().length>=0||!allCases($("#Password").val())||!hasNumber($("#Password").val())){
            

        }else {
           

        }
    })
    $("#ChangePass-Button").on('click',function (e) {
        e.preventDefault()
        $('.Register-Err').remove()
        if ($("#Password").val().length<6&&$("#Password").val().length>=0||!allCases($("#Password").val())||!hasNumber($("#Password").val())){
            $('.Register-Err').remove()
            $('.Reg-err').append('<div class="toast mb-3 Register-Err fade show alert p-0 " role="alert" data-autohide="false" aria-live="assertive" aria-atomic="true">\n' +
                '    <div class="toast-header">\n' +
                '        <i class="fa fa-2x fa-exclamation-circle mr-2 text-danger"></i>\n' +
                '        <strong class="mr-auto">CompleteGreet</strong>\n' +
                '        <button type="button" class="ml-2 mb-1 close" data-dismiss="alert" aria-label="Close">\n' +
                '            <span aria-hidden="true">&times;</span>\n' +
                '        </button>\n' +
                '    </div>\n' +
                '    <div class="toast-body">\n' +
                '    enter a valid password             \n' +
                '    </div>\n' +
                '</div>')
        }else if ($("#Password").val()!=$("#Cpassword").val()){
            $('.Register-Err').remove()
            $('.Reg-err').append('<div class="toast mb-3 Register-Err fade show alert p-0 " role="alert" data-autohide="false" aria-live="assertive" aria-atomic="true">\n' +
                '    <div class="toast-header">\n' +
                '        <i class="fa fa-2x fa-exclamation-circle mr-2 text-danger"></i>\n' +
                '        <strong class="mr-auto">CompleteGreet</strong>\n' +
                '        <button type="button" class="ml-2 mb-1 close" data-dismiss="alert" aria-label="Close">\n' +
                '            <span aria-hidden="true">&times;</span>\n' +
                '        </button>\n' +
                '    </div>\n' +
                '    <div class="toast-body">\n' +
                '    passwords do not matched             \n' +
                '    </div>\n' +
                '</div>')
        }else {
            $("#PassWord-Reset-Form").submit()
        }
    })

    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    function hasNumber(myString) {
        return /\d/.test(myString);
    }
    function allCases(string) {
        const
            upper = /[A-Z]/.test(string),
            lower = /[a-z]/.test(string);

        return upper && lower;
    }
    function validURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
    }
    $(function () {
     var   stepsWizard = $("#wizard").steps({
            headerTag: "h4",
            bodyTag: "section",
            transitionEffect: "fade",
            enableAllSteps: true,
            transitionEffectSpeed: 500,
            onStepChanging: function (event, currentIndex, newIndex) {
                var flag=false
                var Name, Email, Password,BusinessName,WebsiteURL,Industry,Goals
                Name=$("#Name").val()
                Email=$("#Email").val()
                Password=$("#Password").val()
                BusinessName=$("#BusinessName").val()
                WebsiteURL=$("#WebsiteURL").val()
                Industry=$("#Industry").val()
                Goals=$("#goals option:selected").text();

                if (currentIndex==0){



                    $.ajax({
                        type: "POST",
                        url: "/Register/CheckUser",
                        dataType: 'json',
                        async: false,
                        data:{
                            Email:Email,

                        },

                        success: function (data) {
                            if (Name=="" ||Email=="" ||Password=="" ){
                                $('.Register-Err').remove()
                                $('.Reg-err').append('<div class="toast mb-3 Register-Err fade show alert p-0 " role="alert" data-autohide="false" aria-live="assertive" aria-atomic="true">\n' +
                                    '    <div class="toast-header">\n' +
                                    '        <i class="fa fa-2x fa-exclamation-circle mr-2 text-danger"></i>\n' +
                                    '        <strong class="mr-auto">CompleteGreet</strong>\n' +
                                    '        <button type="button" class="ml-2 mb-1 close" data-dismiss="alert" aria-label="Close">\n' +
                                    '            <span aria-hidden="true">&times;</span>\n' +
                                    '        </button>\n' +
                                    '    </div>\n' +
                                    '    <div class="toast-body">\n' +
                                    '    Please fill the required fields             \n' +
                                    '    </div>\n' +
                                    '</div>')

                            }else if (!validateEmail(Email) ){
                                $('.Register-Err').remove()
                                $('.Reg-err').append('<div class="toast mb-3 Register-Err fade show alert p-0 " role="alert" data-autohide="false" aria-live="assertive" aria-atomic="true">\n' +
                                    '    <div class="toast-header">\n' +
                                    '        <i class="fa fa-2x fa-exclamation-circle mr-2 text-danger"></i>\n' +
                                    '        <strong class="mr-auto">CompleteGreet</strong>\n' +
                                    '        <button type="button" class="ml-2 mb-1 close" data-dismiss="alert" aria-label="Close">\n' +
                                    '            <span aria-hidden="true">&times;</span>\n' +
                                    '        </button>\n' +
                                    '    </div>\n' +
                                    '    <div class="toast-body">\n' +
                                    '    Please enter a valid email address             \n' +
                                    '    </div>\n' +
                                    '</div>')

                            }else if (data.Type=='Exist'){
                                $('.Register-Err').remove()
                                $('.Reg-err').append('<div class="toast mb-3 Register-Err fade show alert p-0 " role="alert" data-autohide="false" aria-live="assertive" aria-atomic="true">\n' +
                                    '    <div class="toast-header">\n' +
                                    '        <i class="fa fa-2x fa-exclamation-circle mr-2 text-danger"></i>\n' +
                                    '        <strong class="mr-auto">CompleteGreet</strong>\n' +
                                    '        <button type="button" class="ml-2 mb-1 close" data-dismiss="alert" aria-label="Close">\n' +
                                    '            <span aria-hidden="true">&times;</span>\n' +
                                    '        </button>\n' +
                                    '    </div>\n' +
                                    '    <div class="toast-body">\n' +
                                    '    Email is Registered             \n' +
                                    '    </div>\n' +
                                    '</div>')

                            }else if ($("#Password").val().length<6&&$("#Password").val().length>=0||!allCases($("#Password").val())||!hasNumber($("#Password").val())){
                                $('.Register-Err').remove()
                                $('.Reg-err').append('<div class="toast mb-3 Register-Err fade show alert p-0 " role="alert" data-autohide="false" aria-live="assertive" aria-atomic="true">\n' +
                                    '    <div class="toast-header">\n' +
                                    '        <i class="fa fa-2x fa-exclamation-circle mr-2 text-danger"></i>\n' +
                                    '        <strong class="mr-auto">CompleteGreet</strong>\n' +
                                    '        <button type="button" class="ml-2 mb-1 close" data-dismiss="alert" aria-label="Close">\n' +
                                    '            <span aria-hidden="true">&times;</span>\n' +
                                    '        </button>\n' +
                                    '    </div>\n' +
                                    '    <div class="toast-body">\n' +
                                    '    enter a valid password             \n' +
                                    '    </div>\n' +
                                    '</div>')
                            }else if (newIndex===1) {
                                flag=true
                                $('.Register-Err').remove()
                                $('.steps ul li:nth-child(2)').addClass('checked')
                                $('.steps ul li:nth-child(2)').prevAll().addClass('checked')
                                $('.steps ul li:nth-child(2)').nextAll().removeClass('checked');
                            }else if (newIndex==2){

                                $('.Register-Err').remove()

                                if (SiteName=="" ||SiteURL=="" ||WidgetName=="" ||!validURL(SiteURL) ){
                                    // $('.steps ul li:nth-child(2)').addClass('checked')
                                    // $('.steps ul li:nth-child(2)').prevAll().addClass('checked')
                                    // $('.steps ul li:nth-child(2)').nextAll().removeClass('checked');
                                    // stepsWizard.steps("next");
                                    // flag=true
                                }else  {
                                    flag=true
                                    $('.steps ul li:last-child').addClass('checked')
                                    $('.steps ul li:last-child').prevAll().addClass('checked')
                                    $('.steps ul li:last-child').nextAll().removeClass('checked');

                                }
                            }

                        },
                        error: function (data) {

                        }
                    })

return flag
                }
                if (currentIndex==1){


                    if (newIndex === 0){
                        $('.Register-Err').remove()
                        $('.steps ul li:first-child').addClass('checked')
                        $('.steps ul li:first-child').prevAll().addClass('checked')
                        $('.steps ul li:first-child').nextAll().removeClass('checked');
                        return true;
                    }
                    if (BusinessName=="" ||Industry=="" ||WebsiteURL==""||Goals=="Goals for using CompleteGreet" ){
                        $('.Register-Err').remove()
                        $('.Reg-err').append('<div class="toast mb-3 Register-Err fade show alert p-0 " role="alert" data-autohide="false" aria-live="assertive" aria-atomic="true">\n' +
                            '    <div class="toast-header">\n' +
                            '        <i class="fa fa-2x fa-exclamation-circle mr-2 text-danger"></i>\n' +
                            '        <strong class="mr-auto">CompleteGreet</strong>\n' +
                            '        <button type="button" class="ml-2 mb-1 close" data-dismiss="alert" aria-label="Close">\n' +
                            '            <span aria-hidden="true">&times;</span>\n' +
                            '        </button>\n' +
                            '    </div>\n' +
                            '    <div class="toast-body">\n' +
                            '    Please fill the required fields             \n' +
                            '    </div>\n' +
                            '</div>')

                    }else if (!validURL(WebsiteURL)){
                        $('.Register-Err').remove()
                        $('.Reg-err').append('<div class="toast mb-3 Register-Err fade show alert p-0 " role="alert" data-autohide="false" aria-live="assertive" aria-atomic="true">\n' +
                            '    <div class="toast-header">\n' +
                            '        <i class="fa fa-2x fa-exclamation-circle mr-2 text-danger"></i>\n' +
                            '        <strong class="mr-auto">CompleteGreet</strong>\n' +
                            '        <button type="button" class="ml-2 mb-1 close" data-dismiss="alert" aria-label="Close">\n' +
                            '            <span aria-hidden="true">&times;</span>\n' +
                            '        </button>\n' +
                            '    </div>\n' +
                            '    <div class="toast-body">\n' +
                            '    Please enter a valid URL             \n' +
                            '    </div>\n' +
                            '</div>')

                    }else {
                        $('.steps ul li:last-child').addClass('checked')
                        $('.steps ul li:last-child').prevAll().addClass('checked')
                        $('.steps ul li:last-child').nextAll().removeClass('checked');
                        return true;

                    }
                }
                if (currentIndex === 2) {
                    if (newIndex==1){
                        $('.Register-Err').remove()
                        $('.steps ul li:nth-child(2)').addClass('checked')
                        $('.steps ul li:nth-child(2)').prevAll().addClass('checked')
                        $('.steps ul li:nth-child(2)').nextAll().removeClass('checked');
                        return true;
                    }else if (newIndex==0){
                        $('.Register-Err').remove()
                        $('.steps ul li:first-child').addClass('checked')
                        $('.steps ul li:first-child').prevAll().addClass('checked')
                        $('.steps ul li:first-child').nextAll().removeClass('checked');
                        return true;
                    }
                }

            },
         onFinished: function (event, currentIndex){
             var Name, Email, Password,BusinessName,WebsiteURL,Industry,Goals
             Name=$("#Name").val()
             Email=$("#Email").val()
             Password=$("#Password").val()
             BusinessName=$("#BusinessName").val()
             WebsiteURL=$("#WebsiteURL").val()
             Industry=$("#Industry").val()
             Goals=$("#goals option:selected").text();

             //------ Sending Ajax To add user --------//

             $.ajax({
                 type: "POST",
                 url: "/Register/User",
                 data:{
                     Name:Name,
                     email:Email,
                     password:Password,
                     BusinessName:BusinessName,
                     WebsiteURL:WebsiteURL,
                     Industry:Industry,
                     Goals:Goals,

                 },

                 success: function (data, status) {
                     if (data.Status=='Success'){
                         $.ajax({
                             type: "POST",
                             url: "/Login",
                             data: {
                                 email:Email,
                                 password:Password,

                             },

                             success: function (data, status) {
                                 // $("#Login-Button").css("pointer-events","auto")
                                 if (data.Status == 'Success') {
                                     var LastUrl=window.location.href
                                     if (LastUrl.includes("SubS")){
                                         window.location.href = 'https://completegreet.com/pricing'
                                     }else {
                                         window.location.href = 'https://completegreet.com/login'

                                     }

                                 } else {
                                     window.location.href = 'https://completegreet.com/login'

                                     // $('#Login-Form').submit()
                                 }
                             },
                             error: function (data) {
                                 alert("Server Error");
                             }
                         })

                         // window.location.href = "https://completegreet.com/login";
                     }else if (data.Status=='Fail') {
                         console.log(data)

                         $('.Register-Err').remove()
                         $('.Reg-err').append('<div class="toast mb-3 Register-Err fade show alert p-0 " role="alert" data-autohide="false" aria-live="assertive" aria-atomic="true">\n' +
                             '    <div class="toast-header">\n' +
                             '        <i class="fa fa-2x fa-exclamation-circle mr-2 text-danger"></i>\n' +
                             '        <strong class="mr-auto">CompleteGreet</strong>\n' +
                             '        <button type="button" class="ml-2 mb-1 close" data-dismiss="alert" aria-label="Close">\n' +
                             '            <span aria-hidden="true">&times;</span>\n' +
                             '        </button>\n' +
                             '    </div>\n' +
                             '    <div class="toast-body">\n' +
                             '    '+ data.err+'             \n' +
                             '    </div>\n' +
                             '</div>')
                     }
                 },
                 error: function (data) {

                 }
             })
         },
            labels: {
                finish: "Register",
                next: "Next",
                previous: "Previous"
            }
        });
        $('.steps ul li:first-child a').append('<div class="z-4 ml-0 d-flex align-items-center p-1 justify-content-center flex-row">' +
            '<span class=" p-2 list-number rounded-circle bg-white step-order">1</span>' +
            '<span class=" ml-2 text-white step-order-text">Basic informations</span>' +
            '</div>');
        $('.steps ul li:nth-child(2) a').append('<div class="z-3  d-flex align-items-center p-1 justify-content-center flex-row">' +
            '<span class=" p-2 list-number rounded-circle bg-white step-order">2</span>' +
            '<span class=" ml-2 text-white step-order-text">Property detail</span>' +
            '</div>');
        $('.steps ul li:last-child a').append('<div class="z-2 d-flex align-items-center p-1 justify-content-center flex-row">' +
            '<span class=" p-2 list-number rounded-circle bg-white step-order">3</span>' +
            '<span class=" ml-2 text-white step-order-text">Install widget</span>' +
            '</div>');
        $('.steps ul li:first-child').css('z-index', '4')
        $('.steps ul li:nth-child(2)').css('z-index', '3')
        $('.steps ul li:last-child').css('z-index', '2')
        // Custom Steps Jquery Steps
        // $('.wizard > .steps li a').click(function () {
        //     $(this).parent().addClass('checked');
        //     $(this).parent().prevAll().addClass('checked');
        //     $(this).parent().nextAll().removeClass('checked');
        // });
        // Custom Button Jquery Steps
        $('.forward').click(function () {
            $("#wizard").steps('next');
        })
        $('.backward').click(function () {
            $("#wizard").steps('previous');
        })
        // Checkbox
        $('.checkbox-circle label').click(function () {
            $('.checkbox-circle label').removeClass('active');
            $(this).addClass('active');
        })
    })
})