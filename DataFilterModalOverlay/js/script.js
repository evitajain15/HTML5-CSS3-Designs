$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('2000');
            $('.filter').filter('.'+value).show('2000');
            
        }
    });

});

 $(document).on('click', 'ul li', function(){
            $(this).addClass('active').siblings().removeClass('active');
           // console.log(this);
        })