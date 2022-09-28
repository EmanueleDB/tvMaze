<template>
  <div id="app" class="pb-4">
    <Logo />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import Logo from "./components/logo/Logo.vue"
export default Vue.extend({
  components: { Logo },
})
</script>
