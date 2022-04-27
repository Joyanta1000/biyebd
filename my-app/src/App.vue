<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer
    dark
    padless
    
    >
    <v-card
      flat
      tile
      width="100%"
      class="green white--text text-center"
    >
      <!-- <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon.iconfont"
          class="mx-4 white--text"
          icon.iconfont
        >
          <v-icon size="24px">
            {{ icon.iconfont }}
          </v-icon>
        </v-btn>
      </v-card-text> -->

      <v-card-text class="white--text pt-0">
        &copy; {{ new Date().getFullYear() }}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>
import "material-design-icons-iconfont/dist/material-design-icons.css";
// src/plugins/vuetify.js

import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";

// import TodoList from './components/TodoList';
// import TodoForm from './components/TodoForm';

Vue.use(Vuetify);

export default {
  name: "App",
  components: {
    // TodoList,
    // TodoForm,
  },
  data() {
    return {
      //   appTitle: 'Template',
      //   sidebar: false,
      //   menuItems: [
      //       { title: 'Home', path: '/home', icon: 'home' },
      //       { title: 'Sign Up', path: '/signup', icon: 'face' },
      //       { title: 'Sign In', path: '/signin', icon: 'lock_open' }
      //  ],
    };
  },
  icons: {
    iconfont: "mdi", // default - only for display purposes
  },
};

// export default {
//   name: 'App',
//   data(){
//     return {
//     //   appTitle: 'Template',
//     //   sidebar: false,
//     //   menuItems: [
//     //       { title: 'Home', path: '/home', icon: 'home' },
//     //       { title: 'Sign Up', path: '/signup', icon: 'face' },
//     //       { title: 'Sign In', path: '/signin', icon: 'lock_open' }
//     //  ],
//      items: [
//           { title: 'Dashboard', path: '/home', icon: 'dashboard' },
//           { title: 'Photos', path: '/photos', icon: 'image' },
//           { title: 'About', path: '/about', icon: 'view_agenda' },
//           { title: 'Contact', path: '/contact', icon: 'contacts' },
//           { title: 'Service', path: '/service', icon: 'miscellaneous_services' },
//         ],
//       items_list: [
//           { title: 'Profile', path: '/profile', icon: 'account' },
//         ],

//     }
//   },
// };
</script>
<style>
.vicon {
  color: rgb(0, 0, 0);
}
.v_menu {
  right: 20px;
}
</style>
