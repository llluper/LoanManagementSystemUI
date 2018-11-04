<template>
  <div class="homebody row">
      <div class="column eight-twelfths">
        <div class="loan-count text-medium">You have 0 Personal loans</div>          
        <Loans />
      </div>
      <div class="column four-twelfths">
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Loans from './Loans.vue';

export default Vue.extend({
  name: 'homebody',
  components: { Loans },
});
</script>

<style lang="scss" scoped>
.homebody {
  padding-top: 30px;
}
.loan-count {
  padding: 10px 0 50px;
}
</style>

