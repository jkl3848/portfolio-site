<!-- eslint-disable no-unused-vars -->
<script setup>
import { ref, watch } from "vue";

var d4 = ref(0);
var d6 = ref(0);
var d8 = ref(0);
var d10 = ref(0);
var d12 = ref(0);
var d20 = ref(0);
var d100 = ref(0);
</script>

<template>
  <div id="dice-block">
    <div id="dice-header">Dice Roller</div>

    <div id="dice-selector">
      <div class="dice-select">4</div>
      <div class="dice-select">6</div>
      <div class="dice-select">8</div>
      <div class="dice-select">10</div>
      <div class="dice-select">12</div>
      <div class="dice-select">20</div>
      <div class="dice-select">100</div>
    </div>

    <div id="dice-canvas"></div>
  </div>
</template>

<style scoped>
#dice-block {
  padding-top: 24px;
}
#dice-header {
  font-size: 48px;
  text-align: center;
  margin-bottom: 8px;
}
#dice-selector {
  border: 2px solid black;
  width: 80%;
  margin: auto;
}
</style>
