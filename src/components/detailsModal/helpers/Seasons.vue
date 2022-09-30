<template>
  <div class="row">
    <div class="col-12">
      <h6 class="mt-2">Seasons</h6>
    </div>

    <div v-for="season of seasons" :key="season.id" class="col-2 mt-2">
      <div>{{ season.name }}</div>
      <img
        v-if="season.image"
        class="season-image"
        :src="season.image.original"
        alt="season-image"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "Seasons",
  props: {
    seasons: {
      type: Array,
      required: true,
    },
  },
})
</script>

<style lang="scss">
.season-image {
  width: 100%;
  height: 100%;
}
</style>
