<template>
  <div class="hometop">
    <div class="container title-div">
      <h3>Personal Loan Top Up or Apply</h3>
    </div>
    <div class="row carryover">
      <div class="column is-8-of-12">
        <div class="row">
          <div class="column is-8-of-12">
            <p class="text-medium">To apply for a Top Up of an existing loan amount, please select the load below, make note of the Carry-over amount before proceeding.</p>
          </div>
          <div class="column is-3-of-12">
            <p class="text-medium">Carryover / Payout Amount</p>
          </div>
          <div class="column total-payout">
            <p class="text-bold text-right-desktop text-medium">${{ numberWithCommas($store.state.totalPayout) }}</p>
          </div>
        </div>
      </div>
      <div class="column is-4-of-12">
        <button class="button" :disabled="$store.state.totalPayout <= 0">
          Apply for Increased Loan amounts
        </button>
      </div>
    </div>
    <div class="blank row">
      <div class="column is-8-of-12">
      </div>
      <div class="column is-4-of-12">
        <button class="button" :disabled="loanCountThreeOrMore">
          Apply for new Personal Loan
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import { numberWithCommas } from '../common/statics';

export default Vue.extend({
  name: 'hometop',
  computed: mapGetters([
    'loanCountThreeOrMore',
  ]),
  methods: {
    numberWithCommas,
  },
});
</script>

<style lang="scss" scoped>
.button {
  background: transparent;
  border-radius: 30px;
  width: 250px;
  height: 30px;
  margin-left: 10px;
  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
}
.column {
  @media screen and (min-width: 769px) {
    display: flex;
    align-items: center;
  }
}
.carryover,
.blank {
  border-top: 1px solid #000;
  @media screen and (min-width: 769px) {
    height: 80px;
  }
  .is-4-of-12 {
    @media screen and (min-width: 769px) {
      border-left: 1px solid #000;
    }
    @media screen and (max-width: 768px) {
      border-top: 1px solid #000;
      height: 60px;
      display: flex;
      align-items: center;
    }
  } 
}
.blank {
  border-bottom: 1px solid #000;
  @media screen and (max-width: 768px) {
    border-top: none;
  }
}
.title-div {
  padding: 0 .75rem;
}
.total-payout {
  p {
    margin-left: auto;
  }
}
</style>

