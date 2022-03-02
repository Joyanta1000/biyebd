<template>
  <v-app>
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- route link -->
      <router-link to="/home">Home</router-link>
      <!-- <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/admin">Admin</router-link> -->
      <!-- route view -->
      <router-view></router-view>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>


export default {
  name: "App",

  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>
