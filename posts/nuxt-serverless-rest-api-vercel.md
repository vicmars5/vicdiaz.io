---
id: 2
pageTitle: 'Nuxt + Serverless REST API + Vercel'
title: 'Nuxt + Serverless REST API + Vercel'
author: 'Victor'
description: 'Aprende como configurar NUXT y Vercel para tener un serverless REST API en tu app.'
date: '2020-09-08'
---


Hace poco estuve trabajando en un blog NEXT, y una de las cosas que más me gustaron es el hecho de que es muy facil  crear REST API usando _serverless functions_.

Después de eso me hice la pregunta de si sería posible hacer exactamente lo mismo usando NUXT, un framework muy parecido a NEXT, pero con la principal diferencia de que esta enfoca a usuarios de Vue.

El resultado fue satisfactorio: logré crear un _REST API_ _serverless_ sin muchos problemas y desplegarlo en Vercel.

Aqui esta lo que hice.

## Generar una aplicación de NUXT
Hacer una aplicación de NUXT es muy fácil, solo es necesario ejecutar el siguiente comando:
``` sh
npx create-nuxt-app my-app
```

![NUXT setup screenshot](/nuxt-serverless-rest-api-vercel/nuxt-setup.png)

Revisa que la aplicación se creó correctamente ejecutando `yarn dev`. Este ejecutará el servidor de desarrollo de NUXT.

## Escribamos un handler
NUXT tiene soporte para REST API a través de [server middlewares](https://nuxtjs.org/guides/configuration-glossary/configuration-servermiddleware).
Estos nos permiten usar una función como _handler_ de un _request_, y su API es muy parecido al del servidor `http` de node.js, aunque en realidad usa [Connect](https://github.com/senchalabs/connect#appusefn).

En este caso yo creé una ruta para los_handlers_.
```
mkdir api
```

Y dentro de la misma ruta agregué un handler muy simple.
``` js
export default (req, res) => {
  res.end('hello')
}
```


## Configurando el serverMiddleware
Para configurarlo solo agregué la propiedad `serverMiddleware` al archivo `nuxt.config.js`
``` js
export default {
  // ... configs
  serverMiddleware: [
    { path: '/api', handler: '~/api/index.js' }
  ]
}
```

En el ejemplo de arriba podemos identificar dos propiedad en el objeto de configuración: `path` y `handler`.

El `path` manejará todos las rutas que comiencen con este prefijo, por ejemplo `http://localhost/api` y `http://localhost/api/foo/bar` serían rutas validas para ese middleware.

Mientras la propiedad `handler` debe contener la ruta al archivo con la función que manejará las peticiones

## Probemos si se puede ver la pagina
Ahora puedes probar y ver qué response el servidor en la ruta `api/`. En mi casó la url completa es está `http://localhost:3000/api`.

_Así se ve el exito_
![Respuesta del REST API](/nuxt-serverless-rest-api-vercel/rest-api-response.png)

También puedes probar este mismo endpoint usando con este CURL:
``` sh
curl http://localhost:3000/api
```

## Desplegando a Vercel
En lugar de usar la configuración habitual de Vercel para desplegar nuestra app necesitaremos cambiar un par de cosas.

El primer paso será crear un archivo `vercel.json`:
``` json
{
  "version": 2,
  "builds": [
    {
      "src": "nuxt.config.js",
      "use": "@nuxtjs/vercel-builder",
      "config": {
        "serverFiles": [
          "api/**"
        ]
      }
    }
  ]
}
```

En el archivo de arriba podemos identificar un par de cosas importantes. La primera es que estamos usando el builder oficial de NuxtJS para vercel: [@nuxtjs/vercel-builder](https://github.com/nuxt/vercel-builder).

El segundo detalle es que le tenemos que especificar cual es el archivo de configuración de NUXT, por default siempre será `nuxt.config.json`.

Y el tercero y uno más importante es que tenemos que decirle dónde están los archivos del servidor: `serverFiles`. Esto incluye los archivos del serverMiddleware y sus dependencias. En este caso solo tengo un archivo como dependencia, así que solo puse la carpeta `api/**`.

### Agreguemos el repo a Vercel
Aquí hay dos formas de agregar tu repo a vercel: a través de [vercel cli](https://vercel.com/download) y desde su sitio web. Por practicadas lo haré través de la plataforma. Es importante tomar en cuenta que necesitas tener tu código publicado en GitHub, GitLab o BitBucket.

En mi caso yo usó GitHub, e hice la integración con todos los valores por defecto:

![Configuración en plataforma de Vercel](/nuxt-serverless-rest-api-vercel/vercel-platform-config.png)

Aquí puedes ver el resultado de esta guía
* [Preview de la pagina](https://my-nuxt-app-one.vercel.app)
* [Preview del API](https://my-nuxt-app-one.vercel.app/api)
* [El código con la App en NUXT](https://github.com/vicmars5/my-app)
