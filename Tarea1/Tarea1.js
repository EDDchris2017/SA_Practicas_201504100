var request = require("request");


/**
 * Crea un nuevo contacto
 * @param {Nombre del contacto junto con el nombre de carnet} id 
 */
async function crearContacto(id)
{
    let nombre = 'contacto'+id+'_201504100'
    // Formato de envio JSON
    let envio_insertar = {
        method: 'POST',
        url: ' https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=hal',
        json: true,
        body: {
            name: nombre
        },
    }
    request(envio_insertar,function (error,response,body){
        if (error) throw new Error(error)
        if ( response.statusCode == 200 || response.statusCode == 201)
        {
            console.log("Contacto " + nombre + "creado !!")
        }else
        {
            console.log("Error al crear el contacto " + nombre)
        }
        
    });
}


/**
 * Listar todos los contactos que cumplan con la condicion del filtro
 * @param {Cadena a buscar en los nombres de contactos} filtrado 
 */
async function listarContactos(filtrado)
{
    let opcion_listar = {
        method: 'GET',
        json:true,
        rejectUnauthorized: false,
        url: 'https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact' +
            '&filter[search]='+filtrado +
            '&api=Hal',
    };
    request(opcion_listar, function (error, response, body) {
        if (error) throw new Error(error);
        if (response.statusCode == 200) {
            console.log("------- CONTACTOS -------");
            console.log("TOTAL CONTACTOS = " + body.totalItems)
            console.log(body._embedded);
        } else {
            console.log("Error al mostrar Contactos");
        }
    });
}

// ------------------------- TAREA 1 ---------------------
async function operacionesTarea1()
{
    //Insertar 10 Contactos
    for (let num = 1; num <= 10; num++) { 
        await crearContacto(num);
    }
    //Listar Contactos
    await listarContactos('201504100');
}

// EJECUTAR COMANDOS
operacionesTarea1();