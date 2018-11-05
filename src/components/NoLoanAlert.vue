<template>
  <div class="NoLoanAlert">
    <div v-if="loanCountThreeOrMore" class="noLoanAlert">
    <p>{{ NoLoanAlertText }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import { NoLoanAlertText } from '../common/statics';

export default Vue.extend({
  name: 'NoLoanAlert',
  data() {
    return {
      NoLoanAlertText,
    };
  },
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
  padding: 0
}
</style>
