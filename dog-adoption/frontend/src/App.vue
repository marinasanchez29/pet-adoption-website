<template>
  <div id="app">
    <header class="app-header">
      <img src="@/assets/logo.png" alt="Logo" class="app-logo">
      <nav class="nav-container">
        <ul class="nav-list">
          <li><a href="#">Menu</a></li>
          <li><a href="#">Sign Up</a></li>
          <li><a href="#">Log In</a></li>
        </ul>
      </nav>
    </header>
    <main class="main-content">
      <div class="content-container">
        <DogList />
      </div>
    </main>
  </div>
</template>

<script>
import DogList from './components/DogList.vue';

export default {
  name: 'App',
  components: {
    DogList
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'DM Sans', sans-serif;
  background-color: #0d6f95;
}

#app {
  text-align: center;
}

.app-header {
  background-color: white;
  border: 10px solid #aff8fd;
  padding: 10px;
  margin: 50px 50px 20px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Source Sans 3', sans-serif;
  color: #0d6f95;
}

.app-logo {
  height: 200px;
  width: auto;
  max-width: 300px;
}

.nav-container {
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: flex-end;
}

.nav-list {
  list-style-type: none;
  display: flex;
  gap: 20px;
  margin-right: 20px;
  padding: 0;
  align-items: flex-end;
}

.nav-list li {
  display: inline;
}

.nav-list a {
  text-decoration: none;
  color: #0d6f95;
  font-weight: bold;
  font-size: 20px;
  line-height: 50px;
}

.main-content {
  display: flex;
  justify-content: center;
}

.content-container {
  max-width: 1600px;
  width: 100%;
  padding: 0 40px;
}

</style>
