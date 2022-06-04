//@ts-check
import { collection, addDoc, getFirestore } from "firebase/firestore";

export function newOrder() {

  return new Promise(async (resolve, reject) => {

      const DB = getFirestore();

      const items = collection(DB, "items");

      productos.forEach( producto => {
          addDoc(items, producto);
      });

      console.log("listoooo");
  })
}

const productos = [
  {
    "name": "React",
    "description": "Desarrolla aplicaciones web con React Hooks. Integra herramientas como Strapi, PayPal y Google Maps para desarrollar una tienda online con carrito de compras.",
    "stock": 99,
    "price": 149.99,
    "category_label": "Curso",
    "category_key": "curso",
    "url": "https://interacso.com/blog/wp-content/uploads/2019/05/reactluminoso.png"
  },
  {
    "name": "Vue",
    "description": "Vue.js es un framework de JavaScript de código abierto para la construcción de interfaces de usuario y aplicaciones de una sola página.",
    "stock": 105,
    "price": 450.99,
    "category_label": "Carrera",
    "category_key": "carrera",
    "url": "https://tincode-django.s3.amazonaws.com/media/courses/fc15a121-99ef-4118-9d7b-40cdd53e7825.jpg"
  },
  {
    "name": "Angular",
    "description": "Angular es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página.",
    "stock": 100,
    "price": 801,
    "category_label": "Taller",
    "category_key": "taller",
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
  },
  {
    "name": "PHP",
    "description": "PHP es un lenguaje de programación de uso general que se adapta especialmente al desarrollo web. Fue creado inicialmente por el programador danés-canadiense Rasmus Lerdorf en 1994.",
    "stock": 80,
    "price": 615.30,
    "category_label": "Diplomatura",
    "category_key": "diplomatura",
    "url": "https://desarrolloweb.com/storage/tag_images/actual/6T8eGecQ0XXvTHOvic4ba8mlQXmSEW3vrI7jenmv.png"
  },
  {
    "name": "NODE",
    "description": "Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript, asíncrono.",
    "stock": 150,
    "price": 656.36,
    "category_label": "Curso",
    "category_key": "curso",
    "url": "https://s3-us-west-2.amazonaws.com/devcodepro/media/tutorials/instalacion-de-nodejs-en-ubuntu-t1.jpg"
  },
  {
    "name": "MySql",
    "description": "MySQL es un sistema de gestión de bases de datos relacional desarrollado bajo licencia dual: Licencia pública general/Licencia comercial por Oracle Corporation.",
    "stock": 155,
    "price": 1552,
    "category_label": "Carrera",
    "category_key": "carrera",
    "url": "https://professor-falken.com/wp-content/uploads/2017/06/Como-ver-las-consultas-que-se-estan-ejecutando-en-MySQL-professor-falken.com_.jpg"
  },
  {
      "name": "Git",
      "description": "Git es un software de control de versiones diseñado por Linus Torvalds, pensando en la eficiencia, la confiabilidad y compatibilidad del mantenimiento de versiones de aplicaciones.",
      "stock": 104,
      "price": 5454,
      "category_label": "Taller",
      "category_key": "taller",
      "url": "https://ugeek.github.io/blog/images-blog/git.png"
  },
  {
    "name": "Material UI",
    "description": "Material-UI es una biblioteca de código abierto que implementa el lenguaje visual de «materiales» de Google en sus componentes React",
    "stock": 103,
    "price": 2249.99,
    "category_label": "Diplomatura",
    "category_key": "diplomatura",
    "url": "https://cdn.filestackcontent.com/5yjLJYBrQ6EHpN9dK0ak"
  },
  {
    "name": "NPM",
    "description": "npm es el sistema de gestión de paquetes por defecto para Node.js, un entorno de ejecución para JavaScript.",
    "stock": 103,
    "price": 149.99,
    "category_label": "Curso",
    "category_key": "curso",
    "url": "https://juststickers.in/wp-content/uploads/2016/03/npm-coaster.png"
  },
  {
    "name": "Jira",
    "description": "Jira es una herramienta en línea para la administración de tareas de un proyecto, el seguimiento de errores e incidencias y para la gestión operativa de proyectos.",
    "stock": 103,
    "price": 1200,
    "category_label": "Carrera",
    "category_key": "carrera",
    "url": "https://effectiveexperiments.com/wp-content/uploads/2021/11/jira_hero_with_text.jpeg"
  },
  {
    "name": "Git Hub",
    "description": "GitHub es una forja para alojar proyectos utilizando el sistema de control de versiones Git.",
    "stock": 103,
    "price": 4545,
    "category_label": "Taller",
    "category_key": "taller",
    "url": "https://1.bp.blogspot.com/-Ez_07BOEQdg/YUpIgc95XqI/AAAAAAABevQ/dHiUyADJBQ03yWF_mwW4ZkTXrSUWumozQCLcBGAsYHQ/s998/github.webp"
  },
  {
    "name": "HTML",
    "description": "HTML, siglas en inglés de HyperText Markup Language, hace referencia al lenguaje de marcado para la elaboración de páginas web.",
    "stock": 103,
    "price": 4222,
    "category_label": "Diplomatura",
    "category_key": "diplomatura",
    "url": "https://professor-falken.com/wp-content/uploads/2017/07/Como-redirigir-o-redireccionar-a-otra-pagina-web-en-HTML-professor-falken.com_.jpg"
  },
  {
    "name": "CSS",
    "description": "CSS, en español «Hojas de estilo en cascada», es un lenguaje de diseño gráfico para definir y crear la presentación de un documento.",
    "stock": 103,
    "price": 252.12,
    "category_label": "Curso",
    "category_key": "curso",
    "url": "https://extassisnetwork.com/tutoriales/wp-content/uploads/Que-es-CSS.jpg"
  },
  {
    "name": "JavaScript",
    "description": "JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos.",
    "stock": 105,
    "price": 660,
    "category_label": "Carrera",
    "category_key": "carrera",
    "url": "https://terminalroot.com.br/assets/img/js/js.jpg"
  },
  {
    "name": "Postman",
    "description": "Postman es una plataforma de API para que los desarrolladores diseñen, construyan, prueben e iteren sus API.",
    "stock": 104,
    "price": 1050,
    "category_label": "Taller",
    "category_key": "taller",
    "url": "https://media.slid.es/uploads/327261/images/5065937/pm-logo-vert.png"
  },
  {
      "name": "SmarGit",
      "description": "Esta aplicación nos va a permitir trabajar con Git, e incluye soporte para GitHub, BitBucket, SVN y Mercurial.",
      "stock": 103,
      "price": 6324,
      "category_label": "Diplomatura",
    "category_key": "diplomatura",
      "url": "https://smartgit.userecho.com/s/attachments/19994/0/0/project_logo_qHgsJ8k.png"
  },

 {
    "name": "Flutter",
    "description": "Flutter es un SDK de código fuente abierto de desarrollo de aplicaciones móviles creado por Google.",
    "stock": 344,
    "price": 1523.3,
    "type": "Mobile",
    "category_label": "Curso",
    "category_key": "curso",
    "url": "https://como-programar.net/wp-content/uploads/2021/03/flutter.png"
  }, 
  {
    "name": "Kotlin",
    "description": "Kotlin es un lenguaje de programación de tipado estático que corre sobre la máquina virtual de Java. Muy utilizado en mobile.",
    "stock": 125,
    "price": 1293.3,
    "type": "Mobile",
    "category_label": "Carrera",
    "category_key": "carrera",
    "url": "https://ih1.redbubble.net/image.684259797.9447/pp,840x830-pad,1000x1000,f8f8f8.u3.jpg"
  },
  {
    "name": "Swift",
    "description": "Swift es un lenguaje de programación multiparadigma creado por Apple enfocado en el desarrollo de aplicaciones para iOS y macOS.",
    "stock": 222,
    "price": 2058.3,
    "type": "Mobile",
    "category_label": "Taller",
    "category_key": "taller",
    "url": "https://owius.com/wp-content/uploads/2019/05/wc-swift.jpg"
  }, 	
  {
    "name": "Python",
    "description": "Python es un lenguaje de alto nivel de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código.",
    "stock": 163,
    "price": 2058.3,
    "type": "Mobile",
    "category_label": "Diplomatura",
    "category_key": "diplomatura",
    "url": "https://www.freecodecamp.org/espanol/news/content/images/2021/02/Python-language-1-.png"
  } 	
]