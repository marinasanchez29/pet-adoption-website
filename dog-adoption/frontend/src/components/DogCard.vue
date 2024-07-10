<template>
  <div class="dog-card">
    <img :src="dog.photo" alt="Dog photo">
    <h2>{{ dog.name }}</h2>
    <p class="dog-details">
      {{ dog.breed }} | {{ dog.age }} | {{ dog.sex }}
    </p>
    <button class="favorite-button" @click="favoriteDog">
      <i :class="['fa-heart', isFavorited ? 'fas' : 'far']"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'DogCard',
  props: {
    dog: Object
  },
  data() {
    return {
      isFavorited: false
    };
  },
  methods: {
    favoriteDog() {
      this.isFavorited = !this.isFavorited;
      this.$emit('favorite', this.dog);
    }
  }
}
</script>

<style scoped>
.dog-card {
  border: 8px solid #aff8fd;;
  padding: 16px;
  margin: 8px;
  text-align: center;
  background-color: #fff;
  font-family: 'Source Sans 3', sans-serif;
  color: #0d6f95;
  position: relative;
  width: 220px;
  height: 350px;
  box-sizing: border-box;
}
.dog-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  margin: 0 auto;
}
.dog-details {
  display: inline-block;
  text-align: left;
  font-size: 16px;
  margin-top: 5px;
}
.favorite-button {
  position: absolute;
  top: 5px;
  right: 5px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #8f8c8c;
}
.favorite-button .fas {
  color: #fe8c9a;
}
.favorite-button .far:hover {
  color: #fe8c9a;
}
</style>

