<script >
  import API from '../../API.js';
  import { onMount } from 'svelte';
  import Nav from '../../components/Nav.svelte';
  import TodoMaker from '../../components/TodoMaker.svelte';
  import TodoList from '../../components/TodoList.svelte';

  let segment = 'home';

  let filter = 'all';

  let todos = [
    {userId: 1, id: 1, title: 'This is a beatiful to do', completed: false},
    {userId: 1, id: 2, title: 'I had to do this', completed: true},
    {userId: 1, id: 3, title: 'Why u do dis', completed: false},
/*    {userId: 1, id: 4, title: 'Oh no, here we go again', completed: false},
    {userId: 1, id: 5, title: 'We can still do this', completed: false}, */
  ];

  let filteredTodos = todos;
  
  
  /* export const filteredTodos = derived($todos, $todos => (
    $todos.filter((todo) =>{
      if ($filter === 'completed') todo.completed !== false;
      else if ($filter === 'uncompleted') todo.completed === false;
      else todo;
    })));

  console.log($filteredTodos); */

  /* onMount(async () => {
    try {
      const response = await API.get("?_limit=5");
      todos.set(response.results);
      setFilter('all');
    } catch (error) {
      console.error(error);
    }
  }); */

  /* function created() {
    axios
      .get("http://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => (this.todos = res.data))
      .then(() => (this.filteredTodos = this.todos))
      .catch((err) => console.log(err));
  } */

  function handleDelete(id) {
    todoFadeAway(id);
    todos = todos.filter((todo) => todo.id !== id);
  /*     try {
      const response = await API.delete(`/${id}`);
      console.log(response.results);
      console.log(todos);
      todos.set(todos.filter((todo) => todo.id !== id));
      todoFadeAway(id);
      return response.results;
    } catch (error) {
      console.error(error);
    } */
  }

  function todoFadeAway(id) {
    console.log(`td${id}`)
    const todo = document.getElementById(`td${id}`);
    console.log(todo);
    todo.classList.toggle("fadeOut");
    todo.addEventListener("transitionend", () => {
      todo.remove();
      setFilter(filter);
    });
  }

  function handleComplete(id) {
    let auxCompleted;
    todos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo, completed: !todo.completed
        }
      }
      auxCompleted = !todo.completed;
      return todo;
    });
    todoToggleCompleted(id, auxCompleted);
/*     axios
      .get(`http://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        const completed = !res.data.completed;
        console.log(completed)
        axios
          .put(`http://jsonplaceholder.typicode.com/todos/${id}`, {
            completed,
          })
          .then(this.todoToggleCompleted(id, completed))
          .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err)); */
  }

  function todoToggleCompleted(id, completed) {
    const todo = document.getElementById(`td${id}`);
    const completeBtn = document.querySelector(`#td${id} .complete-btn`);
    if (completed === true) {
      todo.classList.add("completed");
      completeBtn.classList.add("uncomplete-btn");
      todo.addEventListener("transitionend", () => {
      setFilter(filter);
      });
    } else {
      todo.classList.remove("completed");
      completeBtn.classList.remove("uncomplete-btn");
      todo.addEventListener("transitionend", () => {
      setFilter(filter);
      });
    }
  }

  function addTodo(newTodo) {
    /*     const { title, completed } = newTodo; */
      /*axios
      .post("http://jsonplaceholder.typicode.com/todos", {
        title,
        completed,
      })
      .then((res) => (this.todos = [res.data,...this.todos]))
      .then(this.setFilter(this.filter))
      .catch((err) => console.log(err)); */
    todos = [...todos, newTodo];
    setFilter(filter);
  }

  function setFilter(newFilter)  {
    switch (newFilter) {
      case "completed":
        filter = "completed";
        filteredTodos = todos.filter(
          (todo) => todo.completed !== false
        );
        break;
      case "uncompleted":
        filter = "uncompleted";
        filteredTodos = todos.filter(
          (todo) => todo.completed === false
        );
        break;
      default:
        filter = "all";
        filteredTodos = todos;
        break;
    }
  }

</script>

<div class="home">
  <svg
    id="bg"
    width="1046"
    height="857"
    viewBox="0 0 1046 857"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="bg-circle-1"
      d="M926 114.62C926 524.139 579.021 856.12 151 856.12C-277.021 856.12 -624 524.139 -624 114.62C-624 -294.899 -277.021 -626.88 151 -626.88C579.021 -626.88 926 -294.899 926 114.62Z"
      fill="#232332"
      fill-opacity="0.35"
    />
    <ellipse
      id="bg-circle-2"
      cx="270.5"
      cy="58.5"
      rx="775"
      ry="741.5"
      fill="#232332"
      fill-opacity="0.35"
    />
  </svg>
  <Nav {segment}/>
  <TodoMaker 
    addTodo={addTodo} 
    filter={filter} 
    setFilter={setFilter}
  />
  <TodoList 
    todos={filteredTodos}
    filter={filter} 
    handleComplete={handleComplete} 
    handleDelete={handleDelete}
  />
  <div class="home-logo">
    <div class="title">
      <i class="fas fa-stream"></i>
      <h1>To Do List</h1>
    </div>
  </div>
</div>

<style>
.home {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1.2fr 1fr;
      grid-template-columns: 1.2fr 1fr;
  -ms-grid-rows: 1fr 10fr;
      grid-template-rows: 1fr 10fr;
      grid-template-areas: 
      ". navbar"
      ". todo-list";
  background: #D3B3B3;
  height: 100vh;
  overflow: hidden;
  position: relative;
  -webkit-transition: background 1s ease;
  transition: background 1s ease;
}

.home #bg {
  position: absolute;
  left: -8%;
  top: -35%;
  z-index: 0;
  pointer-events: none;
  -webkit-transition: fill 1s ease;
  transition: fill 1s ease;
}

.home #bg-circle-1 {
  -webkit-animation: float 6s ease-in-out infinite;
          animation: float 6s ease-in-out infinite;
}

.home #bg-circle-2 {
  -webkit-animation: float 8s ease-in-out infinite;
          animation: float 8s ease-in-out infinite;
}

.home .home-logo {
  padding: 1rem 6rem;
  background: #232332;
  border-radius: 10px;
  position: absolute;
  z-index: 3;
  bottom: -3%;
  left: 10%;
}

.home .home-logo .title {
  justify-self: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 1rem 0;
  color: white;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.home .home-logo .title i {
  position: relative;
  -ms-flex-item-align: center;
      -ms-grid-row-align: center;
      align-self: center;
  margin: 1rem;
}

@-webkit-keyframes float {
  0% {
    -webkit-transform: translatey(0px);
            transform: translatey(0px);
  }
  50% {
    -webkit-transform: translatey(-10px);
            transform: translatey(-10px);
  }
  100% {
    -webkit-transform: translatey(0px);
            transform: translatey(0px);
  }
}

@keyframes float {
  0% {
    -webkit-transform: translatey(0px);
            transform: translatey(0px);
  }
  50% {
    -webkit-transform: translatey(-10px);
            transform: translatey(-10px);
  }
  100% {
    -webkit-transform: translatey(0px);
            transform: translatey(0px);
  }
}
/*# sourceMappingURL=styles.css.map */
</style>
