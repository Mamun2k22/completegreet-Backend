$(document).ready(function() {
    if (window.matchMedia('(max-width: 848px)').matches) {
        $('#sidebar-menu').toggleClass('sidebar-collapse-width');
        $('.profile-info').toggleClass('profile-info-collapse');
        $('.sidebar-link-text').addClass('w-0');

    }

    $(document).click(function(event) {
        var $target = $(event.target);
        if(!$target.closest('#sidebar-menu').length) {
            if (window.matchMedia('(max-width: 576px)').matches) {
                $('#sidebar-menu').removeClass('ml-0');
                $('.profile-info').removeClass('profile-info-collapse');
                $('.sidebar-link-text').removeClass('w-0');


            }else if (window.matchMedia('(max-width: 848px)').matches) {
                $('#sidebar-menu').addClass('sidebar-collapse-width');
                $('.sidebar-link-text').addClass('w-0');
                $('.profile-info').addClass('profile-info-collapse');

            }
        }
    });
    $('#aside-collapse-button').on('click', e => {
        if (window.matchMedia('(max-width: 576px)').matches) {
            $('#sidebar-menu').toggleClass('ml-0');
            $('.profile-info').removeClass('profile-info-collapse');
            $('.sidebar-link-text').removeClass('w-0');


        }else {
            $('#sidebar-menu').toggleClass('sidebar-collapse-width');
            $('.profile-info').toggleClass('profile-info-collapse');
            $('.sidebar-link-text').toggleClass('w-0');

        }

    });
    $(window).on('resize', function(){
        var win = $(this); //this = window
        if (window.matchMedia('(max-width: 848px)').matches&&window.matchMedia('(min-width: 576px)').matches) {
            $('#sidebar-menu').addClass('sidebar-collapse-width');
            $('.profile-info').addClass('profile-info-collapse');
            $('.sidebar-link-text').addClass('w-0');

        }else if (window.matchMedia('(min-width: 848px)').matches){
            $('#sidebar-menu').removeClass('sidebar-collapse-width');
            $('.profile-info').removeClass('profile-info-collapse');
            $('.sidebar-link-text').removeClass('w-0');

        }else if (window.matchMedia('(max-width: 576px)').matches){
            $('#sidebar-menu').removeClass('sidebar-collapse-width');
            $('.profile-info').removeClass('profile-info-collapse');
            $('.sidebar-link-text').removeClass('w-0');
        }

    });

    //---------- Side Bar Tabs Activating --------------//
    var url = window.location.pathname;
    var tab = url.substring(url.lastIndexOf('/') + 1).toLowerCase();
    if (tab){
        if (tab=='dashboard'){
        }else if (tab=='bubble'){
            $(document).find('#DashBoard-tab').removeClass('active')

            $(document).find('#Bubble-tab').addClass('active')
        }else if (tab=='livechat'){
            $(document).find('#DashBoard-tab').removeClass('active')

            $(document).find('#Live-Chat-tab').addClass('active')
        }else if (tab=='team'){
            $(document).find('#DashBoard-tab').removeClass('active')

            $(document).find('#Team-tab').addClass('active')
        }else if (tab=='subscription'){
            $(document).find('#DashBoard-tab').removeClass('active')

            $(document).find('#Subscription-tab').addClass('active')
        }else if (tab=='profile'){
            $(document).find('#DashBoard-tab').removeClass('active')

        }
    }
    if(url.toLowerCase().includes("bubble")){
        $(document).find('#DashBoard-tab').removeClass('active')

        $(document).find('#Bubble-tab').addClass('active')
    }


})