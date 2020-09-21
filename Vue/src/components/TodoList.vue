<template>
  <div class="todo-container">
    <ul class="todo-list" :key="todo.id" v-for="todo in todos">
      <Todo :todo="todo" />
    </ul>
  </div>
</template>

<script>
import Todo from "./Todo.vue";

export default {
  name: "TodoList",
  props: ["todos"],
};
</script>

<style lang="scss">
.todo-container {
  margin: 2rem 0;
  transition: all 0.5s ease;
  z-index: 3;
  grid-area: todo-list;
  width: 100%;

  .todo-list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    list-style: none;
    width: 100%;
  }
}
</style>
