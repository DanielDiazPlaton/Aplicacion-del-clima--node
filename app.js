
//Required

const lugar = require('./lugar/lugar.js'); 
const clima = require('./climas/clima.js');

const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Direccion de la ciudad para obtener el clima',
    demand: true
  }
}).argv;

/*lugar.getLugarLatLng( argv.direccion )
  .then( console.log )
  .catch( err => {
    console.log( err );
  });

clima.getClima( 40.75000, -74.00000 )
  .then( console.log )
  .catch( err => {
    console.log(err);
  }); */

const getInfo = async ( dir ) => {

  try {

    const coords = await lugar.getLugarLatLng( dir );

    const temp = await clima.getClima( coords.lat, coords.lng );

    return `El clima de ${ coords.direccion } es de ${ temp }°C`;

  } catch ( e ) {

    return `No se pudo determinar el clima de ${ dir }`;
  }


}


getInfo( argv.direccion )
  .then( console.log )
  .catch( console.log );
