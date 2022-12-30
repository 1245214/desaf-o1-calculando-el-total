//elemento img lo transforme en una const global
const img = document.querySelector(".img");
//elemento select del html lo transforme en un const global

const colores = document.querySelector("select");
//tenemos la const imagenes con un arreglo, falta definir posiciones
const imagenes = ["assets/imgs/img1.png",
  "assets/imgs/img2.webp",
  "assets/imgs/img3.webp", "assets/imgs/edescarga.jpeg"];
//con la const posicion podemos hacer el cambio de imagen pero pierde //el orden con los colores en el sentido contrario
const posicion = 0;
img.style.backgroundImage = "URL(" + imagenes[posicion] + ")";
console.log("URL(" + imagenes[posicion] + ")");
//img.style.backgroundImage = "URL(" + imagenes[posicion] + ")";
colores.addEventListener("change", e => {
  //img.style.backgroundImage = "URL(" + imagenes[posicion] + ")";


  //  const posiciondeimagenes = imagenes.length

  if (posicion == 0) {
    posicion = 3;
  }
  else {
    posicion--;
  }
  // else if ([posicion = 2] > posiciondeimagenes) {

  //}

  img.style.backgroundImage = "URL(" + imagenes[posicion] + ")";
  console.log("URL(" + imagenes[posicion] + ")");

});


// element (input, class: button)  of the HTML it is transformed  to a global const
btn = document.querySelector(".button")

// const + addEventListener con funcion click 
btn.addEventListener("click", e => {
  //const local
  const nume1 = document.querySelector(".number");

  const nume2 = nume1.value;
  //const global
  const precio = 700000;
  // number formatea el texto a numeros
  const resultado = Number(nume2) * precio;

  /* utilice document.querySelector (.resultado) para posicionar donde quiero ver el resultado y agregamos un new.NumberFormat... para formatear el numero*/
  document.querySelector(".resultado").innerHTML = new Intl.NumberFormat().format(resultado);

});

