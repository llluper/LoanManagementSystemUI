<template>
  <div class="loans">
    <div :key="'loans-' + index" v-for="(loan, index) in $store.state.loans">
      <Loan :loan="loan" :index="index" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Loan from './Loan.vue';

export default Vue.extend({
  name: 'loans',
  components: { Loan },
});
</script>

<style lang="scss" scoped>
.loans {
  padding: 0 30px;
}
</style>
