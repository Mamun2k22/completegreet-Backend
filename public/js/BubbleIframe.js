$(document).ready(function() {


    $("#Bubble-Body").on('click',function (){

    })

    var Bubble=$("#Bubble-Body").data("bubbleinfo")

//------------- Adding Current Bubble Styles ------------//
    $(".Bubble-Inner-Title").text(Bubble.BubbleTitle)
    //------------------------------//
    $(".Bubble-Inner-Title").css('font-size',Bubble.BubbleFontSize+'px')
    //-----------------------------------//
    if (Bubble.BubbleStyle=='Circle'){
        $("#Bubble-Body").css('width',Bubble.BubbleSize+'px')
        $("#Bubble-Body").css('height',Bubble.BubbleSize+'px')
    }else if(Bubble.BubbleStyle=='Rectangle'){
        $("#Bubble-Body").css('width',Bubble.BubbleSize+'px')
        $("#Bubble-Body").css('height',Bubble.BubbleSize*1.5+'px')
    }
    
    //----------------------------------//
    if (Bubble.BubbleBorderColor.length==9&&Bubble.BubbleBorderColor.slice(-2)=="00"){
        if (Bubble.BubbleStyle=='Circle'){
            $("#Bubble-Body").css('width',(Bubble.BubbleSize-6)+'px')
            $("#Bubble-Body").css('height',(Bubble.BubbleSize-6)+'px')
        }else if(Bubble.BubbleStyle=='Rectangle'){
            $("#Bubble-Body").css('width',(Bubble.BubbleSize-6)+'px')
            $("#Bubble-Body").css('height',(Bubble.BubbleSize*1.5-6)+'px')
        }
        $("#Bubble-Body").css('border',"0px")

    }else if(Bubble?.BubbleBorderColor?.length > 1) {
        $("#Bubble-Body").css('border','2px solid '+Bubble.BubbleBorderColor)

    }
    //--------------------------------------------//

    //------------------------------------//
    $(".Bubble-Inner-Title").css('font-family',Bubble.BubbleFontFamily)



//---------------------------------------//
    if(Bubble.BubbleDarken) {
        $(".Bubble-Video-Overlay").css('background-color','rgba(0,0,0,0.5)')

    }else {
        $(".Bubble-Video-Overlay").css('background-color','transparent')

    }
//-------------------------------------//
    if(Bubble.BubbleStyle=='Circle') {

        $("#Bubble-Body").css('border-radius','50%')

    }else if (Bubble.BubbleStyle=='Rectangle'){

        $("#Bubble-Body").css('border-radius','10px')
    }
    //-------------------------------------//
    if(Bubble.BubblePosition=='Right') {
        // $(".Bubble-large-container").css('right','0px')
        // $(".Bubble-large-container").css('left','auto')
        //
        // $("#Bubble-Body").removeClass('Move-Left')


    }else if (Bubble.BubblePosition=='Left'){
        // $(".Bubble-large-container").css('right','auto')
        //
        // $(".Bubble-large-container").css('left','0px')
        //
        // $("#Bubble-Body").addClass('Move-Left')

    }
    //-------------------------------------------//
    // document.getElementById("video-bubble").src = 'https://completegreet.com/files/users/'+Bubble.UserId+'/Bubble-Videos/'+Bubble.BubbleVideo

 })