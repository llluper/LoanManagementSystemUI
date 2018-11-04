<template>
  <div class="loan">
    <div class="row header">
      <div class="column five-twelths">
        Placeat
      </div>
    </div>
    <div class="row interest">
      <div class="column five-twelfths">
        Balance
      </div>
      <div class="column three-twelfths">
        {{ balance }} 
      </div>
      <div class="column four-twelfths">
        <input type="checkbox" :value="loan.topUp" /> Top Up  
      </div>
    </div>
    <div class="row">
      <div class="column five-twelfths">
        Balance includes interest of
      </div> 
      <div class="column 7of12">
        {{ interest }}
      </div>
    </div>
    <div class="row">
      <div class="column five-twelfths">
        Early repayment fee
      </div> 
      <div class="column 7of12">
        {{ fee }}
      </div>
    </div>
    <div class="row">
      <div class="column five-twelfths">
        Payout / Carryover amount
      </div>
      <div class="column three-twelfths text-bold">
        {{ payout }} 
      </div>
      <div class="column four-twelfths">
        This amount will be carried over
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'loan',
  props: ['loan', 'index'],
  data() {
    return {
      balance: '$' + (this.loan.balance),
      interest: '$' + (this.loan.interest),
      fee: '$' + (this.loan.fee),
      payout: '$' + (this.loan.payout),
    };
  },
});
</script>

<style lang="scss" scoped>

</style>

