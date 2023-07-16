
$(document).ready(function(){
    //-------------- initializing summernote ------------//
    $('#summernote').summernote({
        minHeight: 150,
        toolbar: [
            ['style', ['style']],
            ['font', ['bold', 'underline', 'clear','strikethrough', 'superscript', 'subscript']],
            // ['fontname', ['fontname']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['insert', ['link', 'picture']],
        ],

    });
//------ Checking image existence -----------//
    if($("#file-upload").get(0).files.length === 0){
        $("#publish").attr("disabled",true);
    }
    else {
        $("#publish").attr("disabled",false);

    }
    $("#file-upload").change(function (e) {
        if($("#file-upload").get(0).files.length === 0){
            $("#publish").attr("disabled",true);
        }
        else {
            $("input").focus();

        }
    })
    //--------- adjusting dimension of container to make cropper take right one ------//
    $(".Plan-Image-Edit").css('height',$("#ArticleData").width())
    $(".Plan-Image-Edit").css('width',$("#ArticleData").width())
    //------------ Adjusting Style Navbar for Current Page -----------------//
    $(document).find('nav').addClass('active-nav')

//------ Declaring Variables ---------//

    var Title,
        Description,
        Content


//--------- Validating Data Via Javascript ------//
    $(document).on('input',function (){
        Title= $("#Title").val()
        Description= $("#ArticleDescription").val()
        Content= $("#summernote").val()

        if(Title.length<10 && Title.length!=0){
            $("#Invalid-Name").css("display","block")
            $("#Invalid-Name").parent().addClass("text-invalid")
            $("#Invalid-Name").html("article name is too short")

        }
        else if(Title.length>50){
            $("#Invalid-Name").css("display","block")
            $("#Invalid-Name").parent().addClass("text-invalid")
            $("#Invalid-Name").html("article name is too long")
        }
        else {
            $("#Invalid-Name").css("display","none")
            $("#Invalid-Name").parent().removeClass("text-invalid")
            $("#Invalid-Name").html("")

        }
        if(Description.length<10 && Description.length!=0){
            $("#Invalid-Description").css("display","block")
            $("#Invalid-Description").parent().addClass("text-invalid")
            $("#Invalid-Description").html("article description is too short")

        }else if(Description.length>50){
            $("#Invalid-Description").css("display","block")
            $("#Invalid-Description").parent().addClass("text-invalid")
            $("#Invalid-Description").html("article description is too long")
        }

        else {
            $("#Invalid-Description").css("display","none")
            $("#Invalid-Description").parent().removeClass("text-invalid")
            $("#Invalid-Description").html("")

        }
        if(Title != '' && Description != '' && Content != '' &&Title.length>=10 && Title.length!=0 &&Title.length<=50 && Description.length>=10 && Description.length!=0 &&Description.length<=50 &&$("#file-upload").get(0).files.length !== 0){
            $("#publish").attr("disabled",false)
        }
        else {
            $("#publish").attr("disabled",true)

        }
        })

//------------------- Editing Plan Image (Cropping)------------------//
    var cropper
    $("#file-upload").on('click', function() {
        $(this).val('');
        $("#publish").attr("disabled",true);
        cropper.destroy();
        $("#plan-img").css("display","block")
        $(".Plan-Image-Edit").css("display","none")

        cropper = null;
    }).change(function (e) {

        $('#PlanPhotoEdit').modal('show')
        $("#plan-img").css("display","none")
        $(".Plan-Image-Edit").css("display","block")


    })


    $('#PlanPhotoEdit').on('shown.bs.modal\t',function (){
        $('#PlanPhotoEdit').addClass("empty")
        var image = document.getElementById('ImageEdit');
        cropper = new Cropper(image, {
            aspectRatio: 16/9,
            preview:'.Plan-Image-Edit',

            crop(event) {

            },
        });
    }).on('hidden.bs.modal',function (){
        if (!$('#PlanPhotoEdit').hasClass('empty')) {
        }else {
            cropper.destroy();
            $("#plan-img").css("display","block")
            $("#publish").attr("disabled",true);
            $(".Plan-Image-Edit").css("display","none")
            $("#file-upload").val('');
            cropper = null;
        }

    })
    $("#upload-btn").on('click',function (e) {
        $('#PlanPhotoEdit').removeClass("empty")
        $('#PlanPhotoEdit').modal('hide')
    })

//------ Sending data via ajax --------------//

    $("#ArticleData").submit(function (e) {
        e.preventDefault();
        Title= $("#Title").val()
        Description= $("#ArticleDescription").val()
        Content= $("#summernote").val()

        var  canvas = cropper.getCroppedCanvas({
            minWidth: 256,
            minHeight: 256,
            maxWidth: 4096,
            maxHeight: 4096,
            fillColor: '#fff',
            imageSmoothingEnabled: true,
            imageSmoothingQuality: 'high',
        });

        canvas.toBlob(function (blob) {
            url = URL.createObjectURL(blob);
            var reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = function () {
                var base64data = reader.result;




                $.ajax({
                    type: "POST",
                    url: "/Users/ArticleImage-Upload",
                    data: {CroppedAvatar:base64data},



                    success: function (data, status) {
                        $.ajax({
                            type: "POST",
                            url: "/Users/Add-Article",
                            data:{
                                Title:Title,
                                Description:Description,
                                Image:data.Image,
                                Content:Content,

                            },

                            success: function (data, status) {
                                if (data.Type=='error'){

                                }else {
                                    window.location.href='http://localhost:3000/Users/Articles'
                                }
                            },
                            error: function (data) {
                                alert("Please Choose a valid photo");
                            }
                        })
                    },
                    error: function (data) {
                        window.location.href='https://completegreet.com/login';
                    }

                })
            }

        });


    })
    //------------------- Live Preview -------------------//
    $(document).on('input',"input", function () {
        Name= $("#Name").val()
        var Description=[]
        Description.push($("input[id='Description']").map(function(){return $(this).val();}).get())
//".map(function(){return $(this).val();}).get()" el syntax dh howa lw7do by3ml loop 3la kol el input with same id w b return el values bta3thom
        $("input[id='Description']").each(function (index) {

        })
        Duration= $("#Duration").val()
        Level= $("#Level").val()
        Category= $("#Category").val()
        Equipment= $("#Equipment").val()
        Price= $("#Price").val()
        Max_Clients= $("#Max-Clients").val()
        Type=$('input[name="Kind"]:checked').val();


        if (Name==''){
            $(".plan-name").html('PLAN NAME')

        }else {
            $(".plan-name").html(Name)

        }

        Description.forEach(function (description) {
            var PDescription = $('.plan-description');
            for (var index = 0; index < PDescription.length; index++) {
                if (description[index]==undefined){
                    $(PDescription[index]).html('')
                }
                else if (description[index]=='') {
                    $(PDescription[index]).html('')

                }else {
                    $(PDescription[index]).html("<div class=\"row\" style=\"align-items: center;flex-wrap:nowrap\">" +
                        "                                            <div class=\"col-1\" >" +
                        "                                                <i class=\"fa fa-check pr-4\" aria-hidden=\"true\"></i>" +
                        "                                            </div>" +
                        "                                            <div class=\"col-11\">" +
                        "                                                <span>"+  description[index]+"   </span>" +
                        "                                            </div>" +
                        "                                        </div>" +
                        "")

                }
            }



        })
        if (Price==''){
            $(".price").html("$300")

        }else {
            $(".price").html("$"+Price)

        }
        if (Duration==''){
            $(".plan-weeks").html("8 Weeks")

        }else if (Duration>52||Duration%4!=0||Duration<4){

        }
        else
        {
            $(".plan-weeks").html(Duration+" Weeks")

        }

//-------------------- Resize Plan Name ----------------//
        ;(function($) {
            $.fn.textfill = function(options) {
                var fontSize = options.maxFontPixels;
                var ourText = $('h5', this);
                var maxHeight = $(this).height();
                var maxWidth = $(this).width();
                var textHeight;
                var textWidth;
                do {
                    ourText.css('font-size', fontSize);
                    textHeight = ourText.height();
                    textWidth = ourText.width();
                    fontSize = fontSize - 1;
                } while ((textHeight > maxHeight || textWidth > maxWidth) && fontSize > 3);
                return this;
            }
        })(jQuery);
        function PNameCheck() {
            var fixed_height = $('.fixed-height');
            for (var index = 0; index < fixed_height.length; index++) {
                $(fixed_height[index]).textfill({ maxFontPixels: 36 })
            }
        }
        PNameCheck()
        //------------------- resizing plan Description font size based on length and relative to height ---------------------------//
        ;(function($) {
            $.fn.textfill = function(options) {
                var fontSize = options.maxFontPixels;
                var ourText = $('span:visible:first', this);
                var maxHeight = $(this).height();
                var maxWidth = $(this).width();
                var textHeight;
                var textWidth;
                do {
                    ourText.css('font-size', fontSize);
                    textHeight = ourText.height();
                    textWidth = ourText.width();
                    fontSize = fontSize - 1;
                } while ((textHeight > maxHeight|| textWidth > maxWidth) && fontSize > 3);
                return this;
            }
        })(jQuery);
        function PDescriptionCheck() {
            var PDescription = $('.plan-description');
            for (var index = 0; index < PDescription.length; index++) {
                $(PDescription[index]).textfill({ maxFontPixels:15 })
            }
        }

        PDescriptionCheck()
    })
//-------------------- Resize Plan Name ----------------//
    ;(function($) {
        $.fn.textfill = function(options) {
            var fontSize = options.maxFontPixels;
            var ourText = $('h5', this);
            var maxHeight = $(this).height();
            var maxWidth = $(this).width();
            var textHeight;
            var textWidth;
            do {
                ourText.css('font-size', fontSize);
                textHeight = ourText.height();
                textWidth = ourText.width();
                fontSize = fontSize - 1;
            } while ((textHeight > maxHeight || textWidth > maxWidth) && fontSize > 3);
            return this;
        }
    })(jQuery);
    function PNameCheck() {
        var fixed_height = $('.fixed-height');
        for (var index = 0; index < fixed_height.length; index++) {
            $(fixed_height[index]).textfill({ maxFontPixels: 36 })
        }
    }
    PNameCheck()

//------------------- resizing plan Description font size based on length and relative to height ---------------------------//
    ;(function($) {
        $.fn.textfill = function(options) {
            var fontSize = options.maxFontPixels;
            var ourText = $('span:visible:first', this);
            var maxHeight = $(this).height();
            var maxWidth = $(this).width();
            var textHeight;
            var textWidth;
            do {
                ourText.css('font-size', fontSize);
                textHeight = ourText.height();
                textWidth = ourText.width();
                fontSize = fontSize - 1;
            } while ((textHeight > maxHeight|| textWidth > maxWidth) && fontSize > 3);
            return this;
        }
    })(jQuery);
    function PDescriptionCheck() {
        var PDescription = $('.plan-description');
        for (var index = 0; index < PDescription.length; index++) {
            $(PDescription[index]).textfill({ maxFontPixels:15 })
            console.log(222)
        }
    }

    PDescriptionCheck()

    $(window).resize(function (){
        //-------------------- Resize Plan Name ----------------//
        ;(function($) {
            $.fn.textfill = function(options) {
                var fontSize = options.maxFontPixels;
                var ourText = $('h5', this);
                var maxHeight = $(this).height();
                var maxWidth = $(this).width();
                var textHeight;
                var textWidth;
                do {
                    ourText.css('font-size', fontSize);
                    textHeight = ourText.height();
                    textWidth = ourText.width();
                    fontSize = fontSize - 1;
                } while ((textHeight > maxHeight || textWidth > maxWidth) && fontSize > 3);
                return this;
            }
        })(jQuery);
        function PNameCheck() {
            var fixed_height = $('.fixed-height');
            for (var index = 0; index < fixed_height.length; index++) {
                $(fixed_height[index]).textfill({ maxFontPixels: 36 })
            }
        }
        PNameCheck()

//------------------- resizing plan Description font size based on length and relative to height ---------------------------//
        ;(function($) {
            $.fn.textfill = function(options) {
                var fontSize = options.maxFontPixels;
                var ourText = $('span:visible:first', this);
                var maxHeight = $(this).height();
                var maxWidth = $(this).width();
                var textHeight;
                var textWidth;
                do {
                    ourText.css('font-size', fontSize);
                    textHeight = ourText.height();
                    textWidth = ourText.width();
                    fontSize = fontSize - 1;
                } while ((textHeight > maxHeight|| textWidth > maxWidth) && fontSize > 3);
                return this;
            }
        })(jQuery);
        function PDescriptionCheck() {
            var PDescription = $('.plan-description');
            for (var index = 0; index < PDescription.length; index++) {
                $(PDescription[index]).textfill({ maxFontPixels:15 })
                console.log(222)
            }
        }

        PDescriptionCheck()

    })
})