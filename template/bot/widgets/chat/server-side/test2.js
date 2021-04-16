$(document).ready(() => {
  const chatlog = $(".chatMessages");

  //testing

  function refreshChatLog() {
    chatlog.append(
      `<li class="mod-banner animate__animated animate__slideInRight">
        <p><span class="trovoName-mod">IAmNotLeo</span> :
        <span id="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu venenatis turpis,
        in efficitur lorem. Ut interdum eu lectus varius scelerisque. Maecenas turpis enim,
        gravida vehicula mauris vel, porttitor venenatis libero. Vivamus sapien dui, semper
        dignissim neque sed, consequat maximus fis.
        </span>
        </p>
        </li>`
    );

    setTimeout(refreshChatLog, 2500);
  }

  refreshChatLog();
});
