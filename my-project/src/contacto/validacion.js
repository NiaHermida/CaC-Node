document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const nombre = form.querySelector("input[name='nombre']");
  const correo = form.querySelector("input[name='email']");
  const tel = form.querySelector("input[name='tel']");
  const tipo = form.querySelector("select[name='tipo']");
  const sucursal = form.querySelector("select[name='sucursal']");
  const fecha = form.querySelector("input[name='fecha']");
  const hora = form.querySelector("input[name='hora']");
  const personas = form.querySelector("input[name='personas']");
  const mensaje = form.querySelector("textarea[name='mensaje']");

  function validarFecha(fecha) {
    const hoy = new Date().Hoy();
    return fecha >= hoy;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const validarNombre = /^[A-Za-z\s]+$/;
    const validarEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validarTelefono = /^\d{10}$/;
    const validarNumero = /^\d+$/;

    if (nombre.value == "" || !validarNombre.test(nombre.value)) {
      swal({
        title: "Ingrese su nombre y apellido",
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
        title: "Ingrese un correo electrónico válido",
        text: "Revise el correo electrónico ingresado",
        icon: "warning",
        buttons: false,
        timer: 2500,
      });
      correo.focus();
      return false;
    }

    if (tel.value == "" || tel.value.length != 10 || !validarTelefono.test(tel.value)) {
      swal({
        title: "Ingrese un número de contacto",
        text: "El número de celular debe contener exactamente 10 dígitos",
        icon: "warning",
        buttons: false,
        timer: 2500,
      });
      tel.focus();
      return false;
    }

    if (tipo.value == "default") {
      swal({
        title: "Seleccione el tipo de evento",
        text: "Debe seleccionar una opción de la lista",
        icon: "warning",
        buttons: false,
        timer: 2500,
      });
      tipo.focus();
      return false;
    }

    if (sucursal.value == "default") {
      swal({
        title: "Seleccione la sucursal",
        text: "Debe seleccionar una opción de la lista",
        icon: "warning",
        buttons: false,
        timer: 2500,
      });
      sucursal.focus();
      return false;
    }

    if (!validarFecha(fecha.value)) {
      swal({
        title: "Ingrese una fecha válida",
        text: "Debe seleccionar una fecha igual o posterior a hoy",
        icon: "warning",
        buttons: false,
        timer: 2500,
      });
      fecha.focus();
      return false;
    }

    if (!validarNumero.test(personas.value) || personas.value <= 0 || personas.value > 250) {
      swal({
        title: "Cantidad de personas inválida",
        text: "El número de personas debe ser mayor a 0 y no superar 250",
        icon: "warning",
        buttons: false,
        timer: 2500,
      });
      personas.focus();
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
        }).then(() => {
          form.submit();
        });
      }
    });
  });
});

Date.prototype.Hoy = function () {
  var local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0, 10);
};
document.getElementById("fecha").value = new Date().Hoy();
