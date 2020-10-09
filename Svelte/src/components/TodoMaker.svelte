<script>
  export let addTodo = undefined;
  
  let inputText = '';

  /* bind:value={inputvalue} */
  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      userId: 1,
      id:  Math.floor(Math.random(2) * 100) * 10,
      title: inputText,
      completed: false
    }
    // SEND UP TO PARENT
    addTodo(newTodo);
    // CLEAR INPUT
    inputText = '';
  }
  
</script>

<div class="todo-maker">
  <p>What can't you forget to do today?</p>
  <form on:submit={handleSubmit}>
    <div class="todoInput">
      <input
        bind:value={inputText}
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

<style>
  .todo-maker {
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
  text-align: center;
  font-size: 1.5rem;
  -webkit-box-shadow: -20px -12px 0px #222231;
          box-shadow: -20px -12px 0px #222231;
  padding: 2rem;
  margin: 2rem 0 0 0;
  border-style: solid;
  border-radius: 5px;
  background: white;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  position: absolute;
  z-index: 4;
  left: 10%;
    top: 3%;
  }

/*   .todo-maker .title {
    justify-self: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  } */

  .todo-maker .title i {
    position: relative;
    -ms-flex-item-align: center;
        -ms-grid-row-align: center;
        align-self: center;
    margin: 1rem;
  }

  .todo-maker p {
    font-family: "Playfair Display", serif;
  }

  form {
    margin: 1rem 0;
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
  }

  form .todoInput {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    margin: 1rem 0 0 0;
  }

  form .todoInput input, form .todoInput button {
    border-width: 3px;
    border-color: #222231;
    font-size: medium;
    border-style: solid;
    border-radius: 50px;
  }

  form .todoInput input:focus, form .todoInput button:focus {
    outline: none;
  }

  form .todoInput input {
    margin-right: 1rem;
    padding: 0.7rem;
    width: 278.4px;
  }

  form .todoInput ::-webkit-input-placeholder {
    color: #C2C2C2;
  }

  form .todoInput :-ms-input-placeholder {
    color: #C2C2C2;
  }

  form .todoInput ::-ms-input-placeholder {
    color: #C2C2C2;
  }

  form .todoInput ::placeholder {
    color: #C2C2C2;
  }

  form .todoInput button {
    padding: 0.7rem 0.8rem;
    cursor: pointer;
    color: #222231;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  form .todoInput button:hover {
    background: #222231;
    color: white;
  }

/*# sourceMappingURL=styles.css.map */
</style>