<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HomeNav from "@/components/HomeNav.vue";
import TodoMaker from "@/components/TodoMaker.vue";

@Options({
  components: {
    HomeNav,
    TodoMaker
  }
})
export default class Home extends Vue {}

</script>

<template>
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
      <HomeNav />
      <TodoMaker />
<!--       <Navbar />
      <TodoMaker
        setInputText={setInputText}
        setTodos={setTodos}
        todos={todos}
        inputText={inputText}
      /> -->
      <div>
        <ul className="filter">
          <!-- <li
            onClick={() => setFilter("all")}
            id={ filter === "all" ? "selectedAll" : "" }
            className="filterBtn all"
          >
            ALL
          </li>
          <li
            onClick={() => setFilter("completed")}
            id={ filter === "completed" ? "selectedComp" : "" }
            className="filterBtn comp"
          >
            COMPLETED
          </li>
          <li
            onClick={() => setFilter("uncompleted")}
            id={ filter === "uncompleted" ? "selectedTodo" : "" }
            className="filterBtn to-do"
          >
            TO DO
          </li> -->
        </ul>
      </div>
      <!-- <TodoList
        todos={todos}
        filteredTodos={filteredTodos}
        setTodos={setTodos}
      /> -->
      <div className="home-logo">
        <div className="title">
          <i className="fas fa-stream"></i>
          <h1>To Do List</h1>
        </div>
      </div>
    </div>
</template>

<style lang="scss">
.home {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  grid-template-rows: 1fr 10fr;
  grid-template-areas:
    ". navbar"
    ". todo-list";
  background: #D3B3B3;
  height: 100vh;
  overflow: hidden;
  position: relative;
  transition: background 1s ease;

  #bg {
    position: absolute;
    left: -8%;
    top: -35%;
    z-index: 0;
    pointer-events: none;
    transition: fill 1s ease;
  }

  #bg-circle-1 {
    animation: float 6s ease-in-out infinite;
  }
  #bg-circle-2 {
    animation: float 8s ease-in-out infinite;
  }

  .filter {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 8vh;
    list-style-type: none;
    margin: 1.5rem 0 0 0;
    position: absolute;
    left: 10%;
    top: 40%;

    .filterBtn {
      margin: 0 1rem;
      padding: 1rem 1.5rem;
      border-width: 3px;
      border-color: white;
      border-radius: 50px;
      border-style: solid;
      color: white;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
    }

    .all {
      &:hover {
        background: #5B7397;
        border-color: #5B7397;
        border-style: solid;
      }
    }
    #selectedAll {
      background: #5B7397 !important;
      border-color: #5B7397 !important;
      border-style: solid;
    }
    .comp {
      &:hover {
        background: #3dd8ad;
        border-color: #3dd8ad;
        border-style: solid;
      }
    }
    #selectedComp {
      background: #3dd8ad !important;
      border-color: #3dd8ad !important;
      border-style: solid;
    }

    .to-do {
      &:hover {
        background: #ffa500;
        border-color: #ffa500;
        border-style: solid;
      }
    }
    #selectedTodo {
      background: #ffa500 !important;
      border-color: #ffa500 !important;
      border-style: solid;
    }
  }

  .home-logo {
    padding: 1rem 6rem;
    background: #232332;
    border-radius: 10px;
    position: absolute;
    z-index: 3;
    bottom: -3%;
    left: 10%;

    .title {
      justify-self: center;
      display: flex;
      padding: 1rem 0;
      color: white;
      align-items: center;

      i {
        position: relative;
        align-self: center;
        margin: 1rem;
      }
    }
  }
}

#appearUp {
  transition: appearUp 1s ease-in;
}

#fadeIn {
  transition: fadeIn 1s ease-in;
}

@keyframes appearUp {
  0% {
    transform: translatey(-100%);
  }
  100% {
    transform: translatey(0%);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes float {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-10px);
	}
	100% {
		transform: translatey(0px);
	}
}
</style>
