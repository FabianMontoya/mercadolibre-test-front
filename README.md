# Test Front-End Mercadolibre by Fabian Montoya

Web app de test de front-end para MercadoLibre el cual consume el api para buscar productos dentro de mercadolibre, listarlos y mostrar al usuario la información especifica por un item seleccionado por el usuario.

### Pre-requisitos 📋

```
Vue.js
Node.js
```

### Instalación 🔧

- Descargar el proyecto.
- Abrir la carpeta del proyecto en tu editor de código favorito.
- Abrir el ejecutor de comandos y ejecutar el comando `npm install` para instalar las dependencias del proyecto.
- Ejecutar `npm run serve` para ejecutar el proyecto.
- El proyecto se ejcutará en la ruta `http://localhost:8080/`.

El proyecto cuenta con las rutas:

| URL | Descripción |
| ------------- | ------------- |
|/|Ruta de inicio.|
|/item?search=query|Ruta de consulta de productos, recibe como parametro get la variable `search` con el item a buscar.|
|/item/:id|Ruta de consulta de item. recibe la ruta como parametro el ID del producto que desea conocer la información, allí se muestra información más detallada del producto.|

La aplicación puedes ser consultada en el siguiente link: https://mercadolibre-test-front-fabian.web.app/

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Construido con 🛠️

_Las herramientas utilizadas para crear este proyecto_

* [Vue.js](https://vuejs.org/) - Framework de Javascript en el que está desarrollada la app.
* [Vuetify](https://vuetifyjs.com/en/getting-started/quick-start/) - Framework de Front-End
* [Axios](https://www.npmjs.com/package/axios) - Usado para consumo de API externas
* [Mercadolibre Api](https://api.mercadolibre.com/items/#options) - Usado para consulta de items y la información de estos.

## Versionado 📌

Uso GitHub para el versionamiento de este proyecto.

## Autores ✒️

* **Fabian Dario Montoya** - *Trabajo Inicial* - [FabianMontoya](https://github.com/FabianMontoya)
---
⌨️ con ❤️ por [Fabian Montoya](https://github.com/FabianMontoya) 😊
