import { getVar } from "./functions.jsx"

  const imgStyle = {width: "100%", height: "auto", boxShadow: `0 0 2px ${getVar("--color-secundario")}` }

  export const lenguajesCards = [
    {titulo: 'Java', imagen: 'src/assets/java.svg', color: 'RGB(200, 60, 55)', description: "Ampliamente utilizado en el desarrollo de aplicaciones empresariales y aplicaciones móviles", domain: "40%",
      experiencia: 
      <>
        Aprendí Java gracias a la universidad, empezando desde la logica de programación, hasta hoy en día que hemos trabajado con patrones de diseño, manejo de bases de datos, archivos, etc. <br></br><br></br> 
        Pero por mi parte, aprendí mucho más afuera de la universidad, profundizando muchos temas que no quedaban claros. <br></br> 
        Ahora mismo, domino la programación funcional implementada en java 8 y Java EE (Enterprise Edition), conocida ahora como jakarta EE. Tambien tengo manejo de frameworks, como Spring, JavaServer Faces, entre otros.
      </>
    },
    
    {titulo: 'Python', imagen: 'src/assets/python.svg', color: 'RGB(54, 109, 155)', description: "Famoso en el desarrollo web, análisis de datos, inteligencia artificial y automatización", domain: "60%",
      experiencia:
      <>
        Python es el lenguaje de programación que mejor domino, por dificultades al empezar con la programación, decidí aprender otro lenguaje, entonces terminé de desarrollar la logica de programación con python. <br></br> <br></br>
        Tengo alto dominio con el manejo y visualización de la información, usando librerías relacionadas, como Pandas, Numpy, Matplotlib, SciPy, entre otros. <br></br><br></br>
        Como mención adicional, tambien he participado en semilleros de investigación, principalmente en el semillero K-IA, el cual consiste en el manejo de información sumamente extensa sobre articulos cientificos del COVID-19, 
        donde apliqué distintos conocimientos adquiridos gracias a librerias de inteligencia artificial como scikit-learn. En este caso, aplicando una tecnica llamada Word Embending, la cual extrae palabras claves y 
        las grafica con cierta relación semantica y sintactica, de tal manera que sea más flexible y sea mejor analizarla. <br></br><br></br>
        <img src="src/assets/multimedia/semillero.png" style={imgStyle}>
        </img>
      </>
    },

    {titulo: 'JavaScript', imagen: 'src/assets/javaScript.svg', color: 'RGB(240, 219, 79)', description: "Ampliamente utilizado en el desarrollo web, es la logica de la mayoría de las páginas", domain: "55%",
      experiencia:
      <>
        JavaScript es uno de los lenguajes que más utilizo ultimamente, gracias a mi trabajo, pues me dedico al desarrollo web actualmente. Conozco distintos ambientes y he utilizado muchos 
        frameworks con Javascript, especialmente con el entorno de Node.js. He tenido tambien cierto manejo con administradores de paquetes como npm y yarn. 
      </>  
    },

    {titulo: 'TypeScript', imagen: 'src/assets/typeScript.svg', color: 'RGB(0, 122, 204)', description: "Superset de JavaScript que agrega tipos estáticos al lenguaje. Ayuda a escribir código más seguro y mantenible", domain: "64%",
      experiencia:
      <>
        Toda mi experiencia con TypeScript es gracias a Angular y Nest. Me llama bastante la atención gracias a su tipado estricto, para mi es más como un ayuda. <br></br><br></br>
        He programado mucho más con TypeScript que con Javascript, puesto a que he trabajado bastante con Angular, pues siempre busqué un dominio robusto a este, es el lenguaje de programación con el que mayor experiencia laboral he tenido.  
      </>
    },
    {titulo: 'HTML', imagen: 'src/assets/html.svg', color: 'RGB(227, 79, 38)', description: "Es un lenguaje de marcado utilizado para crear la estructura y el contenido de las páginas web.", domain: "75%"},
    {titulo: 'CSS', imagen: 'src/assets/css.svg', color: 'RGB(0, 122, 204)', description: "Se utiliza para dar estilo y formato a las páginas web. Controla la presentación visual, como el diseño y los colores.", domain: "45%"},
  ]

  export const frameworksCards = [
    {titulo: 'Angular', imagen: 'src/assets/angular.svg', color: 'RGB(226, 50, 55)', description: "Es un framework de desarrollo web desarrollado por Google. Se utiliza para crear aplicaciones web con un alto grado de escalabilidad y funcionalidad.", domain: "80%"},
    {titulo: 'FastApi', imagen: 'src/assets/fastapi.svg', color: 'RGB(5, 153, 139)', description: "FastAPI es un framework de desarrollo web de Python que se utiliza para crear API RESTful de manera rápida y eficiente. ", domain: "70%"},
    {titulo: 'Django', imagen: 'src/assets/django.svg', color: 'RGB(5, 153, 139)', description: "Django es un framework de desarrollo web de Python que fomenta la productividad y la reutilización del código. Se utiliza para crear aplicaciones web robustas y escalables.", domain: "40%"},
    {titulo: 'React', imagen: 'src/assets/react.svg', color: 'RGB(0, 215, 255)', description: "React es una biblioteca de JavaScript desarrollada por Facebook que se utiliza para crear interfaces de usuario reactivas en aplicaciones web.", domain: "45%"},
    {titulo: 'Flask', imagen: 'src/assets/flask.svg', color: 'RGB(255, 255, 255)', description: "Es un framework de desarrollo web de Python que es minimalista y flexible. Se utiliza para crear aplicaciones web pequeñas y medianas de manera rápida y sencilla.", domain: "55%"},
    {titulo: 'Nest', imagen: 'src/assets/nest.svg', color: 'RGB(234, 40, 69)', description: "Nest es un framework de Node.js y TypeScript para construir aplicaciones de servidor escalables y mantenibles. Se basa en los principios de Angular.", domain: "60%"},
    {titulo: 'Spring', imagen: 'src/assets/spring.svg', color: 'RGB(119, 188, 31)', description: "Spring es un framework de Java utilizado para desarrollar aplicaciones empresariales. Proporciona una amplia gama de herramientas y módulos para simplificar el desarrollo.", domain: "53%"},
  ]
  
  export const dataBasesCards = [
    {titulo: 'MongoDB', imagen: 'src/assets/mongodb.svg', color: 'RGB(19, 170, 82)', description: "es una base de datos NoSQL, un modelo de datos basado en documentos en lugar de tablas relacionales. Es altamente escalable y flexible, lo que lo hace adecuado para una amplia gama de aplicaciones.", domain: "55%"},
    {titulo: 'PostgreSQL', imagen: 'src/assets/postgresql.svg', color: 'RGB(51, 103, 145)', description: "Es conocido por su robustez, capacidad de extensión y soporte para SQL avanzado. PostgreSQL es ampliamente utilizado en aplicaciones empresariales y proyectos donde se requiere una base de datos confiable y altamente personalizable.", domain: "45%"},
    {titulo: 'MySQL', imagen: 'src/assets/mysql.svg', color: 'RGB(0, 102, 140)', description: "MySQL es otro sistema de gestión de bases de datos relacional. Es conocido por ser rápido y fácil de usar. Se utiliza en una amplia variedad de aplicaciones, desde sitios web hasta aplicaciones empresariales.", domain: "70%"},
  ]
  
  export const tecnologiasCards = [
    {titulo: 'AWS', imagen: 'src/assets/aws.svg', color: 'RGB(200, 153, 0)', description: "AWS es una plataforma de servicios en la nube ofrecida por Amazon. Proporciona una amplia gama de servicios de cómputo, almacenamiento, bases de datos, análisis y más.", domain: "29%"},
    {titulo: 'Git', imagen: 'src/assets/git.png', color: 'RGB(240, 80, 51)', description: "Git es un sistema de control de versiones distribuido que permite a los desarrolladores rastrear y gestionar cambios en el código fuente de manera eficiente. Es ampliamente utilizado en proyectos de desarrollo de software para colaboración y seguimiento de cambios en el código.", domain: "86%"},
    {titulo: 'Node.js', imagen: 'src/assets/node.svg', color: 'RGB(156, 245, 117)', description: "Es una plataforma de tiempo de ejecución de JavaScript de código abierto que permite ejecutar JavaScript en el lado del servidor. Es conocido por su eficiencia y escalabilidad, y se utiliza para crear aplicaciones web y servicios de backend altamente eficientes y orientados a eventos.", domain: "70%"},
  ]
