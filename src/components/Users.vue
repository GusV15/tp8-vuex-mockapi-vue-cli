<template lang="html">
  <section class="content">
    <h2>User data</h2>
    <hr class="bg-white" />
    <table v-if="listOfUsers.length" class="table table-dark">
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
      <tr v-for="{ name, age, email, id } in listOfUsers" :key="id">
        <td>{{ name }}</td>
        <td>{{ age }}</td>
        <td>{{ email }}</td>
        <td>
          <button class="btn btn-danger" @click="deleteUserById(id)">
            delete
          </button>
        </td>
      </tr>
    </table>
    <span class="alert alert-secondary" v-if="listOfUsers.length"
      >Count Users: {{ listOfUsers.length }}</span
    >
    <div
      v-else-if="!listOfUsers.length"
      class="alert alert-warning"
      role="alert"
    >
      Users have not loaded.
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-users',
    props: [''],
    mounted () {
      this.getUsers();

    },
    data () {
      return {
        users: this.listOfUsers,
        countUsers: this.listOfUsers?.length
      }
    },
    methods: {
      deleteUserById(id) {
        this.deleteUser(id);
        this.$swal({
        icon: 'success',
        title: `The user was deleted`,
      });
      }
    },
    computed: {

    }
}
</script>

<style scoped lang="css"></style>
