<script setup>
import { ref } from "vue";
import AboutMe from "./AboutMe.vue"
var showBar = ref(false)

</script>

<template>
  <div id="container">
  <div id="header">
<table class="navbar">
  <tr>
    <td class="nav-button">
Home
    </td>
    <td class="nav-button" @mouseenter="showBar = true" @mouseleave="showBar = false">Projects</td>
    <div class="header-dropdown">
 
</div>
    <td class="nav-button">Contact</td>
  </tr>
</table>
<table class="nav-dropdown" v-if="showBar">
    <tr>
    <td class="nav-button">
    Demos</td>
  </tr>
  <tr><td class="nav-button">Hobbies </td></tr></table>
  </div>
  <AboutMe></AboutMe>
  
  <div id="footer">

  </div>
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
