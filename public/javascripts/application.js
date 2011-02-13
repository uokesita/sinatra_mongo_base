$(document).ready(function(){
    $("#contactForm").validate({
      messages:{
        nombre: "Requerido",
        email: "Requerido",
        empresa: "Requerido",
        pais: "Requerido"
      }  
    });

    $('#submit').click(function(){
      var nombre  = $('#nombre').val();
      var email   = $('#email').val();
      var empresa = $('#empresa').val();
      var rif     = $('#rif').val();
      var area    = $('#area').val();


      if( nombre=="" || email=="" || empresa=="" || rif=="" || area==""){
      } else {
        var data = 'nombre='+ nombre + '&email=' + email + '&empresa=' + empresa + '&rif=' + rif + '&area=' + area;  

        $.ajax({  
          type: "POST",  
          url: "/enviar",  
          data: data,  
          success: function() {  
            $('#form').html("<div id='message'></div>");  
            $('#message').html("<h2>Gracias por tu interes. <br/>En breve te contactaremos!</h2>")  
           .hide()  
           .fadeIn(1500);  
          }  
        });  
        return false;  
      }
    });
});


