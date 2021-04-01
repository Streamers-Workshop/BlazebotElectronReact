const $ = require("jquery");
const fs = require("fs");
const path = require("path");
const Swal = require("sweetalert2");
const fileDownload = require("js-file-download");
const settings = require("./chatlog.json");

//(10/03/2020 19:35)[ Test1 ]: Etiam sem massa, faucibus vitae justo eget, dapibus iaculis ipsum. Donec cursus massa

$(document).ready(() => {
  const toggleSwitch = $("#toggleActivate"),
    chatlog = $(".chatMessages"),
    chatHeight = chatlog.innerHeight();
  var latestChat = true;

  toggleSwitch.prop("checked", settings.active);
  chatlog.scroll();

  function refreshChatLog() {
    $.ajax({
      url: "../../../data/chatlog/chatlogData.json",
      dataType: "json",
      success: (text) => {
        chatlog.empty();
        $.each(text, (value, msg) => {
          chatlog.append(`
          <div>
          <span class="datetime">(${msg.data})</span>
          <br /><span class="username">[ ${msg.user} ] :</span>
          <li class="result">
          ${msg.message}
          </li>
          </div>
          `);
        });

        if (latestChat) {
          chatlog.stop().animate(
            {
              scrollTop: chatlog[0].scrollHeight - chatHeight,
            },
            600
          );
        }

        setTimeout(refreshChatLog, 3000);
      },
    });
  }

  function setToBottom() {
    latestChat = chatlog[0].scrollTop + chatHeight >= chatlog[0].scrollHeight;
  }

  chatlog.scrollTop(chatlog[0].scrollHeight).on("scroll", setToBottom);

  refreshChatLog();

  /*$("#btnDownload").click(() => {
    fileDownload(date, "chatlog.txt");
  });*/

  toggleSwitch.change((select) => {
    var toggleChange = $(select.currentTarget).prop("checked");
    switch (toggleChange) {
      case true:
        try {
          settings.active = true;
          var trueValue = JSON.stringify(settings, null, 2);
          fs.writeFileSync(path.join(__dirname, "./chatlog.json"), trueValue);
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Please Try Again Later!",
          });
        }
        break;

      case false:
        try {
          settings.active = false;
          var falseValue = JSON.stringify(settings, null, 2);
          fs.writeFileSync(path.join(__dirname, "./chatlog.json"), falseValue);
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Please Try Again Later!",
          });
        }
        break;
    }
  });
});
