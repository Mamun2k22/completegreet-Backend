
$(function(){
    for (var i=0 ;i<noOfSubiscrbedPlans;i++){

	$("#wizard"+i).steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        transitionEffectSpeed: 300,
        onStepChanging: function (event, currentIndex, newIndex) {

            if ( newIndex === 1 ) {
                $('.steps ul').addClass('step-2');
            } else {
                $('.steps ul').removeClass('step-2');
            }
            if ( newIndex === 2 ) {
                $('.steps ul').addClass('step-3');
            } else {
                $('.steps ul').removeClass('step-3');
            }
						if ( newIndex === 3 ) {
								$('.steps ul').addClass('step-4');
						} else {
								$('.steps ul').removeClass('step-4');
						}

            if ( newIndex === 4 ) {
                $('.steps ul').addClass('step-5');
            } else {
                $('.steps ul').removeClass('step-5');
            }
            return true;
        },
				onFinished: function (event, currentIndex)
				{
				    var SubscriberId=$(this).attr("data-Subscriber")
				    var BodyFat=$(this).find($('input[name="Body-fat"]')).val()
				    var Height=$(this).find($('input[name="Body-height"]')).val()
				    var Weight=$(this).find($('input[name="Body-weight"]')).val()
				    var Activity=$(this).find($('input[name="Activity"]:checked')).val()
				    var Level=$(this).find($('input[name="Level"]:checked')).val()
				    var Goal=$(this).find($('input[name="Goal"]:checked')).val()
				    var GymFrequency=$(this).find($('input[name="Gym-Frequency"]')).val()
				    var Likes=$(this).find($('span[id="Likes"]')).map(function(){return $(this).text();}).get()
				    var Dislikes=$(this).find($('span[id="Dislikes"]')).map(function(){return $(this).text();}).get()



                    $.ajax({
                        type: "POST",
                        url: "/Plans/SubscriberInfoUpdate",
                        data:{
                            SubscriberId:SubscriberId,
                            BodyFat:BodyFat,
                            Height:Height,
                            Weight:Weight,
                            Level:Level,
                            Activity:Activity,
                            Goal:Goal,
                            Likes:Likes,
                            Dislikes:Dislikes,
                            GymFrequency:GymFrequency,


                        },

                        success: function (data, status) {
                            if (data.Type=='Success'){
                                $('.DataSaveToast').css('display','block')
                                $('.DataSaveToast').toast('show')
                                setTimeout(function (){
                                    $('.DataSaveToast').css('display','none')


                                },3500)
                            }else if (data.Type=='Fail') {
                                $('.noPermision').find('strong').text('UnSufficient Permission')
                                $('.noPermision').css('display','block')
                                $('.noPermision').toast('show')
                                setTimeout(function (){
                                    $('.noPermision').css('display','none')


                                },3500)
                            }
                        },
                        error: function (data) {

                        }
                    })
                    //------ For Data Saved Confirmation ------/

				},
        labels: {
            finish: "Save",
            next: "Next",
            previous: "Previous"
        }
    });
    // Custom Steps Jquery Steps

    $('.wizard > .steps li a').click(function(){
    	$(this).parent().addClass('checked');
		$(this).parent().prevAll().addClass('checked');
		$(this).parent().nextAll().removeClass('checked');
    });
    // Custom Button Jquery Steps
    $('.forward').click(function(){
    	$("#wizard"+i).steps('next');
    })
    $('.backward').click(function(){
        $("#wizard"+i).steps('previous');
    })
    // Checkbox
    $('.checkbox-circle label').click(function(){
        $('.checkbox-circle label').removeClass('active');
        $(this).addClass('active');
    })
    }
})

