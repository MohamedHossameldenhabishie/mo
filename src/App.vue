<template>
  <button class="btn__color" @click="changeColor()">Change color</button>
  <div class="main">
    <AddTodo @add-todo="addTodo($event)" :todos="todos">
      <TodoList
        :todos="todos"
        @del-todo="delTodo($event)"
        @clear-all="clearAll()"
        @update-task="updateTask($event)"
    /></AddTodo>
  </div>
</template>

<script>
import AddTodo from "./components/TodoForm.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    AddTodo,
    TodoList,
  },
  data() {
    return {
      todos: [
        {
          title: "Learn Vue",
          completed: false,
        },
        {
          title: "Learn Vuex",
          completed: false,
        },
        {
          title: "Vue Router",
          completed: false,
        },
      ],
    };
  },
  methods: {
    addTodo({ title, completed }) {
      this.todos.push({ title, completed });

      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    delTodo({ index }) {
      this.todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    clearAll() {
      this.todos = [];
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    changeColor() {
      document.body.style.backgroundColor =
        "#" + Math.random().toString(16).slice(2, 8);
    },
    updateTask({ index }) {
      this.todos[index].completed = !this.todos[index].completed;
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
  },
  mounted() {
    if (localStorage.todos) {
      this.todos = JSON.parse(localStorage.todos);
    }
  },
  watch: {
    todos: {
      handler(newTodos) {
        localStorage.todos = JSON.stringify(newTodos);
      },
      deep: true,
    },
  },
};
</script>

<style lang="postcss">
.main {
  @apply container mx-auto;
}
.btn__color {
  @apply mx-3 rounded-xl p-3 text-white bg-blue-600 transition-all hover:bg-blue-500 my-auto;
}
</style>
