# Practicas Laboratorio Software Avanzado
## Segundo Semestre 2020
## Christopher Lopez 201504100

### Tarea 1 
===

#### Descripcion del Proyecto

Cliente webservice que consume del  servicio https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=hal&format=doc#read-item
con el objetivo de crear nuevos contactos, y listar los contactos ingresados donde el nombre
contenga la cadena : "201504100 " .

#### Herramientas Utilizadas
- Lenguaje : Node JS Javascript
- Libreria request para realizar llamadas HTTP

#### ¿Como ejecutar ?
INDEX : Tarea1.js
- Tener instalado node js y npm en un sistema operativo linux o windows
- clonar el Repositorio de la branch "Tarea1"
- Comando "npm install" para instalar las dependencias
- Comando "node Tarea1.js" para crear los contactos y listarlos con el filtro de la cadena "201504100"

#### Metodos Utilizados
1. crearContacto
    - id
    - Identificador del contacto para crear el contacto
    - Crea un nuevo contacto
    
2. listarContactos
   - filtrado
     -Cadena a buscar en los nombres de contactos
   - Listar todos los contactos que cumplan con la condicion del filtro
3. operacionesTarea1
   - Metodo Principal
   - Crea 10 contactos que incluyen la cadena 201504100 y los lista.
