import React, { useRef } from "react"
import { HOST } from "../../utils"

export function createFormDeporte() {/*
    const refNombre = useRef(null)
    const refDescripcion = useRef(null)

    const handleSubmit = (ev) => {
        ev.preventDefault()
        //validaciones
        if (!refNombre.current.value || !refDescripcion.current.value) {
            console.log("Ingrese los datos completos");
        }

        console.log("Enviando Datos")
        //const dep = String("Karate")
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre: refNombre.current.value,
                descripcion: refDescripcion.current.value
            })
        }
        console.log(requestOptions)
        fetch(HOST + '/deportes/create/', requestOptions)
            .then(response => {
                if (response.status == 200)
                    return response.json()
            })
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.log(error)
            })
    }


    return <div class="container-fluid">
        <div class="row">
            <div class="col-md-4 offset-4">
                <form role="form" onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label>Nombre</label>
                        <input type="texto" className="form-control" ref={refNombre} onChange={function () { console.log("digitando...") }} placeholder="Nombre" />
                    </div>
                    <div class="form-group">
                        <label>Descripción</label>
                        <input type="texto" className="form-control" ref={refDescripcion} onChange={function () { console.log("digitando...") }} placeholder="Descripcion" />
                    </div>
                    <div class="form-group my-4">
                        <button type="submit" className="btn btn-primary">
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
*/}