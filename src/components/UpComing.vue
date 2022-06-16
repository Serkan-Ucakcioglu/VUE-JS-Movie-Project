<script setup>
import axios from "axios";
import { ref, defineProps } from "vue";

const apiData = ref([]);
const apiKey = process.env.VUE_APP_API_KEY
const props = defineProps(["apiQuery"]);

axios
  .get(`https://api.themoviedb.org/3/${props.apiQuery}?api_key=${apiKey}`)
  .then((res) => {
    apiData.value = res.data.results.slice(0, 10);
  });
</script>
<template>
 <!-- Upcoming Movies-->
  <section class="trend-movie">
    <div class="container">
      <h1>UpComing Movies</h1>
      <div class="movie-list">
        <div class="movie-link" v-for="(data, index) in apiData" :key="data.id">
          <router-link :to="{ name: 'profile', params: { id: data.id } }">
            <img
              :src="`https://image.tmdb.org/t/p/w200${data.poster_path}`"
              :alt="data.title || data.name"
              loading="lazy"
              class="movie_img"
            />
            <span class="head-title">{{ index + 1 }}. {{ data.title }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
