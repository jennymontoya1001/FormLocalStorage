'use strict'
//evento submit se activa cuando el formulario es enviado
var formulario = document.querySelector('#form');

formulario.addEventListener('submit', function LocalStorage() {
    /** Evento escuchar a un formulario con un boton submit */
  
    let nombre = document.querySelector('#nombre').value;
    let correo = document.querySelector('#correo').value;
    let genero = document.querySelector('#genero').value
    let descripcion = document.querySelector('#descripcion').value;

    //Mandar a la localStorage
      
        if( (nombre == "") || (correo == "") || (genero == "") || (descripcion == "")){
            alert('Ingresar todos los campos');
            return true;
        }
        else{
            
            if(isNaN(nombre)){
            localStorage.setItem("nombre", nombre);
            localStorage.setItem("correo", correo);
            localStorage.setItem("genero", genero);
            localStorage.setItem("descripcion", descripcion);
            ObtenerLocalStorage();
            }
            else{
                alert("El nombre debe ser texto");
            }
            //Invocar función 
            
            return false;
        }

}
);

function ObtenerLocalStorage() {
    /**Llamar los dato  */
    let nombreGuardado = localStorage.getItem("nombre");
    let correoGuardado = localStorage.getItem("correo");
    let generoGuardado = localStorage.getItem("genero");
    let descripcionGuardada = localStorage.getItem("descripcion");
    alert(`Bienvenido: ${nombreGuardado}`);
    console.log(correoGuardado);
    console.log(generoGuardado);
    console.log(descripcionGuardada);
}







