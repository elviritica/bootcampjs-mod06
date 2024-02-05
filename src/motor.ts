import { partida,  } from "./modelo";


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

}