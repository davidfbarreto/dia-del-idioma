alert("¡NOS ALEGRA QUE QUIERAS INSCRIBIRTE!");


/*ya que el display del div de la imagen esta como NONE este no se muestra,   con esta funcion vamos a cambiar el NONE por un BLOCK*/
function mostrar(){ 
    document.getElementById('img').style.display ='block' /*con esto le decimos que queremos llamar algun id para agregarle o quitarle alguna funcion*/ /*con el .style.display ='block, le estamos cambiando la funcion de none a block en el css'*/
}

function ocultar(){
    document.getElementById('img').style.display ='none'
}


