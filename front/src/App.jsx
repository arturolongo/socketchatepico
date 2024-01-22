import io from "socket.io-client";
import React from "react";
import { useState } from "react";
import e from "express";

const socket = io();

function App(){

  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(mensaje);
  };
  
return (
 <div>
  <form onSubmit={handleSubmit}>
    <input 
    type="text"
    placeholder="Escribe el mensaje..." 
    onChange={(e) => setMensaje(e.target.value)} 
    />
    <button type="submit">ENVIAR MENSAJE</button>
  </form>
 </div> 
);
}

export default App;