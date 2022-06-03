<script setup></script>
<template>
  <section class="actor-list">
    <div class="content">
      <h1>Best Actor</h1>
      <ul>
        <li>
          <a href="#">
            <img
              src="https://tr.web.img3.acsta.net/pictures/19/07/31/17/35/5396784.jpg"
              alt=""
            />
          </a>
          <span>Jason Statham</span>
        </li>
        <li>
          <a href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Dwayne_Johnson_2%2C_2013.jpg"
              alt=""
            />
          </a>
          <span>Dwayne Johnson</span>
        </li>
        <li>
          <a href="#">
            <img
              src="https://i1.wp.com/filmloverss.com/wp-content/uploads/2014/07/lucy-3-filmloverss.jpg?fit=680%2C478&ssl=1"
              alt=""
            />
          </a>
          <span>Scarlett Johansson</span>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">
            <img
              src="https://m.media-amazon.com/images/M/MV5BODg3MzYwMjE4N15BMl5BanBnXkFtZTcwMjU5NzAzNw@@._V1_.jpg"
              alt=""
            />
          </a>
          <span>Angelina Jolie</span>
        </li>
        <li>
          <a href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/86/Wentworth_by_Andrew_Horovitz.JPG"
              alt=""
            />
          </a>
          <span>Wentworth Miller</span>
        </li>
        <li>
          <a href="#">
            <img
              src="https://media-cdn.t24.com.tr/media/library/2022/02/1644443025871-akjdnakljdbasdkj.jpg"
              alt=""
            />
          </a>
          <span>Denzel Washington</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.actor-list {
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    padding: 30px;
    box-sizing: border-box;
    color: white;
    text-align: center;
    h1 {
      margin-bottom: 25px;
    }
  }
  ul {
    display: flex;
    margin-bottom: 10px;

    li {
        width: 200px;
        height: 70px;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #353535;
        padding: 5px;
        border-radius: 5px;
        margin-right: 10px;
      a {
            margin-bottom: 10px;
            display: flex;
            align-items: center;
        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
      }
      span {
        margin-left: 5px;
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
    }
  }
}
</style>
