<script context="module">
	import LogoWrapper from '../components/LogoWrapper.svelte'
	import Nav from '../components/Nav.svelte'
	import { writable } from 'svelte/store';
	
	let segment = 'intro';
	
	let hoverBg = writable(false);

	function triggerHovered(value) {
		hoverBg.update(hoverBg => value);
  }
</script>

<div id="intro" class={$hoverBg ? 'intro hoverBg' : 'intro'}>
	<Nav {segment} {hoverBg} {triggerHovered} />
		<svg
			id="bg"
			width="1000"
			height="1000"
			viewBox="0 0 1069 1024"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
		<ellipse
			class={$hoverBg ? 'hoveredCircle' : ''}
			cx="294"
			cy="518.5"
			rx="775"
			ry="741.5"
			fill={$hoverBg ? '#ffffff' : '#232332'}
			fill-opacity="0.35"
		/>
		<ellipse
			cx="188"
			cy="518.5"
			rx="775"
			ry="741.5"
			fill={$hoverBg ? '#ffffff' : '#232332'}
			fill-opacity="0.35"
		/>
	</svg>
	<img id="mt1" alt="animation" src="assets/Moving-todo-1.svg" />
	<img id="mt2" alt="animation" src="assets/Moving-todo-2.svg" />
	<img id="mt3" alt="animation" src="assets/Moving-todo-3.svg" />
	<img id="mt4" alt="animation" src="assets/Moving-todo-4.svg" />
	<img id="mt5" alt="animation" src="assets/Moving-todo-5.svg" />
	<img id="note" alt="animation" src="assets/note.svg" />
	<LogoWrapper />
</div>
	
<style>
#intro {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
			-ms-flex-direction: column;
					flex-direction: column;
	background: #D3B3B3;
	height: 100vh;
	overflow: hidden;
	position: relative;
	-webkit-transition: background 1s ease;
	transition: background 1s ease;
}

#intro #bg {
	position: absolute;
	left: -12%;
	top: -20%;
	z-index: 0;
	pointer-events: none;
	-webkit-transition: fill 1s ease;
	transition: fill 1s ease;
}

#intro .hoveredCircle {
	-webkit-animation: dance 0.8s ease-in-out;
					animation: dance 0.8s ease-in-out;
}

#intro #mt1 {
	position: absolute;
	width: 350px;
	left: 9%;
	top: 11%;
	z-index: 1;
	-webkit-animation: goAway 15s ease-in-out infinite;
					animation: goAway 15s ease-in-out infinite;
}

#intro #mt2 {
	position: absolute;
	width: 320px;
	left: 48%;
	top: 13%;
	z-index: 1;
	-webkit-animation: goAway 20s ease-in-out infinite;
					animation: goAway 20s ease-in-out infinite;
}

#intro #mt3 {
	position: absolute;
	width: 320px;
	left: 53%;
	top: 58%;
	z-index: 1;
	-webkit-animation: goAway 10s ease-in-out infinite;
					animation: goAway 10s ease-in-out infinite;
}

#intro #mt4 {
	position: absolute;
	width: 320px;
	left: 19%;
	top: 80%;
	z-index: 1;
	-webkit-animation: goAwayReduced 10s ease-in-out infinite;
					animation: goAwayReduced 10s ease-in-out infinite;
}

#intro #mt5 {
	position: absolute;
	width: 320px;
	left: 72%;
	top: 79%;
	z-index: 1;
	-webkit-animation: goAwayReduced 10s ease-in-out infinite;
					animation: goAwayReduced 10s ease-in-out infinite;
}

#intro #note {
	position: absolute;
	width: 90px;
	left: 48%;
	top: 40%;
	z-index: 1;
	-webkit-animation: float 3s ease-in-out infinite;
					animation: float 3s ease-in-out infinite;
}

.hoverBg {
	background: #232332 !important;
}

@-webkit-keyframes goAway {
	0% {
		-webkit-transform: translatex(0%);
						transform: translatex(0%);
	}
	50% {
		-webkit-transform: translatex(10%);
						transform: translatex(10%);
	}
	100% {
		-webkit-transform: translatex(0%);
						transform: translatex(0%);
	}
}

@keyframes goAway {
	0% {
		-webkit-transform: translatex(0%);
						transform: translatex(0%);
	}
	50% {
		-webkit-transform: translatex(10%);
						transform: translatex(10%);
	}
	100% {
		-webkit-transform: translatex(0%);
						transform: translatex(0%);
	}
}

@-webkit-keyframes goAwayReduced {
	0% {
		-webkit-transform: translatex(0%);
						transform: translatex(0%);
	}
	50% {
		-webkit-transform: translatex(-10%);
						transform: translatex(-10%);
	}
	100% {
		-webkit-transform: translatex(0%);
						transform: translatex(0%);
	}
}

@keyframes goAwayReduced {
	0% {
		-webkit-transform: translatex(0%);
						transform: translatex(0%);
	}
	50% {
		-webkit-transform: translatex(-10%);
						transform: translatex(-10%);
	}
	100% {
		-webkit-transform: translatex(0%);
						transform: translatex(0%);
	}
}

@-webkit-keyframes dance {
	0% {
		-webkit-transform: translatex(0%);
						transform: translatex(0%);
	}
	50% {
		-webkit-transform: translatex(-10%);
						transform: translatex(-10%);
	}
	100% {
		-webkit-transform: translatex(0%);
						transform: translatex(0%);
	}
}

@keyframes dance {
	0% {
		-webkit-transform: translatex(0%);
						transform: translatex(0%);
	}
	50% {
		-webkit-transform: translatex(-10%);
						transform: translatex(-10%);
	}
	100% {
		-webkit-transform: translatex(0%);
						transform: translatex(0%);
	}
}

@-webkit-keyframes float {
	0% {
		-webkit-transform: translatey(0px);
						transform: translatey(0px);
	}
	50% {
		-webkit-transform: translatey(-10px);
						transform: translatey(-10px);
	}
	100% {
		-webkit-transform: translatey(0px);
						transform: translatey(0px);
	}
}

@keyframes float {
	0% {
		-webkit-transform: translatey(0px);
						transform: translatey(0px);
	}
	50% {
		-webkit-transform: translatey(-10px);
						transform: translatey(-10px);
	}
	100% {
		-webkit-transform: translatey(0px);
						transform: translatey(0px);
	}
}
/*# sourceMappingURL=styles.css.map */
</style>