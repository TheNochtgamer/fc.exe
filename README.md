# 🎂 FC.EXE

Un programa hecho en NodeJs para saludar a alguien por su compleaños con un mensaje customizable que se entrega en formato de **archivos**

<br>

## 📑 Requisitos
* `Node Js` > 16

## 🛠️ Clona y Compila
1. Clona el repositorio
2. Abre una ventana de **cmd** o **bash** dentro del directorio
3. Ejecuta `npm install`
4. Rellena los archivos [*build-config.json*](https://github.com/TheNochtgamer/fc.exe/blob/master/build-config.json) y */src/[config.json](https://github.com/TheNochtgamer/fc.exe/blob/master/src/config.json)*
5. Y por ultimo ejecuta `npm run build`

* Se deberia generar una carpeta llamada __bin__ con el ejecutable dentro

## 🧮 Ejemplos de configuracion

### build-config.json
```json
{
    "ver": "1.0.0",
    "filename": "FC.exe",
    "filedesc": "feliz cumpleaños",
    "target": "latest-win-x64",
    "iconfile": "fc.ico",
    "productname": "fc.exe",
    "copyright": "TheNochtgamer"
}
```
- Si necesitas copilarlo para otro sistema que no sea windows, puedes ver los **targets** disponibles [**aquí**](https://www.npmjs.com/package/pkg#targets)
  
<br>

### config.json
```json
{
    "folderName": "Fc.exe",
    "mensaje": "Este es un mensaje de prueba.",
    "link": "https://www.youtube.com/watch?v=sigge8kJ9wg"
}
```
