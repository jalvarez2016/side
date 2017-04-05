/* global $ */

function showBoard() {

    $('#board').show();
}

function jump() {
    
}

$(document).ready(function() {
    
    
   $('#start').click(function() {
      showBoard();
   });
   
   $('#jump').mousedown(function() {
      $('#mario').css('bottom', '175px');
      $('#coin').hide();
   });
   
   var count = 1;
   
    $('#jump').mouseup(function() {
      $('#mario').css('bottom', '60px');
      $('#coin').show();
      $('#count').text(count++);
   });
   
   $("body").keydown(function(e) {
      if(e.keyCode == 37) { // left
      
      }
      else if(e.keyCode == 39) { // right
        
      } else if(e.keyCode == 49) {
          jump();
      }
   });
     
    $("body").keydown(function(e) {
      if (event.which === 32 || event.which === 87) {
        $('#mario').css('bottom', '175px');
        $('#coin').hide();
      }
    });
    $("body").keyup(function(e) {
      if (event.which === 32 || event.which === 83 || event.which === 87) {
        $('#mario').css('bottom', '60px');
        $('#coin').show(); 
      }
    });
    
    
    
    
    $("body").keydown(function(event) {
    //moves left
    if (event.which === 65) {
        
        $("#mario").css("left", $("#mario").offset().left - 50);
    
    } else if (event.which === 68) {
       
       $("#mario").css("left", $("#mario").offset().left + 10);
    } 
    
    });
    
    function checkCollision() {
    var blueLeft = $("#mario").offset().left;
    var redLeft = $("#enemy").offset().left;
    var blueRight = blueLeft + $("#mario").width();
    var redRight = redLeft + $("#enemy").width();
    var blueUp = $("#mario").offset().top;
    var redDown = $("#enemy").offset().top;
    var blueDown = blueUp + $("#mario").height();
    var redUp = redDown + $("#enemy").height();
    if(blueDown > redDown && blueUp < redUp && blueRight > redLeft && blueLeft < redRight) {
        alert("Touching");
        $("#blue").hide();
    }

}



    
});