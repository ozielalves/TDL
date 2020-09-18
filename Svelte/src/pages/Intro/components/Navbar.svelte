<script>
  import { Link } from 'svelte-routing';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher(); 
  
  let hoverBg = false;
  
  const handleHover = () => {
    dispatch('hoverbg', hoverBg)
    hoverBg = !hoverBg;
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
  z-index: 999;
}

a, li {
  text-decoration: none;
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

.intro-nav .sing-in a, .intro-nav .sing-up a {
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

<nav>
  <div class="intro-nav">
    <ul class="menu">
      <Link
        on:mouseenter ={handleHover}
        on:mousemove ={handleHover}
        to="/"
        class="sing-up"
      >
        <p class="sing-up">SING UP</p>
      </Link>
      <Link
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        to="home"
        class={hoverBg ? "sing-in hoveredBTn" : "sing-in"}
      >
      <p class={hoverBg ? "sing-in hoveredBTn" : "sing-in"}>SING IN</p>
      </Link>
    </ul>
  </div>
</nav>