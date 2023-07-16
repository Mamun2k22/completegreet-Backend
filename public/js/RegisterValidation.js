$(document).ready(function () {
  const API_URL = "https://phpstack-618117-3493389.cloudwaysapps.com";
  // const API_URL = "http://127.0.0.1:5000";
  // const API_URL = "https://complete-greet.onrender.com";
  //------------- Send Password reset ----------//
  $(document).on("input", "#Password", function () {
    if ($("#Password").val().length < 8 && $("#Password").val().length > 0) {
      $("#Invalid-Password").css("display", "block");
      $("#Invalid-Password").parent().addClass("text-invalid");
      $("#Invalid-Password").html("password should be at least 8 chars");
    } else {
      $("#Invalid-Password").css("display", "none");
      $("#Invalid-Password").parent().removeClass("text-invalid");
      $("#Invalid-Password").html("");
    }
  });
  //-------------------- Ajax Check Errors and Coach Register -------------------//
  $("#Coach-Register").on("click", function (e) {
    e.preventDefault();
    var firstName, lastName, email, password, Cpassword, phoneno, Birth, gender;
    firstName = $("#firstName").val();
    lastName = $("#lastName").val();
    email = $("#Email").val();
    password = $("#Password").val();
    phoneno = $("#Phone").val();
    Birth = $("#Birth").val();
    gender = $('input[name="gender"]:checked').val();
    console.log(Birth);
    console.log(phoneno);
    $.ajax({
      type: "POST",
      url: "/Register/Coach",
      data: {
        firstName,
        lastName,
        email,
        password,
        phoneno,
        Birth,
        gender,
      },

      success: function (data, status) {
        if (data.Status == "Fail") {
          $(".Register-Err").remove();
          $(".Reg-err").append(
            '<div class="toast Register-Err fade show alert p-0 " role="alert" data-autohide="false" aria-live="assertive" aria-atomic="true">\n' +
              '    <div class="toast-header">\n' +
              '        <i class="fa fa-2x fa-exclamation-circle mr-2 text-danger"></i>\n' +
              '        <strong class="mr-auto">CompleteGreet</strong>\n' +
              '        <button type="button" class="ml-2 mb-1 close" data-dismiss="alert" aria-label="Close">\n' +
              '            <span aria-hidden="true">&times;</span>\n' +
              "        </button>\n" +
              "    </div>\n" +
              '    <div class="toast-body">\n' +
              "     " +
              data.err +
              "            \n" +
              "    </div>\n" +
              "</div>"
          );
          if (data.Field == "Empty") {
            if (firstName == "") {
              $("#firstName").parent().addClass("text-invalid");
              $("#Invalid-firstName").css("display", "block");
              $("#Invalid-firstName").parent().addClass("text-invalid");
            } else {
              $("#firstName").parent().removeClass("text-invalid");
              $("#Invalid-firstName").css("display", "none");
              $("#Invalid-firstName").parent().removeClass("text-invalid");
            }
            if (lastName == "") {
              $("#lastName").parent().addClass("text-invalid");
              $("#Invalid-lastName").css("display", "block");
              $("#Invalid-lastName").parent().addClass("text-invalid");
            } else {
              $("#lastName").parent().removeClass("text-invalid");
              $("#Invalid-lastName").css("display", "none");
              $("#Invalid-lastName").parent().removeClass("text-invalid");
            }
            if (email == "") {
              $("#Email").parent().addClass("text-invalid");
              $("#Invalid-Email").css("display", "block");
              $("#Invalid-Email").parent().addClass("text-invalid");
            } else {
              $("#Email").parent().removeClass("text-invalid");
              $("#Invalid-Email").css("display", "none");
              $("#Invalid-Email").parent().removeClass("text-invalid");
            }
            if (password == "") {
              $("#Password").parent().addClass("text-invalid");
              $("#Invalid-Password").css("display", "block");
              $("#Invalid-Password").parent().addClass("text-invalid");
              $("#Invalid-Password").html(
                '<i class="fa fa-exclamation-triangle text-danger"></i> please enter a password'
              );
            } else {
              $("#Password").parent().removeClass("text-invalid");
              $("#Invalid-Password").css("display", "none");
              $("#Invalid-Password").parent().removeClass("text-invalid");
            }
            if (phoneno == "") {
              $("#Phone").parent().addClass("text-invalid");
              $("#Invalid-Phone").css("display", "block");
              $("#Invalid-Phone").parent().addClass("text-invalid");
            } else {
              $("#Phone").parent().removeClass("text-invalid");
              $("#Invalid-Phone").css("display", "none");
              $("#Invalid-Phone").parent().removeClass("text-invalid");
            }
            if (Birth == "") {
              $("#Birth").parent().addClass("text-invalid");
              $("#Invalid-Birth").css("display", "block");
              $("#Invalid-Birth").parent().addClass("text-invalid");
            } else {
              $("#Birth").parent().removeClass("text-invalid");
              $("#Invalid-Birth").css("display", "none");
              $("#Invalid-Birth").parent().removeClass("text-invalid");
            }
          } else if (data.Field == "Password") {
            $("#Password").parent().addClass("text-invalid");
            $("#Invalid-Password").css("display", "block");
            $("#Invalid-Password").parent().addClass("text-invalid");
            $("#Invalid-Password").html(
              '<i class="fa fa-exclamation-triangle text-danger"></i> password should be at least 8 chars'
            );
          } else {
            $(".Invalid").parent().removeClass("text-invalid");
            $(".Invalid").css("display", "none");
          }
        } else if (data.Status == "Success") {
          window.location.href = `${API_URL}/login`;
        } else {
          $("#Coach-Reg-Form").submit();
        }
      },
      error: function (data) {
        alert("Server Error");
      },
    });
  });

  //-------------------- Ajax Check Errors and User Register -------------------//
  $("#User-Register").on("click", function (e) {
    e.preventDefault();
    var firstName, lastName, email, password, Cpassword, phoneno, Birth, gender;
    firstName = $("#firstName").val();
    lastName = $("#lastName").val();
    email = $("#Email").val();
    password = $("#Password").val();
    Birth = $("#Birth").val();
    gender = $('input[name="gender"]:checked').val();
    console.log(Birth);
    console.log(phoneno);
    $.ajax({
      type: "POST",
      url: "/Register/User",
      data: {
        firstName,
        lastName,
        email,
        password,
        phoneno,
        Birth,
        gender,
      },

      success: function (data, status) {
        if (data.Status == "Fail") {
          $(".Register-Err").remove();
          $(".Reg-err").append(
            '<div class="toast Register-Err fade show alert p-0 " role="alert" data-autohide="false" aria-live="assertive" aria-atomic="true">\n' +
              '    <div class="toast-header">\n' +
              '        <i class="fa fa-2x fa-exclamation-circle mr-2 text-danger"></i>\n' +
              '        <strong class="mr-auto">CompleteGreet</strong>\n' +
              '        <button type="button" class="ml-2 mb-1 close" data-dismiss="alert" aria-label="Close">\n' +
              '            <span aria-hidden="true">&times;</span>\n' +
              "        </button>\n" +
              "    </div>\n" +
              '    <div class="toast-body">\n' +
              "     " +
              data.err +
              "            \n" +
              "    </div>\n" +
              "</div>"
          );
          if (data.Field == "Empty") {
            if (firstName == "") {
              $("#firstName").parent().addClass("text-invalid");
              $("#Invalid-firstName").css("display", "block");
              $("#Invalid-firstName").parent().addClass("text-invalid");
            } else {
              $("#firstName").parent().removeClass("text-invalid");
              $("#Invalid-firstName").css("display", "none");
              $("#Invalid-firstName").parent().removeClass("text-invalid");
            }
            if (lastName == "") {
              $("#lastName").parent().addClass("text-invalid");
              $("#Invalid-lastName").css("display", "block");
              $("#Invalid-lastName").parent().addClass("text-invalid");
            } else {
              $("#lastName").parent().removeClass("text-invalid");
              $("#Invalid-lastName").css("display", "none");
              $("#Invalid-lastName").parent().removeClass("text-invalid");
            }
            if (email == "") {
              $("#Email").parent().addClass("text-invalid");
              $("#Invalid-Email").css("display", "block");
              $("#Invalid-Email").parent().addClass("text-invalid");
            } else {
              $("#Email").parent().removeClass("text-invalid");
              $("#Invalid-Email").css("display", "none");
              $("#Invalid-Email").parent().removeClass("text-invalid");
            }
            if (password == "") {
              $("#Password").parent().addClass("text-invalid");
              $("#Invalid-Password").css("display", "block");
              $("#Invalid-Password").parent().addClass("text-invalid");
              $("#Invalid-Password").html(
                '<i class="fa fa-exclamation-triangle text-danger"></i> please enter a password'
              );
            } else {
              $("#Password").parent().removeClass("text-invalid");
              $("#Invalid-Password").css("display", "none");
              $("#Invalid-Password").parent().removeClass("text-invalid");
            }

            if (Birth == "") {
              $("#Birth").parent().addClass("text-invalid");
              $("#Invalid-Birth").css("display", "block");
              $("#Invalid-Birth").parent().addClass("text-invalid");
            } else {
              $("#Birth").parent().removeClass("text-invalid");
              $("#Invalid-Birth").css("display", "none");
              $("#Invalid-Birth").parent().removeClass("text-invalid");
            }
          } else if (data.Field == "Password") {
            $("#Password").parent().addClass("text-invalid");
            $("#Invalid-Password").css("display", "block");
            $("#Invalid-Password").parent().addClass("text-invalid");
            $("#Invalid-Password").html(
              '<i class="fa fa-exclamation-triangle text-danger"></i> password should be at least 8 chars'
            );
          } else {
            $(".Invalid").parent().removeClass("text-invalid");
            $(".Invalid").css("display", "none");
          }
          $([document.documentElement, document.body]).animate(
            {
              scrollTop: $(".Register-Err").offset().top,
            },
            300
          );
        } else if (data.Status == "Success") {
          window.location.href = `${API_URL}/login`;
        } else {
          $("#User-Reg-Form").submit();
        }
      },
      error: function (data) {
        alert("Server Error");
      },
    });
  });
});
