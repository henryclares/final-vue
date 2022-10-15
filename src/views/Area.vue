<template>
  <v-card class="area" elevation="0" style="margin: 20px 20px 20px 20px">
    <v-container>
      <h1>REGISTRO DE ÁREAS</h1>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-card class="pa-4" outlined rounded>
          <v-row>
            <v-col cols="12" md="4" xs="12" sm="4" lg="4">
              <strong>Área</strong>
              <v-text-field
                v-model="form.name"
                :rules="rules.text"
                class="mr-2"
                dense
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" xs="12" sm="4" lg="4">
              <strong>Encargado</strong>
              <v-text-field
                v-model="form.encargado"
                :rules="rules.text"
                class="mr-2"
                dense
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" xs="12" sm="4" lg="4">
              <strong>Cantidad de Funcionarios</strong>
              <v-text-field
                v-model="form.cantidadFuncionarios"
                type="number"
                :rules="rules.number"
                class="mr-2"
                dense
                required
                outlined
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="4" xs="12" sm="4" lg="4">
              <br />
              <v-btn color="primary" @click="registrarArea">
                <!-- <v-icon-component icon="save"></v-icon-component> -->
                <span>Guardar</span>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-form>
    </v-container>
    <br />
    <v-container>
      <h2>LISTA DE ÁREAS</h2>
      <v-card class="pa-4" outlined rounded>
        <v-table :headers="headers" :url="url"></v-table>
      </v-card>
    </v-container>
  </v-card>
</template>

<script>
import VTable from '../components/TableList.vue';
import table from '../components/mixins/table';

export default {
  name: 'AreaS',
  components: { VTable },
  mixins: [table],
  data() {
    return {
      headers: [
        {
          text: 'Id',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        {
          text: 'Área',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        {
          text: 'Encargado',
          align: 'center',
          sortable: false,
          value: 'encargado',
        },
        {
          text: 'Cantidad de Funcionarios',
          align: 'center',
          sortable: false,
          value: 'cantidadFuncionarios',
        },
      ],

      valid: false,
      form: {
        name: null,
        encargado: null,
        cantidadFuncionarios: null,
      },
      rules: {
        text: [(v) => !!v || 'Este campo es obligatorio.'],
        number: [
          (v) => !!v || 'Este campo es obligatorio.',
          (v) => +v > 0 || 'El valor debe ser mayor a 0',
        ],
      },
      url: 'areas',
      table: 'table',
    };
  },
  mounted() {
    this.updateList();
  },
  methods: {
    editar() {},
    async registrarArea() {
      const { name, encargado, cantidadFuncionarios } = this.form;
      if (!name || !encargado || !cantidadFuncionarios) {
        this.$message.warning('Debe completar todos los campos.');
        return this.$refs.form.validate();
      }
      if (+cantidadFuncionarios <= 0) {
        this.$message.warning(
          'La cantidad de funcionarios debe ser mayor a 0.',
        );
        return this.$refs.form.validate();
      }
      const respuesta = this.register(this.url, this.form);
      if (respuesta) {
        this.updateList();
        this.form = {};
        return this.$message.success('Registro Exitoso');
      }
      this.$message.warning('Ocurrio un error intentelo nuevamente.');
    },
  },
};
</script>
