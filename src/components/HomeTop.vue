<template>
  <div class="hometop">
    <div class="row title-div">
      <h3>Personal Loan Top Up or Apply</h3>
    </div>
    <div class="row carryover">
      <div class="column eight-twelfths">
        <div class="row">
          <div class="column eight-twelfths text-medium to-apply-div">
            To apply for a Top Up of an existing loan amount, please select the load below, make note of the Carry-over amount before proceeding.
          </div>
          <div class="column text-medium">
            Carryover / Payout Amount
          </div>
          <div class="column text-bold text-right text-medium">
            ${{ $store.state.totalPayout }}
          </div>
        </div>
      </div>
      <div class="column four-twelfths">
        <button :disabled="$store.state.totalPayout <= 0">
          Apply for Increased Loan amounts
        </button>
      </div>
    </div>
    <div class="blank row">
      <div class="column eight-twelfths">
      </div>
      <div class="column four-twelfths">
        <button :disabled="loanCountThreeOrMore">
          Apply for new Personal Loan
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'hometop',
  computed: mapGetters([
    'loanCountThreeOrMore',
  ]),
});
</script>

<style lang="scss" scoped>
.carryover,
.blank {
  border-top: 1px solid #000;
  .four-twelfths {
    border-left: 1px solid #000;
  }
}
.blank {
  border-bottom: 1px solid #000;
}
.title-div {
  padding: 0 .75rem;
}
.to-apply-div {
  padding-left: 0;
}
</style>

