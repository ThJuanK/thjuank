import {Atropos} from 'atropos/react'

export function Mains(){
    return(
        <Atropos className='languages-mains' shadow={false} highlight = {false}>
            <div className="frameworks">
              <div  data-atropos-offset = "-5">
                <img src="src/assets/spring.svg" className = "spring" alt=""/>
              </div>
              <div  data-atropos-offset = "0">
                <img src="src/assets/fastapi.svg" className = "fastapi" alt=""/>
              </div>
              <div  data-atropos-offset = "10" >
                <img src="src/assets/angular.svg" className = "angular" alt=""/>
              </div>
            </div>
          </Atropos>
    )
}
