const $headerElm = $('header');
const $divRedHeader = $('div#red_header');

$divRedHeader.on('click', function () {
  $headerElm.css('color', '#FF0000');
});
