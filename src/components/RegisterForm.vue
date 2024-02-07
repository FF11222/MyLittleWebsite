<script setup>

</script>

<template>
  <div class="login-container">
    <h2>註冊</h2>
    <form action="#" method="post">
      <div class="username">
        <label for="username">帳號:</label>
        <input type="text" id="username" name="username" required placeholder="請輸入帳號">
      </div>

      <div class="email">
        <label for="email">email:</label>
        <input type="email" id="email" name="email" required placeholder="請輸入email">
      </div>

      <div class="password">
        <label for="password">密碼:</label>
        <input type="password" id="password" name="password" required placeholder="請輸入密碼">
      </div>

      <button type="submit">註冊</button>
    </form>
    <router-link to="/login">已經有帳號了嗎?點此登入</router-link>
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
  display: flex;
  align-items: center;
  justify-content: flex-end;
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

.username, .password, .email {
  display: flex;
  align-items: center;
  margin: 5px;
}

.username input, .password input {
  margin-left: 11px;
}

a {
  color: #81b1c4;
}

@media (max-width: 400px) {
  .login-container {
    width: 90%;
  }
}
</style>