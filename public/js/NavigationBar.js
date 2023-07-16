$(document).ready(function (){
    //---------- Side Bar Tabs Activating --------------//
    var url = window.location.pathname;
    var tab = url.substring(url.lastIndexOf('/') + 1).toLowerCase();
    if (tab){
        if (tab==' '){
        }else if (tab=='demo'){
            $(document).find('#Home').removeClass('active')

            $(document).find('#Demo').addClass('active')
        }else if (tab=='pricing'){
            $(document).find('#Home').removeClass('active')

            $(document).find('#Pricing').addClass('active')
        }else if (tab=='blogs'){
            $(document).find('#Home').removeClass('active')

            $(document).find('#Blog').addClass('active')
        }else if (tab=='about-us'){
            $(document).find('#Home').removeClass('active')

            $(document).find('#About-Us').addClass('active')
        }else {
            $(document).find('#Home').removeClass('active')

        }
    }

})