import '../app.scss'
import './components.scss'
import { Card } from './Card.jsx'

export function Cards({components}){
    return(
        <div className = "row justify-content-evenly">
          {components.map( ({titulo, imagen, color, description, domain, experiencia}) => {
            return(
              <div className='col-12 col-md-6 col-lg-4 mt-3 d-flex justify-content-center' key={titulo}>
                <Card titulo={titulo} imagen={imagen} color={color} description={description} domain={domain} experiencia={experiencia}></Card>
              </div>
            )
          } )}          
        </div>
    )
}