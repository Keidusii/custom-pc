$(document).ready(function(){
    // Adds smooth scrolling navbar buttons
    $(".nav-scroll").on('click', function(event) {
      console.log(document);
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 80
        }, 1300, function(){
  
        });
      }
    });

    $("#custom-1").on("click", function() {
        $('#custom-modal-1').modal('show');
    });
    
    $("#custom-2").on("click", function() {
        $('#custom-modal-2').modal('show');
    });
    
    $("#custom-3").on("click", function() {
        $('#custom-modal-3').modal('show');
    });
    
    $("#contact-modal").on("click", function() {
        $("#contact-modal-1").modal('show');
    });
  });

