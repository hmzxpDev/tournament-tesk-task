<template>
  <v-app>
    <Home />
  </v-app>
</template>

<script>
import Home from "./components/homeComp/Home.vue";

export default {
  name: "App",

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
