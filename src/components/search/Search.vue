<template>
  <div>
    <div class="search-container">
      <input
        type="search"
        placeholder="Search for a TV show"
        @input="isTyping($event)"
      />
      <div>
        <b-dropdown
          class="dropdown"
          v-b-tooltip.top="'Search by'"
          right
          no-caret
        >
          <template #button-content>
            <font-awesome-icon icon="fa-solid fa-filter" class="filter" />
          </template>
          <div v-for="(filterItem, index) of filters" :key="index">
            <b-dropdown-item
              class="p-2"
              @click="changeFilter(filterItem.value)"
            >
              <div class="btn btn-white btn-list btn-sm">
                <span :class="{ active: filter === filterItem.value }">{{
                  filterItem.label
                }}</span>
              </div>
            </b-dropdown-item>
          </div>
        </b-dropdown>
      </div>
    </div>
    <div class="container">
      <Slider
        v-if="searchQuery"
        :group="availableShows"
        :search-query="searchQuery"
        id="foundMatches"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import Slider from "@/components/slider/Slider.vue"
import TvShow from "@/types/TvShow"

export default Vue.extend({
  name: "Search",
  components: {
    Slider,
  },
  data() {
    return {
      searchQuery: "",
      tvShows: [] as Array<TvShow>,
      filter: "name",
      filters: [
        { label: "Name", value: "name" },
        { label: "Network", value: "network" },
      ],
    }
  },
  computed: {
    availableShows(): TvShow[] {
      return this.tvShows.filter((tvShow: TvShow) =>
        this.filter === "name"
          ? tvShow.name.toLowerCase().includes(this.searchQuery)
          : tvShow.network?.name.toLowerCase().includes(this.searchQuery)
      )
    },
  },
  watch: {
    "$store.state.tvShowsCollection"(to) {
      if (to) this.tvShows = to
    },
  },
  methods: {
    isTyping(event: Event) {
      if ((event.target as HTMLInputElement).value) {
        this.searchQuery = (event.target as HTMLInputElement).value
        this.$emit("isSearching", this.searchQuery)
      } else this.$emit("isSearching", (this.searchQuery = ""))
    },
    changeFilter(value: string) {
      this.filter = value
    },
  },
})
</script>

<style lang="scss">
@import "style";
</style>
