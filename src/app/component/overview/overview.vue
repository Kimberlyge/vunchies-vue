<script src="./overview.js"></script>

<style module src="./overview.css"></style>

<template>
  <div :class="$style.component" id="overview">
    <div :class="$style.item" v-for='post in posts' @click="goToDetail(post)">
      <img :class="$style.cover" v-bind:src="post.acf.cover.sizes.medium" alt="">
      <div :class="$style.itemWrap">
        <h2 :class="$style.title">{{post.title.rendered}}</h2>
        <ul :class="$style.categories">
          <li v-for="id in post.categories">
            <div v-if="id == 1">Breakfast</div>
            <div v-if="id == 14">Dinner</div>
            <div v-if="id == 17">Dessert</div>
            <div v-if="id == 13">Lunch</div>
            <div v-if="id == 22">Middle-eastern</div>
            <div v-if="id == 18">Salad</div>
            <div v-if="id == 23">Sauce / Dip / Spread</div>
            <div v-if="id == 34">Sidedish</div>
            <div v-if="id == 33">Snacks</div>
            <div v-if="id == 15">Smoothie</div>
          </li>
        </ul>
        <ul :class="$style.tags">
          <li v-for="id in post.tags">
            <div v-if="id == 8"><i :class="$style.iconGlutenFree"><span>Gluten-free</span></i></div>
            <div v-if="id == 27"><i :class="$style.iconNutFree"><span>Nut-free</span></i></div>
            <div v-if="id == 25"><i :class="$style.iconSoyFree"><span>Soy-free</span></i></div>
            <div v-if="id == 24"><i :class="$style.iconSugarFree"><span>Sugar-free</span></i></div>
            <div v-if="id == 26"><i :class="$style.iconRaw"><span>Raw</span></i></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
