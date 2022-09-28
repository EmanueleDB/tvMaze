<template>
  <div>
    <Search @isSearching="isTyping" />
    <Collections v-if="!isSearching.length" />
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
  methods: {
    isTyping(value: string) {
      this.isSearching = value
    },
  },
})
</script>
