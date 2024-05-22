document.addEventListener("DOMContentLoaded", function() {
  const nombre = document.querySelector("#Name");
  const correo = document.querySelector("#Email");
  const celular = document.querySelector("#Phone");
  const tipoEvento = document.querySelector("#Tipo");
  const sucursal = document.querySelector("#Sucursal");
  const hora = document.querySelector("#Hora");
  const personas = document.querySelector("#Personas");
  const comentarios = document.querySelector("#Comment");

  const form = document.getElementById('frm_res');

  form.addEventListener('submit', function(e) {
      e.preventDefault(); // Previene el envío del formulario por defecto
      
      var validarEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var validarNombre = /^[A-Za-z\s]+$/;

      if (nombre.value == "" || !validarNombre.test(nombre.value)) {
          swal({
              title: "Ingresá tu nombre y/o apellido",
              text: "Solo se permiten letras",
              icon: "warning",
              buttons: false,
              timer: 2500
          });
          nombre.focus();
          return false;
      }

      // si no tiene un formato de Email sale esto
      if (!validarEmail.test(correo.value)) {
          swal({
              title: "Ingresá un correo electrónico válido",
              text: "Revisa el correo electrónico ingresado",
              icon: "warning",
              buttons: false,
              timer: 2500
          });
          correo.focus();
          return false;
      }

      // si no seleccionó el tipo de evento
      if (tipoEvento.value == "0") {
          swal({
              title: "Selecciona un tipo de evento",
              text: "Debes seleccionar un tipo de evento de la lista",
              icon: "warning",
              buttons: false,
              timer: 2500
          });
          tipoEvento.focus();
          return false;
      }

      // si no seleccionó la sucursal
      if (sucursal.value == "0") {
          swal({
              title: "Selecciona una sucursal",
              text: "Debes seleccionar una sucursal de la lista",
              icon: "warning",
              buttons: false,
              timer: 2500
          });
          sucursal.focus();
          return false;
      }

      // si el campo HORA está vacío
      if (hora.value == "") {
          swal({
              title: "Ingresá la hora del evento",
              text: "El campo de hora no puede estar vacío",
              icon: "warning",
              buttons: false,
              timer: 2500
          });
          hora.focus();
          return false;
      }

      // si el campo CANTIDAD DE PERSONAS está vacío
      if (personas.value == "" || isNaN(personas.value) || personas.value <= 0) {
          swal({
              title: "Ingresá la cantidad de personas",
              text: "El campo de cantidad de personas no puede estar vacío y debe ser un número válido",
              icon: "warning",
              buttons: false,
              timer: 2500
          });
          personas.focus();
          return false;
      }

      // si el campo de comentarios supera los 1000 caracteres
      if (comentarios.value.length > 1000) {
          swal({
              title: "Mensaje demasiado largo",
              text: "El cuerpo de tu mensaje no puede superar el límite de 1000 caracteres",
              icon: "warning",
              buttons: false,
              timer: 2500
          });
          comentarios.focus();
          return false;
      }

      swal({
          title: 'Mensaje listo para ser enviado',
          text: '¿Quieres enviar tu mensaje?',
          icon: 'warning',
          buttons: true
      }).then((value) => {
          if (value) {  
              swal({
                  title: "¡Muchas gracias!",
                  text: `Tu mensaje ${nombre.value} ha sido enviado con éxito`,
                  icon: "success",
                  buttons: false,
                  timer: 3000
              });
              form.submit();
          }
      });
  });
});
