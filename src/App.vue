<template>
  <nav>
    <router-link :to="{name: 'EventList'}">Event</router-link> |
    <router-link :to="{name: 'AboutView'}">About</router-link>
  </nav>
  <router-view />
</template>

<style>
body {
  border: 0;
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
h4 {
  font-size: 20px;
}
</style>
