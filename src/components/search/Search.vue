<template>
  <div class="w-100 d-flex justify-content-center search-container">
    <input
      v-model="searchQuery"
      type="search"
      placeholder="Search for a TV show"
      @input="isTyping($event)"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "Search",
  data() {
    return {
      searching: false,
      searchQuery: "",
    }
  },
  methods: {
    isTyping(event: Event) {
      if ((event.target as HTMLInputElement).value) {
        this.$emit("isSearching", (this.searching = true))
      } else this.$emit("isSearching", (this.searching = false))
    },
  },
})
</script>

<style lang="scss">
@import "style";
</style>
