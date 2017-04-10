<script src="./about.js"></script>

<style module src="./about.css"></style>

<template>
  <transition v-on:enter="enterSection" v-on:leave="leaveSection" appear mode="in-out">
    <div :class="$style.page">
      <h1>About</h1>
    </div>
  </transition>
</template>
