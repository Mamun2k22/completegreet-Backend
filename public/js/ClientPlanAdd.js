    $(document).ready(function() {

//---------------- InBodyCoachPreview --------------------//
    $(document).on('click', ".inbodyCoachPrev", function () {
        var SourceHash = $(this).data("inbody")
        var Source = SourceHash.slice(7)
        $("#InbodyCoachPrev").attr('src', '/images/Coaches-Avatar/' + Source)
        // var blob = new Blob(['/images/Coaches-Avatar/' + Source], {type: 'application/pdf'});
        // var blobURL = URL.createObjectURL(blob);
        // window.open(blobURL);
        $('#InbodyCoachPreview').modal('show')
    })

//-----------making Table Cells Editable--------------//
// u should use selectors to edit dynamically added elements usimg jquery
    $('.table').on('click', ".table-cell", function () {
        $(this).attr("contentEditable", "true");
        $(this).focus();


    })
    $("body").on('click', ".table-cell", function () {
        $(this).focusout(function () {
            $(this).attr("contentEditable", "false");


        })

    })
//------------- Removing Exercises ---------------------//
    $(document).on('click', '.Remove', function () {
        var ExerciseID = $(this).parent().find("#ExerciseID").val()
        var url = window.location.pathname;
        var SubscriberID = url.substring(url.lastIndexOf('/') + 1);
        var CurrentTable = $(this).parent().parent().parent().parent().find("td[id='Exercise']").length
        if (CurrentTable > 1) {
        } else {
            $(this).parent().parent().parent().parent().append('<button   class="btn btn-danger DayOff">Rest</button>')
        }
        var CurrentPage = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent()


        $.ajax({
            type: "POST",
            dataType: 'json',
            url: "/Plans/ClientExerciseRemove",
            data: {ExerciseID: ExerciseID},
            success: function (data, status) {
                $.ajax({
                    type: "POST",
                    dataType: 'json',
                    url: "/Plans/ClientPlanFinished/" + SubscriberID,
                    success: function (data, status) {
                        if (data.Type == 'Finished') {
                            var publishcheck = $('.ClientPlanPublish').length
                            if (publishcheck > 0) {

                            } else {
                                CurrentPage.append('<div class="d-flex" ><button   class="btn btn-danger ClientPlanPublish ml-auto mt-2 mr-2 ">Send To Client</button></div>')

                            }
                            $('.WorkoutDataSaved').find('strong').text('Exercise Removed, Plan Is Ready')
                            $('.WorkoutDataSaved').css('display', 'block')
                            $('.WorkoutDataSaved').toast('show')
                            setTimeout(function () {
                                $('.WorkoutDataSaved').css('display', 'none')


                            }, 3500)
                        } else if (data.Type == 'Success') {
                            $('.ClientPlanPublish').parent().remove()

                            $('.WorkoutDataSaved').find('strong').text('Exercise Removed')
                            $('.WorkoutDataSaved').css('display', 'block')
                            $('.WorkoutDataSaved').toast('show')
                            setTimeout(function () {
                                $('.WorkoutDataSaved').css('display', 'none')


                            }, 3500)
                        }

                    },
                    error: function (data) {
                        alert("fail");
                    }
                })

            },
            error: function (data) {
                alert("fail");
            }
        })


        $(this).parent().remove()
    })
    //------------- Removing SuperSets ---------------------//
    $(document).on('click', '.Remove-SuperSet', function () {
        var ExerciseID = $(this).parent().find("#ExerciseID").val()
        var url = window.location.pathname;
        var SubscriberID = url.substring(url.lastIndexOf('/') + 1);
        var CurrentTable = $(this).parent().parent().parent().parent().find("td[id='Exercise']").length
        if (CurrentTable > 2) {
        } else {
            $(this).parent().parent().parent().parent().append('<button   class="btn btn-danger DayOff">Rest</button>')
        }
        var CurrentPage = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent()


        $.ajax({
            type: "POST",
            dataType: 'json',
            url: "/Plans/ClientExerciseRemove",
            data: {ExerciseID: ExerciseID},
            success: function (data, status) {
                $.ajax({
                    type: "POST",
                    dataType: 'json',
                    url: "/Plans/ClientPlanFinished/" + SubscriberID,
                    success: function (data, status) {
                        if (data.Type == 'Finished') {
                            var publishcheck = $('.ClientPlanPublish').length
                            if (publishcheck > 0) {

                            } else {
                                CurrentPage.append('<div class="d-flex" ><button   class="btn btn-danger ClientPlanPublish ml-auto mt-2 mr-2 ">Send To Client</button></div>')

                            }
                            $('.WorkoutDataSaved').find('strong').text('Exercise Removed, Plan Is Ready')
                            $('.WorkoutDataSaved').css('display', 'block')
                            $('.WorkoutDataSaved').toast('show')
                            setTimeout(function () {
                                $('.WorkoutDataSaved').css('display', 'none')


                            }, 3500)
                        } else if (data.Type == 'Success') {
                            $('.ClientPlanPublish').parent().remove()

                            $('.WorkoutDataSaved').find('strong').text('Exercise Removed')
                            $('.WorkoutDataSaved').css('display', 'block')
                            $('.WorkoutDataSaved').toast('show')
                            setTimeout(function () {
                                $('.WorkoutDataSaved').css('display', 'none')


                            }, 3500)
                        }

                    },
                    error: function (data) {
                        alert("fail");
                    }
                })

            },
            error: function (data) {
                alert("fail");
            }
        })

        $(this).closest('tr').next().remove();
        $(this).closest('tr').remove();
    })
//------------- Adding Exercise ---------------------//
    $(document).on('click', '.Add-Exercise', function () {
        var randomnumber = Math.floor(Math.random() * (100000000));

        $(this).parent().find("tbody").append(' <tr data-SuperSet="0" class="table-row">\n' +
            '          <td data-gramm_editor="false" class="table-cell  Cell-Style" id="Exercise"></td>\n' +
            '          <td data-gramm_editor="false" class="table-cell  Cell-Style" id="Sets"></td>\n' +
            '          <td data-gramm_editor="false" class="table-cell  Cell-Style" id="Reps"></td>\n' +
            '          <td data-gramm_editor="false" class="Remove p-0"><i class="fa fa-times text-danger pointer"></i></td>\n' +
            '          <input type="hidden" id="ExerciseID" value="' + randomnumber + '">\n' +
            '        </tr>')
        $(this).parent().find(".DayOff").remove()
    })
//------------- Adding DayOff ---------------------//
    $(document).on('click', '.DayOff', function () {
        var randomnumber = Math.floor(Math.random() * (100000000));
        $(this).parent().find("tbody").append(' <tr class="table-row position-relative Rest">\n' +
            '          <td data-gramm_editor="false" class="  Cell-Style" id="Exercise"></td>\n' +
            '          <td data-gramm_editor="false" class="  Cell-Style" id="Sets"></td>\n' +
            '          <td data-gramm_editor="false" class="  Cell-Style" id="Reps"></td>\n' +
            '          <input type="hidden" id="ExerciseID" value="' + randomnumber + '">\n' +
            '        </tr>')
        $(this).parent().find(".Add-Exercise").remove()
        $(this).parent().attr('data-Rest', 1)
        $(this).parent().find(".SuperSet").remove()
        $(this).html('Exercise')
        $(this).removeClass('DayOff')
        $(this).addClass('DayOn')

    })
//------------- Removing DayOff ---------------------//
    $(document).on('click', '.DayOn', function () {
        var ExerciseID = $(this).parent().find("#ExerciseID").val()
        var CurrentPage = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent()
        var url = window.location.pathname;
        var SubscriberID = url.substring(url.lastIndexOf('/') + 1);
        $(this).parent().find('.Rest').remove()
        $(this).before('<button   class="btn btn-danger Add-Exercise mr-1">Add Exercise</button>' +
            '<button   class="btn btn-danger SuperSet mr-1">Add SuperSet</button>')
        $(this).html('Rest')
        $(this).parent().attr('data-Rest', 0)
        $(this).removeClass('DayOn')
        $(this).addClass('DayOff')
        $.ajax({
            type: "POST",
            dataType: 'json',
            url: "/Plans/ClientExerciseRemove",
            data: {ExerciseID: ExerciseID},
            success: function (data, status) {
                $.ajax({
                    type: "POST",
                    dataType: 'json',
                    url: "/Plans/ClientPlanFinished/" + SubscriberID,
                    success: function (data, status) {
                        CurrentPage.find('.ClientPlanPublish')
                        if (data.Type == 'Finished') {
                            var publishcheck = $('.ClientPlanPublish').length
                            if (publishcheck > 0) {

                            } else {
                                CurrentPage.append('<div class="d-flex" ><button   class="btn btn-danger ClientPlanPublish ml-auto mt-2 mr-2 ">Send To Client</button></div>')

                            }
                            $('.WorkoutDataSaved').find('strong').text('Day Off Removed, Plan Is Ready')
                            $('.WorkoutDataSaved').css('display', 'block')
                            $('.WorkoutDataSaved').toast('show')
                            setTimeout(function () {
                                $('.WorkoutDataSaved').css('display', 'none')


                            }, 3500)
                        } else if (data.Type == 'Success') {
                            $('.ClientPlanPublish').parent().remove()

                            $('.WorkoutDataSaved').find('strong').text('Day Off Removed')
                            $('.WorkoutDataSaved').css('display', 'block')
                            $('.WorkoutDataSaved').toast('show')
                            setTimeout(function () {
                                $('.WorkoutDataSaved').css('display', 'none')


                            }, 3500)
                        }

                    },
                    error: function (data) {
                        alert("fail");
                    }
                })

            },
            error: function (data) {
                alert("fail");
            }
        })
    })
//------------- Saving Workouts to Database -----------------//
    $(document).on('click', '.WorkoutPlanSave', function (e) {
        e.preventDefault()
        var Week = $(this).parent().parent().parent().parent().attr('data-Week')
        var Day = $(this).parent().parent().parent().parent().attr('data-Day')
        var CurrentTable = $(this).parent().parent().parent().parent()
        var ExerciseID = []
        var Exercise = []
        var Sets = []
        var SuperSets = []
        var Reps = []
        var RowID = []
        var url = window.location.pathname;
        var SubscriberID = url.substring(url.lastIndexOf('/') + 1);
        var Workout = []
        //------- making function to make sure that all values are given before send to back -----//
        function checkemptyFields(obj) {
            if (obj[0].isRest==1)
                return true
            for (var key in obj) {
                if (obj[key].Sets === null || obj[key].Sets == ""|| obj[key].Sets === undefined)
                    return false;
            } for (var key in obj) {
                if (obj[key].Reps === null || obj[key].Reps == ""|| obj[key].Reps === undefined)
                    return false;
            } for (var key in obj) {
                if (obj[key].Exercise === null || obj[key].Exercise == ""|| obj[key].Exercise === undefined)
                    return false;
            }
            return true;
        }
        //----------- adding values to Workout with Day rest info ---------///
        if ($(this).parent().parent().find('.WorkoutinfoBox').attr('data-Rest') == 1) {
            CurrentTable.find('input[id=ExerciseID]').each(function (index, tr) {
                ExerciseID.push(tr.value)
            }).get();
            Workout.push({
                // dlw2ty ana b loop 3la el rows f lma bktb $("td[id='Exercise']") bygbly kol el td el id bta3ha =exercise
                // f ana ba5od el forsa en ana m3aya el index el row hatkon hya hya index el table cells fl el row
                // f 34an kda bktb $("td[id='Exercise']")[index]
                Week: Week,
                Day: Day,
                ExerciseID: ExerciseID[0],
                isRest: 1
            })
        }else {
            //----------- adding values to Workout with Exercises info ---------///

            CurrentTable.find("tr").each(function (index, tr) {
                $(this).attr("data-RowID",index)
            })
            CurrentTable.find("tr[data-SuperSet='1'] ").each(function (index, tr) {
                $(this).children("#Exercise").each(function (index, tr) {
                    if (tr.innerHTML==''){
                        $(this).css('border-bottom','2px solid red')
                        Exercise.push(tr.innerHTML)

                    }else {
                        $(this).css('border-bottom','none')

                        Exercise.push(tr.innerHTML)
                    }
                })
                $(this).children("#Sets").each(function (index, tr) {
                    if (tr.innerHTML==''){
                        $(this).css('border-bottom','2px solid red')
                        Sets.push(tr.innerHTML)

                    }else {
                        $(this).css('border-bottom','none')

                        Sets.push(tr.innerHTML)
                    }
                })
                $(this).children("#Reps").each(function (index, tr) {
                    if (tr.innerHTML==''){
                        $(this).css('border-bottom','2px solid red')
                        Reps.push(tr.innerHTML)

                    }else {
                        $(this).css('border-bottom','none')

                        Reps.push(tr.innerHTML)
                    }
                })
                $(this).children("#ExerciseID").each(function (index, tr) {

                        ExerciseID.push(tr.value)
                })
                RowID.push($(this).attr("data-RowID"))
                SuperSets.push(1)

            })
            CurrentTable.find("tr[data-SuperSet='0'] ").each(function (index, tr) {
                $(this).children("#Exercise").each(function (index, tr) {
                    if (tr.innerHTML==''){
                        $(this).css('border-bottom','2px solid red')
                        Exercise.push(tr.innerHTML)

                    }else {
                        $(this).css('border-bottom','none')
                        Exercise.push(tr.innerHTML)
                    }
                })
                $(this).children("#Sets").each(function (index, tr) {
                    if (tr.innerHTML==''){
                        $(this).css('border-bottom','2px solid red')
                        Sets.push(tr.innerHTML)

                    }else {
                        $(this).css('border-bottom','none')

                        Sets.push(tr.innerHTML)
                    }
                })
                $(this).children("#Reps").each(function (index, tr) {
                    if (tr.innerHTML==''){
                        $(this).css('border-bottom','2px solid red')
                        Reps.push(tr.innerHTML)

                    }else {
                        $(this).css('border-bottom','none')

                        Reps.push(tr.innerHTML)
                    }
                })
                $(this).children("#ExerciseID").each(function (index, tr) {

                        ExerciseID.push(tr.value)
                })
                RowID.push($(this).attr("data-RowID"))
                SuperSets.push(0)

            })

            // CurrentTable.find("tr[data-SuperSet='0'] td[id='Exercise'] ").each(function (index, tr) {
            //     Exercise.push(tr.innerHTML)
            // })
            // CurrentTable.find("tr[data-SuperSet='0'] td[id='Sets'] ").each(function (index, tr) {
            //     Sets.push(tr.innerHTML)
            // })
            // CurrentTable.find("tr[data-SuperSet='0'] td[id='Reps'] ").each(function (index, tr) {
            //     Reps.push(tr.innerHTML)
            // })
            // CurrentTable.find("tr[data-SuperSet='0'] input[id=ExerciseID] ").each(function (index, tr) {
            //     ExerciseID.push(tr.value)
            // })
            // CurrentTable.find("tr[data-SuperSet='0'] ").each(function (index, tr) {
            //     SuperSets.push(0)
            //
            // })

            // ExerciseID = CurrentTable.find('tr[data-SuperSet="0] input[id=ExerciseID]').map(function () {
            //     return this.value;
            // }).get();
            // CurrentTable.find("td[id='Sets']").each(function (index, tr) {
            //     Sets.push(tr.innerHTML)
            // })
            // CurrentTable.find("td[id='Reps']").each(function (index, tr) {
            //     Reps.push(tr.innerHTML)
            // })

            for (var i = 0; i < Exercise.length; i++) {
                Workout.push({
                    // dlw2ty ana b loop 3la el rows f lma bktb $("td[id='Exercise']") bygbly kol el td el id bta3ha =exercise
                    // f ana ba5od el forsa en ana m3aya el index el row hatkon hya hya index el table cells fl el row
                    // f 34an kda bktb $("td[id='Exercise']")[index]
                    Week: Week,
                    Day: Day,
                    ExerciseID: ExerciseID[i],
                    Exercise: Exercise[i],
                    SuperSets:SuperSets[i],
                    Sets: Sets[i],
                    RowID: RowID[i],
                    Reps: Reps[i],
                    isRest: 0
                })

            }
        }



        if (Workout != '' &&checkemptyFields(Workout)) {
            $.ajax({
                type: "POST",
                dataType: 'json',
                url: "/Plans/ClientPlanAdd/" + SubscriberID,
                data: {Workout: Workout},
                success: function (data, status) {
                    $.ajax({
                        type: "POST",
                        dataType: 'json',
                        url: "/Plans/ClientPlanFinished/" + SubscriberID,
                        success: function (data, status) {
                            if (data.Type == 'Finished') {
                                var publishcheck = $('.ClientPlanPublish').length
                                if (publishcheck > 0) {

                                } else {
                                    CurrentTable.parent().parent().parent().parent().parent().append('<div class="d-flex" ><button   class="btn btn-danger ClientPlanPublish ml-auto mt-2 mr-2 ">Send To Client</button></div>')

                                }

                                $('.WorkoutDataSaved').find('strong').text('Exercise Added, Plan Is Ready')
                                $('.WorkoutDataSaved').css('display', 'block')
                                $('.WorkoutDataSaved').toast('show')
                                setTimeout(function () {
                                    $('.WorkoutDataSaved').css('display', 'none')


                                }, 3500)
                            } else if (data.Type == 'Success') {
                                $('.ClientPlanPublish').parent().remove()

                                $('.WorkoutDataSaved').find('strong').text('Exercise Added')
                                $('.WorkoutDataSaved').css('display', 'block')
                                $('.WorkoutDataSaved').toast('show')
                                setTimeout(function () {
                                    $('.WorkoutDataSaved').css('display', 'none')


                                }, 3500)
                            }

                            // CurrentTable.modal('hide')

                        },
                        error: function (data) {
                            alert("fail");
                        }
                    })

                    // CurrentTable.modal('hide')

                },
                error: function (data) {
                    alert("fail");
                }
            })
        } else {
            $('.WorkoutDataWarning').find('strong').text('No Exercise Added')
            $('.WorkoutDataWarning').css('display', 'block')
            $('.WorkoutDataWarning').toast('show')
            setTimeout(function () {
                $('.WorkoutDataWarning').css('display', 'none')


            }, 3500)

        }

    })
//------------- Adding SuperSet ---------------------//
    $(document).on('click', '.SuperSet', function () {
        var randomnumber = Math.floor(Math.random() * (100000000));
        
        $(this).parent().find("tbody").append('<tr data-SuperSet="1" class="table-row ">\n' +
            '\n' +
            '    <td data-gramm_editor="false" class="table-cell Cell-Style" id="Exercise"></td>\n' +
            '    <td data-gramm_editor="false" class="table-cell Cell-Style " rowspan="2" id="Sets"></td>\n' +
            '\n' +
            '    <td data-gramm_editor="false" class="table-cell Cell-Style" id="Reps"></td>\n' +
            '    <td data-gramm_editor="false" rowspan="2" class="Remove-SuperSet p-0"><i class="fa fa-times text-danger pointer"></i></td>\n' +
            '            \'          <input type="hidden" id="ExerciseID" value="'+randomnumber+'">\\n\' +\n' +
            '\n' +
            '</tr>\n' +
            '                       <tr data-SuperSet="1" class="table-row">\n' +
            '    <td data-gramm_editor="false" class="table-cell Cell-Style d-none " rowspan="2" id="Sets">none</td>\n' +

            '                           <td data-gramm_editor="false" class="table-cell Cell-Style" id="Exercise"></td>\n' +
            '                           <td data-gramm_editor="false" class="table-cell Cell-Style" id="Reps"></td>\n' +
            '            \'          <input type="hidden" id="ExerciseID" value="'+randomnumber+"S"+'">\\n\' +\n' +
            '\n' +
            '                       </tr>')
        $(this).parent().find(".DayOff").remove()
    })
    //------------- Copying Exercises ---------------------//
    $(document).on('click', '.Copy', function (e) {
        e.preventDefault()
        var Week = 2
        var Day = 1
        var CurrentTable =$(this).parent().parent().parent().parent()
        var ToTable = $("#ClientWorkoutPlan21")
        var ExerciseID = []
        var Exercise = []
        var Sets = []
        var SuperSets = []
        var Reps = []
        var RowID = []
        var url = window.location.pathname;
        var SubscriberID = url.substring(url.lastIndexOf('/') + 1);
        var Workout = []
        //------- making function to make sure that all values are given before send to back -----//
        function checkemptyFields(obj) {
            if (obj[0].isRest==1)
                return true
            for (var key in obj) {
                if (obj[key].Sets === null || obj[key].Sets == ""|| obj[key].Sets === undefined)
                    return false;
            } for (var key in obj) {
                if (obj[key].Reps === null || obj[key].Reps == ""|| obj[key].Reps === undefined)
                    return false;
            } for (var key in obj) {
                if (obj[key].Exercise === null || obj[key].Exercise == ""|| obj[key].Exercise === undefined)
                    return false;
            }
            return true;
        }
        //----------- adding values to Workout with Day rest info ---------///
        if ($(this).parent().parent().find('.WorkoutinfoBox').attr('data-Rest') == 1) {
            CurrentTable.find('input[id=ExerciseID]').each(function (index, tr) {
                ExerciseID.push(tr.value)
            }).get();
            Workout.push({
                // dlw2ty ana b loop 3la el rows f lma bktb $("td[id='Exercise']") bygbly kol el td el id bta3ha =exercise
                // f ana ba5od el forsa en ana m3aya el index el row hatkon hya hya index el table cells fl el row
                // f 34an kda bktb $("td[id='Exercise']")[index]
                Week: Week,
                Day: Day,
                ExerciseID: ExerciseID[0],
                isRest: 1
            })
        }else {
            //----------- adding values to Workout with Exercises info ---------///

            CurrentTable.find("tr").each(function (index, tr) {
                $(this).attr("data-RowID",index)
            })
            CurrentTable.find("tr[data-SuperSet='1'] ").each(function (index, tr) {
                $(this).children("#Exercise").each(function (index, tr) {
                    if (tr.innerHTML==''){
                        $(this).css('border-bottom','2px solid red')
                        Exercise.push(tr.innerHTML)

                    }else {
                        $(this).css('border-bottom','none')

                        Exercise.push(tr.innerHTML)
                    }
                })
                $(this).children("#Sets").each(function (index, tr) {
                    if (tr.innerHTML==''){
                        $(this).css('border-bottom','2px solid red')
                        Sets.push(tr.innerHTML)

                    }else {
                        $(this).css('border-bottom','none')

                        Sets.push(tr.innerHTML)
                    }
                })
                $(this).children("#Reps").each(function (index, tr) {
                    if (tr.innerHTML==''){
                        $(this).css('border-bottom','2px solid red')
                        Reps.push(tr.innerHTML)

                    }else {
                        $(this).css('border-bottom','none')

                        Reps.push(tr.innerHTML)
                    }
                })
                $(this).children("#ExerciseID").each(function (index, tr) {

                    ExerciseID.push(tr.value)
                })
                RowID.push($(this).attr("data-RowID"))
                SuperSets.push(1)

            })
            CurrentTable.find("tr[data-SuperSet='0'] ").each(function (index, tr) {
                $(this).children("#Exercise").each(function (index, tr) {
                    if (tr.innerHTML==''){
                        $(this).css('border-bottom','2px solid red')
                        Exercise.push(tr.innerHTML)

                    }else {
                        $(this).css('border-bottom','none')
                        Exercise.push(tr.innerHTML)
                    }
                })
                $(this).children("#Sets").each(function (index, tr) {
                    if (tr.innerHTML==''){
                        $(this).css('border-bottom','2px solid red')
                        Sets.push(tr.innerHTML)

                    }else {
                        $(this).css('border-bottom','none')

                        Sets.push(tr.innerHTML)
                    }
                })
                $(this).children("#Reps").each(function (index, tr) {
                    if (tr.innerHTML==''){
                        $(this).css('border-bottom','2px solid red')
                        Reps.push(tr.innerHTML)

                    }else {
                        $(this).css('border-bottom','none')

                        Reps.push(tr.innerHTML)
                    }
                })
                $(this).children("#ExerciseID").each(function (index, tr) {

                    ExerciseID.push(tr.value)
                })
                RowID.push($(this).attr("data-RowID"))
                SuperSets.push(0)

            })



            for (var i = 0; i < Exercise.length; i++) {
                Workout.push({
                    // dlw2ty ana b loop 3la el rows f lma bktb $("td[id='Exercise']") bygbly kol el td el id bta3ha =exercise
                    // f ana ba5od el forsa en ana m3aya el index el row hatkon hya hya index el table cells fl el row
                    // f 34an kda bktb $("td[id='Exercise']")[index]
                    Week: Week,
                    Day: Day,
                    ExerciseID: ExerciseID[i],
                    Exercise: Exercise[i],
                    SuperSets:SuperSets[i],
                    Sets: Sets[i],
                    RowID: RowID[i],
                    Reps: Reps[i],
                    isRest: 0
                })

            }
        }



        if (Workout != '' &&checkemptyFields(Workout)) {
            //Insert data function
            function Insert_Data() {
                var table = CurrentTable.find("table").find("tbody").find("tr")
                var rows = ToTable.find('tbody')
                Workout.sort(function(a, b) {
                    return parseFloat(a.RowID) - parseFloat(b.RowID);
                });

                for (let i = 0; i < table.length; i++) {
                    var randomnumber = Math.floor(Math.random() * (100000000));

                    if (Workout[i].RowID==i+1){

                    if (Workout[i].SuperSets==0) {
                        rows.append(' <tr data-SuperSet="0" class="table-row">\n' +
                            '          <td data-gramm_editor="false" class="table-cell  Cell-Style" id="Exercise">' + Workout[i].Exercise + '</td>\n' +
                            '          <td data-gramm_editor="false" class="table-cell  Cell-Style" id="Sets">' + Workout[i].Sets + '</td>\n' +
                            '          <td data-gramm_editor="false" class="table-cell  Cell-Style" id="Reps">' + Workout[i].Reps + '</td>\n' +
                            '          <td data-gramm_editor="false" class="Remove p-0"><i class="fa fa-times text-danger pointer"></i></td>\n' +
                            '          <input type="hidden" id="ExerciseID" value="' + randomnumber + '">\n' +
                            '        </tr>')
                    }else {

                        rows.append('<tr data-SuperSet="1" class="table-row ">\n' +
                            '\n' +
                            '    <td data-gramm_editor="false" class="table-cell Cell-Style" id="Exercise">' + Workout[i].Exercise + '</td>\n' +
                            '    <td data-gramm_editor="false" class="table-cell Cell-Style " rowspan="2" id="Sets">' + Workout[i].Sets + '</td>\n' +
                            '\n' +
                            '    <td data-gramm_editor="false" class="table-cell Cell-Style" id="Reps">' + Workout[i].Reps + '</td>\n' +
                            '    <td data-gramm_editor="false" rowspan="2" class="Remove-SuperSet p-0"><i class="fa fa-times text-danger pointer"></i></td>\n' +
                            '            \'          <input type="hidden" id="ExerciseID" value="'+randomnumber+'">\\n\' +\n' +
                            '\n' +
                            '</tr>\n' +
                            '                       <tr data-SuperSet="1" class="table-row">\n' +
                            '    <td data-gramm_editor="false" class="table-cell Cell-Style d-none " rowspan="2" id="Sets">none</td>\n' +

                            '                           <td data-gramm_editor="false" class="table-cell Cell-Style" id="Exercise">' + Workout[i+1].Exercise + '</td>\n' +
                            '                           <td data-gramm_editor="false" class="table-cell Cell-Style" id="Reps">' + Workout[i+1].Reps + '</td>\n' +
                            '            \'          <input type="hidden" id="ExerciseID" value="'+randomnumber+"S"+'">\\n\' +\n' +
                            '\n' +
                            '                       </tr>')
                        i++
                    }
                }
                }
            }
            Insert_Data()
            ToTable.find(".WorkoutPlanSave").click()
        }

    })

})