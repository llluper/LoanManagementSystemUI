<template>
  <div class="loan">
    <div class="row header">
      <div class="column five-twelths">
        <p>{{ index + 1 }}. {{ index % 2 ? '' : 'Placeat' }} {{ index % 2 ? 'Autern' : ''}} quas {{ index > 1 ? 'volup' : '' }} #4155{{ index + 3 }}</p>
      </div>
    </div>
    <div class="row interest">
      <div class="column is-5-of-12">
        <p>Balance</p>
      </div>
      <div class="column is-3-of-12">
        <p class="text-center-mobile">{{ balance }}</p>
      </div>
      <div class="column is-4-of-12">
        <div class="topUp-checkbox">
          <input type="checkbox" :value="loan.topUp" @click="topUp(index)" /> Top Up  
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column is-5-of-12">
        <p>Balance includes interest of</p>
      </div> 
      <div class="column 7of12">
        <p class="text-center-mobile">{{ interest }}</p>
      </div>
    </div>
    <div class="row">
      <div class="column is-5-of-12">
        <p>Early repayment fee</p>
      </div> 
      <div class="column 7of12">
        <p class="text-center-mobile">{{ fee }}</p>
      </div>
    </div>
    <div class="row">
      <div class="column is-5-of-12">
        <p>Payout / Carryover amount</p>
      </div>
      <div class="column is-3-of-12 text-bold">
        <p class="text-center-mobile">{{ payout }}</p>
      </div>
      <div class="column is-4-of-12">
        <p>This amount will be carried over</p>
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
.loan {
  overflow: auto;
  margin-top: 20px;
  border: 1px solid #000;
  border-radius: 5px;
}
.row {
  background-color: #fff;
  display: flex;
  &.header {
    background-color: #eee;
    border-bottom: 1px solid #000;
  }
  &.interest {
    border-bottom: 1px solid #000;
  }
}
.topUp-checkbox {
  margin: 1em;
}
</style>

