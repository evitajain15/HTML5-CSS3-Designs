
$(function(){
            $("#nav").load("header.html");
            $("#home").load("home.html");
            $("#prt-test").load("port-test.html");
            $("#footer-contact").load("footer.html");
            }); 


window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
      } else {
        document.getElementById("myBtn").style.display = "none";
      }
    }

    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

$('.owl-carousel').owlCarousel({
    margin:10,
    loop:true,
    autoWidth:true,
    items:4
});
$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});