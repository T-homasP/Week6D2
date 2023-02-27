let containerz = $('<div class="container">' +
                    '<div class="box"></div>' +
                    '<div class="box"></div>' +
                    '<div class="box"></div>' +
                    '<div class="box"></div>' +
                  '</div>');

for (let i = 0; i < 4; i++) {
  $('body').append(containerz.clone());
}
$('body').children().children().click(function(){ 
  $(this).toggleClass('boxChange');
  
});;
