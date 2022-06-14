<script setup>
import HeaderBar from "../components/HeaderBar.vue";
import { defineProps, ref, onMounted, watchEffect } from "vue";
import axios from "axios";

const props = defineProps(["id"]);
const apiData = ref([]);
const apiKey = ref("cd3758ae9695adf66bbf6bae68b8d777");
const castData = ref([]);
const similarData = ref([]);
const data =  () => {
   axios
    .get(
      `https://api.themoviedb.org/3/movie/${props.id}?api_key=${apiKey.value}&append_to_response=similar_movies,credits,external_ids`
    )
    .then((res) => {
      apiData.value = res.data;
      castData.value = res.data.credits.cast.slice(0, 9);
      similarData.value = res.data.similar_movies.results.slice(0, 12);
    });
};

watchEffect(data);
onMounted(data);
</script>

<template>
  <HeaderBar />
  <section
    class="hero"
    :style="`background-image: radial-gradient(circle, rgba(0,0,0,0.5) 0%, #000 100%) ,url(https://image.tmdb.org/t/p/w1280${apiData.backdrop_path})`"
  >
    <div class="container">
      <div class="movie">
        <div class="movie-poster">
          <a
            :href="`https://image.tmdb.org/t/p/original${apiData.poster_path}`"
            :alt="apiData.title"
            :title="apiData.title"
            target="_blank"
          >
            <img
              :src="`https://image.tmdb.org/t/p/w200${apiData.poster_path}`"
              :alt="apiData.title"
              :title="apiData.title"
              class="movie_image"
            />
          </a>

          <span class="movie-time">
            {{ apiData.vote_average }} / 10 -- ⏱{{ apiData.runtime }} min
          </span>
          <div class="genre">
            <div class="genres" v-for="genre in apiData.genres" :key="genre.id">
              <span>{{ genre.name }}</span>
            </div>
          </div>
        </div>
        <div class="movie-details">
          <h1>{{ apiData.title }}</h1>
          <div class="overview">
            {{ apiData.overview }}
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <h1>Actors</h1>
    <div class="container">
      <div class="cast-wrapper">
        <div v-for="actor in castData" :key="actor.id" class="cast">
          <a
            :href="`https://image.tmdb.org/t/p/w200/${actor.profile_path}`"
            :title="actor.name"
            :alt="actor.name"
            target="_blank"
          >
            <img
              v-if="actor.profile_path"
              :src="`https://image.tmdb.org/t/p/w200${actor.profile_path}`"
              :alt="actor.name"
              :title="actor.name"
              class="cast__image"
              loading="lazy"
            />
          </a>
          <a
            :href="`https://www.themoviedb.org/person/${actor.id}`"
            :title="actor.name"
            :alt="actor.name"
            target="_blank"
            class="cast__link"
            loading="lazy"
          >
            <span class="cast__name">{{ actor.name }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="movies">
    <h1>Similar Movies</h1>
    <div class="container">
      <div class="movie_wrapper">
        <div class="movie_item" v-for="movie in similarData" :key="movie.id">
          <router-link :to="{ name: 'profile', params: { id: movie.id } }">
            <img
              :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`"
              :alt="movie.title"
              :title="movie.title"
              class="similar__image"
              loading="lazy"
            />
            <div class="similar__name">
              {{ movie.title }} ({{ movie.release_date.slice(0, 4) }})
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
  <div class="footer-foot">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPQDYau3Hs4-xw1i8jVSUY4BlF4FLmg8lQqg&usqp=CAU"
      alt=""
    />
    <span>2022 Best Movie Site</span>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  width: 100%;
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  border-bottom: 1px solid white;
  object-fit: cover;

  .movie {
    max-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;

    .movie-poster {
      width: 220px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .movie_image {
        width: 200px;
        height: 250px;
        margin: 1rem;
        box-shadow: 0 0 30px 1px #000;
        transition: all 50ms ease;
      }

      .movie-time {
        max-width: 200px;
        color: white;
        font-size: 15px;
        text-align: center;
        font-family: "Times New Roman", Times, serif;
      }

      .genre {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .genres {
          display: flex;
          color: white;
          justify-content: center;
          align-items: center;
          margin-right: 5px;
          span {
            border: 1px solid white;
            margin-top: 10px;
            padding: 5px;
            cursor: pointer;

            &:hover {
              background: #3fb883;
            }
          }
        }
      }
    }

    .movie-details {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      align-content: flex-start;
      justify-content: center;
      text-align: justify;
      margin-top: 10px;
      padding: 15px;
      font-size: 18px;
      line-height: 30px;
      box-sizing: border-box;

      h1 {
        font-size: 35px;
        line-height: 35px;
        margin: 0;
        text-shadow: #fff 0 0 5px;
        text-align: center;
      }
      .overview {
        display: flex;
        justify-content: flex-start;
        align-content: flex-start;
        margin-top: 15px;
      }
    }
  }
}

section {
  min-height: 250px;
  background: #0b0f16;
  padding: 20px;
  box-sizing: border-box;
  border-bottom: 1px solid white;

  h1 {
    color: white;
    text-align: center;
    margin-bottom: 15px;
  }

  .container {
    display: flex;
    justify-content: center;

    .cast-wrapper {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      text-align: center;

      .cast {
        width: 200px;
        display: flex;
        border: 1px solid white;
        justify-content: center;
        align-items: center;
        padding: 5px;
        border-radius: 5px;
        margin-right: 10px;
        margin-bottom: 15px;

        &:hover {
          background: #3fb883;
        }

        a {
          text-decoration: none;
          color: white;
          margin-right: auto;

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
}

.movies {
  background: #071c3c;

  h1 {
    color: white;
    text-align: center;
    font-size: 25px;
  }
  .container {
    .movie_wrapper {
      display: flex;
      flex-wrap: wrap;
      .movie_item {
        display: flex;
        flex: 1;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
        align-items: center;
        justify-content: flex-start;
        padding: 1rem;
        text-align: center;

        a {
          color: white;
          text-decoration: none;
          img {
            width: 92px;
            height: 138px;
          }
        }
      }
    }
  }
}

.footer-foot {
  background: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  img {
    width: 50px;
    height: 50px;
    margin-top: 10px;
  }
}

@media only screen and (max-width: 600px) {
  .hero {
    min-height: 400px !important;
    .genre {
      display: inline-flex !important ;
      justify-content: center;
      flex-wrap: wrap !important;
      .genres {
        margin-right: 15px !important;
      }
    }
  }
  .movie {
    flex-direction: column;

    .movie-details {
      font-size: 15px !important;
      line-height: 25px !important;
    }
  }
  .cast-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start !important;
    text-align: center;

    .cast {
      width: 100% !important;
      border-radius: 15px !important;
    }
  }

  section {
    h1 {
      text-align: left;
      margin-left: 18px;
    }
  }
}
</style>
