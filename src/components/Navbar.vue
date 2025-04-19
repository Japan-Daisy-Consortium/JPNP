<!-- src/components/Navbar.vue -->
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/setting">JPNP</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <!--
          <li class="nav-item">
            <router-link class="nav-link" :class="{ active: isActive('/') }" to="/">Home</router-link>
          </li>
          -->
          <li class="nav-item">
            <router-link class="nav-link" :class="{ active: isActive('/setting') }" to="/setting">表示設定</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="{ active: isActive('/save') }" to="/save">データ保存</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="{ active: isActive('/upload') }" to="/upload">JSONデータ登録</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="{ active: isActive('/show_qr') }" to="/show_qr">QR表示</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="{ active: isActive('/read_qr') }" to="/read_qr">QR読み込み</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="{ active: isActive('/upload_qr') }" to="/upload_qr">QRアップロード</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="{ active: isActive('/sample') }" to="/sample">表示サンプル</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="{ active: isActive('/about') }" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="{ active: isActive('/labo') }" to="/labo">Labo</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  name: 'Navbar',
  setup() {
    const route = useRoute();
    const isActive = (path) => route.path === path;

    return { isActive };
  }
};
</script>

<style scoped>
</style>
