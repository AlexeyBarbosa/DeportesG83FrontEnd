export function Mensaje(props) {
    return <p>{props.fecha}: {props.equipo1} vs {props.equipo2}</p>;
}

export function titulo() {
    return <h1>Hola mundo!</h1>;
}

export function Asistentes(nombre, cant) {
    return <h1>Hay {cant} {nombre} </h1>;
}

export const printEvento = (evento) => {
    return <div>
        <h1>{evento.equipo1.nombre}</h1>
        <p> {evento.marcador1} </p>

        <h1>{evento.equipo2.nombre}</h1>
        <p> {evento.marcador2} </p>
        <p>{ganador(evento)}</p>
    </div>;
}

const ganador = (evento) => {
    if (evento.marcador1 === evento.marcador2) {
        return "empate";
    } else if (evento.marcador1 > evento.marcador2) {
        return "ganó " + evento.equipo1.nombre;
    } else {
        return "ganó " + evento.equipo2.nombre;
    }
}