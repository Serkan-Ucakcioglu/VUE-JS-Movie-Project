<script setup>
import HeaderBar from "./HeaderBar.vue";
import {defineProps,ref} from "vue";
import axios from "axios";

const props = defineProps(["id"]);
const apiData = ref([]);
const apiKey = ref("cd3758ae9695adf66bbf6bae68b8d777");
const castData = ref([]);

axios
    .get(
        `https://api.themoviedb.org/3/movie/${props.id}?api_key=${apiKey.value}&append_to_response=similar_movies,credits,external_ids`
    )
    .then((res) => {
        apiData.value = res.data;
        castData.value = res.data.credits.cast.slice(0, 15);
    });
</script>

<template>
<HeaderBar />
<section class="hero" :style="`background-image: radial-gradient(circle, rgba(0,0,0,0.5) 0%, #000 100%) ,url(https://image.tmdb.org/t/p/w1280${apiData.backdrop_path})`">
    <div class="container">
        <div class="movie">
            <div class="movie-poster">
                <a :href="`https://image.tmdb.org/t/p/original${apiData.poster_path}`" target="_blank">
                    <img :src="`https://image.tmdb.org/t/p/w200${apiData.poster_path}`" />
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
                <a :href="`https://image.tmdb.org/t/p/original/${actor.profile_path}`" :title="actor.name" :alt="actor.name" target="_blank">
                    <img v-if="actor.profile_path" :src="`https://image.tmdb.org/t/p/w92${actor.profile_path}`" :alt="actor.name" :title="actor.name" class="cast__image" loading="lazy" />
                </a>
                <a :href="`https://www.themoviedb.org/person/${actor.id}`" :title="actor.name" :alt="actor.name" target="_blank" class="cast__link">
                    <span class="cast__name">{{ actor.name }}</span>
                </a>
            </div>
        </div>
    </div>
</section>
</template>

<style lang="scss" scoped>
.hero {
    width: 100%;
    min-height: 500px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;

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
           
            img {
                width: 200px;
                height: auto;
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

            .genres {
                display: flex;
                color: white;
                justify-content: center;

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

        .movie-details {
            max-width: 700px;
            min-height: 400px;
            display: flex;
            flex-direction: column;
            word-spacing: 5px;
            line-height: 20px;
            align-items: flex-start;
            justify-content: center;
            text-align: left;
            margin-left: 25px;
            margin-top: 10px;

            h1 {
                font-size: 35px;
                line-height: 35px;
                margin-bottom: 10px;
                text-shadow: #fff 0 0 5px;
               text-align: center;
            }
        }
    }
}

section {
    min-height: 300px;
    background: #0b0f16;
    padding: 20px;
    box-sizing: border-box;

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

@media only screen and (max-width: 600px) {
    .hero {
        min-height: 500px !important;
        .genre {
            display: flex;
            justify-content: center;
            .genres {
                margin-right: 10px;
            }
        }
        
    }
    .movie {
        flex-direction: column;
    }
    .cast-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start !important;
        text-align: center;

        .cast{
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
