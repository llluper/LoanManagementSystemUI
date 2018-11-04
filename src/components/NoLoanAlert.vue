<template>
  <div class="NoLoanAlert">
    <div v-if="loanCountThreeOrMore" class="noLoanAlert">
    <p>With 3 or more current Personal Loans, a new loan application is not possible in this flow</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'NoLoanAlert',
  computed: mapGetters([
    'loanCountThreeOrMore',
  ]),
});
</script>

<style lang="scss" scoped>
.noLoanAlert {
  background-color: #e5e3e0;
  border-left: 4px solid #746f6a;
  border-radius: 3px;
  padding: 1rem 3rem;
}
p {
  margin: 0
}
</style>
