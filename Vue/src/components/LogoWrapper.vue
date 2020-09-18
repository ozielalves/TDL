<template>
  <div class="intro-logo">
      <div class="title">
          <i class="fas fa-stream"></i>
          <h1>To Do List</h1>
      </div>
      <p>What can't you forget to do today?</p>
    </div>
</template>

<script>

import { Vue } from "vue-class-component";
export default class LogoWrapper extends Vue {}

</script>

<style lang="scss">

.intro-logo {
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
  /* width: 500px;
  height: 300px; */
  width: 433px;
  height: 217.734px;
  left: 10%;
  bottom: 29%;
  z-index: 7;

  animation: float 3s ease-in-out infinite;

  .title {
    justify-self: center;
    display: flex;
    padding: 1rem 0; 
    
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

.not-blank{
  box-shadow: 20px 12px 0px #222231;
  border-radius: 5px;
}

/* Animation  */
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