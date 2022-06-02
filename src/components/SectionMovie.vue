<script setup></script>
<template>
  <section class="trend-movie">
    <div class="container">
        <h1>Trend Movie</h1>
      <div class="movie-list">
        <a href="#" class="movie-link">
          <img
            src="https://m.media-amazon.com/images/M/MV5BZmRjODgyMzEtMzIxYS00OWY2LTk4YjUtMGMzZjMzMTZiN2Q0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
            alt=""
          />
        </a>
        <a href="#" class="movie-link">
          <img
            src="https://m.media-amazon.com/images/M/MV5BYzI5OTUzZjktMDE4Zi00YjE3LWIzNWQtNDFjZWQyMDVkY2I1XkEyXkFqcGdeQXVyMTg1MzYyMzQ@._V1_.jpg"
            alt=""
          />
        </a>
        <a href="#" class="movie-link">
          <img
            src="https://tr.web.img2.acsta.net/pictures/19/01/07/17/18/4980802.jpg"
            alt=""
          />
        </a>
        <a href="#" class="movie-link">
          <img
            src="https://m.media-amazon.com/images/M/MV5BNDFmMzM3NzctZGE0MC00NGVmLTljZmUtYTNiZjA2ZTE4NjQwXkEyXkFqcGdeQXVyNzg3MDUyMzc@._V1_FMjpg_UX1000_.jpg"
            alt=""
          />
        </a>
        <a href="#" class="movie-link">
          <img
            src="https://fullindirsene.net/wp-content/uploads/2021/01/Ajan-Salt.webp"
            alt=""
          />
        </a>
        <a href="#" class="movie-link">
          <img
            src="https://tr.web.img3.acsta.net/pictures/14/09/15/09/52/162217.jpg"
            alt=""
          />
        </a>
        <a href="#" class="movie-link">
          <img
            src="https://www.yorumvizyon.com/wp-content/uploads/2021/02/donma-noktasi-netflix.png"
            alt=""
          />
        </a>
        <a href="#" class="movie-link">
          <img
            src="https://tr.web.img3.acsta.net/pictures/14/06/20/07/47/502900.jpg"
            alt=""
          />
        </a>
      </div>
    </div>
  </section>
  <div style="height: 35px; background: black;"></div>
</template>
<style lang="scss" scoped>
/* width */
::-webkit-scrollbar {
  height: 8px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.trend-movie {
  min-height: 400px;
  background: #1c2434;
  h1 {
    color: white;
    text-align: center;
    padding-top: 25px;
  }
  .movie-list {
    margin-top: 60px;
    overflow-x: scroll;
    overflow-y: hidden;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;

    .movie-link {
      img {
        width: 200px;
        height: 250px;
        margin-right: 50px;
        box-shadow: -1px 0px 7px 8px rgba(0, 0, 0, 0.75);
      }
      &:hover{
          transform: scale(1.1);
         
      }
    }
  }
}
</style>
