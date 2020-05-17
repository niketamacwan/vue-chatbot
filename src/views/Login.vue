<!--design template-->
<template>
  <div class="container">
    <div class="card login">
      <div class="card-body">
        <h2 class="card-title text-center">Enter chatbot</h2>

        <!--Login form which submits and calls login event. It also prevents default submit behaviour of HTML-->
        <form @submit.prevent="login" class="text-center">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Please enter your name ..."
              name="name"
              v-model="name"
            />
            <p v-if="errorText" class="text-danger">{{ errorText }}</p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      name: "",
      errorText: null
    };
  },
  methods: {
    //this will redirect to the chat screen
    login() {
      if (this.name) {
        this.$router.push({
          name: "Chat",
          params: {
            name: this.name
          }
        });
      } else {
        this.errorText = "Please enter a name!";
      }
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap");

.login {
  display: block;
  max-width: 450px;
  margin: 50px auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  border: 0;
}

.card-title {
  font-family: "Roboto Condensed", sans-serif;
  line-height: 1.5;
  font-style: normal;
  color: #4fc08d;
  font-size: 2.25rem;
  margin: 0;
  padding: 0;
}

input[type="text"] {
  border: none;
  border-bottom: 1px solid #c3c3c3;
  margin-bottom: 5px;
}

.form-control:focus {
  color: #495057;
  background-color: inherit;
  border-color: #c3c3c3 !important;
  -webkit-box-shadow: 0 5px 6px -6px #c3c3c3 !important;
  -moz-box-shadow: 0 5px 6px -6px #c3c3c3 !important;
  box-shadow: 0 5px 6px -6px #c3c3c3 !important;
}

.text-danger {
  text-align: left;
}
</style>
