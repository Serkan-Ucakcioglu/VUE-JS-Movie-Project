<script setup>
import HeaderBar from "@/components/HeaderBar.vue";
</script>
<template>
  <HeaderBar />
  <section>
    <div class="login">
      <label for="username">Username</label>
      <input type="text" id="username" minlength="7" required />

      <label for="pass">Password</label>
      <input type="password" id="pass" minlength="7" required />

      <div class="btn-wrapper">
        <button type="button" id="btn"><span for="btn">LOGIN</span></button>
      </div>
    </div>
  </section>
  <router-view></router-view>
</template>
<style scoped>
section {
  height: 100vh;
  background: rgb(143, 143, 143);
  display: flex;
  align-items: center;
  justify-content: center;
}

.login {
  display: flex;
  flex-direction: column;
  width: 500px;
  min-height: 200px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  background: linear-gradient(
    25deg,
    rgba(0, 0, 0, 0.17) 50%,
    rgba(0, 0, 0, 0.532) 50%
  );
  color: white;
  outline: none;
  margin: 0px 15px;
  padding: 0.5rem;
  row-gap: 0.25rem;
}

.btn-wrapper {
  margin-top: auto;
  align-self: center;
  width: 100%;
}

#btn {
  width: 40%;
  height: 90%;
  margin-left: auto;
  padding: 10px 20px;
  border: 2px solid #000;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.8s ease;
  display: flex;
  justify-content: center;
  color: white;
}

#btn:hover {
  border: 2px solid #fff;
  color: #fff;
}

span {
  font-size: 100%;
}

label {
  color: white;
  margin-top: 0.5rem;
}

input {
  box-shadow: none;
  outline: none;
  padding: 0.1rem;
  border: none;
  border-bottom: 2px solid black;
  background-color: transparent;
  color: white;
  transition: all 0.5s ease;
  text-align: center;
  font-size: 20px;
}

input:focus {
  border-bottom: 2px solid white;
}

input:active {
  border-bottom: 2px solid white;
}

input:focus ~ label,
.has-contentinput ~ label {
  top: -16px;
  font-size: 12px;
  color: #3399ff;
  transition: 0.3s;
}

input:focus ~ .focus-border,
.has-contentinput ~ .focus-border {
  width: 100%;
  transition: 0.4s;
}
</style>
