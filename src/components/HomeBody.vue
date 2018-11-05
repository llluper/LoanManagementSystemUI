<template>
  <div class="homebody">
    <div class="row">
      <div class="column is-8-of-12">
        <div class="loan-count">          
          <p class="text-medium">You have {{ loanCount }} Personal loans</p>
        </div>          
      </div>
      <div class="column is-4-of-12">
        <div class="noloanalert-div">
          <NoLoanAlert />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column is-8-of-12">
        <Loans />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import Loans from './Loans.vue';
import NoLoanAlert from '../components/NoLoanAlert.vue';

export default Vue.extend({
  name: 'homebody',
  components: { Loans, NoLoanAlert },
  computed: mapGetters([
    'loanCount',
  ]),
});
</script>

<style lang="scss" scoped>
.homebody {
  @media only screen and (min-width: 769px) {
    padding-top: 30px;
  }
}
.loan-count {
  padding: 10px 0 0;
}
.noloanalert-div {
  padding: 1em;
}
</style>

