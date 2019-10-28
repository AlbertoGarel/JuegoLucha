class Personaje {
    constructor(nombre, imagen, vida, fuerza, comentarioEsp, commentnorm) {
        this.Nombre = nombre;
        this.Imagen = imagen;
        this.Vida = vida;
        this.Fuerza = fuerza;
        this.ComentarioEsp = comentarioEsp;
        this.CommentNorm = commentnorm;
        this.jLuchando = '';
        this.NumSecr = Math.floor(Math.random() * 5) + 1;
    }
}



let TIA_array = [];
TIA_array.push(new Personaje('Mortadelo', './images/personajes/foto_1.jpg', 400, 50, '¡Saca la pistola. Te va a disparar....', 'Ataca con una porra vieja...'));
TIA_array.push(new Personaje('Filemón', './images/personajes/foto_2.jpg', 400, 50, '¡ Se ha disfrazado de "mazo". Menudo golpe....', 'Golpea con una Alabarda oxidada...'));
TIA_array.push(new Personaje('Súper', './images/personajes/foto_3.jpg', 250, 50, '¡ Te lanza una caja fuerte....', 'Lanza su zapato...'));
TIA_array.push(new Personaje('Bacterio', './images/personajes/foto_4.jpg', 200, 50, '¡ Te ha clavado una jeringuilla....', 'Te lanza una probeta tóxica...'));
TIA_array.push(new Personaje('Ofelia', './images/personajes/foto_5.jpg', 400, 50, '¡ vaya ! Se lanza el plancha a por tí...', 'Sacude con un tortazo...'));
TIA_array.push(new Personaje('Rompetechos', './images/personajes/foto_6.jpg', 150, 50, '¡ Sin querer te pisa el juanete...', 'Lanza una lámpara y le dá de rebote...'));
TIA_array.push(new Personaje('Irma', './images/personajes/foto_7.jpg', 150, 50, '¡ Te da con la barra de labios....', 'Lanza una máquina de escribir...'));
TIA_array.push(new Personaje('Bestiajez', './images/personajes/foto_8.jpg', 250, 50, '¡ En toda la cara con el puño !...', 'Puñetazo a lo Bud Spencer...'));
TIA_array.push(new Personaje('Patrona', './images/personajes/foto_9.jpg', 300, 50, '¡ La escoba hecha chispas !...', 'Golpea con mocho sucio...'));

let AMPA_array = [];
AMPA_array.push(new Personaje('El Rana', './images/personajes/foto_10.jpg', 150, 50, '¡ Te lame con su lengua venenosa !...', 'Da un salto y patada voladora...'));
AMPA_array.push(new Personaje('TodoQuisque', './images/personajes/foto_11.jpg', 250, 50, '¡ Mamporro que te crio !...', 'Lanza un gato rabioso...'));
AMPA_array.push(new Personaje('El Rabadillo', './images/personajes/foto_12.jpg', 200, 50, '¡ Saca su metralleta y te dispara !...', 'Te lanza una piedra con tirachinas...'));
AMPA_array.push(new Personaje('Doctor Bacilez', './images/personajes/foto_13.jpg', 250, 50, '¡ Te arroja un líquido pringoso !...', 'Ataca con porra vieja.......'));
AMPA_array.push(new Personaje('Escorbuto Carcamal', './images/personajes/foto_14.jpg', 200, 50, '¡ Te muerde con sus asquerosos dientes !...', 'Te ataca con porra vieja....'));
AMPA_array.push(new Personaje('Doctor Bichez', './images/personajes/foto_15.jpg', 250, 50, '¡ Te lanza una bolsa de bichos venenosos !...', 'Ataca con porra vieja....'));
AMPA_array.push(new Personaje('Magin el Mago', './images/personajes/foto_16.jpg', 200, 50, '¡ Saca de su sombrero una palanca y te golpea !....', 'Te ataca con porra vieja....'));
AMPA_array.push(new Personaje('Mac el Mamut', './images/personajes/foto_17.jpg', 400, 50, '¡ Que bruto ! Menuda coz...', 'Puñetazo a lo Bud Spencer......'));
AMPA_array.push(new Personaje('Bueztrausen', './images/personajes/foto_18.jpg', 250, 50, '¡ Te lanza un volkswagen polo...', 'Ataca con porra vieja.......'));