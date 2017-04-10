<script src="./travel.js"></script>

<style module src="./travel.css"></style>

<template>
  <transition v-on:before-enter="beforeEnter" v-on:enter="enterSection" v-on:leave="leaveSection" appear mode="in-out">
    <div :class="$style.page">
      <h1>Travel</h1>
    </div>
  </transition>
</template>
