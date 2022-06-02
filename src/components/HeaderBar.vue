<script setup>
import { ref } from "vue";
const isShow = ref(false);
console.log(isShow);
</script>
<template>
  <header>
    <div class="container">
      <div class="navbar">
        <div class="header-logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPQDYau3Hs4-xw1i8jVSUY4BlF4FLmg8lQqg&usqp=CAU"
            alt=""
          />
          <div class="hamburger-btn"  @click="isShow = !isShow">
            <svg class="open-menu"
             v-show="isShow == false"
              viewBox="0 0 100 80"
              width="25"
              height="25"
            >
              <rect width="100" height="20"></rect>
              <rect y="30" width="100" height="20"></rect>
              <rect y="60" width="100" height="20"></rect>
            </svg>
            <svg v-show="isShow == true" class="close-menu"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
              />
            </svg>
          </div>
        </div>

        <nav class="header-bar" :class="{ active: isShow == true }">
          <div>
            <a href="#">TV Shows</a>
            <a href="#">Movies</a>
            <a href="#">UpComing</a>
          </div>
        </nav>

        <nav class="login" :class="{ active: isShow == true }">
          <div>
            <a href="#">Login</a>
            <a href="#">Register</a>
            <input type="text" class="search" placeholder="Search Movie 🔎" />
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
header {
  display: flex;
  min-height: 70px;
  background: rgb(12, 15, 22);
  .header-logo {
    display: flex;
    img {
      width: 70px;
      height: 70px;
    }
    .hamburger-btn {
      display: none;
      .open-menu {
        color: white;
        background: #fff;
      }
      .close-menu{
        color: #fff;
        fill: #fff;
      
      }
    }
  }
  .navbar {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .header-bar {
      padding: 5px;
      div {
        display: flex;
        align-items: center;
      }

      a {
        color: rgb(232, 208, 208);
        margin-right: 10px;
        padding: 10px;
        font-size: 18px;
        &:hover {
          background: #3fb883;
          color: white;
        }
      }
    }
    .login {
      div {
        display: flex;
      }
      a {
        color: rgb(232, 208, 208);
        padding: 10px;
        margin-left: 8px;
        font-size: 18px;
        &:hover {
          background: #3fb883;
          color: white;
        }
      }
      input {
        margin-left: 15px;
        height: 40px;
        padding-left: 5px;
        box-sizing: border-box;
        outline: none;
        &:focus {
          background: #75cfa8;
          color: white;
          border: 1px solid white;
          ::placeholder {
            color: white;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 750px) {
  .header-logo {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .hamburger-btn {
      display: flex !important;

      svg {
        margin-top: 10px;
      }
    }
  }

  .navbar {
    flex-direction: column;
    margin-bottom: 20px;

    .header-bar {
      width: 100%;
      display: none;
      div {
        flex-direction: column;
        text-align: center;
      }
      a {
        width: 100%;
        margin-bottom: 10px;
      }
    }
    .login {
      width: 100%;
      display: none;
      div {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      a {
        width: 100%;
        margin-bottom: 8px;
      }
      input {
        margin-right: 5px;
        width: 90%;
      }
    }
  }
  .active {
    display: flex !important;
    flex-direction: column;
    text-align: center;
  }
}
</style>
