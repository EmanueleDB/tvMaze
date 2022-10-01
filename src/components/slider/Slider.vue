<template>
  <div :class="['container__slider', id]">
    <button
      type="button"
      id="moveLeft"
      class="btn-nav"
      @click="scrollTvShows('moveLeft')"
    >
      ᐊ
    </button>
    <div
      v-for="tvShow of searchQuery ? group : sortedGroup"
      :key="tvShow.id"
      class="container__slider__movie"
      @click="openModal(tvShow)"
    >
      <img :src="tvShow.image.original" alt="image-show" />
    </div>
    <DetailsModal
      :show-modal="showModal"
      @close="closeModal"
      :tv-show="tvShow"
    />
    <button
      type="button"
      id="moveRight"
      class="btn-nav"
      @click="scrollTvShows('moveRight')"
    >
      ᐅ
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import TvShow from "../../types/TvShow"
import DetailsModal from "@/components/detailsModal/DetailsModal.vue"

export default Vue.extend({
  name: "Slider",
  components: { DetailsModal },
  props: {
    group: {
      type: Array as () => Array<TvShow>,
      required: true,
    },
    searchQuery: {
      type: [String, Boolean],
      default: false,
    },
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showModal: false,
      tvShow: {} as TvShow,
      sortedGroup: [] as Array<TvShow>,
      distanceToScroll: 0,
    }
  },
  watch: {
    id(to) {
      if (to) this.distanceToScroll = 0
    },
  },
  mounted() {
    if (this.group.length) {
      this.sortedByRating()
    }
  },
  methods: {
    closeModal(value: boolean) {
      this.showModal = value
    },
    openModal(tvShow: TvShow) {
      this.tvShow = tvShow
      this.showModal = true
    },
    sortedByRating() {
      this.sortedGroup = this.group
      this.sortedGroup = this.sortedGroup.sort(
        (a, b) => b.rating.average - a.rating.average
      )
    },
    scrollTvShows(direction: string) {
      const slider = document.querySelector("." + this.id) as Element
      direction === "moveRight"
        ? (this.distanceToScroll = this.distanceToScroll + 700)
        : (this.distanceToScroll = this.distanceToScroll - 700)
      slider?.scrollTo({
        top: 0,
        left: this.distanceToScroll,
        behavior: "smooth",
      })
    },
  },
})
</script>
