<template>
  <div class="home">
    <HomeTop />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HomeTop from '../components/HomeTop.vue';

export default Vue.extend({
  name: 'home',
  components: {
    HomeTop,
  },
});
</script>
