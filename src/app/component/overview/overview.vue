<script src="./overview.js"></script>

<style module src="./overview.css"></style>

<template>
  <div :class="$style.component" id="overview">
    <div :class="$style.item" v-for='post in posts' @click="goToDetail(post)">
      <li v-for="id, index in post.categories">
        <span >{{ id }}</span>
      </li>
      <figure :class="$style.media">
        <img v-bind:src="post.acf.cover.sizes.large" alt="">
      </figure>
      <div :class="$style.copy">
        <h2 :class="$style.title">{{post.title.rendered}}</h2>
        <ul :class="$style.categories">
          <p>{{post.categegories}}</p>
          <div v-for="id, index in post.categories">
            <li v-for="category in categories" v-show="id == category.id">
              <span v-if="id == category.id">{{ category.name }}</span>
            </li>
          </div>
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
