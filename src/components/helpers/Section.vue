<template>
  <div
    v-if="typeof section === 'object'"
    class="d-flex align-items-center mt-1"
  >
    <font-awesome-icon :icon="`fa-solid ${icon}`" />
    <template v-for="item in section"
      ><p class="ml-2" :key="item">{{ item }}</p></template
    >
  </div>
  <div v-else class="d-flex align-items-center mt-1">
    <font-awesome-icon :icon="`fa-solid ${icon}`" />
    <p class="ml-2">{{ section }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "Section",
  props: {
    section: {
      type: [Array, String, Number],
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
})
</script>
