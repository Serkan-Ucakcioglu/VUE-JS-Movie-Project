<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

let error = ref(false);
const route = useRouter();
const movieText = ref("");
const apiData = ref([]);

const api = () => {
  axios
    .get(
      `https://api.themoviedb.org/3/search/multi?api_key=cd3758ae9695adf66bbf6bae68b8d777&query=${movieText.value}`
    )
    .then((res) => {
      apiData.value = res.data.results[0];
      route.push({ name: "profile", params: { id: apiData.value.id } });
      movieText.value = "";
      console.log(res.data.results);
    })
    .catch((err) => {
      error.value = true;
      console.log(err);
    });
};
</script>

<template>
  <form>
    <input
      type="text"
      class="search"
      v-model.trim="movieText"
      placeholder="Search..  🔎"
      :class="{ err: error }"
    />

    <button type="submit" @click="api">🔎</button>
  </form>
</template>

<style scoped>
form {
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: 25px;
}
form .search {
  width: 100%;
  height: 40px;
  border-radius: 4px 0 0 4px;
  border: 1px solid white;
  box-sizing: border-box;
  padding: 0 15px;
  flex: 1;
  outline: 0;
}
form button {
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
  form {
    margin: 0px auto !important;
  }
}
</style>
