<div class="intro-nav">
  <ul class="menu">
    <li>
      <a 
      class="sing-up"
      href="/intro"
      on:mouseenter={() => triggerHovered()}
      on:mouseleave={() => triggerHovered()}
      >
        SING UP
      </a>
    </li>
    <li>
      <a 
      class={$hoverBg ? 'sing-in hoveredBtn' : 'sing-in'}
      href="/home"
      on:mouseenter={() => triggerHovered()}
      on:mouseleave={() => triggerHovered()}
      >
        SING IN
      </a>
    </li>
  </ul>
</div>

<script>
import { createEventDispatcher } from 'svelte';
import { writable } from 'svelte/store';
import { handleHover, hoverBg } from './App.svelte';

const dispatch = createEventDispatcher();

function triggerHovered() {
  hoverBg.set(!$hoverBg)
}
</script>

<style>
  .intro-nav .menu {
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
  height: 8vh;
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
  list-style-type: none;
  margin: 1.5rem 6rem 0 0;
}

.intro-nav .sing-in {
  margin: 0 2.5rem;
  padding: 1rem 1.5rem;
  border-width: 3px;
  border-color: #232332;
  border-radius: 50px;
  border-style: solid;
  color: #232332;
  cursor: pointer;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  text-decoration: none;
}

.intro-nav .sing-in:hover {
  background: #232332;
  border-color: #232332;
  color: white;
}

.intro-nav .sing-in a {
  text-decoration: none;
}

.intro-nav .sing-up {
  padding: 1rem 1.5rem;
  background: #6D6069;
  border-radius: 50px;
  border-color: #6D6069;
  border-style: solid;
  color: white;
  cursor: pointer;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  text-decoration: none;
}

.intro-nav .sing-up:hover {
  background: #232332;
  border-color: #232332;
}

.intro-nav .hoveredBTn {
  color: white;
}
/*# sourceMappingURL=styles.css.map */
</style>