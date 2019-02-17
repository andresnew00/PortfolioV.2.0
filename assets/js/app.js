
    $('#check').on("click", function(){
        if($(this).is(":checked")) {
            $('.full-body').addClass('light');
            $('.navbar').removeClass('bg-dark');
            $('.navbar').addClass('nav-light');
            $('#about').addClass('about-light');
            $('#contact-box').addClass('about-light');
            $('#portfolio-class').addClass('about-light');
        } else {
          $('.full-body').removeClass('light');
          $('.navbar').addClass('bg-dark');
          $('.navbar').removeClass('nav-light');
          $('#about').removeClass('about-light');
          $('#contact-box').removeClass('about-light');
          $('#portfolio-class').removeClass('about-light');
        }
    });