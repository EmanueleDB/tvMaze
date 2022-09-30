<template>
  <div class="container__slider">
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
  },
  data() {
    return {
      showModal: false,
      tvShow: {} as TvShow,
      sortedGroup: [] as Array<TvShow>,
    }
  },
  mounted() {
    if (this.group.length) {
      console.log(this.group)
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
  },
})
</script>
