<template>
  <div class="dog-card">
    <img :src="dog.photo" alt="Dog picture">
    <h2>{{ dog.name }}</h2>
    <p class="dog-details">
      {{ dog.breed }} | {{ dog.age }} | {{ dog.sex }}
    </p>
    <button class="favorite-button" @click="favoriteDog">❤️</button>
  </div>
</template>

<script>
export default {
  name: 'DogCard',
  props: {
    dog: Object
  },
  methods: {
    favoriteDog() {
      console.log(this.dog); // Added this line to verify the dog object
      this.$emit('favorite', this.dog);
    }
  }
}
</script>

<style scoped>
.dog-card {
  border: 10px solid #aff8fd;;
  padding: 16px;
  margin: 16px;
  text-align: center;
  background-color: #fff;
  font-family: 'Source Sans 3', sans-serif;
  color: #0d6f95;
}
.dog-card img {
  max-width: 150px;
  height: 300px;
  display: block;
  margin: 0 auto;
}
.dog-details {
  display: inline-block;
  text-align: left;
  font-size: 14px; /* Adjust the size as needed */
  margin-top: 10px;
}
.favorite-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}
.favorite-button:hover {
  color: #fe8c9a;
}
</style>

