var contador= 1;
class Jugador {
    constructor() {
        this.contador = contador; 
        this.Nombre_Equipo = `jugador_${this.contador}`;
        this.Equipo = [];
        this.turno = 0;
        this.puntuacion = 0;
        this.jLuchando = '';
        contador++;
    }
    atacarA1(){
       
        jugador_2.jLuchando.Vida = jugador_2.jLuchando.Vida - jugador_1.jLuchando.Fuerza;
        document.getElementById('extra').innerHTML = jugador_2.jLuchando.CommentNorm;
    };
    atacarA2(){
        jugador_1.jLuchando.Vida = jugador_1.jLuchando.Vida - jugador_2.jLuchando.Fuerza;
        document.getElementById('extra').innerHTML = jugador_1.jLuchando.CommentNorm;
    };
    

}

let jugador_1 = new Jugador();
let jugador_2 = new Jugador();