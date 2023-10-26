<!-- eslint-disable no-unused-vars -->
<script setup>
import { ref } from "vue";
import AboutMe from "./AboutMe.vue";
import DiffBlock from "./DiffBlock.vue";
import DiceRoller from "./DiceRoller.vue";

var showBar = ref(false);
var projectDrop = ref();
</script>

<template>
  <div id="container">
    <div id="header">
      <div id="nav-bar">
        <div class="nav-bar-item">Home</div>
        <div
          class="nav-bar-item"
          @mouseenter="projectDrop = true"
          @mouseleave="projectDrop = false"
        >
          Projects
        </div>
        <div class="nav-bar-item">Contact</div>
        <div>
          <a href="https://github.com/jkl3848" target="_blank">
            <img
              src="../assets/github/github-mark-white.png"
              class="nav-bar-icon"
          /></a>
        </div>
      </div>
    </div>
    <div
      v-if="projectDrop"
      class="nav-dropdown"
      @mouseenter="projectDrop = true"
      @mouseleave="projectDrop = false"
    >
      <div class="nav-bar-item">Demos</div>
      <div class="nav-bar-item">Hobbies</div>
    </div>

    <AboutMe></AboutMe>

    <div id="demos" class="section">
      <p class="section-title">DEMOS</p>
      <DiffBlock></DiffBlock>
      <DiceRoller></DiceRoller>
    </div>
    <div id="hobbies" class="section"></div>
    <div id="footer"></div>
  </div>
</template>

<style scoped>
#container {
  background-color: white;
  padding-bottom: 20px;
}
#header {
  color: white;
  background-color: rgb(20, 20, 73);
}
#nav-bar {
  height: 60px;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.nav-dropdown {
  left: calc(50% - 160px);
  width: 160px;
  z-index: 100;
  border: none;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(20, 20, 73);
  opacity: 0.8;
  color: white;
}

.nav-bar-item {
  width: 160px;
  height: 40px;
  text-align: center;
  font-size: 28px;
  margin: auto;
}
.nav-bar-icon {
  height: 40px;
  margin: 8px;
}
.nav-bar-item:hover {
  background-color: rgb(22, 22, 95);
}
.nav-bar-icon:hover {
  opacity: 0.6;
}

.section {
}

.section-title {
  font-size: 72px;
  font-weight: 800;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
