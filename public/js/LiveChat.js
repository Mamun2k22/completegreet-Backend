$(document).ready(function () {
  //------------------ Functions to add New Messages -------------//
  function playSound(url) {
    alert("yess olay");
    const audio = new Audio(NotificationSound);
    audio.play();
  }
  function notifyMe() {
    if (!("Notification" in window)) {
      // Check if the browser supports notifications
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      // Check whether notification permissions have already been granted;
      // if so, create a notification
      const img = "https://completegreet.com/images/CompleteGreet/FavIcon.png";
      const text = `You have a new message.`;
      const notification = new Notification("Complete Greet", {
        body: text,
        icon: img,
      });
      notification.onclick = (event) => {
        event.preventDefault(); // prevent the browser from focusing the Notification's tab
        window.open("https://completegreet.com/users/livechat", "_blank");
      };
      // const notification = new Notification("Hi there!");
      // …
    } else if (Notification.permission !== "denied") {
      // We need to ask the user for permission
      Notification.requestPermission().then((permission) => {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          const img =
            "https://completegreet.com/images/CompleteGreet/FavIcon.png";
          const text = `You have a new message.`;
          const notification = new Notification("Complete Greet", {
            body: text,
            icon: img,
          });
          // …
          notification.onclick = (event) => {
            event.preventDefault(); // prevent the browser from focusing the Notification's tab
            window.open("https://completegreet.com/users/livechat", "_blank");
          };
        }
      });
    }

    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them anymore.
  }
  function Leftmessage(message, date, chatcode, ImageURL) {
    var today = new Date(date);
    today.setHours(today.getHours() + 1);
    date = today.toISOString();
    $('*[data-chatcode="' + chatcode + '"]')
      .children(".Messages-Container")
      .append(
        ' <div class="Received-Message-Container">\n' +
          ' <div class="d-flex flex-row">\n' +
          '                                <div class="Received-Message mb-3 position-relative">\n' +
          "                                    " +
          message +
          "\n" +
          "                                </div>\n" +
          "                            </div>\n" +
          '                                <div class="Message-Date">' +
          date.replace("T", " ").slice(0, -8) +
          "</div>\n" +
          "\n" +
          "                            </div>"
      );
  }
  function Rightmessage(message, date, chatcode, ImageURL) {
    var today = new Date(date);
    today.setHours(today.getHours() + 1);
    date = today.toISOString();
    $('*[data-chatcode="' + chatcode + '"]')
      .children(".Messages-Container")
      .append(
        '<div class="Sent-Message-Container">\n' +
          ' <div class="d-flex flex-row">\n' +
          '                                <div class="Sent-Message text-break mb-3">\n' +
          "                                    " +
          message +
          "\n" +
          "                                </div>\n" +
          '                                <img src="' +
          ImageURL +
          '" class="rounded-circle" alt="">\n' +
          "                            </div>\n" +
          '                                <div class="Message-Date ml-auto">' +
          date.replace("T", " ").slice(0, -8) +
          "</div>\n" +
          "                            </div>"
      );
  }
  //-------- Initializing Socket ------------------//
  var socket = io();
  const API_URL = "https://phpstack-618117-3493389.cloudwaysapps.com";
  // const API_URL = "http://127.0.0.1:5000";
  // const API_URL = "https://complete-greet.onrender.com";

  Chats.forEach(function (chat) {
    socket.on(chat.ChatCode, (msg, RelatedChat, ImageURL) => {
      $('*[data-chatcookie="' + RelatedChat.Chat_Cookie_id + '"]').insertBefore(
        $(".Chat-Container").first()
      );

      if (msg.SenderID == UserID) {
        Rightmessage(msg.content, msg.createdAt, chat.ChatCode, ImageURL);
      } else {
        $('*[data-chatcookie="' + RelatedChat.Chat_Cookie_id + '"]')
          .find(".Notification-msg")
          .removeClass("d-none");
        playSound(`${API_URL}/images/NotificationSoundFile-1672841469730.wav`);
        $(".button__badge").removeClass("d-none");
        if (UserPushNotification == "true") {
          notifyMe();
        }
        Leftmessage(msg.content, msg.createdAt, chat.ChatCode, ImageURL);
      }
      $(".Messages-Container").animate(
        { scrollTop: $(".Messages-Container")[0].scrollHeight },
        0
      );
      $(".modal-msg-container").animate(
        { scrollTop: $(".modal-msg-container")[0].scrollHeight },
        0
      );
    });
  });
  socket.on("new chat", (chat, msg) => {
    if (chat.HosterID == UserID) {
      playSound(`${API_URL}/images/NotificationSoundFile-1672841469730.wav`);

      $(".empty-msg").remove();
      var Chat_Container =
        ' <div data-bubbleid="' +
        chat.BubbleID +
        '" data-chatcookie="' +
        chat.Chat_Cookie_id +
        '" class="Chat-Container mb-3 d-flex align-items-center p-3">\n' +
        '                            <div class="chat-avatar rounded-circle mr-3">\n' +
        '                                <img class="" src="/images/CompleteGreet/Avatar.jpg" alt="Avatar">\n' +
        "                            </div>\n" +
        '                            <div  class="Chat-Username text-truncate">\n' +
        "                                " +
        chat.ClientEmail +
        "\n" +
        "                            </div>\n" +
        '                            <div class="Notification-msg ml-2 "></div>\n' +
        "                        </div>";
      if ($(".Chat-Container").length) {
        $(Chat_Container).insertBefore($(".Chat-Container").first());
      } else {
        $(".Chats-Container").append(Chat_Container);
      }
      socket.on(chat.ChatCode, (msg, RelatedChat, ImageURL) => {
        $(
          '*[data-chatcookie="' + RelatedChat.Chat_Cookie_id + '"]'
        ).insertBefore($(".Chat-Container").first());

        if (msg.SenderID == UserID) {
          Rightmessage(msg.content, msg.createdAt, chat.ChatCode, ImageURL);
        } else {
          $('*[data-chatcookie="' + RelatedChat.Chat_Cookie_id + '"]')
            .find(".Notification-msg")
            .removeClass("d-none");

          playSound(
            `${API_URL}/images/NotificationSoundFile-1672841469730.wav`
          );
          $(".button__badge").removeClass("d-none");
          if (UserPushNotification == "true") {
            notifyMe();
          }
          Leftmessage(msg.content, msg.createdAt, chat.ChatCode, ImageURL);
        }
        $(".Messages-Container").animate(
          { scrollTop: $(".Messages-Container")[0].scrollHeight },
          0
        );
        $(".modal-msg-container").animate(
          { scrollTop: $(".modal-msg-container")[0].scrollHeight },
          0
        );
      });
      socket.emit("new User chat", msg);
    }
  });
  $(document).on("click", ".Chat-Container", function (e) {
    e.preventDefault();
    if (window.matchMedia("(max-width: 768px)").matches) {
      $("#Chat-Box").modal("show");
    }
    $(this).find(".Notification-msg").addClass("d-none");
    $(".button__badge").addClass("d-none");

    var Cookies = $(this).data("chatcookie");
    var BubbleID = $(this).data("bubbleid");
    var CGuser = true;
    $.ajax({
      type: "POST",
      url: "https://completegreet.com/users/GetChatInfo",
      data: { Cookies, BubbleID, CGuser },
      success: function (data, status) {
        if (data.Status == "ChatFound") {
          $(".Messages-Large-Container").removeClass("d-none");
          $(".Messages-Large-Container").addClass("d-flex");
          $(".Messages-Large-Container").html("");
          $(".Messages-Large-Container").attr(
            "data-chatcode",
            data.chat.ChatCode
          );
          $(".Messages-Large-Container").attr(
            "data-bubbleid",
            data.chat.BubbleID
          );
          $(".Messages-Large-Container").attr(
            "data-cookie",
            data.chat.Chat_Cookie_id
          );
          $(".Messages-Large-Container").append(
            ' <div class="Chat-Head-Name d-flex flex-row p-3">\n' +
              '                        <div class="d-flex flex-column">\n' +
              '                            <div class="ClientEmail d-none"> ' +
              data.chat.ClientEmail +
              "</div>\n" +
              '                            <div class="ClientName"> ' +
              data.chat.ClientName +
              "</div>\n" +
              '                            <div style="font-size: 18px"> ' +
              data.chat.ClientCity +
              "/ " +
              data.chat.ClientCountry +
              "</div>\n" +
              "                        </div>\n" +
              '                        <button type="button" class="close ml-auto d-md-none" data-dismiss="modal" aria-label="Close">\n' +
              '                            <span aria-hidden="true"><i class="fa-solid text-white fa-xmark fa-xl"></i></span>\n' +
              "                        </button>\n" +
              "                    </div>\n" +
              '                        <div class="Messages-Container modal-msg-container position-relative px-3 pt-3">\n' +
              "                        </div>\n" +
              '                            <div class="Message-Inputs">\n' +
              '                                <input id="Msg-Input" class="Msg-Input d-block" type="text" placeholder="Type here...">\n' +
              '                                <button disabled class="Send-msg-btn">\n' +
              '                                    <i class="fa-solid fa-paper-plane"></i>\n' +
              "                                </button>\n" +
              "                            </div>\n" +
              '                            <div class="Message-Inputs-Background-box ">\n' +
              "                            </div>\n"
          );

          data.Messages.forEach(function (msg) {
            if (msg.SenderID == UserID) {
              Rightmessage(
                msg.content,
                msg.createdAt,
                data.chat.ChatCode,
                data.ImageURL
              );
            } else {
              Leftmessage(
                msg.content,
                msg.createdAt,
                data.chat.ChatCode,
                data.ImageURL
              );
            }
            $(".Messages-Container").animate(
              { scrollTop: $(".Messages-Container")[0].scrollHeight },
              0
            );
            $(".modal-msg-container").animate(
              { scrollTop: $(".modal-msg-container").prop("scrollHeight") },
              0
            );
          });
          $(".Msg-Input").emojioneArea({
            inline: true,
            search: false,
            tones: false,
          });
          // $(".emojionearea.emojionearea-inline").val('')
          //--------- Displaying client info ----------//
          $(".chat-user-info").parent().removeClass("d-none");
          $(".user-name").text(data.chat.ClientName);
          $(".user-email").text(data.chat.ClientEmail);
          $(".current-page-name").attr("data-chatcode", data.chat.ChatCode);
          $(".current-page-name").text("Offline");
          socket.emit(data.chat.ChatCode + "UL", "L");
          socket.on(data.chat.ChatCode + "UL", async (msg) => {
            if (
              data.chat.ChatCode ==
              $(".current-page-name").attr("data-chatcode")
            ) {
              $(".current-page-name").text(msg);
            } else {
            }
          });
        } else {
        }
      },
      error: function (data) {
        window.location.href = "https://completegreet.com/login";
      },
    });
  });

  //------- CLicking on send message button --------//
  $(document).on("click", ".Send-msg-btn", function (e) {
    e.preventDefault();
    var Message = $(this).siblings(".Msg-Input").val();

    if (Message != "" || !Message.replace(/\s/g, "").length) {
      e.preventDefault();
      var ChatCode = $(this).parent().parent().attr("data-chatcode");
      var BubbleID = $(this).parent().parent().attr("data-bubbleid");
      var Cookie = $(this).parent().parent().attr("data-cookie");
      var Receiver = $(this)
        .parent()
        .siblings(".Chat-Head-Name")
        .find(".ClientEmail")
        .text();
      var info = {
        SenderID: UserID,
        Receiver: Receiver.replace(/\s/g, ""),
        BubbleID: BubbleID,
        UserId: UserID,
        ChatCode: ChatCode,
        text: Message,
      };
      socket.emit(ChatCode.toString(), info);
      $('*[data-chatcookie="' + Cookie + '"]')
        .find(".Notification-msg")
        .addClass("d-none");
      $(".button__badge").addClass("d-none");

      $(".Msg-Input").val("");
      $(".Msg-Input").focus();
      $(".Send-msg-btn").prop("disabled", true);
    } else {
      alert("Chat Box is Empty");
    }
  });

  //------------------ Checking if chat input is empty ------------//
  $(document).on("keyup", ".Msg-Input", function () {
    if ($(this).val().length != 0) {
      $(".Send-msg-btn").prop("disabled", false);
    } else {
      $(".Send-msg-btn").prop("disabled", true);
    }
  });
  $(document).on("input", ".emojionearea-editor", function () {
    var CV = $(".Msg-Input").val();
    $(".Msg-Input").val($(this).text());
    if ($(".Msg-Input").val().length != 0) {
      $(".Send-msg-btn").prop("disabled", false);
    } else {
      $(".Send-msg-btn").prop("disabled", true);
    }
  });
  //------------------ Sending Message on Enter Click ------------//
  $(document).on("keypress", function (e) {
    if (e.which == 13) {
      if (window.matchMedia("(max-width: 768px)").matches) {
        $(".Send-msg-btn")[1].click();
      } else {
        $(".Send-msg-btn").click();
      }
    }
  });
  $(window).resize(function () {
    if (window.matchMedia("(max-width: 768px)").matches) {
    } else {
      $("#Chat-Box").modal("hide");
    }
  });

  //----------- adding Emojis ---------//
  $("#Msg-Input").emojioneArea();

  $(document).on("click", ".emojibtn", function (e, el) {
    var url = $(this).children().attr("src");
    var murl = url.substring(url.lastIndexOf("/") + 1).toLowerCase();
    // var CV=$(".Msg-Input")[1].val()
    // $(".Msg-Input")[1].val(CV+String.fromCodePoint(parseInt(murl.substring(0, murl.length - 4), 16)))
    let input = document.getElementsByClassName("Msg-Input");

    if (window.matchMedia("(max-width: 768px)").matches) {
      var input1 = input[2];
      var CV = $(input1).val();
      $(input1).val(
        CV +
          String.fromCodePoint(parseInt(murl.substring(0, murl.length - 4), 16))
      );
    } else {
      var input1 = input[0];
      var CV = $(input1).val();
      $(input1).val(
        CV +
          String.fromCodePoint(parseInt(murl.substring(0, murl.length - 4), 16))
      );
    }
    var unicode = "&#x" + murl.substring(0, murl.length - 4) + ";";
  });
});
