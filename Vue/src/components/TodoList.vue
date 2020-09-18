<template>
  <div class="todo-container">
      <ul class="todo-list">
        <!-- {filteredTodos.map( (todo : any) => (
          <Todo
            key={todo.id} 
            id={todo.id} 
            text={todo.text} 
            completed={todo.completed}
            todos = {todos}
            setTodos={setTodos}
          />
        ))} -->
      </ul>
    </div>
</template>

<script>

import { Vue } from "vue-class-component";
export default class TodoList extends Vue {}

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