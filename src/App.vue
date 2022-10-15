<template>
  <v-app>
    <app-bar> </app-bar>
  </v-app>
</template>

<script>
import AppBar from './layouts/AppBar.vue';

export default {
  name: 'App',
  components: { AppBar },
  data: () => ({
    //
  }),
  mounted() {
    this.$router.push('/home');
  }
};
</script>
