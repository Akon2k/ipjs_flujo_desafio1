function validar() {
  var nombre, apellidos, correo, usuario, clave, telefono, expresion;
  nombre = document.getElementById("nombre").value;
  apellidos = document.getElementById("apellidos").value;
  correo = document.getElementById("correo").value;
  usuario = document.getElementById("usuario").value;
  clave = document.getElementById("pass").value;
  telefono = document.getElementById("telefono").value;

  console.log(nombre);
  console.log(correo);
  console.log(telefono);

  //validaciones
  expresion_regular = /\w+@\w+\.+[a-z]/;  

  if (
    nombre === "" ||
    apellidos === "" ||
    correo === "" ||
    usuario === "" ||
    clave === "" ||
    telefono === ""
  ) {
    alert("Todos los campos son obligatorios");
    return false;
  } else if (nombre.length > 30) {
    alert("El nombre supera los 30 caracteres");
    return false;
  } else if (apellidos.length > 80) {
    alert("El apellido supera los 80 caracteres");
    return false;
  } else if (correo.length > 100) {
    alert("El correo supera los 100 caracteres");
    return false;
  } else if (!expresion_regular.test(correo)) {
    alert("El correo no es valido");
    return false;
  } else if (usuario.length > 20) {
    alert("El usuario supera los 100 caracteres");
    return false;
  } else if (telefono.length > 15) {
    alert("El telefono supera los 100 caracteres");
    return false;
  } else {
    alert("Los datos fueron ingresados correctamente");
  }

  alert(
    "Bienvenido " +
      nombre +
      " " +
      apellidos +
      " al desafio Crear y Validar Formulario para G5 desafio latam tu Usuario es: " +
      usuario +
      " y tu contraseña es: " +
      clave +
      ""
  );
}
