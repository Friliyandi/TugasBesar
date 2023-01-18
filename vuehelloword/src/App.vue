<template>
<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Daftar Menu</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{name: 'home'}" class="nav-link active" aria-current="page">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'index'}" class="nav-link active" aria-current="page">Barang</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<router-view></router-view>
<div class = "container mt-custom1 bg-light">
      <footer><marquee>Copyright Kelompok @2023</marquee></footer>
</div>
</template>
<script>
  export default {
  }
</script>

<style>
 body {
   background-color: rgb(90,90,90) !important;
 }
 .mt-custom {
   margin-top: 110px;
 }
 h1{
  color : white;
  text-align: center;
 }
 .nav-item:hover
 {
   color: greenyellow;
 }
 .mt-custom1
  {
    position: fixed;
    left: 0;
    bottom: 0;
    right :0;
    width: 100%;
    color: black;
    text-align: center;
  }
</style>