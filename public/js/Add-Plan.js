// adding and removing Description
var D_number=1

// var description="<div class=\"Description-body\">" +
//     "                                    <div class=\"row\">" +
//     "                                        <div class=\"col-10\">" +
//     "                                            <div class=\"md-form\">" +
//     "                                                <input" +
//     "                                                        type=\"text\"" +
//     "                                                        class=\"form-control\"" +
//     "                                                        id=\"Description"+D_number+"\"" +
//     "                                                        maxlength=\"80\"" +
//     "" +
//     "                                                        " +
//     "" +
//     "                                                >" +
//     "                                                <label for=\"Description"+D_number+"\">Plan Description</label>" +
//     "                                            </div>" +
//     "                                        </div>" +
//     "                                        <div class=\"col-2\">" +
//     "                                            <div class=\"remove\"></div>" +
//     "                                        </div>" +
//     "                                    </div>" +
//     "                                </div>" +
//     "";
$(document).on('click',".add",function () {
    if(D_number>3){
    }else {
        $(".P-Description").append("<div class=\"Description-body\">" +
            "                                    <div class=\"row\">" +
            "                                        <div class=\"col-10\">" +
            "                                            <div class=\"md-form\">" +
            "                                                <input" +
            "                                                        type=\"text\"" +
            "                                                        class=\"form-control\"" +
            "                                                        id=\"Description"+D_number+"\"" +
            "                                                        maxlength=\"80\"" +
            "" +
            "                                                        " +
            "" +
            "                                                >" +
            "                                                <label for=\"Description"+D_number+"\">Plan Description</label>" +
            "                                            </div>" +
            "                                        </div>" +
            "                                        <div class=\"col-2\">" +
            "                                            <div class=\"remove\"></div>" +
            "                                        </div>" +
            "                                    </div>" +
            "                                </div>" +
            "");
        D_number++

    }
})
$(document).on('click',".remove",function () {
    $(this).parent().parent().parent().remove();
    --D_number

})
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
$(document).ready(function(){
    //------------ Adjusting Style Navbar for Current Page -----------------//
    $(document).find('nav').addClass('active-nav')

//------ Declaring Variables ---------//

    var Name,
        Duration,
        Level,
        Category,
        Equipment,
        Price,
        Type,
        Max_Clients,
        Discount

//--------- Validating Data Via Javascript ------//
    $(document).on('input',function (){
        Name= $("#Name").val()
        var Description=[]

        Description.push($("input[id='Description']").map(function(){return $(this).val();}).get())
        Duration= $("#Duration").val()
        Level= $("#Level").val()
        Category= $("#Category").val()
        Equipment= $("#Equipment").val()
        Price= $("#Price").val()
        Discount= $("#Discount").val()
        Max_Clients= $("#Max_Clients").val()
        if(isNaN(Duration)||Duration<4||Duration>48 || Duration%4!==0){
        }
         if(Name.length<10 && Name.length!=0){
            $("#Invalid-Name").css("display","block")
            $("#Invalid-Name").parent().addClass("text-invalid")
             $("#Invalid-Name").html("plan name is too short")

        }
         else if(Name.length>50){
             $("#Invalid-Name").css("display","block")
             $("#Invalid-Name").parent().addClass("text-invalid")
             $("#Invalid-Name").html("plan name is too long")
         }
         else {
             $("#Invalid-Name").css("display","none")
             $("#Invalid-Name").parent().removeClass("text-invalid")
             $("#Invalid-Name").html("")

         }
        if(Duration%4!=0 ||Duration>52 || Duration<0){
            $("#Invalid-Duration").css("display","block")
            $("#Invalid-Duration").parent().addClass("text-invalid")
            $("#Invalid-Duration").html("duration should be 4,8,... => 52")

        }

        else {
            $("#Invalid-Duration").css("display","none")
            $("#Invalid-Duration").parent().removeClass("text-invalid")
            $("#Invalid-Duration").html("")

        }
         if(Name != '' && $("input[id='Description']").val() != '' && Duration != '' && Category != '' && Price != ''&& Max_Clients != '' &&Name.length>=10 && Name.length!=0 &&Name.length<=50&&Duration%4==0 &&Duration<=52 && Duration>0 &&["Workout","Nutrition","Both"].includes(Category)&&$("#file-upload").get(0).files.length !== 0){
$("#publish").attr("disabled",false)
        }
         else {
             $("#publish").attr("disabled",true)

         }
         if(!["Workout","Nutrition","Both"].includes(Category)){

        }
        //  if (Name == '' || Description == '' || Duration == '' || Level == '' || Category == '' || Workouts_Week == ''|| Price == ''|| Max_Clients == 0) {
        //     error="Please fill the required fields"
        //
        // }
    })
    //--------- adjusting dimension of container to make cropper take right one ------//

    $(".Plan-Image-Edit").css('height',$(".workout-head").width())
    $(".Plan-Image-Edit").css('width',$(".workout-head").width())
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
            aspectRatio: 1,
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

    $("#PlanData").submit(function (e) {
        Name= $("#Name").val()
        var Description=$("input[id='Description']").map(function(){return $(this).val();}).get()


        Duration= $("#Duration").val()
        Level= $("#Level").val()
        Category= $("#Category").val()
        Equipment= $("#Equipment").val()
        Price= $("#Price").val()
        Discount= $("#Discount").val()
        Max_Clients= $("#Max_Clients").val()
        // Type=$('input[name="Kind"]:checked').val();
        var Image=new FormData(this);
        e.preventDefault()
        // Image.append("Name",Name)
        // Image.append(  "Description[]",Description)
        // Image.append( "Duration",Duration)
        // Image.append("Level",Level)
        // Image.append("Category",Category)
        // Image.append("Equipment",Equipment)
        // Image.append("Price",Price)
        // Image.append("Discount",Discount)
        // Image.append("Max_Clients",Max_Clients)
        // // Image.append("Type",Type)
        // Image.append("CoachID",CoachID)
        // Image.append("CoachName",CoachName)
        e.preventDefault();
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
                    url: "/Plans/PlanImage-Upload",
                    data: {CroppedAvatar:base64data},



                    success: function (data, status) {
                        $.ajax({
                            type: "POST",
                            url: "/Plans/Add-Plan",
                            data:{
                                Name:Name,
                                Description:Description,
                                Image:data.Image,
                                Duration:Duration,
                                Level:Level,
                                Category:Category,
                                Equipment:Equipment,
                                Price:Price,
                                Max_Clients:Max_Clients,
                                CoachID:CoachID,
                                CoachName:CoachName,

                            },

                            success: function (data, status) {
                                if (data.Type=='error'){

                                }else {
                                    window.location.href='http://localhost:3000/Plans'
                                }
                            },
                            error: function (data) {
                                alert("Please Choose a valid photo");
                            }
                        })
                        },
                    error: function (data) {
                        alert("fail");
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