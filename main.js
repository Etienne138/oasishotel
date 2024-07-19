function setActiveTab(event, tabId) {
	event.preventDefault();
	$('.nav-link').removeClass('active');
	$(`#${tabId}`).addClass('active');
}
function swapOriginAndDestination()
{
const originTextbox = document.getElementById("origin-field");
const destinationTextbox = document.getElementById("destination-field");
const swapButton = document.querySelector(".swap-btn");

  const temp = originTextbox.value;
  originTextbox.value = destinationTextbox.value;
  destinationTextbox.value = temp;
}
  $('.navbar-toggler').click(function() {
    if ($('.navbar-collapse').is(':visible')) {
      $('#toggle-icon').removeClass('bi-x').addClass('bi-list');
    } else {
      $('#toggle-icon').removeClass('bi-list').addClass('bi-x');
    }
  });