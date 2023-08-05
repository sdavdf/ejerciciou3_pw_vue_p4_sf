import axios from "axios";

export const obtenerVehiculoFachada = async (placa) => {
  console.log('Axios');
  return await obtenerVehiculoAPIAxios(placa);
};


const obtenerVehiculoAPIAxios = async(placa) => {
  const data = axios.get(`http://localhost:8081/API/v1.0/Inventario/vehiculos/${placa}`).then(r=>r.data);

  console.log(data);
  return data;
};


export const obtenerTodosVehiculosFachada = async () => {
  try {
    const data = await obtenerTodosVehiculosAPIAxios();
    return data;
  } catch (error) {
    console.error("Error al obtener los vehiculos:", error);
    return [];
  }
};

const obtenerTodosVehiculosAPIAxios = async () => {
  try {
    const response = await axios.get("http://localhost:8081/API/v1.0/Inventario/vehiculos/hateoas").then(r=> r.data);
    const data = response.data;
    console.log(data); 
    return data;
  } catch (error) {
    console.error("Error al obtener los vahiculos desde la API:", error);
    throw error;
  }
};