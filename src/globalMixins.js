import Vue from 'vue';

const miMixinGlobal = {
  methods: {
    getUsers() {
      this.$store.dispatch('getUsers');
    },
    postUser(newUser) {
      this.$store.dispatch('postUser', newUser);
    },
    deleteUser(id) {
      this.$store.dispatch('deleteUser', id);
    },
  },
  computed: {
    listOfUsers() {
      return this.$store.state.users;
    },
  },
};

Vue.mixin(miMixinGlobal);
