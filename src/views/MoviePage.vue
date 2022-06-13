<script setup>
import HeaderBar from "@/components/HeaderBar.vue";
import SectionMovie from "@/components/SectionMovie.vue";
import FooterBar from "@/components/FooterBar.vue";

</script>
<template>
  <HeaderBar  />
  <SectionMovie
    title="Top Rated Movies"
    apiQuery="trending/all/week"
  />
  <SectionMovie
    title="Today's Trending Movies"
    apiQuery="movie/top_rated"
  />
  <FooterBar/>
</template>
