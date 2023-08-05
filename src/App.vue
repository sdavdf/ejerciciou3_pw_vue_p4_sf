<template>
  <DatosConsultarVehiculo />

</template>
 
  
 
 <script>
import DatosConsultarVehiculo from "./modules/vehiculo/components/DatosConsultarVehiculo.vue";
export default {
  name: "App",
  components: {
    DatosConsultarVehiculo
  },
};
</script>
 
  
 
 <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

  -webkit-font-smoothing: antialiased;

  -moz-osx-font-smoothing: grayscale;

  text-align: center;

  color: #2c3e50;

  

  margin: 60px;
}
</style>