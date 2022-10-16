<template>
  <v-card class="producto" elevation="0" style="margin: 20px 20px 20px 20px">
    <h1>Category List</h1>
    <v-spacer></v-spacer>
    <v-divider></v-divider>
    <!-- <v-table :headers="headers" :items="url"> -->
      <!-- <template slot="items" slot-scope="items.ACTIONS">
        <td>
          <v-tooltip bottom color="primary">
            <template v-slot:activator="{ on }">
              <v-btn
                icon
                v-on="on"
                :color="'success'"
                @click.prevent="edit(items)"
              >
                <v-icon-component icon="edit" />
              </v-btn>
            </template>
            <span>{{ 'Editar' }}</span>
          </v-tooltip>
        </td>
      </template> -->
    <!-- </v-table> -->
  </v-card>
</template>

<script>
// import VTable from '../components/TableList.vue';
export default {
  name: 'ProductoS',
  // components: { VTable },
  data() {
    return {
      headers: [
        // {
        //   text: 'Acciones',
        //   divider: false,
        //   sortable: false,
        //   align: 'center',
        //   value: 'ACTIONS',
        // },
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
      ],
    };
  },
  methods: {
    editar() {},
  },
};
</script>
