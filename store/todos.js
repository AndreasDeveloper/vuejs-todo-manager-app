// Importing axios
import axios from 'axios';

// State Object - Main state object
const state = () => ({
    todos: []
});

// Getters - Getting Data
const getters = {
    allTodos: (state) => state.todos
};

// Actions - Fetching data, calling mutation methods
const actions = {
    // Method - Fetching todos data from API
    async fetchTodos({ commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=60');
        commit('setTodos', response.data); // Calling setTodos mutation method and setting response data to the state
    },
    // Method - Add new todo to API
    async addTodo({ commit }, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false });
        commit('newTodo', response.data);
    },
    // Method - Delete todo
    async deleteTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('removeTodo', id);
    },
    // Method - Filters Todo
    async filterTodo({ commit }, e) {
        // Get selected number/limit
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        commit('setTodos', response.data);
    },
    // Method - Update Todo
    async updateTodo({ commit }, updatedTodo) {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`, updatedTodo);
        commit('updateTodo', response.data);
    }
};

// Mutations - Setting data to State
const mutations = {
    // Set Todos Mutation Method
    setTodos: (state, todos) => (state.todos = todos), // todos in params is response.data
    newTodo: (state, todo) => state.todos.unshift(todo), // todo in params is response.data
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    updateTodo: (state, updTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updTodo.id); // Get index of todo
        if (index !== -1) {
            state.todos.splice(index, 1, updTodo);
        } 
    }
};

// Exporting Todos  State
export default {
    state,
    getters,
    actions,
    mutations
};