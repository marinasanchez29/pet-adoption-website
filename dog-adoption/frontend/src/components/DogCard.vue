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
  border: 10px solid #aff8fd;;
  padding: 10px;
  margin: 8px;
  text-align: center;
  background-color: #fff;
  font-family: 'Source Sans 3', sans-serif;
  color: #0d6f95;
  position: relative;
  width: 250px;
  height: 390px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
}

.dog-card img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 5px;
}

.dog-card h2 {
  margin: 5px 0;
}

.dog-details {
  font-size: 14px;
  margin: 2px 0 10px 0;
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

