import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards  } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';




export function ModalContent({description, color, titulo, imagen, experiencia}){
    
    const colorSombra = color.replace(")", `, ${0.7})`).replace("RGB", "RGBA")
    const modalStyle = {boxShadow: `inset 0px 0px 7px 0px ${colorSombra}`}
    const imgStyle = {filter: `drop-shadow(0 0 10px ${colorSombra})`, height: "50px", width: "50px"}
    const h1Style = {color, filter: `drop-shadow(0 0 10px ${colorSombra})`}
    const titleStyle = {filter: `drop-shadow(0 0 10px ${colorSombra})`}

    return(
        <>
        <div className = "modal-content modal-style" style={modalStyle}>
            <div className = "d-flex justify-content-between">
                        <h1 style={h1Style}>{titulo}</h1> 
                        <img src={imagen} style = {imgStyle}></img>
            </div>

            <span>{description}</span>

            <strong style={titleStyle} className="mt-4 mb-2">Experiencia</strong>
            <div>{experiencia}</div>
        </div>
        </>
    )
    

}