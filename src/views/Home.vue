<template>
  <div class="home">
    <Navbar></Navbar>
    <Hero />
    <Products />
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button class="btn btn-primary">Click</button>-->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Hero from "@/components/Hero.vue";
import Products from "@/sections/Products.vue";

export default {
  name: "Home",
  components: {
    Hero,
    Products
  }
};
</script>
