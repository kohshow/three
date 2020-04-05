<template>
  <div id="app">
    <div>
      <label for="speed">speed</label>
      <input 
        v-model.number="speed"
        name="speed"
        id="speed"
        type="range"
        min="0.000"
        max="0.1"
        step="0.005"
      />
    </div>
    <rotate-box :speed="speed"></rotate-box>
  </div>
</template>

<script>
import RotateBox from "./components/RotateBox";

export default {
  name: "app",
  components: {
    RotateBox
  },
  data() {
    return {
      speed: 0.02
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
