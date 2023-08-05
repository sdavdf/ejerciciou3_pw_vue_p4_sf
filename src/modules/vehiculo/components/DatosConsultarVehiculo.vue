<template>
  <div class="form-container">
    <div class="form-row">
      <div class="form-field">
        <label for="id">ID</label>
        <input
          v-model="id"
          type="text"
          id="id"
          placeholder="Ingrese el ID"
        />
      </div>

      <div class="form-field">
        <label for="placa">Placa</label>
        <input
          v-model="placa"
          type="text"
          id="placa"
          placeholder="Ingrese la placa"
        />
      </div>

      <div class="form-field">
        <label for="anio">Año</label>
        <input
          v-model="anio"
          type="text"
          id="anio"
          placeholder="Ingrese el año"
        />
      </div>

      <div class="form-field">
        <label for="color">Color</label>
        <input
          v-model="color"
          type="text"
          id="color"
          placeholder="Ingrese el color"
        />
      </div>

      <div class="form-field">
        <label for="marca">Marca</label>
        <input
          v-model="marca"
          type="text"
          id="marca"
          placeholder="Ingrese la marca"
        />
      </div>
    </div>

    <button class="submit-button" @click="consultarVehiculos">
      Consultar
    </button>
  </div>
</template>

<script>
import { obtenerTodosVehiculosFachada } from "../helpers/VehiculoClient.js"

export default {
  data() {
    return {
      id: null,
      placa: null,
      anio: null,
      color: null,
      marca: null
    };
  },
  methods: {
    async consultarEstudiante() {
      const data = await obtenerTodosVehiculosFachada();
      this.id = data.id;
      this.placa = data.placa;
      this.anio = data.anio
      this.color = data.color
      this.marca = data.marca
      console.log(data);
    },
  },
};
</script>

<style>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;

}

.form-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.form-field {
  margin: 10px; 
}

.submit-button {
  margin-top: 10px; 
}
</style>