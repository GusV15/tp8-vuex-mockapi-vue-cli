<template>
  <div class="container-fluid mt-3">
    <div class="jumbotron">
      <NavBar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from './components/Navbar.vue';
export default {
  name: 'App',
  components: {
    NavBar,
  },
};
</script>

<style>
.jumbotron {
  padding: 2rem !important;
}

.jumbotron section {
  background-color: rgb(0, 47, 128);
  color: white;
  padding: 15px;
  border-radius: 10px;
}

.jumbotron section:first-child {
  background-color: brown;
}

.jumbotron section:last-child {
  background-color: rgb(0, 128, 6);
}

.jumbotron section:last-child table {
  color: white;
  font-size: 1rem;
}
</style>
