<template>
  <v-card elevation="0">
    <v-row>
      <v-col
        cols="12"
        class="d-flex flex-row align-center justify-space-between"
      >
        <v-card elevation="0" class="d-flex flex-row">
          <slot name="buttons"></slot>
          <v-tooltip bottom color="primary">
            <template v-slot:activator="{ on }">
              <v-btn
                icon
                id="btnRefresh"
                @click.native="listar()"
                :class="`primary--text ${idRefresh} mr-3`"
                v-on="on"
              >
                <!-- <v-icon-component icon="refresh" /> -->
              </v-btn>
            </template>
            <span> Actualizar listado </span>
          </v-tooltip>
        </v-card>
      </v-col>
    </v-row>
    <v-skeleton-loader
      :loading="loading"
      transition="fade-transition"
      type="table"
    >
      <v-data-table
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
</template>

<script>
import table from './mixins/table';

export default {
  props: {
    headers: {
      type: Array,
      default: () => [],
    },
    custom: {
      type: Boolean,
      default: false,
    },
    idRefresh: {
      type: String,
      default: 'btn-refresh-list',
    },
    url: {
      type: String,
      default: '',
    },
  },
  name: 'TableList',
  mixins: [table],
  data: () => ({
    loading: false,
    items: [],
  }),
  mounted() {
    setTimeout(3000, () => {
      this.loading = false;
    });
    this.$nextTick(() => {
      try {
        this.listar();
      } catch (error) {
        this.$message.error(
          error.message ?? error.mensaje ?? 'Ocurrio un error',
        );
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
    async listar() {
      const data = await this.list(this.url);
      if (data) {
        return (this.items = data);
      }
    },
  },
};
</script>
