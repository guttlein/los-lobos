var myform = $("#contact-form");

myform.submit(function(event) {

   event.preventDefault();

   Swal.fire({
      title: 'Enviando Solicitud',
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
   });
   
   var nickname = $("#nickname_input").val();
   var rol = $("#rol_input").val();
   var fame = $("#fame_input").val();
   var why = $("#why_input").val();
   var comment = $("#comment_input").val();

   var html_value = `<p>Nickname: ${nickname}</p>
                     <p>Rol: ${rol}</p>
                     <p>Fama: ${fame}</p>
                     <p>Razón: ${why}</p>
                     <p>Comentarios: ${comment}</p>
                  `;
   
   var template_params = {
      "html": html_value
   }

   // Change to your service ID, or keep using the default service
   var service_id = "default_service";
   var template_id = "template_H1KEhdGw";

   myform.find("button").text("Sending...");
   emailjs.send(service_id, template_id, template_params).then(
      function() {
         Swal.fire(
            'Solicitud enviada',
            'En breve nos pondremos en contacto contigo',
            'success'
         );
         resetForm();
      },
      function(err) {
         Swal.fire(
            'Oops...',
            'Ocurrió un error al enviar la solicitud',
            'error'
         );
         resetForm();
      }
   );

   return false;
});

function resetForm() {
   $("#nickname_input").val("");
   $("#rol_input").val("");
   $("#fame_input").val("");
   $("#why_input").val("");
   $("#comment_input").val("");
}
