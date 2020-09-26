$(function addBlock() {
  if ($(window).width() < 1000) {
    $(".gradient-button").addClass('button-block')
    $(".button-fsm").removeClass('button-block');

  } else {
    $(".button-fsm").addClass('button-block')
    $(".gradient-button").removeClass('button-block');

  }
  window.addEventListener("resize", addBlock);
});