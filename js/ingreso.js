function ingresar() {
    let password = document.getElementById("idClave").value;
    if (password.length !== 4) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'La clave no posee 4 digitos',
        width: '15rem',
        position: 'top-start',
      });
      let boton = document.getElementById("idBotonIngresar");
      boton.addEventListener("click", respuestaClick);
      function respuestaClick() {
        ingresar();
      }  
    } else {
      Swal.fire({
        position: 'top-start',
        icon: 'success',
        title: 'Ingreso Autorizado',
        showConfirmButton: false,
        timer: 1500,
        width: '15rem'
      })
      setTimeout(function(){window.top.location="./paginas/calculo.html"} , 2000);
    }
}
