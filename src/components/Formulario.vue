<template>

    <section class="src-components-formulario">
        <div class="jumbotron">
            <h2> Formulario</h2>
            <hr>

            <!-- formulario con el evento submit(apretar botón) llama a metodo enviar  -->
            <form novalidate autocomplete="off" @submit.prevent="enviar()">

                <!-- ingreso de dato nombre -->
                <div class="form-group">
                    <label for="nombre"> Nombre </label>
                    <input type="text" id="nombre" class="form-control" v-model="$v.f.nombre.$model">
                </div>


                <!-- cartel de validación nombre -->

                <div v-if="$v.f.nombre.$error && $v.f.nombre.$dirty" class="alert alert-danger mt-1">
                    <div v-if="$v.f.nombre.required.$invalid">Este campo es requerido</div>
                    <div v-else-if="$v.f.nombre.minLength.$invalid">Este campo debe tener 5 caracteres como minimo</div>
                    <div v-else-if="$v.f.nombre.maxLength.$invalid">Este campo debe tener 15 caracteres como maximo</div>

                </div>

                <!-- ingreso de dato edad -->
                <div class="form-group">
                    <label for="edad"> Edad </label>
                    <input type="number" id="edad" class="form-control" v-model="$v.f.edad.$model">
                </div>

                <!-- cartel de validación edad -->
                <div v-if="$v.f.edad.$error && $v.f.edad.$dirty" class="alert alert-danger mt-1">
                    <div v-if="$v.f.edad.required.$invalid">Este campo es requerido</div>
                    <div v-else-if="$v.f.edad.between.$invalid">La edad valida es entre 18 y 120 años</div>

                </div>

                <!-- ingreso de dato email -->
                <div class="form-group">
                    <label for="email"> Email </label>
                    <input type="text" id="email" class="form-control" v-model.trim="$v.f.email.$model">
                </div>

                <!-- cartel de validación email -->
                <div v-if="$v.f.email.$error && $v.f.email.$dirty" class="alert alert-danger mt-1">
                    <div v-if="$v.f.email.required.$invalid">Este campo es requerido</div>
                    <div v-else-if="!$v.f.email.required.$invalid">Este campo tiene que ser un email</div>
                </div>

                <!-- Botón de envio -->
                <div class="form-group">
                    <input type="submit" class="btn btn-success mt-4" value="Enviar" :disabled="!(!$v.f.$invalid && $v.f.email.$dirty && $v.f.edad.$dirty && $v.f.nombre.$dirty)">
                </div>
            </form>
        </div>
    </section>

</template>

<script>

import {
  email,
  required,
  between,
  minLength,
  maxLength
} from '@vuelidate/validators'

export default {
  name: 'src-components-formulario',
  props: [],
  mounted() {

  },
  data() {
    return {
      f: this.resetCasillas(),
      url: 'https://5faa6410b5c645001602a795.mockapi.io/datosform'

    }
  },
  // acá valido los campos de f (formulario)
  validations: {
    f: {
      nombre: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(15)
      },
      edad: {
        required,
        between: between(18, 120)

      },
      email: {
        required,
        email
      }
    }
  },

  methods: {

    //Envio los datos del formulario al backend con AXIOS- POST
    async sendDatosForm(datos) {
      try {
        let response = await this.axios.post(this.url, datos, {
          'content-type': 'application/json'
        })
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    },

    // SUBMIT DEL FORMULARIO
    enviar() {
      let datosForm = {
        nombre: this.$v.f.nombre.$model,
        edad: this.$v.f.edad.$model,
        email: this.$v.f.email.$model
      }
      console.log(datosForm);
      //envio los datos al backend:
      this.sendDatosForm(datosForm);
      this.f = this.resetCasillas();
      this.$v.$reset();
    },

    // REINICIO DE LOS DATOS- PONE EN BLANCO LAS CASILLAS COMPLETADAS 
    resetCasillas() {
      return {
        nombre: '',
        edad: '',
        email: ''
      }
    }

  },
  computed: {

  }
}

</script>

<style scoped lang="css">

  .jumbotron {
    background-color: rgb(25, 184, 144);
    color: white;
  }

  hr {
    background-color: #ddd;
  }

  .btn {
    border: none;
    background-color: white;
    font-family: "Montserrat", "Avenir";
    text-transform: uppercase;
    height: 100%;
    font-weight: 700;
    letter-spacing: 1px;
    color: steelblue;
    transition: all 0.3s;
    outline: none;
  }
  .btn:hover {
    color: white;
    background-color: rgb(216, 95, 15);
  }

</style>
