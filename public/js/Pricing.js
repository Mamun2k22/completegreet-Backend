$(document).ready(function (){
    $(".Monthly").on('click',function (){
        if ($(this).siblings().hasClass("active")) {

            $(this).siblings().removeClass("active")
            $(this).addClass("active")
            $('.Price').each(function(i, obj) {
                var price=Number($(obj).text())*1.2
                var lastPirce=Math.round((price + Number.EPSILON) * 100) / 100
                $(obj).text( lastPirce)
            });
        }
    })
    $(".Yearly").on('click',function (){

        if ($(this).siblings().hasClass("active")){

            $(this).siblings().removeClass("active")
        $(this).addClass("active")
        $('.Price').each(function(i, obj) {
            var price=Number($(obj).text())/1.2
            var lastPirce=Math.round((price + Number.EPSILON) * 100) / 100
            $(obj).text( lastPirce)
        });
        }else {

        }
    })

    // faq section
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
    acc[0].click()
    acc[4].click()
    $(".checkout-btn").on('click',function (e){
        e.preventDefault()
        if ($(".Yearly").hasClass("active")){
            var link=$(this).attr("data-checkout")
            window.location.href = link+'?dur=%2Fyly'

        }else if ($(".Monthly").hasClass("active")){
            var link=$(this).attr("data-checkout")
            window.location.href = link+'?dur=%2Fmly'
        }
    })
    $('.Price').each(function(i, obj) {
        var price=Number($(obj).text())
        var lastPirce=Math.round((price + Number.EPSILON) * 100) / 100
        $(obj).text( lastPirce)
    });
})