<script src="./recipe.js"></script>

<style module src="./recipe.css"></style>

<template>
  <transition v-on:enter="enterSection" v-on:leave="leaveSection" appear>
    <div :class="$style.page">
      <div :class="$style.grid">
        <div :class='$style.cover'>
          <div :class='$style.coverTitle'>{{ title }}</div>
        </div>
        <img :class='$style.coverImg' :src='cover' />
        <div :class='$style.ingredients'>ingredients</div>
      </div>
    </div>
  </transition>
</template>
