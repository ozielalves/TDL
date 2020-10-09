<script>
export let todos = undefined;
export let filter = undefined;
export let handleComplete = undefined;
export let handleDelete = undefined;

$: filteredTodos = todos ? todos.filter((todo) => {
    if (filter === 'completed') todo.completed !== false;
      else if (filter === 'uncompleted') todo.completed === false;
      else todo;
}) : console.log('erro');

</script>

<div class="todo-container">
  
  <ul class="todo-list" >
    {#each todos as todo}
    <div id="{'td' + todo.id}" class="{todo.completed ? 'todo completed' : 'todo'}">
      <li class="todo-item">{ todo.title }</li>
      <button
        on:click={handleComplete(todo.id)}
        class="{todo.completed ? 'complete-btn uncomplete-btn' : 'complete-btn'}"
      >
        <i class="fas fa-check"></i>
      </button>
      <button on:click={handleDelete(todo.id)} class="trash-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>
    {/each}
  </ul>
</div>

<style>
  .todo-container {
  margin: 2rem 0;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  z-index: 3;
  grid-area: todo-list;
  width: 100%;
  }

  .todo-container .todo-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
    list-style: none;
    width: 100%;
  }

  .todo {
  font-size: 1.1rem;
  /* max-width: 78%; */
  margin: 0.9rem 0.5rem;
  padding: 1rem;
  background: #ee7600;
  -webkit-box-shadow: -10px -8px 0px #ffa500;
          box-shadow: -10px -8px 0px #ffa500;
  color: white;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  border-radius: 5px;
  -webkit-transition: all 1s ease;
  transition: all 1s ease;
}

.todo .todo-item {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  margin: 0 1rem;
  max-width: 350px;
  overflow-wrap: break-word;
}

.todo .trash-btn,
.todo .complete-btn {
  margin: 3px;
  border-width: 1px;
  color: white;
  border: none;
  padding: 0.5rem 0.6rem;
  cursor: pointer;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  border-radius: 50%;
}

.todo .trash-btn:focus,
.todo .complete-btn:focus {
  outline: none;
}

.todo .trash-btn {
  background-color: #800101;
}

.todo .trash-btn:hover {
  background-color: #a72d2d;
}

.todo .complete-btn {
  background-color: #3dd8ad;
}

.todo .complete-btn:hover {
  background-color: #26a17e;
}

.todo .uncomplete-btn {
  background-color: #ffa500 !important;
}

.todo .uncomplete-btn:hover {
  background-color: #f1d26b !important;
}

.todo .fa-trash,
.todo .fa-check {
  pointer-events: none;
}

.completed {
  background-color: #51925a;
  -webkit-box-shadow: -10px 12px 0px #3dd8ad;
          box-shadow: -10px 12px 0px #3dd8ad;
  text-decoration: line-through;
  opacity: 0.6;
}

@media screen and (max-width: 768px) {
  .todo {
    max-width: 330px;
  }
  .todo .todo-item {
    font-size: 1rem;
    max-width: 235px;
    overflow-wrap: break-word;
  }
}
</style>