// REQUIRE

const axios = require('axios'); 




// FUNCION QUE OBTIENE EL LUGAR, LA LONGITUD Y LA LATITUD

const getLugarLatLng = async( dir ) => {

  const encodedUrl = encodeURI( dir );

  const instance = axios.create({
  baseURL: `https://geocode.xyz/?locate=location?city=${ encodedUrl }&auth=318235638180077694387x97232 &json=1`
  });

 const resp = await instance.get();   

  if( resp.data.latt == 0 && resp.data.longt == 0 ) {
    throw new Error(`No hay resultados para ${ dir }`);
  }

  const direccion  = resp.data.standard.city;
  const lat = resp.data.latt;
  const lng = resp.data.longt;


  return {
    direccion,
    lat,
    lng
  }

}


module.exports = {
  getLugarLatLng
}
