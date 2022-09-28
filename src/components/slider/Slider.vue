<template>
  <div class="container__slider">
    <div
      v-for="tvShow of group"
      :key="tvShow.id"
      class="container__slider__movie"
    >
      <img :src="tvShow.image.original" alt="image-show" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import TvShow from "../../models/TvShow"

export default Vue.extend({
  name: "Slider",
  props: {
    group: {
      type: Array as () => Array<TvShow>,
      required: true,
    },
  },
})
</script>
