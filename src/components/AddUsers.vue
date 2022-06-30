<template lang="html">
  <div class="jumbotron">
    <section class="content">
      <h2 class="my-0">My Form with VueForm</h2>
      <hr class="bg-white" />
      <vue-form :state="formState" @submit.prevent="sendData">
        <validate tag="div">
          <label class="my-2" for="name">Name</label>
          <input
            class="form-control"
            type="text"
            id="name"
            name="name"
            autocomplete="off"
            required
            :minlength="nameMinLength"
            :maxlength="nameMaxLength"
            v-model="formData.name"
          />
          <field-messages name="name" show="$dirty">
            <div class="alert alert-danger m-1 p-1" slot="required">
              Required field
            </div>
            <div class="alert alert-danger m-1 p-1" slot="minlength">
              The name must contain at least {{ nameMinLength }} characters.
            </div>
            <div class="alert alert-danger m-1 p-1 text-red" slot="maxlength">
              The name must contain a maximum of {{ nameMaxLength }} characters.
            </div>
          </field-messages>
        </validate>
        <validate tag="div">
          <label class="my-2" for="age">Age</label>
          <input
            class="form-control"
            type="number"
            id="age"
            name="age"
            autocomplete="off"
            required
            :min="ageMin"
            :max="ageMax"
            v-model="formData.age"
          />
          <field-messages name="age" show="$dirty">
            <div class="alert alert-danger m-1" slot="required">
              Required field
            </div>
            <div class="alert alert-danger m-1" slot="min">
              The minimum age allowed is {{ ageMin }} years
            </div>
            <div class="alert alert-danger m-1" slot="max">
              The maximum age allowed is {{ ageMax }} years
            </div>
          </field-messages>
        </validate>
        <validate tag="div">
          <label class="my-2" for="email">Email</label>
          <input
            class="form-control"
            type="email"
            id="email"
            name="email"
            autocomplete="off"
            required
            v-model="formData.email"
          />
          <field-messages name="email" show="$dirty">
            <div class="alert alert-danger m-1" slot="required">
              Required field
            </div>
            <div class="alert alert-danger m-1" slot="email">Invalid email</div>
          </field-messages>
        </validate>
        <button
          class="btn btn-primary mt-4"
          type="submit"
          :disabled="formState.$invalid"
        >
          Send
        </button>
      </vue-form>
    </section>
    <hr />
  </div>
</template>

<script lang="js">

  export default  {
    name: 'addUsers-view',
    props: [],
    mounted () {

    },
    data () {
      return {
      formState: {},
      formData: this.startFormData(),
      nameMinLength: 5,
      nameMaxLength: 15,
      ageMin: 18,
      ageMax: 120,
    };
    },
    methods: {
      startFormData() {
        return {
          name: "",
          age: "",
          email: "",
        };
      },
      sendData() {
        const newUser = { ...this.formData };
        this.postUser(newUser);
        let redirect = this.$router.push({ name: 'users' });
        this.$swal({
          icon: 'success',
          title: 'User added successful',
        }).then(function () {
          redirect;
        });
        this.startFormData();
      },
    },
    computed: {

    }
}
</script>

<style lang="css"></style>
