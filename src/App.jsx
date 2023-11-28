import './App.scss'
import { getVar } from './functions/functions.jsx'
import { useState } from 'react';
import { Mains } from './components/mains.jsx';
import { Cards } from './components/Cards.jsx';
import * as info from './functions/informacion.jsx'

import 'swiper/css';
import 'swiper/css/effect-cards';
import VideoPlayer from './components/VideoPlayer.jsx';

function App() {

  const descripcion = 
  <span>
    Tengo 18 años, estudiante de ingeniería en sistemas, con mucho interés en las matemáticas, la ciencia, la música y el arte. <br></br><br></br>
    Soy desarrollador, con conocimiento en diversas herramientas de programación, apasionado por el aprendizaje y la innovación. Empecé a programar 
    hace 2 años, cuento con 6 meses de experiencia laboral en el área de la programación.<br></br><br></br>
    Mis lenguajes de programación con mayor dominio son <strong className = "Java">Java</strong>, <strong className = "Python">Python</strong> y <strong className = "JavaScript">JavaScript</strong>.
    Pero lo que más manejo, son los frameworks y las herramientas. El framework con el que más he trabajado y estudiado, es <strong className="Angular">Angular</strong>, con gran dominio de <strong className="RxJs">RxJs</strong>. 
    Por otro lado, también tengo dominio de backend, con frameworks de Python y Java, como <strong className="FastAPI">FastAPI</strong>, <strong className="Flask">Flask</strong> y <strong className="Spring">Spring</strong>. <br></br><br></br>
    También manejo diversos servicios en la nube, tecnologías y bases de datos. Sí quieres más detalles sobre esto o cualquier tema mencionado anteriormente, te invito a revisar detalladamente esta pagina, busca tus puntos de interés.
  </span>

  const cambiarColor = () => {
    document.documentElement.style.setProperty('--color-principal', 
      getVar('--color-principal') == "#222" ? "#ccc" : "#222"
    );
    document.documentElement.style.setProperty('--color-secundario', 
      getVar('--color-principal') == "#222" ? "#ccc" : "#222"
    );
    document.documentElement.style.setProperty('--color-terciario', 
      getVar('--color-principal') == "#222" ? "#2c2c2c" : "#bbb"
    );

    setButtonText( getVar('--color-principal') == "#ddd" ? "Modo oscuro" : "Modo claro" )
  }

  const changeMode = getVar('--color-principal') == "#ddd" ? "Modo oscuro" : "Modo claro";
  let [buttonText, setButtonText] = useState(changeMode);

  const contacts = [
    {
      src: '/src/assets/github.png',
      color: 'black',
      href: 'https://github.com/ThJuanK/'
    },
    {
      src: '/src/assets/whatsapp.png',
      color: '#075e54',
      href: 'https://api.whatsapp.com/send/?phone=573102587945'
    },
    {
      src: '/src/assets/email.png',
      color: 'black',
      href: 'mailto:juanksr0@gmail.com'

    }
  ]

  return (
    <>
    <div className = "container pt-4">
      <span className='nombre presentation-text'>Juan Camilo Ayala</span>
      {/* <button type='button' className="switch-mode" onClick={cambiarColor}>{buttonText}</button> */}
      

      <span className='description presentation-text'>Programador Junior</span>

      <div className = "row mt-5 justify-content-between">
        <div className="description-text col-12 col-md-6" style={{lineHeight:'2em'}} >
          {descripcion}
        </div>

        <div className='col-12 col-md-6 mt-5 mt-md-0 d-flex justify-content-center align-items-center'>
          <Mains/>
        </div>

      </div>

      <div className="contact mt-3" >
         { contacts.map( (e, i) => (
          <a href={e.href} key = {i} className='mr-4'>
            <img src = {e.src} style = {{filter: `drop-shadow(0 0 4px ${e.color})`}}>
            </img>
          </a>
         ) ) }
      </div>

      <div style={{marginTop: '4rem'}}>
        <span className="title">Lenguajes</span>
        <Cards components={info.lenguajesCards}></Cards>
      </div>

      <div className='mt-5'>
        <span className="title">FrameWorks</span>
        <Cards components={info.frameworksCards}></Cards>
      </div>

      <div className='mt-5'>
        <span className="title">Bases de datos</span>
        <Cards components={info.dataBasesCards}></Cards>
      </div>

      <div className='mt-5'>
        <span className="title">Tecnologías</span>
        <Cards components={info.tecnologiasCards}></Cards>
      </div>

      <div className='mt-5 mb-5'>
        <span className="title">Auto-Tech</span>
        <VideoPlayer videoUrl="src/assets/2023-11-24 01-03-54.mp4" />
      </div>

    </div>
    </>
  )
}

export default App
