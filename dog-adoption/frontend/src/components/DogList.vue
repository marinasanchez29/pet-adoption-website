<template>
  <div class="dog-list">
    <DogCard 
      v-for="dog in dogs" 
      :key="dog.id" 
      :dog="dog" 
      @favorite="handleFavorite"/>
  </div>
</template>

<script>
import DogCard from './DogCard.vue';
import axios from 'axios';

export default {
  name: 'DogList',
  components: { DogCard },
  data() {
    return {
      dogs: []
    };
  },
  methods: {
    async fetchDogs() {
      try {
        const response = await axios.get('http://localhost:8080/api/dogs');
        this.dogs = response.data;
      } catch (error) {
        console.error('Error fetching dogs:', error);
      }
    },
    handleFavorite(dog) {
      console.log(`Favorited dog: ${dog.name}`);
    }
  },
  mounted() {
    this.fetchDogs();
  }
}
</script>

<style scoped>
.dog-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;
  background-color: #0d6f95;
  font-family: 'Source Sans 3', sans-serif;
  color: #0d6f95;

}
</style>
