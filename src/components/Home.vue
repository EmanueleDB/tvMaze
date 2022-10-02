<template>
  <div :class="!collections ? 'text-center' : ''">
    <b-spinner
      v-show="!collections"
      type="grow"
      label="Spinning"
      variant="secondary"
    ></b-spinner>
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
