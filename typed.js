
var typed = new Typed(".typing",
{
  strings: ["you tuber", "developer", "designer", "freelencer"],
  typingSpeeed: 120,
  backSpeed: 120,
  loop: true
});
window.onscroll = function () { myFunction() };
function myFunction() {
var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
var scrolled = (winScroll / height) * 100;
document.getElementById("mybar").style.width = scrolled + "%";
}
