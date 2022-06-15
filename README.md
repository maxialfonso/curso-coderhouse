# Soft Store 
___
Es un proyecto que desarrollé durante el curso de React JS de Coderhouse.

# Descripción 
___
Es en un e-commerce que posee una tienda general donde se encuentran todos los productos del catálogo que luego se pueden filtrar por diferentes categorías que se encuentran en el menú superior.
Se puede acceder al detalle de cada producto. Desde ahí pueden ser agregados al carrito para luego completar un formulario simulando un proceso de compra. Al finalizar se ontiene el número de compra generado.
Utilicé LocalStorage para almacenar el carrito de compras y Firebase para el listado de categorías, los productos y las ordenes de compra generadas.

# Demo 
___
Puede visitarse el deploy del proyecto en https://react-teco-coder.web.app/

# Preview 
___

![GIF de muestra.](/public/demo-ecommerce.gif "Vista del proyecto.")

# Tecnologías y Herramientas
___
- React
- React
- JavaScript Vanilla
- Material UI
- HTML
- CSS
- LocalStorage
- Firebase

# Instalación
___
Para ejecutar el proyecto clonar el repositorio:
```
git clone https://github.com/maxialfonso/curso-coderhouse.git
cd curso-coderhouse
```
Instalar las dependencias:
```
npm install
```

Configurar Firebase:

Luego es necesario crear un proyecto en Firebase y crear dos colecciones en Firestore: una con el nombre de ```categories``` (tendrá las categorías a la que corresponden los productos, se mostrarán en la NavBar y sirven para el filtrado) y otra con el nombre```items``` (almacenamos todos los productos de la tienda).
La colección ```orders``` NO es necesaria crearla. Lo hará automáticamente al generar la primer orden de compra.
Los items de ambas colecciones deben crearse manualmente desde Firebase.

Ejemplo de category:
```
category = {
  key: "curso"
  label: "Curso"
}
```
Ejemplo de product:
```
item = {
  category_key: "curso"
  category_label: "Curso"
  description: "descripción"
  name: "React"
  price: 450
  stock: 100
  type: "Framework"
  url: "url de la imagen"
}
```
Tenemos las colecciones en Firebase listas con los items y categorias cargadas. Renombrar el archivo ```.env.example``` ubicado en la raíz del proyecto a ```.env``` y completar las variables de configuración con tus datos provistos por Firebase:
```
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
```
Luego iniciar el servidor con:
```npm start```
El proyecto estará corriendo en ```http://localhost:3000```

# Consideraciones adicionales
___

Vanilla JS
Utilizado para funciones helpers, simulaciones de fetch, normalizar la información, controles de inputs, control de stock, entre otras.

MaterialUI
Lo elegí para conocer la librería y agilizar el proceso de desarrollo y estilado de la aplicación.

Firebase
Elegido para almacenar los items, el listado de las categorias, las órdenes de compra y el control de stock.

LocalStorage
lo utilicé para persistir el carrito de los usuarios en sus dispositivos en el caso de que no finalicen el flujo de compra para mejorar la experiencia de uso.

HTML y CSS
Utilizado para crear componentes a medida y controlar el comportamiento de los contenedores en la pantalla.