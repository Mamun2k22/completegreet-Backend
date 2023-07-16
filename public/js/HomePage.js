$(document).ready(function() {

    window.onresize = pointing;

function pointing() {
var arrow=setInterval(function (){
    let point = document.getElementsByTagName('iframe');

    if (point.length!=0){
    let rad = Math.atan2(point[1].offsetLeft, point[1].offsetTop);
    let left = (rad * (20 / Math.PI) * -5) + 170;
    document.querySelector('.myarrow').style.transform = "rotate(" + left + "deg)"
        //adjusting back to top button position
        var btn = $('#BacktoTop');
    if (point[1].offsetLeft>100){
        btn.css('right',(point[1].offsetWidth-10)/2-37)

    }else {
        btn.css('left',(point[1].offsetWidth-10)/2-37)

    }
    btn.css('bottom',point[1].offsetHeight-20)
        btn.removeClass("d-none")
        btn.addClass("d-flex")
        clearInterval(arrow)
    }else {

    }
},500)


}

pointing();
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
    //--------- Back to top button ---------///

    var btn = $('#BacktoTop');
    if ($(window).scrollTop() > 10) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 10) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        window.scroll(0, 0);

    });

    $("#getstart-btn").on('click',function (e){
        e.preventDefault()
       var url=$("#getstart-input").val()
        window.location="/register/user?email="+url
    })
})