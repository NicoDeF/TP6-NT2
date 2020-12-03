<template>

  <section class="src-components-usuarios-registrados">

    <h1 class="display-3">Usuarios registrados en formulario</h1>

      <div class="table-responsive">
          <table class="table table-dark">
       
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

      //pedido de los datos  - GET
      async getDatosForm(){
        try {
      let response= await this.axios(this.url)
      console.log(response.data)
      this.datosForm=response.data;  
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
  h1 {
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#bfd255+0,8eb92a+50,72aa00+51,9ecb2d+100;Green+Gloss */
background: #bfd255; /* Old browsers */
background: -moz-linear-gradient(top,  #bfd255 0%, #8eb92a 50%, #72aa00 51%, #9ecb2d 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top,  #bfd255 0%,#8eb92a 50%,#72aa00 51%,#9ecb2d 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom,  #bfd255 0%,#8eb92a 50%,#72aa00 51%,#9ecb2d 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#bfd255', endColorstr='#9ecb2d',GradientType=0 ); /* IE6-9 */

  }
  
</style>
