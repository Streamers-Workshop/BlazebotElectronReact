$(document).ready(() => {
  const chatlog = $(".chatMessages"),
    chatHeight = chatlog.innerHeight();

  //testing

  function refreshChatLog() {
    chatlog.append(`<li class="trovo">
        <p>
            <img src="../image/leo.webp" style="border-radius: 50%; margin-bottom: 4px;" width="30" height="30">
            <img src="../image/creator.png" style="margin-bottom: 2px;" width="18" height="18">
            <img src="../image/badge.png" style="margin-bottom: 2px;" width="18" height="18">

            <span class="trovo-badge">IAmNotLeo</span>
            :
            <span id="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu venenatis turpis,
                in efficitur lorem. Ut interdum eu lectus varius scelerisque. Maecenas turpis enim,
                gravida vehicula mauris vel, porttitor venenatis libero. Vivamus sapien dui, semper
                dignissim neque sed, consequat maximus fis.
            </span>
        </p>
    </li>`);
    chatlog.animate(
      {
        scrollTop: chatlog[0].scrollHeight - chatHeight,
      },
      600
    );
    setTimeout(refreshChatLog, 1000);
  }

  refreshChatLog();
});
