import React from "react";
import style from "../style/Formulario.css"
// import { Form } from "react-router-dom";

export default class Formu extends React.Component{
    render(){
        return(
            //"Hola"
            
            <div className="Formulario">
                <form className="Contenido" action="post">
                    <label className="Label"></label>
                      <strong>Nombre</strong>
                    <br></br>
                    <input type="text"
                        className="Nombre"
                        placeholder="Nombre"
                        name="title"
                    //   onChange={onChange}
                    //   value={form.title}
                      /><br></br>
                    <br></br>
                    <label className="Label"></label>
                        <strong>Descripcion</strong>
                    <br></br>
                    <input type="text"
                        className="Descripcion"
                        placeholder="Descripcion"
                        name="Descripcion"
                      /><br></br>
                    <br></br>
                    <label className="Label"></label>
                        <strong>Imagen</strong>
                    <br></br>
                    <br></br>
                    <input type="file"
                     className="Imagen"
                      /><br></br>
                    <br></br>
                    <label className="Label"></label>
                        <strong>Color</strong>
                    <br></br>    
                    <input type="text"
                        className="Color"
                        placeholder="Color"
                        name="Color"
                      /><br></br>
                    <br></br>
                    <input className="Envio"
                     type="submit" 
                     value={"Enviar"}/><br></br>
                </form> 
            </div>
        )
    }
}