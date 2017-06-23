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
        <div :class='$style.ingredients'>Ingredients</div>
        <div :class='$style.ingredientsList'>{{ ingredients }}</div>
        <div>{{ information }}</div>
        <!-- <div>{{ grid1title }}</div> -->
        <!-- <div>{{ grid1title.no }}</div>
        <div>{{ grid1title.text }}</div> -->
        <div v-for="(item, index) in grids">
          <div>{{ item.no }}</div>
          <div>{{ item.title }}</div>
          <div>{{ item.text }}</div>
        </div>
      </div>
    </div>
  </transition>
</template>
