/* global $ */

function showBoard() {

    $('#board').show();
}

var count = 1;

function killed() {
        var marioLeft = $("#mario").offset().left;
        var enemyLeft = $("#enemy").offset().left;
        var marioRight = marioLeft + $("#mario").width();
        var enemyRight = enemyLeft + $("#enemy").width();
        var marioUp = $("#mario").offset().bottom;
        var enemyDown = $("#enemy").offset().bottom;
        var marioDown = marioUp + $("#mario").height();
        var enemyUp = enemyDown + $("#enemy").height();
        if(marioDown > enemyDown && marioUp < enemyUp && marioRight > enemyLeft && marioLeft < enemyRight) {
            alert("Game Over");
            $("#mario").hide();
        }
}

function right(){
    $("#mario").css("left", $("#mario").offset().left + 10);
    killed();  
}

function left(){
    $("#mario").css("left", $("#mario").offset().left - 50);
    killed(); 
}

function jump() {
    $('#mario').css('bottom', '175px');
    $('#count').text(count++);
    $('coin').hide();
    return;
}

function landing() {
    $('#mario').css('bottom', '60px');
    $('coin').show();
    return;
}

$(document).ready(function() {
    
    
   $('#start').click(function() {
       
      showBoard();
      
   });
   
   $('#jump').mousedown(function() {
       
      jump();
      
   });
   
    $('#jump').mouseup(function() {
        
      landing();
      
   });
  
  
   
   $("body").keydown(function(e) {
       
      if(e.keyCode == 37) { // left
      
        left();
        
      }
      else if(e.keyCode == 39) { // right
      
        right();
        
      } else if(e.keyCode == 49) {
          
         jump();
         
      }
      
   });
     
    $("body").keydown(function(e) {
        
      if (event.which === 32 || event.which === 87 || event.which === 38) {
          
        jump();
        
        killed();
        
      }
      
    });
    
    $("body").keyup(function(e) {
        
      if (event.which === 32 || event.which === 83 || event.which === 87 || event.which === 38 || event.which === 40) {
          
        landing();
        
        killed();
        
      }
      
    });
    
    
    
    
    $("body").keydown(function(event) {
        
    //moves left
    if (event.which === 65) {
        
        left();
        
        killed();
        
    } else if (event.which === 68) {
        
       right();
       
       killed();
       
    } 
    
    });
    
    



    
});