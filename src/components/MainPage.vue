<!-- eslint-disable no-unused-vars -->
<script setup>
import { ref } from "vue";
import AboutMe from "./AboutMe.vue"
import DiffBlock from "./DiffBlock.vue";

var showBar = ref(false)
</script>

<template>
  <div id="container">
  <div id="header">
    <table>
      <tr>
        <td>Home</td>
        <td>Projects</td>
        <div class="header-dropdown">
          <tr>
            Demos
          </tr>
          <tr>
            Hobbies
          </tr>
        </div>
        <td>Contact</td>
      </tr>
    </table>
  </div>
  
  <AboutMe></AboutMe>

  <DiffBlock></DiffBlock>


  <div id="footer"></div>

</div>
</template>

<style scoped>
#container{
  background-color:white;
  height: 1000px;
}
#header{
  color: white;
  background-color: rgb(20, 20, 73);
}
.navbar{
  height: 60px;
  width: 100%;
  border: none;
  text-align: center;
font-size: larger;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.nav-dropdown{
  width: 20%;
  border: none;
  text-align: center;
font-size: larger;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}
.nav-button:hover{
  background-color: rgb(22, 22, 95);
}
</style>
