<script src="./site-header.js"></script>

<style module src="./site-header.css"></style>

<template>
  <header :class="$style.component">

    <router-link to="/">
      <h1>Vunchies</h1>
      <h3>A vegan food blog</h3>
    </router-link>

    <navigation/>
  </header>
</template>
