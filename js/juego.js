class Juego {
    constructor() {
        this.TIA_equipo = TIA_array;
        this.AMPA_equipo = AMPA_array;
        this.jugadores = [jugador_1, jugador_2];
        this.turno = 0;
        this.gana1 = false;
        this.gana2 = false;
    }
    evento_btn_siguiente(btn, siguienteVista) {
        document.getElementById(btn).setAttribute('style', atrNone);
        let seleccionar = document.getElementById(siguienteVista);
        seleccionar.removeAttribute('style');
    };
    rellenaDivs(personajesArray, data_id, sufijoclase) {
        for (let i = 0; i < personajesArray.length; i++) {
            document.getElementById(data_id).innerHTML += `<div class="divCreado ${sufijoclase}" data-name="${i}" style="background-image: url(${personajesArray[i].Imagen})" ></div>`;
        }
    };
    rellenaDivsLucha(personajesArray, data_id, sufijoclase, arrEqu, equipo) {
        for (let i = 0; i < personajesArray.length; i++) {
            let inde = arrEqu[i];
            document.getElementById(data_id).innerHTML += `<div class="divCreado ${sufijoclase}" data-name="${inde}" style="background-image: url(${equipo[inde].Imagen})"></div>`;
        }
    };
    evento_selec_personajes(variable_cont, clase_Destino) {
        for (let i = 0; i < variable_cont.length; i++) {
            variable_cont[i].addEventListener('click', () => {

                let cogeFondo = variable_cont[i].getAttribute('style');
                let cogeDName = variable_cont[i].getAttribute('data-name');

                let destino = document.getElementsByClassName(clase_Destino);
                for (let j = 0; j < destino.length; j++) {
                    if (!destino[j].hasAttribute('style')) {
                        destino[j].setAttribute('style', cogeFondo);
                        destino[j].setAttribute('data-name', cogeDName);
                        break;
                    }
                }
            })
        }
    };
    deseleccion_pers(deselec) {
        for (let i = 0; i < deselec.length; i++) {
            deselec[i].addEventListener('click', () => {
                deselec[i].removeAttribute('style');
                deselec[i].removeAttribute('data-name');
            })
        }
    };
    formaEquipos(clase, jugador) {
        let PersoSelec = document.getElementsByClassName(clase);
        for (let i = 0; i < 3; i++) {
            if (jugador.length < 3 && PersoSelec[i].getAttribute('data-name') != null) {
                jugador.push(PersoSelec[i].getAttribute('data-name'));
            }
        }
    };
    comprueba_equipos() {
        jugador_1.Equipo = [];
        jugador_2.Equipo = [];
        this.formaEquipos('persoSeleccionados TIA', jugador_1.Equipo)
        this.formaEquipos('persoSeleccionados AMPA', jugador_2.Equipo)

        if (jugador_1.Equipo.length < 3 || jugador_2.Equipo.length < 3) {

            if (jugador_1.Equipo.length < 3) {
                alert('JUGADOR 1, SELECCIONA TUS PERSONAJES');
            };
            if (jugador_2.Equipo.length < 3) {
                alert('JUGADOR 2, SELECCIONA TUS PERSONAJES');
            };
        } else {
            //TENEMOS LOS EQUIPOS Y PASAMOS A LA SIGUIENTE VISTA
            document.getElementById('seleccion').setAttribute('style', atrNone);
            let seleccionar = document.getElementById('batalla');
            seleccionar.removeAttribute('style');
            this.rellenaDivsLucha(this.jugadores[0].Equipo, 'luchaTIA', 'jugador_1', jugador_1.Equipo, this.TIA_equipo);
            this.rellenaDivsLucha(this.jugadores[1].Equipo, 'luchaAMPA', 'jugador_2', jugador_2.Equipo, this.AMPA_equipo);
            let sig = document.getElementById('siguiente');
            sig.addEventListener('click', () => {
                lucha();
            });
        }
    };

}

