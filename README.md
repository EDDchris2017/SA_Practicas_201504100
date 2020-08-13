# Practicas Laboratorio Software Avanzado
## Segundo Semestre 2020
## Christopher Lopez 201504100

### TAREA 1 
----------------------------------------

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
   
 ### TAREA 2
-------------------------------------------
#### Descripcion del Proyecto

Manejo de credenciales para consumir los servicios de listar y crear nuevos contactos,
- PARTE 1, Servicio REST token bearer
- PARTE 2, Servicio SOAP basic credentials

#### Herramientas Utilizadas
- Lenguaje : Node JS Javascript
- Libreria AXIOS 0.19.22 para realizar llamadas HTTP

#### ¿Como ejecutar ?
Tener instalado node js y npm en un sistema operativo linux o windows yclonar el Repositorio de la branch "Tarea2"
luego ejecutar el comando "npm install" para instalar las dependecias.
- PARTE 1
    - Ubicarse en la carpeta "PARTE1" 
    -  Ejecutar el comando "node parte1.js
- PARTE 2
    - Ubicarse en la carpeta "PARTE2"
    - Ejecutar el comando "node parte2.js"

#### Formato de Envio XML en Soap
Para enviar los parametros necesarios para llamar a los metodos de listar y crear contactos el formato XML utilizado fue:
- Metodo readList
```xml
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:adm="https://api.softwareavanzado.world/media/redcore/webservices/joomla/administrator.contact.1.0.0.wsdl">
    <soap:Header/>
    <soap:Body>
       <adm:readList>
          <filterSearch>filtrado</filterSearch>
       </adm:readList>
    </soap:Body>
 </soap:Envelope>
```
- Metodo Create
```xml
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:adm="https://api.softwareavanzado.world/media/redcore/webservices/joomla/administrator.contact.1.0.0.wsdl">
    <soap:Header/>
    <soap:Body>
       <adm:create>
          <name>nombre</name>
       </adm:create>
    </soap:Body>
 </soap:Envelope>
```

#### Metodos Utilizados
Se agrego el metodo getToken()
1. getToken()
- Usado para obtener el token bearer usando client credentials en la parte1
    
