<template>
  <button class="btn__clear" @click="clearAll()">clear all</button>
  <ul class="todo__list des" v-for="(todo, index) in todos" :key="index">
    <li
      class="flex flex-row items-baseline shadow-xl rounded-lg bg-gray-300 justify-between des"
      @click="updateTask(index)"
    >
      <fa icon="pen" class="text-xs m-1 text-blue-600" />
      <p class="text-xl mr-72">
        {{ todo.title }}
      </p>
      <button class="btn__del" @click="delTodo(index)">
        <fa icon="trash" class="text-red-600 p-2" />
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    todos: Array,
  },
  methods: {
    delTodo(index) {
      this.$emit("del-todo", { index });
    },
    clearAll() {
      this.$emit("clear-all");
    },
    updateTask(index) {
      let p = document.getElementsByClassName("des")[index + index];
      console.log(Number(index));
      p.style.textDecoration += "line-through";
      console.log(p.style.textDecoration);
      this.$emit("update-task", { index });
    },
  },
};
</script>

<style lang="postcss" scoped>
.btn__clear {
  @apply rounded-xl bg-white text-red-600 p-4 text-sm uppercase transition-all hover:bg-red-600 hover:text-white;
  margin-left: 200px;
  margin-bottom: 20px;
  border: 1px solid #e01616;
}
.todo__list {
  @apply mx-auto p-6 bg-white;
}
.btn__del {
  @apply my-auto bg-transparent scale-100 opacity-0 transition-all hover:opacity-100 hover:scale-110;
  cursor: pointer;
}
</style>
