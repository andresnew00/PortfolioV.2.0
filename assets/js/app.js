// $(function() {
                
//     var welcomeSection = $('.welcome-section'),
//         enterButton = welcomeSection.find('.enter-button');
    
        
//     setTimeout(function() {
//         welcomeSection.removeClass('content-hidden');
//     }, 500);
    
//     enterButton.on('click', function(e) {
//         e.preventDefault();
//         welcomeSection.addClass('content-hidden').fadeOut();
//     });
    
    
// });
//     // layout

//     (function (window, document) {

//         var layout   = document.getElementById('layout'),
//             menu     = document.getElementById('menu'),
//             menuLink = document.getElementById('menuLink'),
//             content  = document.getElementById('main');
    
//         function toggleClass(element, className) {
//             var classes = element.className.split(/\s+/),
//                 length = classes.length,
//                 i = 0;
    
//             for(; i < length; i++) {
//               if (classes[i] === className) {
//                 classes.splice(i, 1);
//                 break;
//               }
//             }
//             // The className is not found
//             if (length === classes.length) {
//                 classes.push(className);
//             }
    
//             element.className = classes.join(' ');
//         }
    
//         function toggleAll(e) {
//             var active = 'active';
    
//             e.preventDefault();
//             toggleClass(layout, active);
//             toggleClass(menu, active);
//             toggleClass(menuLink, active);
//         }
    
//         menuLink.onclick = function (e) {
//             toggleAll(e);
//             console.log("hello");
//         };
    
//         content.onclick = function(e) {
//             if (menu.className.indexOf('active') !== -1) {
//                 toggleAll(e);
//             }
//         };
    
//     }(this, this.document));

    $('#check').on("click", function(){
        if($(this).is(":checked")) {
            console.log("Clicked slider!")
            $('.full-body').addClass('light');
        } else {
          $('.full-body').removeClass('light');
        }
    });