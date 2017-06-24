<script src="./recipe.js"></script>

<style module src="./recipe.css"></style>

<template>
    <div :class="$style.page">
      <div :class='$style.detail'>
        <div :class='$style.detailWrap'>
          <div :class='$style.detailCopy'>
            <!-- <div :class='$style.detailShare'>{{ content }}</div> -->
            <h2 :class='$style.detailTitle'>{{ title }}</h2>
          </div>
          <div :class='$style.detailCover'>
            <img :src="cover" alt="">
          </div>
        </div>

        <div v-for="(item, index) in grids">
          <div :class="$style.grid">
            <div :class="item.is_reverse ? $style.detailGridReverse : $style.detailGrid" v-if="item.no == 1">
              <div :class='$style.detailGridItemDouble'>
                <div :class='$style.detailGridItemText'>
                  <p>{{ item.no }} FIRST</p>
                  <h3 :class='$style.detailGridItemTitle'>{{ item.title }}</h3>
                  <div>{{ item.text }}</div>
                </div>
              </div>
              <div :class='$style.detailGridItemDouble'>
                <div :class='$style.detailGridItemMedia'>
                  <img :src="item.image.sizes.medium" />
                </div>
              </div>
            </div>

            <div :class="item.is_reverse ? $style.detailGridReverse : $style.detailGrid" v-if="item.no == 2">
              <div :class='$style.detailGridItemTripple'>
                <div :class='$style.detailGridItemText'>
                  <p>{{ item.no }} SECOND</p>
                  <h3 :class='$style.detailGridItemTitle'>{{ item.title }}</h3>
                  <div>{{ item.text }}</div>
                </div>
              </div>
              <div :class='$style.detailGridItemTripple'>
                <div :class='$style.detailGridItemText'>
                  <h3 v-if="item.title_2" :class='$style.detailGridItemTitle'>{{ item.title_2 }}</h3>
                  <div>{{ item.text_2 }}</div>
                </div>
              </div>
              <div :class='$style.detailGridItemTripple'>
                <div :class='$style.detailGridItemMedia'>
                  <img :src="item.image.sizes.medium" />
                </div>
              </div>
            </div>

            <div :class="item.is_reverse ? $style.detailGridReverse : $style.detailGrid" v-if="item.no == 3">
              <div :class='$style.detailGridItemTripple'>
                <div :class='$style.detailGridItemText'>
                  <p>{{ item.no }} THIRD</p>
                  <h3 :class='$style.detailGridItemTitle'>{{ item.title }}</h3>
                  <div>{{ item.text }}</div>
                </div>
              </div>
              <div :class='$style.detailGridItemTripple'>
                <div :class='$style.detailGridItemMedia'>
                  <img :src="item.image.sizes.medium" />
                </div>
              </div>
              <div :class='$style.detailGridItemTripple'>
                <div :class='$style.detailGridItemMedia'>
                  <img :src="item.image_2.sizes.medium" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div :class="$style.grid">
        <div :class='$style.information'>
          <div :class='$style.informationWrap'>
            <h3 :class='$style.ingredientsTitle'>Ingredients</h3>
            <ul :class='$style.ingredientsList'>{{ ingredientsList }}</ul>
            <div :class='$style.informationFooter'>
              <div :class='$style.informationTime'>
                 <p>{{ information }}</p>
              </div>
              <a :class='$style.informationPrint' href="javascript:window.print()">Print</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
