<template>
  <div :class="['container__slider', id]">
    <button
      v-if="group.length > 6"
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
      <img
        :src="tvShow.image.original"
        :style="[
          group.length <= 6 || sortedGroup.length <= 6
            ? { marginLeft: '60px' }
            : '',
        ]"
        alt="image-show"
        @load.prevent="countLoadedImages()"
      />
    </div>
    <DetailsModal
      :show-modal="showModal"
      @close="closeModal"
      :tv-show="tvShow"
    />
    <button
      v-if="group.length > 6"
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
      loadedImages: 0 as number,
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
      if (direction === "moveRight") {
        this.distanceToScroll = this.distanceToScroll + 700
      } else if (this.distanceToScroll === 0) return
      else this.distanceToScroll = this.distanceToScroll - 700

      slider?.scrollTo({
        top: 0,
        left: this.distanceToScroll,
        behavior: "smooth",
      })
    },
    countLoadedImages() {
      this.loadedImages++
      if (this.loadedImages === this.sortedGroup.length)
        this.$store.commit("imageCounter", this.loadedImages)
    },
  },
})
</script>
