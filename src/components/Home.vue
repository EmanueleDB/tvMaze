<template>
  <div :class="!collections ? 'text-center' : ''">
    <b-spinner
      v-if="!collections"
      type="grow"
      label="Spinning"
      variant="secondary"
    ></b-spinner>
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
