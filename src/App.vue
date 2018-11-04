<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
$color-background: #f7f7f7;

html {
  background-color: $color-background;
  font-size: 14px;
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
.row {
  @media screen and (min-width: 769px) {
    display: flex;
  }
}
.column {
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: .75rem;
  &.three-twelfths {
    @media only screen and (min-width: 769px) {
      flex: none;
      width: 25%;
    }
  }
  &.four-twelfths {
    @media only screen and (min-width: 769px) {
      flex: none;
      width: 33.33333%;
    }
  }
  &.five-twelfths {
    @media only screen and (min-width: 769px) {
      flex: none;
      width: 41.66667%;
    }
  }
  &.eight-twelfths {
    @media only screen and (min-width: 769px) {
      flex: none;
      width: 66.66667%;
    }
  }    
}
.text-bold {
  font-weight: bold;
}
.text-right {
  text-align: right
}
.text-medium {
  font-size: 110%;
}
</style>
