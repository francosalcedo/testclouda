<template>
  <div id="app">
    <div class="container">
      <header class="main-header">
        <h1>Usuarios - CloudAPPi</h1>
      </header>
      <nav class="main-nav">
        <router-link to="/" class="list">Listado</router-link>
        <router-link to="/add" class="add">Nuevo Usuario</router-link>
      </nav>
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
  @import "@/assets/styles/app.scss";
</style>