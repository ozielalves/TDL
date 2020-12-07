<template>
  <div :class="hover ? 'register-form formHovered' : 'register-form'">
    <form @submit="handleSubmit">
      <div class="formItem">
        <p>How can we call you, mate?</p>
        <div class="todoInput">
          <input
            v-model="name"
            @change="(e) => inputHandler(e, setName)"
            type="text"
            class="todo-input"
            placeholder="Chico Buarque"
            required
          />
        </div>
      </div>
      <div class="formItem">
        <p>Your e-mail</p>
        <div class="todoInput">
          <input
            v-model="email"
            @change="(e) => inputHandler(e, setEmail)"
            type="text"
            class="todo-input"
            placeholder="exemple@exemple.com"
            required
          />
        </div>
      </div>
      <div class="formItem">
        <p>Your password</p>
        <div class="todoInput">
          <input
            v-model="password"
            @change="(e) => inputHandler(e, setPassword)"
            type="text"
            class="todo-input"
            placeholder="oooooo"
            required
          />
        </div>
      </div>
      <button class="confirm-button" type="submit">
        Sing up
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
  data() {
    return {
      name: "",
      email:"",
      password:"",
    };
  },
  methods: {
    inputTextHandler() {
      console.log(this.inputText);
    },
    handleSubmit(e) {
      e.preventDefault();
      const newTodo = {
        title: this.inputText,
        completed: false,
      };
      // SEND UP TO PARENT
      this.$emit("add-todo", newTodo);
      // CLEAR INPUT
      this.inputText = "";
    },
  },
};

/* export default class TodoMaker extends Vue {} */

// Functions
</script>

<style lang="scss">
.register-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.5rem;
  width: 450px;
  box-shadow: -20px -12px 0px #222231;
  padding: 2rem;
  margin: 2rem 0 0 0;
  border-style: solid;
  border-radius: 5px;
  background: white;
  transition: all 0.5s ease;
  z-index: 1;
  margin-bottom: 50px;

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

  .confirm-button {
    border-width: 3px;
    border-color: #6d6069;
    font-size: medium;
    border-style: solid;
    border-radius: 50px;
    padding: 0.7rem 2rem;
    margin-top: 20px;
    cursor: pointer;
    color: white;
    background: #6d6069;
    transition: all 0.3s ease;

    &:hover {
      background: #ee7600;
      border-color: #ee7600;
      color: white;
    }

    &:focus {
      outline: none;
    }
  }

  .formItem {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p {
      margin: 10px 0px;
    }

    .todoInput {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      margin: 0 !important;
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
}

.formHovered {
  box-shadow: -20px -12px 0px #6d6069 !important;
  border-color: #6d6069;
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
