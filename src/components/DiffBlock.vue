<script setup>
import { ref } from "vue";
import diffFuncs from "../js/difference.js";

const difference = diffFuncs();

var diffArr = ref();

function runDiff() {
  var a = document.getElementById("texta").value;
  var b = document.getElementById("textb").value;

  diffArr = difference.compareText(a, b);

  console.log(structuredClone(diffArr));
}
</script>

<template>
  <div id="diff-block">
    <textarea id="texta" class="diff-box"></textarea>
    <textarea id="textb" class="diff-box"></textarea>
    <button @click="runDiff()">Diff</button>

    <div>
      <p id="diff-output">
        <span v-for="frag in diffArr" :key="frag.UUID" :id="frag.UUID">
          {{ frag }}
          Hello
        </span>
      </p>
    </div>
  </div>
</template>

<style scoped></style>
