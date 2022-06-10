<script setup>
import HeaderBar from "@/components/HeaderBar.vue";
import SectionMovie from "@/components/SectionMovie.vue";
import SearchMovie from "../components/SearchMovie.vue";
import { ref } from "vue";
import axios from "axios";

const apiData = ref([]);
const api = (movieText) => {
  if (movieText.length > 3) {
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=cd3758ae9695adf66bbf6bae68b8d777&query=${movieText}`
      )
      .then((res) => {
        apiData.value = res.data.results.slice(0, 10);
      });
  }
};
</script>
<template>
  <HeaderBar @text="api" />
  <SearchMovie title="The Movie You Are Looking For" :data="apiData" />
  <SectionMovie
    :data="apiData"
    title="Top Rated Movies"
    apiQuery="trending/all/week"
  />
  <SectionMovie
    :data="apiData"
    title="Today's Trending Movies"
    apiQuery="movie/top_rated"
  />
</template>
