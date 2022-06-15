<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

let error = ref(false);
const route = useRouter();
const movieText = ref("");

const push = () => {
  route.push({ name: "MovieList", params: { name: movieText.value } });
  movieText.value = "";
};
</script>

<template>
  <div class="searchs">
    <input
      type="text"
      v-model.trim="movieText"
      placeholder="Search..  🔎"
      :class="{ err: error }"
      @keydown.enter="push"
    />

    <button type="submit" @click="push">🔎</button>
  </div>
</template>

<style scoped>
.searchs {
  width: 100%;
  display: flex !important;
  flex-direction: row !important;
  align-items: center;
  margin-left: 25px;
}
.searchs input {
  width: 100%;
  height: 40px;
  border-radius: 4px 0 0 4px;
  border: 1px solid white;
  box-sizing: border-box;
  padding: 0 15px;
  flex: 1;
  outline: 0;
}
.searchs button {
  height: 40px;
  padding: 0 10px;
  background: #2196f3;
  color: #fff;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  border: none;
}
form button:hover {
  background: #0b7dda;
}
.err {
  border: 1.5px dashed red !important;
}

@media screen and (max-width: 600px) {
  .searchs {
    margin: 0px auto !important;
  }
}
</style>
