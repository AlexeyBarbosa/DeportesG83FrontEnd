import React from 'react';
import ReactDom from 'react-dom/client';
import { Mensaje, titulo, Asistentes, printEvento } from './Mensaje';
import Header from './Header';

const root = ReactDom.createRoot(document.getElementById('root'));
let eventoPrueba = {
    "equipo1": {
        "nombre": "Selcción Colombiana de Fútbol"
    },
    "equipo2": {
        "nombre": "Selección Nacional de Tennis"
    },
    "marcador1": 1,
    "marcador2": 5
};
root.render(<>
    <Header />
    <h1>{titulo()}</h1>
    <p> <Mensaje /> </p>
    <div> {Asistentes("jugadores", 40)} </div>
    {printEvento(eventoPrueba)}
</>);