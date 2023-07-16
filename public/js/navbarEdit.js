
$(document).ready(function(){
    //------------ Adjusting Style Navbar for Current Page -----------------//
    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf('/') + 1);
    if (id){
        $(document).find('nav').addClass('active-nav')
        if (id=='Articles'){
            $(document).find('.Articles').addClass('active')

        }
    }

    //----- Collapsing Navbar ----//
    $(document).click(function () {
        $('.navbar-collapse').collapse('hide');
    });
    //----------- Opening and Collapsing Search Bar -----------//

    $(document).on('click',".Search-Close-btn",function () {
        $(".Search-Container").css("transform","translate(355px, 0px)")
    });
    $(document).on('click',".Search-Open-btn",function () {
        $(".Search-Container").css("transform","translate(0px, 0px)")
    });
    $(document).on('click', function(event) {
        // if click is outside of wrapper
        if (!$(event.target).closest('.Search-Container').length) {
            if ($('.Search-Container').css('transform') == 'matrix(1, 0, 0, 1, 0, 0)') {
                $(".Search-Container").css("transform","translate(355px, 0px)")
            }
        }
    });

    //------------- Searching through Website and displaying results -------------//
    $("#Search").on('keyup keypress',function (e){
        if($(this).val().length != 0) {
            $("#Search-input-container").append(' <div class="Search-btn"></div>\n')
            $("#Search-input-container").find(".Search-Close-btn").remove()
        }
        else {
            $("#Search-input-container").append('<div class="Search-Close-btn"></div>\n')
            $("#Search-input-container").find(".Search-btn").remove()

        }
    })

    $(document).on('click','.Search-btn',function (e){
        var SearchText=$("#Search").val()
        $.ajax({
            type: "POST",
            url: "/Search",
            data:{
                SearchText:SearchText,
            },


            success: function (data, status) {
                $(".Search-results").html('')
                if (data.Blogs!=''){
                   $(".Search-results").append('' +
                       '<div class="blogs">\n' +
                       '    <div class="container" id="Blogs-Container">\n' +
                       '        <h4 class="text-white mb-2">Articles</h4>\n' +
                       '    </div>\n'+
                       '</div>')
                    data.Blogs.forEach(function (Blog){
                        Blog.forEach(function (blog){
                        $("#Blogs-Container").append( '  <a class="nav-link" href="/users/Article/'+blog.id+'">      <div class="row">\n' +
                            '            <div class="col-3 text-center">\n' +
                            '                <img class="w-75 rounded-circle " src="'+blog.Image+'">\n' +
                            '            </div>\n' +
                            '            <div class="col-9 pl-0 text-white">\n' +
                            '                <div class="blog-header text-break">\n' +
                            '                    <h5>'+blog.Title+'</h5>\n' +
                            '                </div>\n' +
                            '                <div class="blog-description text-break">\n' +
                            '                    <p>'+blog.Description+'</p>\n' +
                            '                </div>\n' +
                            '            </div>\n' +
                            '        </div>\n' +
                            '</a>' +

                            '        \n'
                        )
                        })
                    })


                }else if (data.Status=='fail') {
                    alert('invalid email address')
                }
    if (data.Users!='') {
                    $(".Search-results").append('' +
                        '<div class="Coaches">\n' +
                        '    <div class="container" id="Coaches-Container">\n' +
                        '        <h4 class="text-white mb-2">Coaches</h4>\n' +
                        '    </div>\n'+
                        '</div>')
                    data.Users.forEach(function (User) {
                        User.forEach(function (user) {

                            $("#Coaches-Container").append('  <a class="nav-link" href="/users/' + user.id + '">      <div class="row">\n' +
                                '            <div class="col-3 text-center">\n' +
                                '                <img class="w-75 rounded-circle " src="/images/Coaches-Avatar/' + user.id + '/' + user.CroppedImage + '">\n' +
                                '            </div>\n' +
                                '            <div class="col-9 pl-0 text-white">\n' +
                                '                <div class="blog-header text-break">\n' +
                                '                    <h4>' + user.firstName + ' ' + user.lastName + '</h4>\n' +
                                '                </div>\n' +
                                '            </div>\n' +
                                '        </div>\n' +
                                '</a>' +

                                '        \n'
                            )

                        })
                    })
                }
                if (data.Plans!='') {
                    $(".Search-results").append('' +
                        '<div class="Plans">\n' +
                        '    <div class="container" id="Plans-Container">\n' +
                        '        <h4 class="text-white mb-2">Plans</h4>\n' +
                        '    </div>\n'+
                        '</div>')
                    data.Plans.forEach(function (Plans) {
                        Plans.forEach(function (plan) {

                            $("#Plans-Container").append('  <a class="nav-link" href="/plans/' + plan.id + '">      <div class="row">\n' +
                                '            <div class="col-3 text-center">\n' +
                                '                <img class="w-75 rounded-circle " src="' + plan.Image + '">\n' +
                                '            </div>\n' +
                                '            <div class="col-9 pl-0 text-white">\n' +
                                '                <div class="blog-header text-break">\n' +
                                '                    <h4>' + plan.PName +'</h4>\n' +
                                '                </div>\n' +
                                '            </div>\n' +
                                '        </div>\n' +
                                '</a>' +

                                '        \n'
                            )

                        })
                    })
                }
                if (data.Blogs==''&&data.Plans==''&&data.Users==''){
                    $(".Search-results").append('' +
                        '<div class="empty">\n' +
                        '    <div class="container text-center" id="empty-Container">\n' +
                        '        <h6 class="text-white mb-2">no match found</h6>\n' +
                        '    </div>\n'+
                        '</div>')
                }
            },
            error: function (data) {
                alert("fail");
            }
        })
    })
    // $(document).on('keypress',function(e) {
    //     if(e.which == 13 && $("#Search").val().length != 0 ) {
    //         $.ajax({
    //             type: "POST",
    //             url: "/Search",
    //             data:{
    //                 Phone:Phone,
    //             },
    //
    //
    //             success: function (data, status) {
    //                 if (data.Status=='Success'){
    //                     location.reload();
    //
    //                 }else if (data.Status=='fail') {
    //                     alert('invalid email address')
    //                 }else if (data.Status=='Exists') {
    //                     $("#Email").parent().addClass('text-invalid')
    //                     $("#Invalid-Email").css("display","block")
    //                     $("#Invalid-Email").parent().addClass("text-invalid")
    //                     $("#Invalid-Email").html('<i class=\"fa fa-exclamation-triangle text-danger\"></i> email is registered')
    //                 }
    //             },
    //             error: function (data) {
    //                 alert("fail");
    //             }
    //         })
    //     }
    // });
})
