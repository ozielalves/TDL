<template>
  <div class="intro-nav">
    <ul class="menu">
      <router-link
        to="/"
        class="sing-up"
        @mouseover="$emit('update:hovered', !hovered)"
        @mouseleave="$emit('update:hovered', !hovered)"
      >
        <i class="fas fa-arrow-left"></i>
      </router-link>
      <router-link
        to="register"
        :class="hovered?'sing-up hoveredBtn':'sing-up'"
        @mouseover="$emit('update:hovered', !hovered)"
        @mouseleave="$emit('update:hovered', !hovered)"
      >
        SING UP
      </router-link>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "LoginNav",
  props: {
    hovered: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.intro-nav {
  z-index: 99;
  .menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 8vh;
    justify-content: flex-end;
    list-style-type: none;
    margin: 1.5rem 6rem 0 0;
  }

  .sing-up {
    margin: 0 2.5rem;
    padding: 1rem 1.5rem;
    border-width: 3px;
    border-color: #232332;
    border-radius: 50px;
    border-style: solid;
    color: #232332;
    cursor: pointer;
    transition: all 0.5s ease;
    text-decoration: none;

    &:hover {
      background:  #ee7600;
      border-color: #ee7600;
      color: white;
    }

    a {
      text-decoration: none;
    }
  }

  .sing-up {
    padding: 1rem 1.5rem;
    background: #6d6069;
    border-radius: 50px;
    border-color: #6d6069;
    border-style: solid;
    color: white;
    cursor: pointer;
    transition: all 0.5s ease;
    text-decoration: none;
  }

  .hoveredBtn {
    color: white;
    border-color: white;
  }
}
</style>
