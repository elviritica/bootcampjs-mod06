import { partida,  } from "./modelo";
import { botonMePlanto, botonPedir, botonReiniciar, botonRevelar,  } from "./ui";


export function muestraPuntuacion () {
    const puntuacion = document.getElementById("puntuacion");
    if (puntuacion && puntuacion instanceof HTMLDivElement) {
        puntuacion.innerHTML = partida.puntuacionUsuario.toString();
    } 
}

export function deshabilitarBoton(boton : HTMLButtonElement){
    if (boton && boton instanceof HTMLButtonElement) {
        boton.disabled = true;
    }
}

export function habilitarBoton(boton : HTMLButtonElement){
    if (boton && boton instanceof HTMLButtonElement) {
        boton.disabled = false;
    }
}

export function generarNumRandom (min : number, max : number) : number{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function dameCarta(){
    let num = generarNumRandom(1,10);
    let carta = 0;

    if (num > 7) {
        carta = num + 2;
    } else {
        carta = num;
    }

    return carta;
}

export function sumarCartas(carta:number, puntuacionUsuario: number){
    if(carta < 10){
        puntuacionUsuario += carta;
    } else {
        puntuacionUsuario += 0.5;
    }
    return puntuacionUsuario;
}

export function nuevaPartidaMotor(){
    partida.numIntentos = 0;
    partida.puntuacionUsuario = 0;
    muestraPuntuacion();
    deshabilitarBoton(botonReiniciar);
    deshabilitarBoton(botonRevelar);
    habilitarBoton(botonPedir);
    habilitarBoton(botonMePlanto);
}