<template>
  <b-modal
    :visible="showModal"
    class="modal"
    hide-header
    size="lg"
    hide-footer
    no-close-on-backdrop
  >
    <b-button
      type="button"
      variant="light"
      class="btn btn-sm modal__close"
      @click="closeModal"
      >&times;</b-button
    >
    <div class="flexcard">
      <div class="flexcard__header p-3 border-bottom border-light">
        <h3></h3>
      </div>
      <p></p>
    </div>
  </b-modal>
</template>
<script lang="ts">
import Vue from "vue"
import TvShow from "@/models/TvShow"

export default Vue.extend({
  name: "DetailsModal",
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
    tvShow: {
      type: Object,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close", false)
    },
  },
})
</script>

<style lang="scss">
@import "style";
</style>
