<template>
  <div id="intro" class="intro">
    <Navbar />
    <svg id="bg" width="1000" height="1000" viewBox="0 0 1069 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse className="" cx="294" cy="518.5" rx="775" ry="741.5" fill="#232332" fill-opacity="0.35"/>
      <ellipse cx="188" cy="518.5" rx="775" ry="741.5" fill="#232332" fill-opacity="0.35"/>
    </svg>
    <img id="mt1" alt="animation" src="../assets/Moving-todo-1.svg" />
    <img id="mt2" alt="animation" src="../assets/Moving-todo-2.svg" />
    <img id="mt3" alt="animation" src="../assets/Moving-todo-3.svg" />
    <img id="mt4" alt="animation" src="../assets/Moving-todo-4.svg" />
    <img id="mt5" alt="animation" src="../assets/Moving-todo-5.svg" />
    <img id="note" alt="animation" src="../assets/note.svg" />
    <LogoWrapper />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Navbar from "@/components/Navbar.vue";
import LogoWrapper from "@/components/LogoWrapper.vue"

@Options({
  components: {
    Navbar,
    LogoWrapper
  }
})
export default class Intro extends Vue {}
</script>

<style lang="scss">

#intro {
  display: flex;
  flex-direction: column;
  background: #D3B3B3;
  height: 100vh;
  overflow: hidden;
  position: relative; 
  transition: background 1s ease;

  #bg {
    position: absolute;
    left: -12%;
    top: -20%;
    z-index: 0;
    pointer-events: none;
    transition: fill 1s ease;
  }

  .hoveredCircle {
    animation: dance 0.8s ease-in-out;
  }

  #mt1 {
    position: absolute;
    width: 350px;
    left: 9%;
    top: 11%;
    z-index: 1;
    animation: goAway 15s ease-in-out infinite;
  }
  #mt2 {
    position: absolute;
    width: 320px;
    left: 48%;
    top: 13%;
    z-index: 1;
    animation: goAway 20s ease-in-out infinite;
  }
  #mt3 {
    position: absolute;
    width: 320px;
    left: 53%;
    top: 58%;
    z-index: 1;
    animation: goAway 10s ease-in-out infinite;
  }
  #mt4 {
    position: absolute;
    width: 320px;
    left: 19%;
    top: 80%;
    z-index: 1;
    animation: goAwayReduced 10s ease-in-out infinite;
  }
  #mt5 {
    position: absolute;
    width: 320px;
    left: 72%;
    top: 79%;
    z-index: 1;
    animation: goAwayReduced 10s ease-in-out infinite;
  }
  #note {
    position: absolute;
    width: 90px;
    left: 48%;
    top: 40%;
    z-index: 1;
    animation: float 3s ease-in-out infinite;
  }
}

.hoverBg {
    background: #232332 !important;
  }

@keyframes goAway {
  0% {
		transform: translatex(0%);
  }
  50% {
    transform: translatex(10%);
  }  
	100% {
		transform: translatex(0%);
	}
}
@keyframes goAwayReduced {
  0% {
		transform: translatex(0%);
  }
  50% {
    transform: translatex(-10%);
  }  
	100% {
		transform: translatex(0%);
	}
}
@keyframes dance {
  0% {
		transform: translatex(0%);
  }
  50% {
    transform: translatex(-10%);
  }  
	100% {
		transform: translatex(0%);
	}
}

</style>
