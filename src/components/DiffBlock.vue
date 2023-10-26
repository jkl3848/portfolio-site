<!-- eslint-disable no-unused-vars -->
<script setup>
import { ref, watch } from "vue";
import diffFuncs from "../js/difference.js";

const difference = diffFuncs();

var diffArr = ref();
var textAString = ref("");
var textBString = ref("");
var highlightSpans = ref();

watch(textAString, async (newVal, oldVal) => {
  if (newVal.length != oldVal.length) {
    runDiff(textAString.value, textBString.value);
  }
});

watch(textBString, async (newVal, oldVal) => {
  if (newVal.length != oldVal.length) {
    runDiff(textAString.value, textBString.value);
  }
});

function runDiff(a, b) {
  diffArr.value = difference.compareText(a, b);

  console.log(structuredClone(diffArr.value));
}
</script>

<template>
  <div id="diff-block">
    <div id="diff-header">Text Differencing</div>
    <div id="diff-input">
      <textarea id="texta" class="diff-box" v-model="textAString"></textarea>
      <textarea id="textb" class="diff-box" v-model="textBString"></textarea>
    </div>
    <div id="diff-output">
      <p id="text1" class="diff-text">
        <span class="diff-text-header">Text A:</span>
        <!-- eslint-disable-next-line vue/no-parsing-error -->
        <span
          v-for="frag in diffArr?.filter((item) => item.action <= 0)"
          :key="frag.UUID"
          :id="frag.UUID"
          :class="[
            frag.action == -1 ? 'remove' : 'same',
            highlightSpans === frag.matchID ? 'active' : '',
          ]"
          @mouseover="highlightSpans = frag.matchID"
          @mouseleave="highlightSpans = null"
        >
          {{ frag.text }}
        </span>
      </p>
      <p id="text2" class="diff-text">
        <span class="diff-text-header"> Text B:</span>
        <!-- eslint-disable-next-line vue/no-parsing-error -->
        <span
          v-for="frag in diffArr?.filter((item) => item.action >= 0)"
          :key="frag.UUID"
          :id="frag.UUID"
          :class="[
            frag.action == 1 ? 'add' : 'same',
            highlightSpans === frag.matchID ? 'active' : '',
          ]"
          @mouseover="highlightSpans = frag.matchID"
          @mouseleave="highlightSpans = null"
        >
          {{ frag.text }}
        </span>
      </p>
    </div>
  </div>
</template>

<style scoped>
#diff-block {
  padding-top: 24px;
}
#diff-header {
  font-size: 48px;
  text-align: center;
  margin-bottom: 8px;
}

#diff-input {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

#diff-output {
  display: flex;
  flex-direction: row;
  padding: 24px;
}

textarea {
  width: 500px;
  height: 200px;
  resize: none;
  padding: 3px;
  margin-left: 12px;
  margin-right: 12px;
  border: 2px solid;
  border-radius: 4px;
}

.diff-text {
  width: 50%;
  padding: 8px;
}

.diff-text-header {
  font-size: 20px;
  padding-right: 12px;
}

span.add {
  background-color: rgba(64, 189, 118, 0.6);
  color: rgb(45, 134, 84);
}

span.remove {
  background-color: rgba(221, 84, 84, 0.6);
  color: rgba(145, 55, 55, 1);
}

span.add.active {
  background-color: rgba(64, 189, 118, 0.8) !important;
}

span.remove.active {
  background-color: rgba(221, 84, 84, 0.8) !important;
}

span.same.active {
  background-color: rgba(200, 200, 200, 0.8) !important;
}
</style>
