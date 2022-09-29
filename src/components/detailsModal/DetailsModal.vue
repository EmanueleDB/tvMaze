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
      class="modal__close p-0"
      @click="closeModal"
      >&times;</b-button
    >
    <div class="flexcard">
      <div class="flexcard__header p-3 border-bottom border-light">
        <div class="row">
          <div class="col">
            <img
              v-if="tvShow.image"
              class="flexcard__header__image"
              :src="tvShow.image.original"
              alt="show-image"
            />
          </div>
          <div class="col">
            <h3 class="border-bottom border-light mb-4">{{ tvShow.name }}</h3>
            <Section :section="tvShow.genres" icon="fa-clapperboard" />
            <Section :section="tvShow.language" icon="fa-language" />
            <Section
              v-if="tvShow.rating"
              :section="tvShow.rating.average"
              icon="fa-star-half-stroke"
            />
            <Section
              v-if="tvShow.network"
              :section="tvShow.network.name"
              icon="fa-network-wired"
            />
          </div>
        </div>
      </div>
      <div class="flexcard__body d-flex flex-column p-3">
        <p>{{ strippedSummary(tvShow.summary) }}</p>
      </div>
    </div>
  </b-modal>
</template>
<script lang="ts">
import Vue from "vue"
import Section from "@/components/helpers/Section.vue"
import TvShow from "@/types/TvShow"

export default Vue.extend({
  name: "DetailsModal",
  components: { Section },
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
    tvShow: {
      type: Object as () => TvShow,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close", false)
    },
    strippedSummary(summary: string) {
      if (summary) {
        const regex = /(<([^>]+)>)/gi
        return summary.replace(regex, "")
      }
    },
  },
})
</script>

<style lang="scss">
@import "style";
</style>
