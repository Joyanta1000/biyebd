<template>
  <v-container>
    <v-app-bar style="background-color: Green;" app>
      <v-list-item to="/" link>
        <v-list-item-content>
          <v-list-item-title style="color: white;" class="text-h6">
            BiyeBd
          </v-list-item-title>
          <v-list-item-subtitle style="color: white;">
            Welcome to marriage portal
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-spacer></v-spacer>

      <v-menu bottom left class="blue white--text">
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on">
            <v-icon style="color: white;">mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, i) in items_lists"
            :key="i"
            :to="item.path"
            link
          >
            <!-- <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon> -->
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      class="pa-md-4 mx-lg-auto"
    >
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <!-- <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select> -->

      <!-- <v-textarea
        v-model="message"
        :rules="messageRules"
        name="input-7-1"
        label="Message"
        value=""
        hint="Text......"
        required
      ></v-textarea> -->

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="Password"
        value=""
        hint="Password......"
        type="password"
        required
      ></v-text-field>

      <v-text-field
        label="Confirm Password"
        v-model="confirm_password"
        :rules="confirmPasswordRules.concat(passwordConfirmationRule)"
        hint="Confirm Password......"
        type="password"
        required
      ></v-text-field>

      <br />

      <v-btn :disabled="!valid" color="primary" class="mr-4" @click="validate">
        Register
      </v-btn>

      <!-- <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn> -->

      <v-btn color="error" class="mr-4" @click="reset">
        Reset Form
      </v-btn>

      <v-btn color="warning" class="mr-4" @click="resetValidation">
        Reset Validation
      </v-btn>

      <v-btn color="success" class="mr-4" @click="$router.push('/SignIn')">
        SignIn
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
// import Vue from 'vue'
// import Vuex from 'vuex'
// import axios from 'axios'

// Vue.use(Vuex)

// const state = {
//     posts: []
// }

// const getters = {}

// const actions = {
//     getPosts({ commit }) {
//         axios.get('http://127.0.0.1/MyProject/MyTest/showData.php')
//             .then(response => {

//               console.log(response)
//                 commit('SET_POSTS', response.data)
//         })
//     }
// }

// const mutations = {
//     SET_POSTS(state, posts) {
//         state.posts = posts
//     }
// }

// export default new Vuex.Store({
//     state,
//     getters,
//     actions,
//     mutations,

//      mounted() {
//     axios.get('http://127.0.0.1/MyProject/MyTest/showData.php')
//             .then(response => {

//               console.log(response)
//                 // commit('SET_POSTS', response.data)
//         })
//   }

// })

import Vue from "vue";
import Vuex from "vuex";
import "es6-promise/auto";
import VeeValidate from "vee-validate";

Vue.use(Vuex);

Vue.use(VeeValidate);

// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//       store.commit('increment')

// console.log(store.state.count)
//     },

//   },

// });

//  new Vue({
//   el: '#app',
//   store: store,

//   methods: {
//   increment() {
//     this.$store.commit('increment')
//     console.log(this.$store.state.count)
//   }
// }
// })

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment: (state) => state.count++,
    decrement: (state) => state.count--,
  },
});

new Vue({
  computed: {
    count() {
      console.log(store.state.count);
      return store.state.count;
    },
  },
  methods: {
    increment() {
      store.commit("increment");
    },
    decrement() {
      store.commit("decrement");
    },
  },
});
</script>

<script>
import axios from "axios";

export default {
  data: () => ({
    info: null,

    items_lists: [
      { title: "Register", path: "/Register", icon: "mdi-account-key" },
      { title: "SignIn", path: "/SignIn", icon: "mdi-account-key" },
      { title: "About", path: "/about", icon: "view_agenda" },
      { title: "Contact", path: "/contact", icon: "contacts" },
      { title: "Service", path: "/service", icon: "miscellaneous_services" },
    ],

    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    message: "",

    messageRules: [
      (v) => !!v || "Meassage is required",
      (v) =>
        (v && v.length >= 20) || "Message must be greater than 20 characters",
    ],
    password: "",
    confirm_password: "",

    passwordRules: [
      (v) => !!v || "Password is required",
      (v) =>
        (v && v.length >= 6) || "Password must be greater than 6 characters",
      // (v) => v === this.confirm_password || "Password must be same",
    ],

    confirmPasswordRules: [
      (v) => !!v || "Confirm Password is required",
      (v) =>
        (v && v.length >= 6) ||
        "Confirm Password must be greater than 6 characters",
      //   (v) => v == this.password || "Password must be same",
    ],

    // matchingPasswords: function() {
    //   if (this.password == this.confirm_password) {
    //     return true;
    //   } else {
    //     return 'Passwords does not match.';
    //   }
    // },

    // password: '',
    //   confirmPassword: '',
    //   passwordRules: [
    //     (value) => !!value || 'Please type password.',
    //     (value) => (value && value.length >= 6) || 'minimum 6 characters',
    //   ],
    //   confirmPasswordRules: [
    //     (value) => !!value || 'type confirm password',
    //     (value) =>
    //       value === this.password || 'The password confirmation does not match.',
    //   ],

    // password comfirm password must be same
    // select: null,
    // items: [
    //   'Item 1',
    //   'Item 2',
    //   'Item 3',
    //   'Item 4',
    // ],
    // checkbox: false,
  }),

  mounted() {
    axios
      .get("http://127.0.0.1/MyProject/MyTest/showData.php")
      .then(({ data }) => {
        //console.log(data[0])
      })
      .catch(({ data }) => {
        console.error(data);
      });
  },

  methods: {
    // submit () {
    //   this.$refs.form.submit()
    // },
    validate() {
    //   if (
    //     this.password == this.confirm_password &&
    //     this.$refs.form.validate() == true
    //   ) {
        // alert(true);

        console.log(this.name, this.email, this.password, this.confirm_password, );

        let formData = new FormData();

        formData.append("name", this.name);
        formData.append("email", this.email);
        // formData.append("message", this.message);
        formData.append("password", this.password);
        formData.append("password_confirmation", this.confirm_password);
        formData.append("token_name", 12345);
        // formData.append("token_name", 12345);
        // formData.append("action", "insert");

        // console.log(this.name);
        // console.log(this.email);
        // console.log(this.message);

        axios({
          method: "post",
          url: "http://127.0.0.1:8000/api/register",
          data: formData,
          config: {
            headers: { "Content-Type": "application/json; charset=UTF-8" },
          },
        })
          .then(function(response) {
            //handle success

            console.log(response.data.userWithToken.plainTextToken);

            sessionStorage.setItem(
              "plainTextToken",
              response.data.userWithToken.plainTextToken
            );
            // this..start();
            // this.$session.set(
            //   "plainTextToken",
            //   response.data.token.plainTextToken
            // );
            console.log(sessionStorage.getItem("plainTextToken"));
          })
          .catch(function(response) {
            //handle error
            console.log(response);
          });
    //   } else if (this.password != this.confirm_password) {
    //     alert("Passwords not matched");
    //     return "Passwords does not match.";
    //   }
      // alert(this.$refs.form.validate());
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
   computed: {
    passwordConfirmationRule() {
      return () =>
        this.password === this.confirm_password || "Password must match";
    }
  }
};
</script>
