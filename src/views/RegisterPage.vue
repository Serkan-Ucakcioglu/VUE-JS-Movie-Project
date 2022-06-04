<script setup>
import HeaderBar from '@/components/HeaderBar.vue';</script>

<template>
<HeaderBar/>
  <div class="signup">
        <form>
        <h1>Register</h1>
      <label for="">Name</label>
      <input  type="text" minlength="8" placeholder="Name" />
      <label for="">Surname</label>
      <input type="text" minlength="8" placeholder="Surname" />
      <label for="">Email</label>
      <input type="email" minlength="10" placeholder="Email" />
      <label for="">Password</label>
      <input type="text" minlength="10" placeholder="Password" />
      <button>Register</button>
    </form>
  </div>
</template>
<style lang="scss" scoped>
.signup {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  
  form {
    display: flex;
    flex-direction: column;
    padding: 15px;
    background: white;;
    box-sizing: border-box;
    width: 500px;
    border: 2px solid white;
    border-radius: 6px;
    h1{
        color: black;
        text-align: center;
    }
    label {
      text-align: left;
      color: black;
      margin-bottom: 5px;
    }
    input {
      width: 100%;
      height: 35px;
      margin-bottom: 10px;
      background: rgb(237, 242, 246);
      border-radius: 4px;
      padding-left: 5px;
      box-sizing: border-box;
      border: 1px solid white;
    }
    button {
        font-size: 16px;
      margin-top: 15px;
      height: 35px;
      background: rgb(11, 86, 193);
     width: 100%;
     border: 1px solid white;
      color: white;
      border-radius: 5px;
      cursor: pointer;
      &:hover{
          background: #144699;
      }
    }
  }
}
@media screen and (max-width: 600px) {
   form{
       width: 400px !important;
       margin: 0px 20px;
   }
}
</style>
