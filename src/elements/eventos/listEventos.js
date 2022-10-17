import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HOST } from '../../utils'
import "../../css/listEventos.css"
import { Modal } from "react-bootstrap"

const bootstrap = require('bootstrap')
let modalBot;

export function PrintEventos() {
    let eventos = [
        {
            "id": 1,
            "equipo1": "Equipo1",
            "equipo2": "Equipo2",
            "marcador1": 1,
            "marcador2": 1,
            "fecha": "2022-10-13T22:40:47.564Z"
        },
        {
            "id": 2,
            "equipo1": "Equipo2",
            "equipo2": "Equipo2",
            "marcador1": 1,
            "marcador2": 5,
            "fecha": "2022-10-13T22:40:47.564Z"
        }];
    //const [eventos, setEventos] = useState([]);

    function cargar() {
        const requestOptions = {
            method: "GET",
            header: {
                "Content-Type": "application/json"
            }
        }
        fetch(HOST + "/eventos/list", requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                //setEventos(data)
            })
            .catch(error => console.log(error))
    }
    /*useEffect(()=>{ 
        cargar()
    },[])*/


    return <>
        <div className="text-center">
            <h1>Eventos</h1>
            <Link type="button" to="/evento/create" className="btn btn-success"><i className="bi bi-plus-circle"></i> Agregar Evento</Link>
        </div>
        {
            eventos.map(evento => (
                <div
                    className="row evento text-center"
                    key={evento.id}
                    onClick={() => showModal(evento)}>
                    <div className="col-3">{evento.equipo1}</div>
                    <div className="col"><h1>{evento.marcador1}</h1></div>
                    <div className="col"><h4>vs</h4></div>
                    <div className="col"><h1>{evento.marcador2}</h1></div>
                    <div className="col-3">{evento.equipo2}</div>
                </div>
            ))
        }
    </>
}

function showModal(evento) {
    console.log(evento);
}