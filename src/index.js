import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css'
import ReactDom from 'react-dom/client';
import { Mensaje, titulo, Asistentes, PrintEvento } from './Mensaje';
import { PrintEventos } from './elements/eventos/listEventos';
import Header from './elements/general/Header';
import { Footer } from './elements/general/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PrintEquipos } from './elements/equipos/getEquipos';
import { PrintUsuarios } from './elements/usuarios/getUsuarios';
import { PrintDeportes } from './elements/deportes/getDeportes';
import { createFormDeporte } from './elements/deportes/createDeporte';

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
        <div style={{ paddingTop: "50px" }}>
            <Routes>

                <Route path="/" element={PrintEventos()}></Route>
                <Route path="/equipos" element={PrintEquipos()}></Route>
                <Route path="/deportes" element={PrintDeportes()}></Route>
                <Route path="/usuarios" element={PrintUsuarios()}></Route>
                <Route path="/deporte/create" element={createFormDeporte()}></Route>




            </Routes>
        </div>
        <Footer />
    </Router>);