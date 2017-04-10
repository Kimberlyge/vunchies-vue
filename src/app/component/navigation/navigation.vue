<script src="./navigation.js"></script>

<style module src="./navigation.css"></style>

<template>
  <div :class="$style.component">
    <button v-for="(item, index) in items" :class="getNavItemClass(item)" @click="onNavItemClick(item)">{{ item }}</button>
  </div>
</template>
