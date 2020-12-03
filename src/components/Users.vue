<template>

  <section class="src-components-usuarios-registrados">
    <h1>DATOS INGRESADOS EN FORMULARIO</h1>

      <div class="table-responsive">
          <table class="table">
            <tr class="bg-success text-white">
              <th>Nombre</th>
              <th>Edad</th>
              <th>Email</th>
            </tr>
            <tr
              class="bg-info text-white"
              v-for="(dato, index) in datosForm"
              :key="index"
            >
              <td>{{ dato.nombre }}</td>
              <td>{{ dato.edad }}</td>
              <td>{{ dato.email }}</td>
            </tr>
          </table>
          </div>




  </section>

</template>

<script>

  export default  {
    name: 'src-components-usuarios-registrados',
    props: [],
    mounted () {
      this.getDatosForm()
    },
    data () {
      return {
        url : 'https://5faa6410b5c645001602a795.mockapi.io/datosform',
        datosForm:[]
      }
    },
    methods: {

      //pedido de los datos almacenados en el backend - GET
      async getDatosForm(){
        try {
      let response= await this.axios(this.url)
      console.log(response.data)
      this.datosForm=response.data;    // cargo el array de datos con los datos del form que viene del backend
        } catch (error) {
          console.log('get error' , error)
        }

      },

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-usuarios-registrados {

  }
</style>
