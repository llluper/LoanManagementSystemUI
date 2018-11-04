<template>
  <div class="loan">
    <div class="row header">
      <div class="column five-twelths">
        {{ index + 1 }}. {{ index % 2 ? '' : 'Placeat' }} {{ index % 2 ? 'Autern' : ''}} quas {{ index > 1 ? 'volup' : '' }} #4155{{ index + 3 }}
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
        <input type="checkbox" :value="loan.topUp" @click="topUp(index)" /> Top Up  
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
import { mapActions } from 'vuex';
import { numberWithCommas } from '../common/statics';

export default Vue.extend({
  name: 'loan',
  props: ['loan', 'index'],
  data() {
    return {
      balance: '$' + numberWithCommas(this.loan.balance),
      interest: '$' + numberWithCommas(this.loan.interest),
      fee: '$' + numberWithCommas(this.loan.fee),
      payout: '$' + numberWithCommas(this.loan.payout),
    };
  },
  methods: {
    ...mapActions([
      'topUp',
    ]),
  },
});
</script>

<style lang="scss" scoped>
.row {
  background-color: #fff;
  &.header {
    background-color: #eee;
    border-bottom: 1px solid #000;
  }
  &.interest {
    border-bottom: 1px solid #000;
  }
}
.loan {
  overflow: auto;
  margin-top: 20px;
  border: 1px solid #000;
  border-radius: 5px;
}
</style>

