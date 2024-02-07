<script setup>

</script>

<template>
  <div class="login-container">
    <h2>登入</h2>
    <form action="#" method="post">
      <div class="username">
        <label for="username">帳號:</label>
        <input type="text" id="username" name="username" required placeholder="請輸入帳號">
      </div>

      <div class="password">
        <label for="password">密碼:</label>
        <input type="password" id="password" name="password" required placeholder="請輸入密碼">
      </div>

      <div class="remember-me">
        <input type="checkbox" id="remember">
        <label for="remember">記住我!</label>
      </div>

      <button type="submit">登入</button>
    </form>
    <router-link to="/register">還沒有帳號嗎?點此註冊</router-link>
  </div>

</template>

<style scoped>
.login-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
}

.login-container input {
  width: 80%;
  padding: 10px;
  margin: 8px 5px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-container button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.login-container label {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.remember-me, .username, .password {
  display: flex;
  align-items: center;
  margin: 5px;
}

.remember-me {
  justify-content: center;
}

.remember-me input {
  width: 5%;
}

a {
  color: #81b1c4;
}

.login-container * {
  margin: 5px 0;
}

@media (max-width: 400px) {
  .login-container {
    width: 90%;
  }
}
</style>