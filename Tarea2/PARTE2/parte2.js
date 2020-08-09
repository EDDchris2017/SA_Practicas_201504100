/**
 * Practica2
 * Parte 2
 * Usar credenciales client_credentials y token Bearer
 */
const axios = require('axios').default

 /**
 * Crea un nuevo contacto
 * @param {Nombre del contacto junto con el nombre de carnet} id 
 */
function crearContacto(id)
{
    let nombre = 'contacto_'+id+'_parte2_201504100'
    let xml_string = '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:adm="https://api.softwareavanzado.world/media/redcore/webservices/joomla/administrator.contact.1.0.0.wsdl">'+
    '<soap:Header/>'+
    '<soap:Body>'+
       '<adm:create>'+
          '<name>' + nombre + '</name>'+
       '</adm:create>'+
    '</soap:Body>'+
 '</soap:Envelope>'
    // Formato de envio JSON
    let envio_insertar = {
        method: 'post',
        url: 'https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=soap',
        data: xml_string,
        headers : {
            'content-type':'text/xml'
        },
        auth: {
            username: 'sa',
            password: 'usac'
        }
    }

    return new Promise(resolve => {
        axios(envio_insertar)
        .then( function (response) {
            console.log("Contacto " + nombre + " creado !!")
        })
        .catch( function (error){
            console.log("Error al crear el contacto " + nombre)
            console.log(error)
        });
    });
}

/**
 * Listar todos los contactos que cumplan con la condicion del filtro
 * @param {Cadena a buscar en los nombres de contactos} filtrado 
 */
async function listarContactos(filtrado)
{
    let xml_string = '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:adm="https://api.softwareavanzado.world/media/redcore/webservices/joomla/administrator.contact.1.0.0.wsdl">'+
    '<soap:Header/>'+
    '<soap:Body>'+
       '<adm:readList>'+
          '<filterSearch>' + filtrado + '</filterSearch>'+
       '</adm:readList>'+
    '</soap:Body>'+
 '</soap:Envelope>'

    let opcion_listar = {
        method: 'get',
        url: 'https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=soap',
        data: xml_string,
        headers : {
            'content-type':'text/xml'
        },
        auth: {
            username: 'sa',
            password: 'usac'
        }
    };
    return new Promise(resolve => {
        axios(opcion_listar)
        .then( function (response) {
            console.log(response);
        })
        .catch( function (error){
            console.log("Error al listar contactos " + nombre)
        });
    })
}



/**
 * Realizar instrucciones para Practica 2 parte1
 */
function parte2Practica2()
{

    //Insertar 10 Contactos
    for (let num = 1; num <= 10; num++) { 
        crearContacto(num);
    }

    // listar contactos
    listarContactos('parte2_201504100')
}

// EJECUTAR COMANDOS
parte2Practica2();