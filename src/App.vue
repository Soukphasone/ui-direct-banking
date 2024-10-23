<template>
  <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
  <RouterView />
</template>

<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
@font-face {
  font-family: 'NotoSansLao';
  /* src: url('../fonts/Noto_Sans_Lao/static/NotoSansLao-Regular.ttf') format('truetype'); */
  src: url('./fonts//Noto_Sans_Lao/static/NotoSansLao-Regular.ttf') format('truetype');
}

p,
h2,
h3,
span,
div {
  margin: 0px;
  font-family: 'NotoSansLao', Avenir, Helvetica, Arial, sans-serif;
}
</style>
