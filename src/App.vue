<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  data() {
    return {
      link: 'http://localhost:5000/api/loan',
    };
  },
  methods: {
    ...mapActions([
      'saveLoans',
    ]),
  },
  created() {
    this.$http.get(this.link).then((response) => {
      this.saveLoans(response.data);
    }, (error) => {
      console.log(error.statusText);
    });
  },
});
</script>

<style lang="scss">
$color-background: #f7f7f7;

html {
  background-color: $color-background;
  font-size: 12px;
  min-width: 300px;
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  text-rendering: optimizeLegibility;
}
body {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #000;
}
.container {  
  margin: 0 auto;
  position: relative;
  @media screen and (min-width: 1088px) {
      max-width: 1020px;
      width: 1088px;
  }
  @media screen and (min-width: 1280px) {
      max-width: 1180px;
      width: 1180px;
  }
}
.row {
  width: 100%;
  @media screen and (min-width: 769px) {
    display: flex;
  }
}
.column {
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  &.is-3-of-12 {
    @media only screen and (min-width: 769px) {
      flex: none;
      width: 25%;
    }
  }
  &.is-4-of-12 {
    @media only screen and (min-width: 769px) {
      flex: none;
      width: 33.33333%;
    }
  }
  &.is-5-of-12 {
    @media only screen and (min-width: 769px) {
      flex: none;
      width: 41.66667%;
    }
  }
  &.is-8-of-12 {
    @media only screen and (min-width: 769px) {
      flex: none;
      width: 66.66667%;
    }
  }    
}
.text-bold {
  font-weight: bold;
}
.text-right-desktop {
  @media only screen and (min-width: 769px) {
    text-align: right
  }
}
.text-center-mobile {
  @media only screen and (max-width: 768px) {
    text-align: center
  }
}
.text-medium {
  font-size: 110%;
}
p {
  padding: 1em;
  margin: 0;
}
</style>
