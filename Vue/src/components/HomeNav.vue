<template>
  <div class="home-nav">
    <ul class="menu">
      <router-link
        to="/home"
        class="profile"
      >
        Profile
      </router-link>
      <router-link
        to="/"
        class="sing-out"
      >
        Sing out
      </router-link>
    </ul>
  </div>
</template>

<script>
import { Vue } from "vue-class-component";
export default class HomeNav extends Vue {}

</script>

<style lang="scss">

.home-nav {
  grid-area: navbar;
  z-index: 10;
  .menu{
    display: flex;
    align-items: center;
    height: 8vh;
    justify-content: flex-end;
    list-style-type: none;
    margin: 1.5rem 6rem 0 0;
  }

  .sing-out, .profile {
    margin: 0 2rem;
    padding: 1rem 1.5rem;
    color: #232332;
    cursor: pointer;
    transition: all 0.5s ease;
    text-decoration: none;
    
    &:hover {
      color: white;
    }
  }
}
</style>