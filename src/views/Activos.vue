<template>
  <v-card class="product" style="margin: 20px 20px 20px 20px" elevation="0">
    <v-container>
      <h1>REGISTRO DE ACTIVOS</h1>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-card class="pa-4" outlined rounded>
          <v-row>
            <v-col cols="12" md="4" xs="12" sm="4" lg="4">
              <strong>Tipo</strong>
              <v-text-field
                v-model="form.tipo"
                :rules="rules.text"
                class="mr-2"
                dense
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" xs="12" sm="4" lg="4">
              <strong>Marca</strong>
              <v-text-field
                v-model="form.marca"
                :rules="rules.text"
                class="mr-2"
                dense
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" xs="12" sm="4" lg="4">
              <strong>Modelo</strong>
              <v-text-field
                v-model="form.modelo"
                :rules="rules.text"
                class="mr-2"
                dense
                required
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4" xs="12" sm="4" lg="4">
              <strong>Estado</strong>
              <v-autocomplete
                v-model="form.estado"
                :items="estados"
                :rules="rules.text"
                item-text="estado"
                outlined
                dense
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" md="4" xs="12" sm="4" lg="4">
              <strong>Área</strong>
              <v-autocomplete
                v-model="form.idArea"
                :items="areas"
                :rules="rules.text"
                item-text="name"
                outlined
                dense
              ></v-autocomplete>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="4" xs="12" sm="4" lg="4">
              <br />
              <v-btn color="primary" @click="registrarActivo">
                <!-- <v-icon-component icon="save"></v-icon-component> -->
                <span>Guardar</span>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-form>
    </v-container>
    <v-container>
      <h2>LISTA DE ACTIVOS</h2>
      <v-card class="pa-4" outlined rounded>
        <v-skeleton-loader
          :loading="loading"
          transition="fade-transition"
          type="table"
        >
          <v-data-table
            ref="table"
            :headers="getHeaders"
            :items="items"
            :items-per-page="5"
            :loading="loading"
            loading-text="Cargando registros..."
            rowsPerPageText="filas por pagina"
            no-results-text="No se encontraron registros que coincidan"
            :mobile-breakpoint="600"
            :footer-props="{
              itemsPerPageOptions: [5, 10, 20, 50],
              itemsPerPageAllText: 'todos',
              itemsPerPageText: 'Filas por página',
            }"
          >
          </v-data-table>
          <template v-slot:[`item.ACTIONS`]="{ item }">
            <slot name="actions" :props="item"></slot>
          </template>
          <template v-slot:item="{ item }" v-if="custom">
            <slot name="items" :items="item"></slot>
          </template>
        </v-skeleton-loader>
      </v-card>
    </v-container>
  </v-card>
</template>
<script>
// import VTable from '../components/TableList.vue';
import table from './mixins/table';

export default {
  name: 'ActivosS',
  // components: { VTable },
  mixins: [table],
  data() {
    return {
      valid: false,
      headers: [
        {
          text: 'Id',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        {
          text: 'Tipo',
          align: 'center',
          sortable: false,
          value: 'tipo',
        },
        {
          text: 'Marca',
          align: 'center',
          sortable: false,
          value: 'marca',
        },
        {
          text: 'Modelo',
          align: 'center',
          sortable: false,
          value: 'modelo',
        },
        {
          text: 'Estado',
          align: 'center',
          sortable: false,
          value: 'estado',
        },
        {
          text: 'Area',
          align: 'center',
          sortable: false,
          value: 'idArea',
        },
      ],
      url: 'activos',
      form: {
        tipo: null,
        marca: null,
        modelo: null,
        estado: 'NUEVO',
        idArea: null,
      },
      areas: [],
      rules: {
        text: [(v) => !!v || 'Este campo es obligatorio.'],
        number: [
          (v) => !!v || 'Este campo es obligatorio.',
          (v) => +v > 0 || 'El valor debe ser mayor a 0',
        ],
      },
      estados: ['NUEVO', 'USADO', 'DESUSO'],
      table: 'table',
      items: [],
      custom: false,
      loading: false,
    };
  },
  mounted() {
    // this.updateList();
    // this.listarAreas();
    this.$nextTick(() => {
      try {
        this.listar();
      } catch (error) {
        this.$message.error(error.message ?? 'Ocurrio un error');
      }
    });
  },
  computed: {
    getHeaders() {
      const items = [];
      this.headers.map((el) => {
        el.align = 'left';
        items.push(el);
      });
      return items;
    },
  },
  methods: {
    async listarAreas() {
      await this.$service
        .get('areas')
        .then((data) => {
          this.areas = data;
        })
        .catch((err) => this.$message.error(err));
    },
    async listar() {
      // console.log('LIST');
      const data = await this.list(this.url);
      if (data) {
        return (this.items = data);
      }
    },
    async registrarActivo() {
      const { marca, modelo, estado, idArea, tipo } = this.form;
      if (!marca || !modelo || !estado || !idArea || !tipo) {
        this.$message.warning('Debe completar todos los campos.');
        return this.$refs.form.validate();
      }
      const area = this.areas.find((a) => a.name === idArea);
      const data = {
        marca,
        modelo,
        estado,
        idArea: area.id,
        tipo,
      };
      const respuesta = this.register(this.url, data);
      if (respuesta) {
        this.listar();
        this.form = { estado: 'NUEVO' };
        return this.$message.success('Registro Exitoso');
      }
      this.$message.warning('Ocurrio un error intentelo nuevamente.');
    },
  },
};
</script>
