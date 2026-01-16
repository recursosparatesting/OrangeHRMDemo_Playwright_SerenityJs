# Playwright + Serenity Js multibrowser  
Este repositorio contiene una prueba UI de login para el sitio ORANGE HRM Demo, que contiene 3 casos de prueba:  

* login exitoso (@loginExitoso)  
* validacion de mensaje de error cuando se ingresan credenciales incorrectas (@mensajeError)  
* logout (@logout)  

La ATM implementa el patron de diseño para pruebas automatizadas Screenplay y esta desarrollada con los siguientes frameworks:  
* Playwright  
* Serenity JS  

## 📋 Requisitos  
* node js  
* playwright  
* Serenity JS  

## 🚀 Pipeline de Ejecucion en GibhubActions

Cuando se realiza un push a la rama main, se ejecuta automaticamente el caso de prueba @loginExitoso.

La configuracion de ejecución manual,  permite ingresar los valores de usuario y contraseña, al igual que elegir el caso de prueba a ejecutar.


## 🚀 Para instalar los requisitos en local:  

Para instalar Node JS:  
puede ir a la pagina https://nodejs.org/en/download y seguir las instrucciones de instalacion deacuerdo a su sistema operativo.

Para instalar Playwright (desde consola de comandos win o linux):  
npm init playwright@latest  

Para instalar SerenityJS (desde consola de comandos win o linux):  
npm install --save-dev @serenity-js/core @serenity-js/console-reporter @serenity-js/playwright @serenity-js/playwright-test @serenity-js/rest @serenity-js/web @serenity-js/serenity-bdd  

para ejecutar en local, puede descargar el repositorio y ejecutar los siguientes comandos:  

TEST_USER="tester" TEST_PASS="tester123" npm test --grep @mensajeError  

cambie los datos de tester, tester123 y @mensajeError por los datos que considere, deacuerdo a los resultados que espera.  
