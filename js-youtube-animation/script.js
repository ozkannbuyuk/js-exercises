$(document).ready(function () {
  $(".subscribe-btn").on("click", function () {
    $(".channel-actions > div").hide();
    $(".channel-actions > div:nth-child(2)").show();
  });
  $(".bell-btn").on("click", function () {
    $(".channel-actions > div").hide();
    $(".channel-actions > div:nth-child(3)").show();
  });

  setTimeout(() => $(".youtube-subscribe").addClass("active"), 1000);
  setTimeout(() => $(".subscribe-btn").trigger("click"), 2500);
  setTimeout(() => $(".bell-btn").trigger("click"), 3000);
  setTimeout(() => $(".youtube-subscribe").removeClass("active"), 5000);
});
