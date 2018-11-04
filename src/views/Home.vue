<template>
  <div class="home">
    <HomeTop />
    <HomeBody />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HomeTop from '../components/HomeTop.vue';
import HomeBody from '../components/HomeBody.vue';

export default Vue.extend({
  name: 'home',
  components: {
    HomeTop,
    HomeBody,
  },
});
</script>
