document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const nombre = form.querySelector("input[name='nombre']");
  const correo = form.querySelector("input[name='email']");
  const area = form.querySelector("select[name='area']");
  const asunto = form.querySelector("input[name='asunto']");
  const mensaje = form.querySelector("textarea[name='mensaje']");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var validarEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var validarNombre = /^[A-Za-z\s]+$/;
    var validarAsunto =
      /^(?!.*[^A-Za-z0-9\s].*|[A-Za-z0-9\s].*[^A-Za-z0-9\s].*)[A-Za-z0-9\s!@#$%^&*()_+{}\[\]:;<>,.?~\\/]+$/;

    if (nombre.value == "" || !validarNombre.test(nombre.value)) {
      swal({
        title: "Ingresá tu nombre o apodo",
        text: "Solo se permiten letras",
        icon: "warning",
        buttons: false,
        timer: 2500,
      });
      nombre.focus();
      return false;
    }

    if (!validarEmail.test(correo.value)) {
      swal({
        title: "Ingresá un correo electronico válido",
        text: "Revisa el correo electronico ingresado",
        icon: "warning",
        buttons: false,
        timer: 2500,
      });
      correo.focus();
      return false;
    }

    if (area.value == "default") {
      swal({
        title: "Selecciona un area de interés",
        text: "Debes seleccionar un area de la lista",
        icon: "warning",
        buttons: false,
        timer: 2500,
      });
      area.focus();
      return false;
    }

    if (
      asunto.value.length == 0 ||
      asunto.value.length > 35 ||
      !validarAsunto.test(asunto.value)
    ) {
      swal({
        title: "Revisa el asunto de tu mensaje",
        text: "El asunto no puede estar vacío ni superar los 35 caracteres (solo se permiten letras y números)",
        icon: "warning",
        buttons: false,
        timer: 2500,
      });
      asunto.focus();
      return false;
    }

    if (mensaje.value.length == 0 || mensaje.value.length > 1000) {
      swal({
        title: "Mensaje vacío",
        text: "El cuerpo de tu mensaje está vacío o supera el límite de 1000 caracteres",
        icon: "warning",
        buttons: false,
        timer: 2500,
      });
      mensaje.focus();
      return false;
    }

    swal({
      title: "Mensaje listo para ser enviado",
      text: "¿Quieres enviar tu mensaje?",
      icon: "warning",
      buttons: true,
    }).then((value) => {
      if (value) {
        swal({
          title: "¡Muchas gracias!",
          text: `Tu mensaje ${nombre.value} ha sido enviado con éxito`,
          icon: "success",
          buttons: false,
          timer: 3000,
        });
        form.submit();
      }
    });
  });
});
