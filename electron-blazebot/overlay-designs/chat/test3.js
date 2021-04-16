$(document).ready(() => {
  const chatlog = $(".chatMessages");

  //testing

  function refreshChatLog() {
    chatlog.append(
      `<li class="animate__animated animate__backInDown animate__fast">
      <p class="speech">
          <span class="trovo-badge">IAmNotLeo</span>
          <img src="../image/badge.png" style="margin-bottom: 2px;" width="30" height="30">
          :
          <span id="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu venenatis turpis, in
              efficitur lorem. Ut interdum eu lectus varius scelerisque. Maecenas turpis enim, gravida
              vehicula mauris vel, porttitor venenatis libero. Vivamus sapien dui, semper dignissim neque sed,
              consequat maximus fis.
          </span>
      </p>
  </li>`
    );

    setTimeout(refreshChatLog, 2500);
  }

  refreshChatLog();
});
