$(document).ready(function () {
  var colors = ['#fc651a', '#04a5e0', '#cb3523', '#fc651a', '#fec628'];
  $("b").each(function (index, el) {
    var pos = Math.random() * 100 + "% " + Math.random() * 100 + "%";
    $(el).css("background-position", pos).css('color', colors[index]);
  });
});
var goto = function (sectionName) {
  $('header,.about,.careers').hide();
  if (sectionName) {
    $('.' + sectionName).show();
  } else
  {
    $('header').show();
  }
};
