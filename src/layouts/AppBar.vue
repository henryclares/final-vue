<template>
  <div class="">
    <v-card class="" elevation="0" style="">
      <v-app-bar color="deep-purple" dark>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title>FINAL PROJECT</v-toolbar-title>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item @click="redirect('activos')">
              <v-list-item-icon>
                <v-icon>mdi-clipboard-text-search</v-icon>
              </v-list-item-icon>
              <v-list-item-title>ACTIVOS</v-list-item-title>
            </v-list-item>

            <!-- <v-list-item @click="redirect('productos')">
              <v-list-item-icon>
                <v-icon>mdi-text-box-edit-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Productos</v-list-item-title>
            </v-list-item> -->

            <v-list-item @click="redirect('areas')">
              <v-list-item-icon>
                <v-icon>mdi-text-box-edit-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>REGISTRO DE ÁREAS</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <router-view />
      </v-main>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
  methods: {
    redirect(path) {
      const location = window.location.pathname;
      const newPath = '/' + path;
      if (location !== newPath) {
        this.$router.push(newPath);
      }
    },
  },
};
</script>
