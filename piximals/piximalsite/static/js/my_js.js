// JavaScript to Expand and Collapse Element, credit to tutorialrepublic.com
function toggle()  {
  $("#navbarSupportedContent").setAttribute('onclick','untoggle()')

  $(".navbar").classList.remove('shrink');
  $(".navbar").classList.add('expand');
}

function untoggle()  {
  $("#navbarSupportedContent").setAttribute('onclick','toggle()')

  $(".navbar").classList.remove('expand');
  $(".navbar").classList.add('shrink');
}
