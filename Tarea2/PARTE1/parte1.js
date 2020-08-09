/**
 * Practica2
 * Parte1
 * Usar credenciales client_credentials y token Bearer
 */

 // ============================ LIBRERIAS ===========================
 const axios = require('axios').default
 var token_acceso = "";

/**
 * Obtener Token bearer con credenciales
 */
 async function getToken(){
    let parametros = {
        method: 'post',
        url: 'https://api.softwareavanzado.world/index.php?option=token&api=oauth2',
        data: {
            grant_type: 'client_credentials',
            client_id: 'sa',
            client_secret: 'fb5089840031449f1a4bf2c91c2bd2261d5b2f122bd8754ffe23be17b107b8eb103b441de3771745'
        }
    }

    return new Promise(resolve => {
        axios(parametros)
        .then( function (response) {
            resolve(response.data.access_token)
        })
        .catch( function (error) {
            console.log(error)
        });
    });
}

 /**
 * Crea un nuevo contacto
 * @param {Nombre del contacto junto con el nombre de carnet} id 
 */
async function crearContacto(id)
{
    let nombre = 'contacto_'+id+'_parte1_201504100'
    // Formato de envio JSON
    let envio_insertar = {
        method: 'post',
        url: ' https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=hal'
            + '&access_token=' + token_acceso,
        data: {
            name: nombre
        },
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
    let opcion_listar = {
        method: 'get',
        url: 'https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact' +
            '&filter[search]='+filtrado +
            '&access_token=' + token_acceso +
            '&api=Hal',
    };
    return new Promise(resolve => {
        axios(opcion_listar)
        .then( function (response) {
            console.log(response.data._embedded);
        })
        .catch( function (error){
            console.log("Error al listar contactos " + nombre)
        });
    })
}

/**
 * Realizar instrucciones para Practica 2 parte1
 */
async function parte1Practica2()
{
    // Obtener token de acceso
    token_acceso = await getToken(); 

    //Insertar 10 Contactos
    for (let num = 1; num <= 10; num++) { 
        crearContacto(num);
    }

    // listar contactos
    listarContactos('parte1_201504100')
}

// EJECUTAR COMANDOS
parte1Practica2();
