<script setup>
import axios from "axios";
import { ref, defineProps } from "vue";

const apiData = ref([]);
const apiKey = ref("cd3758ae9695adf66bbf6bae68b8d777");
const props = defineProps(["apiQuery"]);
axios
  .get(`https://api.themoviedb.org/3/${props.apiQuery}?api_key=${apiKey.value}`)
  .then((res) => {
    apiData.value = res.data.results.slice(0, 10);
   
  });
</script>
<template>
  <section class="trend-movie">
    <div class="container">
      <h1>UpComing Movies</h1>
      <div class="movie-list">
        <a
          href="#"
          class="movie-link"
          v-for="(data, index) in apiData"
          :key="data.id"
        >
          <img
            :src="`https://image.tmdb.org/t/p/w200${data.poster_path}`"
            alt=""
          />
          <span class="head-title">{{ index + 1 }}. {{ data.title }}</span>
        </a>
      </div>
      <div class="footer-foot">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPQDYau3Hs4-xw1i8jVSUY4BlF4FLmg8lQqg&usqp=CAU"
          alt=""
        />
        <span>2022 Popüler Best Movie Site</span>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.trend-movie {
  .footer-foot {
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 50px;
      height: 50px;
      margin-top: 10px;
    }
  }
}
</style>
