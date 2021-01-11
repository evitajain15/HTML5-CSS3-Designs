		$(function(){
            $("#nav").load("nav.html");
            $("#breadcrumb").load("breadcrumb.html");
            $("#width").load("width.html");
            $("#footer").load("footer.html");
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
    