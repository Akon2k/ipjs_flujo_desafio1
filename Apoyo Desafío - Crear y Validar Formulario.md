# Ayuda para la Solución al Desafío - Crear y Validar Formulario

1. Lo primero que debes hacer es crear un formulario en un archivo HTML con los siguientes campos:

```html
    <h1>Formulario de registro</h1>
    <form class="form-register" onsubmit="return validar();">
       <div class="contenedor-inputs">
           <input type="text" id="nombre" name="nombre" placeholder="Nombre" class="inputcss">
           <input type="text" id="apellidos" name="apellidos" placeholder="Apellidos" class="inputcss">
           <input type="email" id="correo" name="correo" placeholder="Correo" class="inputcss">
           <input type="text" id="usuario" name="usuario" placeholder="Usuario" class="inputcss">
           <input type="password" id="pass" name="pass" placeholder="Contraseña" class="inputcss">
           <input type="text" id="telefono" name="telefono" placeholder="Teléfono (911111111)" class="inputcss">
           <input type="submit" value="Registrar" class="btn-enviar">
 
       </div>
    </form>
```

Debes completar todo tu archivo en HTML con todas las partes del documento faltante, así como enlazar como archivos externos la hoja de estilos y el archivo en javascript a utilizar (ambos deben ser archivos separados y externos al HTML).

2. Agregar los siguientes estilos a al formulario mediante CSS. Con colores relacionados a {desafio} latam_. Recuerda que esto debe ir en un archivo externo (ejemplo: estilo_formulario.css).

```css
body{
  font-family: sans-serif; 
  background-color: #6e9e41; 
  box-sizing: border-box;
}
 
form{
   background-color: rgb(224, 223, 223);
   border-radius: 10px;
   color: rgb(255, 255, 255);
   font-size: 14px;
   padding: 20px;
   margin: 0 auto;
   width: 300px;
}
input{
   border-radius: 3px;
   outline: none;
   margin-bottom: 10px;
 
   width: 280px;
   height: 30px;
}
.inputcss{
   border: solid 1px #ccc;
   padding: 10px;
}
.inputcss:focus{
   border-color:  rgb(124, 193, 250);
}
.center-content{
   text-align: center;
}
h1{
   text-align: center;
   color: rgb(255, 255, 255);
}
```

3. Finalizados los dos archivos anteriores, se debe crear un nuevo archivo .js (puedes utilizar el nombre que desees para el archivo, ejemplo: script.js), con una función que haga lo siguiente:
   - Obtenga los datos ingresados en el formulario y almacenarlos en variables (cada dato ingresado debe ir almacenado en una variable).
   OK - Validar que los campos no esten vacios. 
   O - Validar que el campo nombre no supere los 30 caracteres y sea del tipo "string" el dato ingresado.
   OK - Validar que el campo apellidos no supere los 80 caracteres.
   OK - Validar que el campo correo no supere los 100 caracteres.
   OK - Que el campo usuario no supere los 20 caracteres.
   OK - Que el campo teléfono no supere los 15 caracteres.
   OK - Que el campo teléfono acepte solo datos numéricos.
   - Mostrar un mensaje con un saludo de bienvenida a quien acaba de registrarse. Mostrando su nombre completo.

```javascript
function validar(){
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

}
```
En el código anterior, podrás observar cómo en la función de nombre "validar", originada en el formulario del archivo html con la instrucción:  `onsubmit="return validar();"` se guardan los datos ingresados en el formulario por el usuario en cada una de las variables disponibles para cada tipo de dato, todo esto mediante la implementación del DOM y sus características. Posteriormente en la consola del navegador web, podrás observar el contenido de tres de las variables. Te invitamos a experimentar y ve mostrando cada una de esas variables en la consola del navegador.

Ahora bien, ya tienes los datos ingresados por el usuario en cada una de las variables, por lo tanto, es momento de empezar a validar cada una de ellas por separado, para ello debes apoyarte con la lectura del dia de hoy y principalmente en los ciclos condicionales "if-else". Por ejemplo:

```javascript
  if (nombre === ""){
      alert("Todos los campos son obligatorios");
      return false;
  }
  else if (nombre.length>30){
      alert("El nombre es muy largo");
      return false;
  }
  else {
        alert("Los datos fueron ingresados correctamente"); 
  }

````

Como se puede observar en el código anterior, se están realizando sólo dos validaciones, verificando que la variable no esté vacía o sea mayor a 30 caracteres y en el caso que se cumpla esa condición, se muestra un mensaje de alerta y retorna falso a la función "validar" para que el formulario no se pueda enviar y el usuario deba modificar los datos ingresados erróneamente. Ahora solo falta que sigas agregando las validaciones solicitadas y completes el desafío.

>Hint: para verificar que el tipo de datos sea el correcto en una variable, investiga la función isNaN.

**Importante:** En este desafío, encontrarás una series de conceptos y codigos nuevos, los cuales, debes investigar y preguntar a tu facilitador para poder completar el desafío. Estos conceptos son: Document Object Model o DOM ('Modelo de Objetos del Documento'), funciones en javascript, eventos del navegador, entre otros. Los cuales, en este momento te pueden parecer un poco extraño, pero a lo largo de esta semana podrán ir entendiendo y apropiándose de ellos rápidamente.
