<script>
export default {
  name: "Todos",
  props: ["todo"]
}

// Functions

</script>

<template>
  <div id="todo.id" :class="todo.done ? 'todo completed' : 'todo'">
    <li class="todo-item">{{text}}</li>
    <button @click="handleComplete" :class="todo.done ? 'complete-btn uncomplete-btn': 'complete-btn'">
      <i class="fas fa-check"></i>
    </button>
    <button @click="handleDelete" class="trash-btn">
      <i class="fas fa-trash"></i>
    </button>
  </div>
</template>

<style lang="scss">

.todo {
  font-size: 1.1rem;
  margin: 0.9rem 0.5rem;
  padding: 1rem;
  background: #ee7600;
  box-shadow: -10px -8px 0px #ffa500;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  transition: all 1s ease;

  .todo-item {
    flex: 1;
    margin: 0 1rem;
    max-width: 350px;
    overflow-wrap: break-word;
  }

  .trash-btn,
  .complete-btn {
    margin: 3px;
    border-width: 1px;
    color: white;
    border: none;
    padding: 0.5rem 0.6rem;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 50%;

    &:focus {
      outline: none;
    }
  }

  .trash-btn {
    background-color: #800101;
    &:hover {
      background-color: #a72d2d;
    }
  }

  .complete-btn {
    background-color: #3dd8ad;
    &:hover {
      background-color: rgb(38, 161, 126);
    }
  }

  .uncomplete-btn{
    background-color: #ffa500 !important;
    &:hover {
      background-color: rgb(241, 210, 107) !important;
    }
  }

  .fa-trash,
  .fa-check {
    pointer-events: none;
  }
}

.completed {
  background-color: #51925a;
  box-shadow: -10px 12px 0px #3dd8ad;
  text-decoration: line-through;
  opacity: 0.6;
}

.fadeOut {
  box-shadow: 25px 15px 0px #ffffff;
  opacity: 0;
}

@media screen and (max-width:768px) {

  .todo {
      max-width: 330px;

      .todo-item {
          font-size: 1rem;
          max-width: 235px;
          overflow-wrap: break-word;
      }
  }
}
</style>