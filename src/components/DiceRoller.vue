<!-- eslint-disable no-unused-vars -->
<script setup>
import { ref, watch, computed } from "vue";
import diceFuncs from "../js/dice.js";

const dice = diceFuncs();

var diceObj = ref([]);
var diceTotal = ref(0);
const diceMax = computed(() => {
  const vals = diceObj.value.map((item) => item.max);
  let sum = vals.reduce((total, currentVal) => total + currentVal, 0);
  return sum;
});

function addDice(type) {
  console.log(type);
  diceObj.value.push({ type: "d" + type, max: type, val: 0 });

  console.log(diceObj.value);
}

function removeDice(type) {
  var dieIndex = diceObj.value.findIndex((item) => item.type === type);

  diceObj.value.splice(dieIndex, 1);
}

function roll() {
  let res = dice.rollDice(diceObj.value);
  diceTotal.value = res.total;
  diceObj.value = res.dice;
}
</script>

<template>
  <div id="dice-block">
    <div id="dice-header">Dice Roller</div>

    <div id="dice-selector">
      <div class="dice-row">
        <div class="dice-select" @click="addDice(4)">4</div>
        <div class="dice-select" @click="addDice(6)">6</div>
        <div class="dice-select" @click="addDice(8)">8</div>
        <div class="dice-select" @click="addDice(10)">10</div>
      </div>
      <div class="dice-row">
        <div class="dice-select" @click="addDice(12)">12</div>
        <div class="dice-select" @click="addDice(20)">20</div>
        <div class="dice-select" @click="addDice(100)">100</div>
      </div>
    </div>

    <div id="button-holder">
      <button id="roll-button" @click="roll()">Roll</button>
      Total: {{ diceTotal }} Max: {{ diceMax }}
      Avg:
    </div>
    <div id="dice-canvas">{{ diceObj }}</div>
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
  display: flex;
  flex-direction: column;
}
.dice-row {
  margin: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.dice-select {
  font-size: 40px;
}

#button-holder {
}

#roll-button {
  height: 60px;
  width: 120px;
  background-color: green;
  color: rgba(255, 255, 255, 0.803);
  font-size: 40px;
  border-radius: 12px;
  border: 2px solid rgb(44, 44, 44);
  margin: auto;
}
#dice-canvas {
  border: 2px solid black;
  width: 80%;
  margin: auto;

  height: 480px;
}
</style>
