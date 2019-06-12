<template>
  <div id="home">
    <div class="container">
      <AddTodo />
      <FilterTodo />
      <Todos />
    </div>
  </div>
</template>

<script>
// Importing Components
import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo';
import FilterTodo from '../components/FilterTodo';

export default {
  name: 'app',
  // Components
  components: {
    Todos,
    AddTodo,
    FilterTodo
  },
  // Head Tag
  head() {
    return {
        title: 'Todos Home Page',
        meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Todos'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
