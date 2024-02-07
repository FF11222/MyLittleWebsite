<template>
  <nav>
    <router-link to="/login">login</router-link>
    <router-link to="/register">register</router-link>
  </nav>
  <br>
  <router-view/>
</template>

<style>
#app {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

nav {
  background-color: #333;
  padding: 10px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  color: white;
}

nav a {
  font-weight: bold;
  color: #83cfea;
  margin: 5px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
