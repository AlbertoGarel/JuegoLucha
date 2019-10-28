var contador= 1;
class Jugador {
    constructor() {
        this.contador = contador; 
        this.Nombre_Equipo = `Jugador_${this.contador}`;
        this.Equipo = [];
        this.turno = 0;
        this.puntuacion = 0;
        this.jLuchando = '';
        contador++;
    }
    atacarA1(){
       
        Jugador_2.jLuchando.Vida = Jugador_2.jLuchando.Vida - Jugador_1.jLuchando.Fuerza;
        document.getElementById('extra').innerHTML = Jugador_2.jLuchando.CommentNorm;
    };
    atacarA2(){
        Jugador_1.jLuchando.Vida = Jugador_1.jLuchando.Vida - Jugador_2.jLuchando.Fuerza;
        document.getElementById('extra').innerHTML = Jugador_1.jLuchando.CommentNorm;
    };
    

}

let Jugador_1 = new Jugador();
let Jugador_2 = new Jugador();