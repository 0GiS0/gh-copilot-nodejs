# GitHub Copilot para los amantes de Nodejs 💚

Para poder ejecutar estas demos necesitas:

- Docker 🐋 instalado en tu máquina.
- La extensión [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) 🛳️ en Visual Studio Code.
- Clona este repo 👩‍💻
- O también puedes ejecutarlo en GitHub Codespaces 🐈‍⬛ [Echa un vistazo a este vídeo](https://www.youtube.com/watch?v=0qKG37C8sb8)

## Demos con Copilot Chat

1. **¿Cómo puedo crear una API en Node.js?** 🤔 (hazle caso 🫡)
2. Si no tienes ni idea de Node.js también puedes hacerle preguntas como esta: **¿Qué frameworks hay en Node.js para crear APIs?** 🤔
3. **@workspace /new crear una API con un CRUD de heroes en Node.js con Express.js**
Este comando hay que escribirlo a mano (no vale con copiarlo directamente desde aquí porque entonces no va a interpretar bien el comando /new) ¡Dile que si! 💍

## Demos guiadas a través del propio archivo

1. Abre el archivo llamado ghcopilot-web/server.js
2. Dentro de este pulsa enter justo después del comentario donde se explica que se va a crear un servidor web.
3. Copilot te sugerirá el código en gris y si pulsas la tecla tabulador lo escribirá por ti.

<img src="images/GH Copilot - Como ver la sugerencia en el propio archivo.png" />

4. Con Control + Intro puedes ver todas las sugerencias.

<img src="images/GH Copilot - Ver todas las sugerencias.png" width="50%">

## Demos con GitHub Copilot Labs

Puedes conseguir acceso a esta extensión [a través de este enlace](https://githubnext.com/projects/copilot-labs/). 

GitHub Copilot labs es una extensión que puedes instalar también en tu Visual Studio Code para probar nuevas ideas que se están desarrollando alrededor de GitHub Copilot.

<img src="images/GH Copilot Labs.png" width="50%">

En el directorio llamado labs tienes varios ejemplos que te van a permitir jugar con cada una de las secciones de esta extensión.

### Explicar código

Un ejemplo que puedes utilizar es labs/explain-code-demo.js. Solamente tienes que seleccionar la parte del código que quieres que te explique y hacer clic en el botón Explain Code de la extensión.

<img src="images/GH Copilot Labs - Explain code.png" />

### Language translation

Este mismo ejemplo puedes utilizarlo para que lo traduzca a otro lenguaje. Por ejemplo, puedes seleccionar de nuevo el código y elegir Python.

<img src="images/GH Copilot Labs - Translate code.png" />


### Brushes

Se trata de la botonera que tiene diferentes opciones preconstruídas:

<img src="images/GH Copilot Labs - Brushes.png" />

1. **READABLE**: Te permite convertir el código en un formato más legible.

Abre el archivo **labs/brushes-readable.js** y haz clic en el botón **READABLE**. Verás como te cambia el código.

2. **ADD TYPES**: Te permite añadir tipos a tu código.

Abre el archivo **labs/brushes-add-types.ts** y haz clic en el botón **ADD TYPES**. Verás como te añade los tipos.

3. **FIX BUGS**: Te permite arreglar los bugs que encuentre en tu código.

Abre el archivo llamado **labs/brushes-fix-bug.js** y selecciona desde la línea 30 a la 40. Ahora pulsa el botón **FIX BUGS** y verás como te arregla el código.

4. **DEBUG**: Te permite añadir console.log para debugar tu código.

Abre el archivo **labs/brushes-debug.js** y haz clic en el botón **DEBUG**. Verás como te añade los console.log.

5. **CLEANUP**: Te permite limpiar tu código.

Abre el archivo **labs/brushes-cleanup.js** y haz clic en el botón **CLEANUP**. Verás como te limpia el código.

6. **LIST STEPS**: Te permite listar los pasos que ha seguido para llegar a ese código.

Abre el archivo **labs/explain-code-demo.js**, selecciona todo el código y pulsa el botón. Comprobarás que te añade comentarios explicando el código.

7. **MAKE ROBUST**: Te permite hacer tu código más robusto.

8. **CHUNK**: Te permite dividir tu código en trozos más pequeños.

9. **DOCUMENT**: Te permite documentar tu código.

10. **CUSTOMIZE**: Te permite elegir el prompt.

Puedes decirle cosas como: Pon este código en una función, o pon este código en un bucle.

### Test generation

### Reescribir a través de la bombilla 💡

### Sugerencias de commits

Ahora puedes pedirle a GitHub Copilot que te sugiera un comentario para el commit que vas a hacer, en base a los cambios que has hecho en el código.

<img src="images/GH Copilot te ayuda con los mensajes de tus commits.png" />

[Más información sobre GitHub Copilot](https://github.com/features/copilot)