import {Atropos} from 'atropos/react'
import '../app.scss'
import { useState } from "react";
import { ModalContent } from './ModalContent.jsx';
import { Modal } from 'bootstrap';
import 'animate.css';
import { Domain } from './domain.jsx';

export function Card({description, titulo, imagen, color, domain, experiencia, width = "300px", height = "250px"}){
    const idModal = titulo == "Node.js" ?  "modal-node" : `modal-${titulo}`; 
    
    const colorSombra = (opacidad) => {
        return color.replace(")", `, ${opacidad})`).replace("RGB", "RGBA")
    }

    const h1Style = {
        filter: `drop-shadow(0 0 10px ${colorSombra(0.5)}`,
        color: color,
    }

    const imgStyle = {
        width: '80px',
        height: '80px',
        filter: `drop-shadow(0 0 6px ${colorSombra(0.4)}`,
    }

    const atroposStyle = {
        height, width,
        cursor: 'pointer'
    }

    return(
    <>
        <Atropos shadow = {false} highlight = {false} style = {atroposStyle} data-bs-toggle="modal" data-bs-target={"#"+idModal}>
            <div className = 'card' style={{boxShadow: `inset 0px 0px 7px 0px ${colorSombra(0.5)}`}}>
                <h1 data-atropos-offset = "-5" style={h1Style} >{titulo}</h1>
                <div data-atropos-offset = "5">
                    <img src={imagen} alt="" style = {imgStyle}/>
                </div>
                <span style={{height: "fit-content", marginBottom: '-50px'}}>Dominio</span>
                <Domain color={color} domain = {domain}></Domain>
            </div>
        </Atropos>

        {/* <div className='modal face' id="modal-descr" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" 
        style={{height, width, backgroundColor:'red'}}></div> */}

        <div className="modal fade animate__animated animate__rotateInUpLeft animate__faster" id={idModal} aria-hidden="true" data-backdrop="static">
            <div className="modal-dialog modal-dialog-centered">
                <ModalContent color={color} titulo={titulo} imagen = {imagen} description={description} experiencia={experiencia}>
                    
                </ModalContent>
            </div>
        </div>
    </>
    )
}