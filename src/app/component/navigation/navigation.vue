<script src="./navigation.js"></script>

<style module src="./navigation.css"></style>

<template>
  <div :class="$style.component">
    <a v-for="(item, index) in items" :class="getNavItemClass(item)" @click="filterCategory(item.id)">{{ item.name }}</a>
  </div>
</template>
