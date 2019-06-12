<template>
    <div>
        <h2>Filter Todos:</h2>
        <select @change="filterTodo($event)">
            <option value="60">60</option>
            <option value="40">40</option>
            <option value="30">30</option>
            <option value="20">20</option>
            <option value="10">10</option>
            <option value="5">5</option>
        </select>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'FilterTodo',
    // Methods
    methods: mapActions('todos', ['filterTodo'])
};
</script>

<style scoped>
div { display: flex; align-items: center; justify-content: center; margin-top: 20px; }
select {
    margin-left: 20px;
    padding: 5px;
    border: 1px solid #41b883;
}
</style>
