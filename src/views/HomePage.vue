<script setup>
import HeaderBar from "@/components/HeaderBar.vue";
import SectionMovie from "@/components/SectionMovie.vue";
import FooterMovie from "@/components/FooterMovie.vue";
import ActorMovie from "@/components/ActorMovie.vue";

</script>
<template>
  <HeaderBar />
  <SectionMovie title="Top Rated Movies" apiQuery="trending/all/week" />
  <SectionMovie title="Today's Trending Movies" apiQuery="movie/top_rated" />
  <ActorMovie title="Best Actor" />
  <FooterMovie apiQuery="movie/upcoming" />


</template>
