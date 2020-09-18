import Home from './pages/Home/Home.svelte'
import Intro from './pages/Intro/Intro.svelte'
import { writable } from 'svelte/store'

const router = {
  '/': Home,
  '/home': Home,
  '/intro': Intro,
}

export default router
export const curRoute = writable('/home')
