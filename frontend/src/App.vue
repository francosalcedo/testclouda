<template>
  <div id="app">
    <header class="main-header">
      <h1>Usuarios - CloudAPPi</h1>
    </header>
    <nav class="nav.main-nav">
      <router-link to="/">Listado</router-link> |
      <router-link to="/add">Nuevo Usuario</router-link>  |
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "@/assets/styles/app.scss";
</style>