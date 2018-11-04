<template>
  <div class="homebody row">
      <div class="column eight-twelfths">
        <div class="loan-count text-medium">You have {{ loanCount }} Personal loans</div>          
        <Loans />
      </div>
      <div class="column four-twelfths">
        <NoLoanAlert />
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
  padding-top: 30px;
}
.loan-count {
  padding: 10px 0 50px;
}
</style>

