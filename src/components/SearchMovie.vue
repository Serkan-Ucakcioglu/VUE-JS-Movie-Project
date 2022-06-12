<script setup>
import { defineProps } from "vue";
const props = defineProps(["data", "title"]);
</script>

<template>
  <section v-show="props.data.length > 3" class="trend-movie">
    <div class="container">
      <h1>{{ props.title }}</h1>
      <div class="movie-list">
        <div
          class="movie-link"
          v-for="(data, index) in props.data"
          :key="data.id"
        >
          <router-link :to="{ name: 'profile', params: { id: data.id } }">
            <img
              :src="`https://image.tmdb.org/t/p/w500/${data.poster_path}`"
              :alt="data.title || data.name"
              loading="lazy"
            />
            <span class="head-title">{{ index + 1 }}. {{ data.title }} </span>
          </router-link>
        </div>
      </div>
    </div>
  </section>
  <div v-show="props.data.length > 3" class="space"></div>
</template>
