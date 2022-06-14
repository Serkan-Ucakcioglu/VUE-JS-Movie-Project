<script setup>
import axios from "axios";
import { ref, defineProps } from "vue";

const apiKey = ref("cd3758ae9695adf66bbf6bae68b8d777");
const apiData = ref([]);
const props = defineProps(["title"]);

axios
  .get(`https://api.themoviedb.org/3/person/popular?api_key=${apiKey.value}`)
  .then((res) => {
    apiData.value = res.data.results.slice(0, 10);
    console.log(res.data.results);
  });
</script>
<template>
  <section class="actor-list">
    <h1>{{ props.title }}</h1>
    <div class="container">
      <div class="content">
      <ul>
        <li v-for="data in apiData" :key="data.id">
          <a :href="`https://www.themoviedb.org/person/${data.id}`">
            <img
              v-if="data.profile_path"
              :src="`https://image.tmdb.org/t/p/w200/${data.profile_path}`"
              :alt="data.title || data.name"
            />
            <span>{{ data.name }}</span>
          </a>
        </li>
      </ul>
    </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.actor-list {
  margin: 0px auto;
  background: black;
  h1 {
    color: white;
    text-align: center;
    padding-top: 10px;
    box-sizing: border-box;
  }
  .content {
    display: flex;
    justify-content: center;
    min-height: 300px;
    color: white;
    flex-wrap: wrap;
    text-align: center;
    padding: 30px;
    box-sizing: border-box;
    h1 {
      margin-bottom: 25px;
    }
  }
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    li {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 200px;
      height: 70px;
      list-style: none;
      background: #353535;
      padding: 15px;
      box-sizing: border-box;
      border-radius: 5px;
      margin-right: 10px;
      a {
        width: 100%;
        display: flex;
        text-decoration: none;
        align-items: center;
        justify-content: space-around;
        span {
          width: 100%;
          justify-content: center;
          color: white;
        }

        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
        }
      }
    }
  }
}
@media screen and (max-width: 600px) {
  ul {
    display: flex;
    flex-direction: column;
    li {
      margin-bottom: 15px;
      justify-content: flex-start !important;
      align-items: center !important;
    }
  }
}
</style>
