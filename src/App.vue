<template>
  <div id="app">
    <div class="container">
      <div class="text-center m-5">
        <h2>Todo App</h2>
      </div>
      <SearchTask />
      <ListTask />
      <AddTask />
    </div>
  </div>
</template>

<script>
import SearchTask from "./components/SearchTask"
import ListTask from "./components/ListTask"
import AddTask from "./components/AddTask"


export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    SearchTask,
    ListTask,
    AddTask
  },
  computed: {},
  mounted() { }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap");

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  padding: 0 20%;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #000;
  text-decoration: none;

  &:hover {
    color: red;
  }
}
</style>
