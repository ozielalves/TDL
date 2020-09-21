<template>
  <div class="todo-maker">
    <p>What can't you forget to do today?</p>
    <form @submit="handleSubmit">
      <div class="todoInput">
        <input
          v-model.lazy="inputText"
          type="text"
          class="todo-input"
          placeholder="Complete my todos"
          required
        />
        <button class="todo-button" type="submit">
          <i class="fas fa-plus-square"></i>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "TodoMaker",
  props: {
    todos: [],
    inputText: ""
  },
  methods: {
    inputTextHandler: e => {
      console.log(this.inputText);
    },
    handleSubmit: e => {
      e.preventDefault();
      console.log(this.inputText);
      e.$emit("update:todos", ...todos, {
        id: Math.random() * 1000,
        text: inputText,
        completed: false
      });
    }
  }
  /*   data: () => ({
    hoverSingIn: false,
    inputText: "",
  }), */
};

/* export default class TodoMaker extends Vue {} */

// Functions
</script>

<style lang="scss">
.todo-maker {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.5rem;
  box-shadow: -20px -12px 0px #222231;
  padding: 2rem;
  margin: 2rem 0 0 0;
  border-style: solid;
  border-radius: 5px;
  background: white;
  transition: all 0.5s ease;
  position: absolute;
  z-index: 4;
  left: 10%;
  top: 3%;

  .title {
    justify-self: center;
    display: flex;

    i {
      position: relative;
      align-self: center;
      margin: 1rem;
    }
  }

  p {
    font-family: "Playfair Display", serif;
  }
}

form {
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .todoInput {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0 0 0;

    input,
    button {
      border-width: 3px;
      border-color: #222231;
      font-size: medium;
      border-style: solid;
      border-radius: 50px;

      &:focus {
        outline: none;
      }
    }

    input {
      margin-right: 1rem;
      padding: 0.7rem;
      width: 278.4px;
    }

    ::placeholder {
      color: #c2c2c2;
    }

    button {
      padding: 0.7rem 0.8rem;
      cursor: pointer;
      color: #222231;
      transition: all 0.3s ease;

      &:hover {
        background: #222231;
        color: white;
      }
    }
  }
}

#appearDown {
  transition: appearDown 1s ease-in;
}

@keyframes appearDown {
  0% {
    transform: translatey(-100%);
  }
  100% {
    transform: translatey(0%);
  }
}
</style>
