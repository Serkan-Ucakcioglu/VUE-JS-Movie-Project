<script setup>
import axios from "axios";
import { defineProps, ref, watch } from "vue";

const props = defineProps(["apiQuery", "title", "data"]);
const apiData = ref([]);
const apiKey = ref("cd3758ae9695adf66bbf6bae68b8d777");

watch(
  () => apiData.value,
  () => {
    apiData.value;
  }
);

axios
  .get(`https://api.themoviedb.org/3/${props.apiQuery}?api_key=${apiKey.value}`)
  .then((res) => {
    apiData.value = res.data.results.filter(
      (movie) => movie.media_type != "tv"
    );
  });
</script>
<template>
  <section  class="trend-movie">
    <div class="container">
      <h1>{{ props.title }}</h1>
      <div class="movie-list">
        <div class="movie-link" v-for="(data, index) in apiData" :key="data.id">
          <router-link loading="lazy" :to="{ name: 'profile', params: { id: data.id } }">
            <img
              :src="`https://image.tmdb.org/t/p/w200${data.poster_path}`"
              :alt="data.title || data.name"
              loading="lazy"
            />
            <span class="head-title">{{ index + 1 }}. {{ data.title }} </span>
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <div class="space"></div>
</template>
<style lang="scss">
/* width */
::-webkit-scrollbar {
  height: 8px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.space {
  height: 30px;
  background: black;
}
.trend-movie {
  display: flex;
  background: #1c2434;
  h1 {
    color: white;
    text-align: center;
    padding-top: 25px;
  }
  .movie-list {
    display: flex;
    margin-top: 60px;
    overflow-x: scroll;
    overflow-y: hidden;
    padding: 20px;
    box-sizing: border-box;
    flex-direction: row;
    align-items: center;

    .movie-link {
      position: relative;
      margin-right: 30px;
      width: 200px;
      height: 270px;
      cursor: pointer;

      img {
        max-width: 200px;
        height: 270px;
        box-shadow: -1px 0px 7px 8px rgba(0, 0, 0, 0.75);
      }
      &:hover {
        transform: scale(1.1);
        transition: 0.4s;
      }
      .head-title {
        position: absolute;
        top: 0;
        left: 0;
        margin: 0px auto;
        color: rgb(254, 254, 254);
        width: 100%;
        min-height: 20px;
        background: rgba(0, 0, 0, 0.4);
        text-align: center;
      }
    }
  }
}
</style>
