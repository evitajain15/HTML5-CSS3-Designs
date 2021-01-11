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

    function flip() {
    $('.card').toggleClass('flipped');
    $('.hide_it').toggleClass('go_back');
   }

   $(function(){
          $('.switch span').click(function(){
              $('.switch span.active').removeClass('active');
              $(this).addClass('active');
          });
      });