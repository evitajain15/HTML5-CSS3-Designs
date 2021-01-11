		$(function(){
            $("#nav").load("header.html");
            $("#service").load("service.html");
            $("#work").load("work.html");
            $("#pricing").load("pricing.html");
            $("#update").load("update.html");
            $("#pro-service").load("pro-service.html");
            $("#footer").load("footer.html");
            }); 

            $(function(){
                  $('.navbar-nav li a').click(function(){
                      $('.navbar-nav li a.active').removeClass('active');
                      $(this).addClass('active');
                  });
              });
              
