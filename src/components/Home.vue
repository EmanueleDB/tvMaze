<template>
  <div>
    <div
      v-if="!collections"
      class="d-flex justify-content-center align-items-center mb-3"
    >
      <strong>Loading the TV Shows... </strong>
      <b-spinner type="grow" label="Spinning" variant="secondary"></b-spinner>
    </div>
    <Search v-show="collections" @isSearching="isTyping" />
    <Collections v-show="collections && !isSearching.length" />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import Collections from "@/components/collections/Collections.vue"
import Search from "@/components/search/Search.vue"

export default Vue.extend({
  name: "Home",
  components: {
    Collections,
    Search,
  },
  data() {
    return {
      isSearching: "",
    }
  },
  computed: {
    collections() {
      return this.$store.state.hasRendered
    },
  },
  methods: {
    isTyping(value: string) {
      this.isSearching = value
    },
  },
})
</script>
