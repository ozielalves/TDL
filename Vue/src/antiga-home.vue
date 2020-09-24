<template>
  
</template>

<script>
import { Options, Vue } from "vue-class-component";
import axios from "axios";
import HomeNav from "@/components/HomeNav.vue";
import TodoMaker from "@/components/TodoMaker.vue";
import TodoList from "@/components/TodoList.vue";

interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export default {
  name: "Home",
  components: {
    HomeNav,
    TodoMaker,
    TodoList,
  },
  data() {
    return {
      todos: [] as Todo[],
        /* {
          id: 1,
          text: "Todo One",
          completed: false,
        },
        {
          id: 1,
          text: "Todo two",
          completed: true,
        },
        {
          id: 1,
          text: "Todo Three",
          completed: false,
        },
      ], */
      filteredTodos: [] as Todo[],
      filter: "all" as string,
    };
  },
  created() {
      console.log('Component has been created');
      axios
        .get("http://jsonplaceholder.typicode.com/todos?_limit=5")
        .then((res) => (this.todos = res.data))
        .then(() => this.filteredTodos = this.todos)
        .catch((err) => console.log(err));
  },
  methods: {
    
    handleDelete(id : number) {
      console.log(id);
      this.todos = this.todos.filter(todo => todo.id !== id);
     /*  axios
        .delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
        .then(
          (res) => (this.todos = this.todos.filter((todo) => todo.id !== id))
        )
        .catch((err) => console.log(err)); */
    },
    handleComplete(id : number) {
      console.log(id);
      this.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
      });
    },
    addTodo(newTodo : Todo) {
      /* const { text, completed } = newTodo;
      axios
        .post("http://jsonplaceholder.typicode.com/todos", {
          title: text,
          completed,
        })
        .then((res) => (this.todos = [...this.todos, res.data]))
        .catch((err) => console.log(err)); */
      this.todos = [...this.todos, newTodo];
    },
    setFilter(filter : string) {
      switch (filter) {
        case "completed":
          this.filter = "completed";
          this.filteredTodos = this.filteredTodos.filter(
            (todo) => todo.completed !== false
          );
          break;
        case "uncompleted":
          this.filter = "uncompleted";
          this.filteredTodos = this.filteredTodos.filter(
            (todo) => todo.completed === false
          );
          break;
        default:
          this.filter = "all";
          this.filteredTodos = this.todos;
          break;
      }
    },
  },
};
import { Component, Vue } from "vue-property-decorator";
import axios from 'axios';
import HomeNav from "@/components/HomeNav.vue";
import TodoMaker from "@/components/TodoMaker.vue";
import TodoList from "@/components/TodoList.vue";

interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

@Component({
  components: { HomeNav, TodoMaker, TodoList }
})
export default class Home extends Vue {
  private todos: Todo[] = [];
  private filteredTodos: Todo[] = [];
  private filter: string = "all";

  created() {
      console.log('Component has been created');
      axios
        .get("http://jsonplaceholder.typicode.com/todos?_limit=5")
        .then((res) => (this.todos = res.data))
        .then(() => this.filteredTodos = this.todos)
        .catch((err) => console.log(err));
  }
  
  handleDelete(id : number) {
    console.log(id);
    this.todos = this.todos.filter(todo => todo.id !== id);
    /*  axios
      .delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
      .then(
        (res) => (this.todos = this.todos.filter((todo) => todo.id !== id))
      )
      .catch((err) => console.log(err)); */
  }

  handleComplete(id : number) {
    console.log(id);
    this.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });
  }
  
  addTodo(newTodo : Todo) {
    /* const { text, completed } = newTodo;
    axios
      .post("http://jsonplaceholder.typicode.com/todos", {
        title: text,
        completed,
      })
      .then((res) => (this.todos = [...this.todos, res.data]))
      .catch((err) => console.log(err)); */
    this.todos = [...this.todos, newTodo];
  }
  setFilter(filter : string) {
    switch (filter) {
      case "completed":
        this.filter = "completed";
        this.filteredTodos = this.filteredTodos.filter(
          (todo) => todo.completed !== false
        );
        break;
      case "uncompleted":
        this.filter = "uncompleted";
        this.filteredTodos = this.filteredTodos.filter(
          (todo) => todo.completed === false
        );
        break;
      default:
        this.filter = "all";
        this.filteredTodos = this.todos;
        break;
    }
  }
}
</script>

<style>

</style>