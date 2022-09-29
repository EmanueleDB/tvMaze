<template>
  <div class="container__slider">
    <div
      v-for="tvShow of group"
      :key="tvShow.id"
      class="container__slider__movie"
      @click="sendTvShow(tvShow)"
    >
      <img :src="tvShow.image.original" alt="image-show" />
    </div>
    <DetailsModal
      :show-modal="showModal"
      @close="closeModal"
      :tv-show="tvShow"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import TvShow from "../../models/TvShow"
import DetailsModal from "@/components/detailsModal/DetailsModal.vue"

export default Vue.extend({
  name: "Slider",
  components: { DetailsModal },
  props: {
    group: {
      type: Array as () => Array<TvShow>,
      required: true,
    },
  },
  data() {
    return {
      showModal: false,
      tvShow: {} as TvShow,
    }
  },
  methods: {
    closeModal(value: boolean) {
      this.showModal = value
    },
    sendTvShow(tvShow: TvShow) {
      this.tvShow = tvShow
      this.showModal = true
    },
  },
})
</script>
