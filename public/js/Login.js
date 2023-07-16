$(document).ready(function() {


//-------------------- Ajax Check Errors and User Login -------------------//
    $(document).on('keyup', function (e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
           $("#Login-Button").click()
           $("#ForgetPass-Button").click()
        }
    });
    $("#Login-Button").on('click', function (e) {
        e.preventDefault()
        var  email, password
        email = $("#Email").val()
        password = $("#Password").val()
        $("#Login-Button").css("pointer-events","none")
        $.ajax({
            type: "POST",
            url: "/Login",
            data: {
                 email, password,

            },

            success: function (data, status) {
                $("#Login-Button").css("pointer-events","auto")

                if (data.Status == 'Fail') {
                    $("#Password").val('')
                    $('.Register-Err').remove()
                    $('.toast').remove()
                    $('.Reg-err').append('<div class="toast mb-3 Register-Err fade show alert p-0 " role="alert" data-autohide="false" aria-live="assertive" aria-atomic="true">\n' +
                        '    <div class="toast-header">\n' +
                        '        <i class="fa fa-2x fa-exclamation-circle mr-2 text-danger"></i>\n' +
                        '        <strong class="mr-auto">CompleteGreet</strong>\n' +
                        '        <button type="button" class="ml-2 mb-1 close" data-dismiss="alert" aria-label="Close">\n' +
                        '            <span aria-hidden="true">&times;</span>\n' +
                        '        </button>\n' +
                        '    </div>\n' +
                        '    <div class="toast-body">\n' +
                        '     ' + data.err + '            \n' +
                        '    </div>\n' +
                        '</div>')

                    if (data.Field == 'Empty') {
                        if (email == '') {
                            // $("#Email").addClass('invalid')
                            $("#Invalid-Email").css("display", "block")
                            $("#Invalid-Email").parent().addClass("text-invalid")
                        } else {
                            $("#Email").removeClass('invalid')
                            $("#Invalid-Email").css("display", "none")
                            $("#Invalid-Email").parent().removeClass("text-invalid")
                        }
                        if (password == '') {
                            // $("#Password").addClass('invalid')
                            $("#Invalid-Password").css("display", "block")
                            $("#Invalid-Password").parent().addClass("text-invalid")
                            $("#Invalid-Password").html("<i class=\"fa fa-exclamation-triangle text-danger\"></i> please enter a password")

                        } else {
                            $("#Password").removeClass('invalid')
                            $("#Invalid-Password").css("display", "none")
                            $("#Invalid-Password").parent().removeClass("text-invalid")
                        }

                    }  else {
                        $("#Password").removeClass('invalid')
                        $("#Email").removeClass('invalid')
                        $(".Invalid").parent().removeClass("text-invalid")
                        $(".Invalid").css("display", "none")

                    }

                    $([document.documentElement, document.body]).animate({
                        scrollTop: $(".Register-Err").offset().top
                    }, 300);

                } else if (data.Status == 'Success') {
                    if (LastUrl!=""||LastUrl!=undefined){
                        window.location.href=LastUrl
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

    })
    $(document).on('click',"#show_hide_password a", function(event) {
        event.preventDefault();
        if($('#show_hide_password input').attr("type") == "text"){
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass( "fa-eye-slash" );
            $('#show_hide_password i').removeClass( "fa-eye" );
        }else if($('#show_hide_password input').attr("type") == "password"){
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass( "fa-eye-slash" );
            $('#show_hide_password i').addClass( "fa-eye" );
        }
    });
    $("#ForgetPass-Button").on('click',function (e) {
        e.preventDefault()
        $('.Register-Err').remove()
        $('.toast').remove()
        if ($("#Email").val()==''){
        $('.Reg-err').append('<div class="toast mb-3 Register-Err fade show alert p-0 " role="alert" data-autohide="false" aria-live="assertive" aria-atomic="true">\n' +
            '    <div class="toast-header">\n' +
            '        <i class="fa fa-2x fa-exclamation-circle mr-2 text-danger"></i>\n' +
            '        <strong class="mr-auto">CompleteGreet</strong>\n' +
            '        <button type="button" class="ml-2 mb-1 close" data-dismiss="alert" aria-label="Close">\n' +
            '            <span aria-hidden="true">&times;</span>\n' +
            '        </button>\n' +
            '    </div>\n' +
            '    <div class="toast-body">\n' +
            '    please insert an email address           \n' +
            '    </div>\n' +
            '</div>')
        }else {
            $("#Send-Email-Form").submit()
        }
    })

})