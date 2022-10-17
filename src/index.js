import React from 'react';
import './css/bootstrap.min.css'
import ReactDom from 'react-dom/client';
import { Mensaje, titulo, Asistentes, printEvento } from './Mensaje';
import Header from './elements/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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
root.render(
    <Router>
        <Header />
        <h1>{titulo()}</h1>
        <p> <Mensaje fecha="2022-10-17" equipo1="Equipo1" equipo2="Equipo2" /></p>
        <p> <Mensaje fecha="2022-01-20" equipo1="Equipo1" equipo2="Equipo2" /> </p>
        <p> <Mensaje fecha="1999-10-17" equipo1="Equipo1" equipo2="Equipo2" /> </p>
        <div> {Asistentes("jugadores", 40)} </div>
        {printEvento(eventoPrueba)}

        <Routes>

            <Route path="/" element={Asistentes("Caracteres de ruta", 0)}></Route>
            <Route path="/dos" element={Asistentes("Caracteres de ruta", 2)}></Route>

        </Routes>
    </Router>);