<template>
  <div class="container mx-auto shadow-xl max-w-lg bg-white">
    <form
      @submit.prevent="addTodo"
      class="my-4 mx-auto bg-white p-5 flex items-center justify-center flex-col"
    >
      <h1 class="text-black text-xl uppercase text-center m-4">
        we keep your todo alive
      </h1>
      <div class="flex items-center justify-center flex-row">
        <input
          type="text"
          placeholder="What needs to be done?"
          class="rounded-xl shadow-xl p-5 mx-3 border border-blue-600 focus:outline-none"
          v-model="title"
        />
        <input
          class="mx-3 rounded-xl p-3 text-white bg-blue-600 transition-all hover:bg-blue-500"
          type="submit"
          value="Add task"
        />
      </div>
    </form>
    <div class="mr-2 p-2 mb-2">
      <span class="text-xl text-blue-700 font-bold">{{ showDate().day }}</span>
      <sub class="m-1">{{ showDate().date }}</sub>
    </div>
    <h1 class="text-xl ml-2 font-bold text-blue-800 mb-2 uppercase">
      your pending task:- {{ pendingTodo() }}
    </h1>
    <slot />
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  props: {
    todos: Array,
  },
  data() {
    return {
      title: "",
      completed: false,
    };
  },
  methods: {
    addTodo() {
      if (this.title == "") {
        return;
      }
      this.$emit("add-todo", { title: this.title, completed: this.completed });
      this.title = "";
    },
    pendingTodo() {
      return this.todos.filter((todo) => !todo.completed).length;
    },
    showDate() {
      let weekDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let date = new Date();
      let d = date.getDay();
      let m = date.getMonth() + 1;
      let y = date.getFullYear();
      let day = weekDays[date.getDay()];

      if (d < 10) {
        d = "0" + d;
      }

      if (m < 10) {
        m = "0" + m;
      }

      date = {
        day: day,
        date: d + "-" + m + "-" + y,
      };
      return date;
    },
  },
};
</script>
