<script>
	export let segment = undefined;
	export let hoverBg = undefined;
	export let triggerHovered = undefined;

  $: hover = hoverBg;
</script>

<nav class="intro-nav">
	<ul class="menu">
		<li>
			<a 
				class="{segment === (undefined||'intro') ? 'sing-up' : 'profile' }" 
				href="{segment === (undefined||'intro') ? '.' : 'home'}"
				on:mouseenter={() => triggerHovered(!hoverBg)}
      	on:mouseleave={() => triggerHovered(!hoverbg)}
			>
				{segment === (undefined||'intro') ? 'SING UP' : 'Profile'}
			</a>
		</li>
		<li>
			<a 
				class="{segment === (undefined||'intro') ? hover ? 'sing-in hoveredBtn' : 'sing-in' : 'sing-out' }" 
				href="{segment === (undefined||'intro') ? 'home' : '.'}"
				on:mouseenter={() => triggerHovered(!hoverBg)}
      	on:mouseleave={() => triggerHovered(!hoverBg)}
			>
				{segment === (undefined||'intro') ? 'SING IN' : 'Sing out'}
			</a>
		</li>
	</ul>
</nav>

<style>
  .intro-nav {
    grid-area: navbar;
  }

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
  background:  #ee7600;
  border-color: #ee7600;
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

.intro-nav .hoveredBtn {
  color: white;
  border-color: white;
}

.intro-nav .sing-out, .intro-nav .profile {
  margin: 0 2rem;
  padding: 1rem 1.5rem;
  color: #232332;
  cursor: pointer;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  text-decoration: none;
}

.intro-nav .sing-out:hover, .intro-nav .profile:hover {
  color: white;
}
/*# sourceMappingURL=styles.css.map */
</style>
