<template>
  <v-card elevation="0">
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
export default {
  props: {
    headers: {
      type: Array,
      default: () => [],
    },
    items: {
      type: Array,
      default: () => [],
    },
    custom: {
      type: Boolean,
      default: false,
    },
  },
  name: 'TableList',

  data: () => ({
    loading: false,
    // items: [],
  }),
  mounted() {
    setTimeout(3000, () => {
      this.loading = false;
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
};
</script>
