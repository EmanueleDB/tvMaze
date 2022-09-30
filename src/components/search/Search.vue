<template>
  <div>
    <div class="w-100 d-flex justify-content-center search-container">
      <input
        v-model="searchQuery"
        type="search"
        placeholder="Search for a TV show"
        @input="isTyping($event)"
      />
    </div>
    <div class="container">
      <Slider
        v-if="searchQuery"
        :group="availableShows"
        :search-query="searchQuery"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import Slider from "@/components/slider/Slider.vue"
import TvShow from "@/types/TvShow"

export default Vue.extend({
  name: "Search",
  components: {
    Slider,
  },
  data() {
    return {
      searchQuery: "",
      tvShows: [] as Array<TvShow>,
    }
  },
  computed: {
    availableShows(): TvShow[] {
      return this.tvShows.filter((tvShow: TvShow) =>
        tvShow.name.toLowerCase().includes(this.searchQuery)
      )
    },
  },
  watch: {
    "$store.state.tvShowsCollection"(to) {
      if (to) this.tvShows = to
    },
  },
  methods: {
    isTyping(event: Event) {
      if ((event.target as HTMLInputElement).value) {
        this.$emit("isSearching", this.searchQuery)
      } else this.$emit("isSearching", (this.searchQuery = ""))
    },
  },
})
</script>

<style lang="scss">
@import "style";
</style>