//INSTANCIAMOS JUEGO
let Juego_1 = new Juego();
// var gana1 = false;
// var gana2 = false;

//COMENZAMOS EL JUEGO_1
const atrNone = 'display: none!important;';

//----- EVENTO PARA SUIGUIENTE PANTALLA
let btnInicio = document.getElementById('boton-inicio');
btnInicio.addEventListener('click', () => {
    Juego_1.evento_btn_siguiente('inicio', 'seleccion');
});

//RELLENAMOS CONTENEDORES CON PERSONAJES
Juego_1.rellenaDivs(Juego_1.TIA_equipo, 'TIA', 'TIA');
Juego_1.rellenaDivs(Juego_1.AMPA_equipo, 'AMPA', 'AMPA');

//SELECCIONAMOS PERSONAJES
let pers_TIA = document.getElementsByClassName('divCreado TIA');
let pers_AMPA = document.getElementsByClassName('divCreado AMPA');
Juego_1.evento_selec_personajes(pers_TIA, 'persoSeleccionados TIA');
Juego_1.evento_selec_personajes(pers_AMPA, 'persoSeleccionados AMPA');

//DESELECCION DE PERSONAJES
let deselec = document.getElementsByClassName('persoSeleccionados');
Juego_1.deseleccion_pers(deselec);

// EVENTO PARA PASAR SIGUIENTE VISTA Y COMPROBAR EQUIPOPS COMPLETOS.
let btnComenzar = document.getElementById('comenzar');
btnComenzar.addEventListener('click', () => {
    Juego_1.comprueba_equipos();
})

function lucha() {
    do {

        let eTIA = document.getElementsByClassName('divCreado jugador_1');
        let eAMPA = document.getElementsByClassName('divCreado jugador_2');
        for (let i = 0; i < eTIA.length; i++) {
            let dataNameTIA = eTIA[i].getAttribute('data-name');
            let styleTIA = eTIA[i].getAttribute('style');
            if (Juego_1.TIA_equipo[dataNameTIA].Vida <= 0) {
                eTIA[i].removeAttribute('style');
            } else {
                document.getElementById('luchando1').setAttribute('data-name', dataNameTIA);
                document.getElementById('luchando1').setAttribute('style', styleTIA);

                break;
            }
        }

        for (let i = 0; i < eAMPA.length; i++) {
            let dataNameAMPA = eAMPA[i].getAttribute('data-name');
            let styleAMPA = eAMPA[i].getAttribute('style');
            if (Juego_1.AMPA_equipo[dataNameAMPA].Vida <= 0) {
                eAMPA[i].removeAttribute('style');
            } else {
                document.getElementById('luchando2').setAttribute('data-name', dataNameAMPA);
                document.getElementById('luchando2').setAttribute('style', styleAMPA);

                break;
            }
        }


        let perEnLuch1 = document.getElementById('luchando1').getAttribute('data-name');
        let perEnLuch2 = document.getElementById('luchando2').getAttribute('data-name');

        jugador_1.jLuchando = TIA_array[perEnLuch1];
        jugador_2.jLuchando = AMPA_array[perEnLuch2];


        if (Juego_1.turno % 2) {
            jugador_2.atacarA1();
            if (jugador_1.jLuchando.Vida <= 0) {
                jugador_1.jLuchando.Vida = 0;
                document.getElementById('puntua1').innerHTML = `<p style="font-size: 1.2rem">Pierden los buenos...</p>`;


            } else {
                document.getElementById('puntua1').innerHTML = jugador_1.jLuchando.Vida;
            }

        } else {
            jugador_1.atacarA2();
            if (jugador_2.jLuchando.Vida <= 0) {
                jugador_2.jLuchando.Vida = 0;
                document.getElementById('puntua2').innerHTML = `<p style="font-size: 1.2rem"> Pierden los malos....</p>`;

            } else {

                document.getElementById('puntua2').innerHTML = jugador_2.jLuchando.Vida;
            }
        }

        Juego_1.turno++;



    } while (Juego_1.turno < 15);


}




